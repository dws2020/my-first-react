import Head from "next/head";
import { Inter } from "next/font/google";
import { Main } from "@/components/Main";
import { Header } from "@/components/Header";
import { useEffect } from "react";
import { tv } from "tailwind-variants";

const inter = Inter({ subsets: ["latin"] });

const center = tv({
  base: "container mx-auto text-center block",
});
const button = tv({
  base: 'bg-amber-300 hover:bg-amber-500 ',
  variants: {

  }
})

export default function Home(props) {
  const { count, isShow, handleClick, handleDisplay, inputText, array, handleInput, handleAdd } = props;

  useEffect(() => {
    // mount時の処理
    document.body.style.backgroundColor = "lightblue";

    return () => {
      // unmount時の処理
      document.body.style.backgroundColor = "";
    };
  }, []);

  return (
    <div>
      <Head>
        <title>Create Next App!</title>
      </Head>
      <Header />
      {isShow ? <h1 className={center()}>{count}</h1> : null}
      <p className={center()}>
        <button onClick={handleClick}>btn</button>
      </p>
      <p className={center()}>
        <button onClick={handleDisplay}>{isShow ? "非表示" : "表示"}</button>
      </p>
      <input
        type="text"
        className={`${center()} w-52`}
        value={inputText}
        onChange={handleInput}
      />
      <button className={center()} onClick={handleAdd}>
        Add
      </button>
      <ul className={center()}>
        {array.map((li) => {
          return <li key={li}>{li}</li>;
        })}
      </ul>
      <button className="button({sato: 'myu'})">MMM</button>
      <Main page={"index"} />
    </div>
  );
}
