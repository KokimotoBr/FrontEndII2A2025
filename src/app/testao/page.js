"use client"
import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";


export default function Noticias() {
  return (
    <main className={styles.container}>
      
      {/* TÍTULO */}
      <div className={styles.tituloBox}>
        <div className={styles.linha}></div>
        <h2>NOTÍCIA E DICAS DE COZINHA</h2>
        <div className={styles.linha}></div>
      </div>

    

      {/* GRID DE CATEGORIAS */}
      <div className={styles.gridCategorias}>
        <div className={styles.card}>
          <Link href="">
            <Image src="/images/frango.jpg"
              alt="Horario de refeição ideal"
              width={300}
              height={150}
            />
            <p>Horario de refeição ideal</p>
          </Link>
        </div>

        <div className={styles.card}>
          <Link href="">
            <Image src="/images/frango.jpg"
              alt="LARANJA"
              width={300}
              height={150} />
            <p>LARANJA</p>
          </Link>
        </div>

        <div className={styles.card}>
          <Link href="">
            <Image src="/images/frango.jpg"
              alt="MAÇÃ E CANELA"
              width={300}
              height={150}
            />
            <p>MAÇÃ E CANELA</p>
          </Link>
        </div>

        <div className={styles.card}>
          <Link href="">
            <Image src="/images/frango.jpg"
              alt="FORMIGUEIRO"
              width={300}
              height={150}
            />
            <p>FORMIGUEIRO</p>
          </Link>
        </div>
        </div>

      {/* TÍTULO */}
      <div className={styles.tituloBox}>
        <h2>NOTÍCIA E DICAS DE COZINHA</h2>
      </div>

              {/* GRID DE CATEGORIAS */}
      <div className={styles.gridCategorias}>
        <div className={styles.card}>
          <Link href="">
            <Image src="/images/frango.jpg"
              alt="Horario de refeição ideal"
              width={300}
              height={150}
            />
            <p>Horario de refeição ideal</p>
          </Link>
        </div>

        <div className={styles.card}>
          <Link href="">
            <Image src="/images/frango.jpg"
              alt="LARANJA"
              width={300}
              height={150} />
            <p>LARANJA</p>
          </Link>
        </div>

        <div className={styles.card}>
          <Link href="">
            <Image src="/images/frango.jpg"
              alt="MAÇÃ E CANELA"
              width={300}
              height={150}
            />
            <p>MAÇÃ E CANELA</p>
          </Link>
        </div>

        <div className={styles.card}>
          <Link href="">
            <Image src="/images/frango.jpg"
              alt="FORMIGUEIRO"
              width={300}
              height={150}
            />
            <p>FORMIGUEIRO</p>
          </Link>
        </div>
        </div>

          {/* TÍTULO */}
          <div className={styles.tituloBox}>
        <h2>NOTÍCIA E DICAS DE COZINHA</h2>
      </div>

        {/* GRID DE CATEGORIAS */}
        <div className={styles.gridCategorias}>
        <div className={styles.card}>
          <Link href="">
            <Image src="/images/frango.jpg"
              alt="Horario de refeição ideal"
              width={300}
              height={150}
            />
            <p>Horario de refeição ideal</p>
          </Link>
        </div>

        <div className={styles.card}>
          <Link href="">
            <Image src="/images/frango.jpg"
              alt="LARANJA"
              width={300}
              height={150} />
            <p>LARANJA</p>
          </Link>
        </div>

        <div className={styles.card}>
          <Link href="">
            <Image src="/images/frango.jpg"
              alt="MAÇÃ E CANELA"
              width={300}
              height={150}
            />
            <p>MAÇÃ E CANELA</p>
          </Link>
        </div>

        <div className={styles.card}>
          <Link href="">
            <Image src="/images/frango.jpg"
              alt="FORMIGUEIRO"
              width={300}
              height={150}
            />
            <p>FORMIGUEIRO</p>
          </Link>
        </div>
        </div>

    </main>
  );
}

