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

    <div className={styles.subtitulo}>
      <h2>OS ARTIGOS MAIS RECENTES</h2>
      </div>

      {/* GRID DE CATEGORIAS */}
      <div className={styles.gridCategorias}>
        <div className={styles.card}>
          <Link href="">
            <Image src="/images/noticias-arroz.png"
              alt="Arroz integrall"
              width={300}
              height={150}
            />
            <p>O arroz integral é o melhor acompanhamento?</p>
          </Link>
        </div>

        <div className={styles.card}>
          <Link href="">
            <Image src="/images/noticias-creme.png"
              alt="Chantilly, marshmallow ou merengue"
              width={300}
              height={150} />
            <p>Chantilly, marshmallow ou merengue?</p>
          </Link>
        </div>

        <div className={styles.card}>
          <Link href="">
            <Image src="/images/noticias-geladeira.jpg"
              alt="Promoção black fryday!"
              width={300}
              height={150}
            />
            <p>Promoção black fryday!</p>
          </Link>
        </div>

        <div className={styles.card}>
          <Link href="">
            <Image src="/images/noticias-leite.jpg"
              alt="Leite todo dia"
              width={300}
              height={150}
            />
            <p>O bom costume de tomar leite todo dia</p>
          </Link>
        </div>
        </div>

    <div className={styles.subtitulo}>
      <h2>OS ARTIGOS MAIS POPULARES</h2>
      </div>

              {/* GRID DE CATEGORIAS */}
      <div className={styles.gridCategorias}>
        <div className={styles.card}>
          <Link href="">
            <Image src="/images/noticias-pure.jpg"
              alt="Pare imediatamente de usar mantega no pure de batata"
              width={300}
              height={150}
            />
            <p>Pare imediatamente de usar mantega no pure de batata</p>
          </Link>
        </div>

        <div className={styles.card}>
          <Link href="">
            <Image src="/images/noticias-carne.jpg"
              alt="Corte de carne macia"
              width={300}
              height={150} />
            <p>Corte de carne macia que vai ser tendência no verão!</p>
          </Link>
        </div>

        <div className={styles.card}>
          <Link href="">
            <Image src="/images/noticias-salgadinho.jpg"
              alt="Salgadinho crocante"
              width={300}
              height={150}
            />
            <p>Aprenda a fazer um salgadinho super crocante</p>
          </Link>
        </div>

        <div className={styles.card}>
          <Link href="">
            <Image src="/images/noticias-vegetais.jpg"
              alt="VEGETAIS"
              width={300}
              height={150}
            />
            <p>Começe a usar imediatamente esses vegetais em sua receita</p>
          </Link>
        </div>
        </div>

    <div className={styles.subtitulo}>
      <h2>DICAS DE COZINHAS</h2>
      </div>

        {/* GRID DE CATEGORIAS */}
        <div className={styles.gridCategorias}>
        <div className={styles.card}>
          <Link href="">
            <Image src="/images/noticias-rolha.jpg"
              alt="Truque da rolha"
              width={300}
              height={150}
            />
            <p>Como funciona o truque da rolha?</p>
          </Link>
        </div>

        <div className={styles.card}>
          <Link href="">
            <Image src="/images/noticias-tempero.jpg"
              alt="Temperos"
              width={300}
              height={150} />
            <p>Aprenda a conservar melhor os seus temperos!</p>
          </Link>
        </div>

        <div className={styles.card}>
          <Link href="">
            <Image src="/images/noticias-geladeira2.jpg"
              alt="Organização da geladeira"
              width={300}
              height={150}
            />
            <p>Aprenda a organizar de forma eficaz sua geladeira</p>
          </Link>
        </div>

        <div className={styles.card}>
          <Link href="">
            <Image src="/images/noticias-lavar.jpg"
              alt="Fórmula milagrosa"
              width={300}
              height={150}
            />
            <p>Fórmula milagrosa que promete limpar toda a gordura dos utensílios</p>
          </Link>
        </div>
        </div>

    </main>
  );
}

