import Link, { LinkProps } from 'next/link';
import { cloneElement, ReactElement } from "react";
import { useRouter } from 'next/router';

interface ActiveLinkProps extends LinkProps {
  children: ReactElement;
  activeClasseName: string;
}

export function ActiveLink({children, activeClasseName, ...rest}: ActiveLinkProps) {

  const { asPath } = useRouter();
  const className = asPath === rest.href ? activeClasseName : '';


  return (
    <Link {...rest}>
      {cloneElement(children, {
        className
      })}
    </Link>
  )
}
