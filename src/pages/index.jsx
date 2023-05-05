import Head       from 'next/head'
import { Inter }  from 'next/font/google'
import { Main }   from '@/components/Main'
import { Header } from '@/components/Header'
import { useCallback, useEffect } from 'react'

const inter = Inter({ subsets: ['latin'] })

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
      <button onClick={handleClick}>btn</button>
      <Main page={'index'} />
    </div>
  )
}
