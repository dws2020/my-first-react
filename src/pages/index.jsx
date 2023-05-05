import Head       from 'next/head'
import { Inter }  from 'next/font/google'
import { Main }   from '@/components/Main'
import { Header } from '@/components/Header'
import { useEffect, useState } from 'react'
import { tv } from 'tailwind-variants'

const inter = Inter({ subsets: ['latin'] })

const center = tv({
  base: 'container mx-auto text-center'
});

export default function Home() {
  const handleClick = (e) => {
    setCount(count => count + 1);
  };

  useEffect(() => {
    // mount時の処理
    document.body.style.backgroundColor = 'lightblue';
  
    return(() => {
      // unmount時の処理
      document.body.style.backgroundColor = '';
    });
  }, []);

  const [count, setCount] = useState(1);

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
