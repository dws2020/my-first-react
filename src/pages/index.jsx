import Head       from 'next/head'
import { Inter }  from 'next/font/google'
import { Main }   from '@/components/Main'
import { Header } from '@/components/Header'
import { useCallback, useEffect } from 'react'
import { tv } from 'tailwind-variants'

const inter = Inter({ subsets: ['latin'] })

const center = tv({
  base: 'container mx-auto text-center'
});

export default function Home() {
  const val = "1415";
  const handleClick = useCallback( (e) => {
    alert(val);
  }, []);
  
  useEffect(() => {
    // mount時の処理
    console.log('mount');
    document.body.style.backgroundColor = 'lightblue';
  
    return(() => {
      // unmount時の処理
      console.log('unmount');
      document.body.style.backgroundColor = '';
    });
  }, []);

  return (
    <div>
      <Head>
        <title>Create Next App!</title>
      </Head>
      <Header />
      <h1 className={center()}>1</h1>
      <p className={center()} >
        <button onClick={handleClick}>btn</button>
      </p>
      <Main page={'index'} />
    </div>
  )
}
