import { GetStaticProps } from "next";
import Image from "next/image";
import Head from "next/head";
import { SubscribeButton } from "components/SubscribeButton";
import style from "./home.module.scss";
import { stripe } from "services/strapi";

interface HomeProps {
  product: {
    productId: string;
    amount: number;
  };
}

export default function Home({ product }: HomeProps) {
  return (
    <>
      <Head>
        <title>Home - IgNews</title>
      </Head>
      <main className={style.contentContainer}>
        <section className={style.hero}>
          <span>👏 Hey, welcome</span>
          <h1>
            News about <br />
            the <span>React</span> world
          </h1>
          <p>
            Get access to all the publications <br />
            <span>for {product.amount} per month</span>
            <SubscribeButton priceId={product.productId} />
          </p>
        </section>
        <Image
          width="336"
          height="521"
          src="/images/avatar.svg"
          alt="Girl coding..."
        />
      </main>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const price = await stripe.prices.retrieve("price_1JOcm3DUd0pG1yMJ3LtTou4q", {
    expand: ["product"],
  });

  const product = {
    priceId: price.id,
    amount: new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(price.unit_amount / 100),
  };

  return {
    props: {
      product,
    },
    revalidate: 60 * 60 * 24, // 24 hrs
  };
};
