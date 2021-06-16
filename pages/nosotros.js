import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Layout from '../components/layout/Layout'



const  Nosotros = () => {
  return (
    <div className={styles.container}>
    <Layout>
     <h1>Desde Nosotros</h1>
     
      <footer className={styles.footer}>
        <a
          href="https://aerolab.co/"
          target="_blank"
          rel="noopener noreferrer"
        >
           Challenge Ernesto Ledesma for
        </a>
        <span className={styles.logo}>
            <Image src="/aerolab-logo.svg" alt="Aerolab Logo" width={82} height={26} />
        </span>
      </footer>

      </Layout>
    </div>
  )
}

export default Nosotros
