import { Bentham, Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export function Headline(props) {
  return (
    <div>
      <p>
        Page Get started by editing&nbsp;
        {props.children}
      </p>
      <p>
        アイテムの数は{props.items.length}個です.
      </p>
      <button onClick={props.handleReduce}>REDUCE</button>
    </div>
  )
}
