"use client";
import Image from 'next/image';
import Link from 'next/link';
import styles from './page.module.css';

export default function Sobrenos() {
  return (
    <>
      <main className={styles.container}>
        <section className={styles.sobreNosHeader}>
          <div className={styles.tituloBox}>
            <div className={styles.linha}></div>
            <h2>SOBRE NÓS E O SITE</h2>
            <div className={styles.linha}></div>
          </div>
          <p className={styles.subtitulo}>MOTIVAÇÕES E EXPECTATIVAS</p>
        </section>

        {/* texto*/}
        <section className={styles.contentWrapper}>
          <div className={styles.sobreNosText}>
            <p>Bem-vindos ao Sabor&Cultura, um refúgio digital onde a elegância e a simplicidade se unem para celebrar a culinária como uma sublime ponte entre culturas, gerações e memórias. Sonhamos com um portal que seja o guardião de um universo de receitas, desde os segredos da cozinha tradicional até o calor das preciosas heranças familiares.</p>
            <p>Nossa missão é criar uma comunidade global, convidando entusiastas da gastronomia de todos os cantos do mundo a compartilhar seus tesouros culinários, construindo um repertório vibrante e repleto de afeto. Pois acreditamos que cozinhar é mais do que nutrir o corpo é alimentar a alma, preservar legados e honrar a tapeçaria cultural da humanidade.</p>
            <p>De um singelo doce do interior a um instigante prato de terras distantes, cada sabor encontra seu lar em nossa plataforma. E, em cada receita compartilhada, reside a oportunidade de eternizar tradições e espalhar a paixão pela culinária, conectando corações através do paladar.</p>
            
            {/* desenvolvedores*/}
            <section className={styles.desenvolvedoresSection}>
              <h4>DESENVOLVEDORES</h4>
              <ul>
                <li>Ana Clara Bertando</li>
                <li>Anthony Pohlmann Rodrigues</li>
                <li>Ingrid Victória de Souza Silva</li>
                <li>Kamyly Lopes Gouveia</li>
                <li>Ludmele Figueredo da Silva</li>
                <li>Pamela Alves</li>
              </ul>
            </section>

            {/* redes socias*/}
            <section className={styles.sociais}>
              <h2 className={styles.sociaish2}>CONECTE-SE CONOSCO</h2>
              <div className={styles.icones}>
                <a href="https://instagram.com">
                  <Image src="/images/instagram.png" alt="Instagram" width={40} height={40} />
                </a>
                <a href="https://facebook.com">
                  <Image src="/images/facebook.png" alt="Facebook" width={40} height={40} />
                </a>
                <a href="https://twitter.com">
                  <Image src="/images/twitter.png" alt="Twitter" width={40} height={40} />
                </a>
                <a href="https://whatsapp.com">
                  <Image src="/images/whatsapp.png" alt="WhatsApp" width={40} height={40} />
                </a>
              </div>
            </section>
          </div>


          {/*receitas */}
          <div className={styles.recomendacoesSectionWrapper}> 
            <h3>Nossas recomendações de receitas</h3>
            <div className={styles.gridReceitas}>
              <div className={styles.cardReceita}>
                <Link href="/carnes">
                  <Image src="/images/pernil-suíno-molho-damasco.jpg" alt="Carne" fill={true} />
                </Link>
              </div>
              <div className={styles.cardReceita}>
                <Link href="/jantar">
                  <Image src="/images/frango-frito-730x480.jpeg" alt="Frango Frito" fill={true} />
                </Link>
              </div>
              <div className={styles.cardReceita}>
                <Link href="/jantar">
                  <Image src="/images/polvo-ao-alho-e-oleo-00-730x480.jpg" alt="Polvo" fill={true} />
                </Link>
              </div>
              <div className={styles.cardReceita}>
                <Link href="/bebidas">
                  <Image src="/images/images.jpg" alt="Bebidas variadas" fill={true} />
                </Link>
              </div>
              <div className={styles.cardReceita}>
                <Link href="/fitness">
                  <Image src="/images/jantar-fitness.jpg" alt="Jantar fitness" fill={true}/>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};