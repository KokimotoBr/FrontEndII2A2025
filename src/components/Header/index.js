// components/Header.jsx
import Link from 'next/link';
import Image from 'next/image';
import styles from './Header.module.css'; 

export default function Header()  {


  return (
    <header className={styles.topbar}>
      <div className={`${styles.container} ${styles.headerWrap}`}>
        <div className={styles.logo}>
          <Image 
            src="/images/logo.png" 
            alt="Logo Sabor & Cultura" 
            width={100} 
            height={50} 
            layout="intrinsic" 
          />
        </div>

        <nav className={styles.menu}>
          <Link href="/testao">bolo?</Link>
          <Link href="/msgs">Mensagens</Link>
          <Link href="/localidades">Localidades</Link>
          <Link href="/">NOTÍCIAS</Link>
          <Link href="/teste">SOBRE NÓS</Link>
        </nav>

        <div className={styles.search}>

          <input
            id="search"
            type="text"
            className={styles.inputField}
            placeholder="Buscar receita"

          />
          <span className={styles.icone}></span> 
        </div>

        <div className={styles.userIcons}>
          <Link href="/login" className={styles.iconeLink}>
            <Image src="/images/USUARIO.png" alt="perfil do usuario" width={35} height={35} />
          </Link>
          <Link href="/notificacoes" className={styles.iconeLink}>
            <Image src="/images/notificaçoes.png" alt="Ícone 1" width={35} height={35} />
          </Link>
        </div>
      </div>
    </header>
  );
};
