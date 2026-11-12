"use client";

import Image from "next/image";
import Link from "next/link";
import styles from "../styles/NavBar.module.css";

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logoArea}>
        <Link href="/dashboard">
          <Image
            src="/imagens/logo_sem_fundo.png"
            alt="Ressaca Literária"
            width={55}
            height={55}
          />
        </Link>

        <Link href="/dashboard" className={styles.nome}>
          Ressaca Literária
        </Link>
      </div>

      <div className={styles.links}>
        <Link href="/dashboard">Início</Link>

        <Link href="/dashboard">Biblioteca</Link>

        <Link href="/pesquisa">Pesquisar</Link>

        <Link href="/dashboard">Favoritos</Link>

        <Link href="/dashboard">Perfil</Link>
      </div>
    </nav>
  );
}