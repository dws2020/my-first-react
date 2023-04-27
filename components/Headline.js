import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export function Headline(props) {
  return (
    <p>
      Page Get started by editing&nbsp;
      <code className={styles.code}>src/pages/{props.page}.js</code>
    </p>
  )
}
