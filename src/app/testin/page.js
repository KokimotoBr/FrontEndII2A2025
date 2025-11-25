"use client"
import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";


export default function Bolo() {
  return (
    <main className={styles.container}>
      
      {/* TÍTULO */}
      <div className={styles.tituloBox}>
        <div className={styles.linha}></div>
        <h2>BEBIDAS</h2>
        <div className={styles.linha}></div>
      </div>
     

      {/* GRID DE CATEGORIAS */}
      <div className={styles.gridCategorias}>
        <div className={styles.card}>
          <Link href="">
            <Image src="/images/bebidas-pina.jpg"
              alt="PINA COLADA"
              width={300}
              height={150}
            />
            <p>PINA COLADA</p>
          </Link>
        </div>

        <div className={styles.card}>
          <Link href="">
            <Image src="/images/bebidas-marg.jpg"
              alt="MARGARITA"
              width={300}
              height={150} />
            <p>MARGARITA</p>
          </Link>
        </div>

        <div className={styles.card}>
          <Link href="">
            <Image src="/images/bebidas-cosmo.jpg"
              alt="COSMOPOLITAN"
              width={300}
              height={150}
            />
            <p>COSMOPOLITAN</p>
          </Link>
        </div>

        <div className={styles.card}>
          <Link href="">
            <Image src="/images/bebidas-dry.jpg"
              alt="DRY MARTINI"
              width={300}
              height={150}
            />
            <p>DRY MARTINI</p>
          </Link>
        </div>

        <div className={styles.card}>
          <Link href="">
            <Image src="/images/bebidas-negro.jpg"
              alt="NEGRONI"
              width={300}
              height={150}
            />
            <p>NEGRONI</p>
          </Link>
        </div>

        <div className={styles.card}>
          <Link href="">
            <Image src="/images/bebidas-mosc.webp"
              alt="MOSCOW MULE"
              width={300}
              height={150}
            />
            <p>MOSCOW MULE</p>
          </Link>
        </div>

        <div className={styles.card}>
          <Link href="">
            <Image src="/images/bebidas-virg.webp"
              alt="VIRGIN MIMOSA"
              width={300}
              height={150}
            />
            <p>VIRGIN MIMOSA</p>
          </Link>
        </div>

        <div className={styles.card}>
          <Link href="">
            <Image src="/images/bebidas-pink.jpg"
              alt="PINK LEMONADE"
              width={300}
              height={150}
            />
            <p>PINK LEMONADE</p>
          </Link>
        </div>

        <div className={styles.card}>
          <Link href="">
            <Image src="/images/bebidas-moran.jpg"
              alt="BATIDINHA DE MORANGO"
              width={300}
              height={150}
            />
            <p>BATIDINHA DE MORANGO</p>
          </Link>
        </div>

        <div className={styles.card}>
          <Link href="">
            <Image src="/images/bebidas-moji.jpg"
              alt="MOJITO SEM ÁLCOOL"
              width={300}
              height={150}
            />
            <p>MOJITO SEM ÁLCOOL</p>
          </Link>
        </div>

        <div className={styles.card}>
          <Link href="/ComidasTipicas">
            <Image src="/images/bebidas-sang.webp"
              alt="SANGRIA DE FRUTAS SEM ÁLCOOL"
              width={300}
              height={150}
            />
            <p>SANGRIA DE FRUTAS SEM ÁLCOOL</p>
          </Link>
        </div>

        <div className={styles.card}>
          <Link href="">
            <Image src="/images/bebidas-express.webp"
              alt="ESPRESSO TÕNICA SEM ÁLCOOL"
              width={300}
              height={150}
            />
            <p>ESPRESSO TÕNICA SEM ÁLCOOL</p>
          </Link>
        </div>
      </div>
    </main>
  );
}

