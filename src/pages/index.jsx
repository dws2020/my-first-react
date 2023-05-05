import Head       from 'next/head'
import { Inter }  from 'next/font/google'
import { Main }   from '@/components/Main'
import { Header } from '@/components/Header'
import { useCallback, useEffect, useState } from 'react'
import { tv } from 'tailwind-variants'

const inter = Inter({ subsets: ['latin'] })

const center = tv({
  base: 'container mx-auto text-center'
});

export default function Home() {
  const [count, setCount] = useState(1);

  const handleClick = useCallback(() => {
    if (count < 10) {
      setCount(count => count + 1);
    }
  }, [count]);

  useEffect(() => {
    // mount時の処理
    document.body.style.backgroundColor = 'lightblue';
  
    return(() => {
      // unmount時の処理
      document.body.style.backgroundColor = '';
    });
  }, []);

  return (
    <div>
      <Head>
        <title>Create Next App!</title>
      </Head>
      <Header />
      <h1 className={center()}>{count}</h1>
      <p className={center()}>
        <button onClick={handleClick}>btn</button>
      </p>
      <Main page={'index'} />
    </div>
  )
}
