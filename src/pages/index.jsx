import Head       from 'next/head'
import { Inter }  from 'next/font/google'
import { Main }   from '@/components/Main'
import { Header } from '@/components/Header'
import { useCallback } from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const val = "1415";
  const handleClick = useCallback( (e) => {
    alert(val);
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
