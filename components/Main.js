import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './Main.module.css'
import { Headline } from './Headline'
import { Menus } from './Menus'

const inter = Inter({ subsets: ['latin'] })

export function Main(props) {
  return (
    <main className={`${styles.main} ${inter.className}`}>
    <div className={styles.description}>
        <Headline 
            title="Index Page" 
            page="index" 
            number={1415} 
            arr={[6,0,1]} 
            obj={{key: "value"}}
            boolean
        >
            <code className={styles.code}>src/pages/{props.page}.js</code>
        </Headline>
        
        <div>
        <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
        >
            By{' '}
            <Image
            src="/vercel.svg"
            alt="Vercel Logo"
            className={styles.vercelLogo}
            width={100}
            height={24}
            priority
            />
        </a>
        </div>
    </div>

    <div className={styles.center}>
        <Image
        className={styles.logo}
        src="/next.svg"
        alt="Next.js Logo"
        width={180}
        height={37}
        priority
        />
    </div>
    <Menus />
    </main>
  )
}
