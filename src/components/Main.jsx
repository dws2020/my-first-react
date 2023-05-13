import Image        from 'next/image'
import { Inter }    from 'next/font/google'
import styles       from 'src/components/Main.module.css'
import { Headline } from 'src/components/Headline'
import { Menus }    from 'src/components/Menus'
import { useCallback, useState } from 'react';

const inter = Inter({ subsets: ['latin'] })

const ITEMS = [
  {
    href: 'https://nextjs.org/docs?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app',
    title: ['DocsIndex', <span key='docs'>-&gt;</span>],
    description: 'Find in-depth information about Next.js features and&nbsp;API.'
  },
  {
    href: 'https://nextjs.org/learn?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app',
    title: ['Learn', <span key='learn'>-&gt;</span>],
    description: 'Learn about Next.js in an interactive course with&nbsp;quizzes!'
  },
  {
    href: 'https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app',
    title: ['Templates', <span key='templates'>-&gt;</span>],
    description: 'Discover and deploy boilerplate example Next.js&nbsp;projects.'
  },
  {
    href: 'https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app',
    title: ['Deploy', <span key='deploy'>-&gt;</span>],
    description: 'Instantly deploy your Next.js site to a shareable URLwith&nbsp;Vercel.'
  },
];
//　JSXについてjsx-gotchas.htmlのドキュメントを参照する

export function Main(props) {
  const [items, setItems] = useState(ITEMS);

  const handleReduce = useCallback( () => {
    setItems(prevItem => {
      return prevItem.slice(0, prevItem.length - 1)
    })
  })

  return (
    <main className={`${styles.main} ${inter.className}`}>
      <div className={styles.description}>
        <Headline
          title="Index Page"
          page="index"
          number={1415}
          arr={[6, 0, 1]}
          obj={{ key: "value" }}
          boolean
          items={items}
          handleReduce={handleReduce}
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
      <Menus items={items}/>
    </main>
  )
}
