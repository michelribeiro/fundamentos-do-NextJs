import { SignInButton } from "components/SignInButton";
import Image from "next/image";
import styles from "./styles.module.scss";
import React from "react";
import { ActiveLink } from "components/ActiveLink";

export function Header() {

  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <Image width="110" height="31" src="/images/logo.svg" alt="IgNews" />
        <nav>
          <ActiveLink activeClasseName={styles.active} href="/">
            <a>
              Home
            </a>
          </ActiveLink>

          <ActiveLink activeClasseName={styles.active} href="/posts">
            <a>Posts</a>
          </ActiveLink>
        </nav>
        <SignInButton />
      </div>
    </header>
  );
}
