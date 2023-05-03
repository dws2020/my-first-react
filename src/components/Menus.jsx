import styles from '@/components/Menus.module.css'

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

export function Menus() {
  return (
    <>
      <div className={styles.grid}>
        {ITEMS.map(item => {
          return (
            <a
              key={item.href} // uniqueキーがないといけない
              href={item.href}
              className={styles.card}
              target="_blank"
              rel="noopener noreferrer"
            >
              <h2>
                {item.title}
              </h2>
              <p>
                {item.description}
              </p>
            </a>
          )
        })}
      </div>
    </>
  )
}