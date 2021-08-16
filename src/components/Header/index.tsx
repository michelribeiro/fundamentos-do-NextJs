import { SignInButton } from "components/SignInButton";
import Image from "next/image";
import styles from "./styles.module.scss";

export function Header() {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <Image width="110" height="31" src="/images/logo.svg" alt="IgNews" />
        <nav>
          <a href="#" className={styles.active}>
            Home
          </a>
          <a href="#">Posts</a>
        </nav>
        <SignInButton />
      </div>
    </header>
  );
}
