import { Bentham, Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export function Headline(props) {
  return (
    <div>
      <p>
        Page Get started by editing&nbsp;
        {props.children}
      </p>
    </div>
  )
}
