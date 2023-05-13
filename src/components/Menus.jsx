import styles from '@/components/Menus.module.css'

export function Menus({ items }) {
  return (
    <>
      <div className={styles.grid}>
        {items.map(item => {
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