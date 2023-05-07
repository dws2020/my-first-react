import Head from "next/head";
import { Inter, Newsreader } from "next/font/google";
import { Main } from "@/components/Main";
import { Header } from "@/components/Header";
import { useCallback, useEffect, useState } from "react";
import { tv } from "tailwind-variants";

const inter = Inter({ subsets: ["latin"] });

const center = tv({
  base: "container mx-auto text-center block",
});

export default function Home() {
  const [count, setCount] = useState(1);
  const [isShow, setIsShow] = useState(true);
  const [inputText, setInputText] = useState("");
  const [array, setArray] = useState([]);

  const handleClick = useCallback(() => {
    if (count < 10) {
      setCount((count) => count + 1);
    }
  }, [count]);

  const handleDisplay = useCallback(() => {
    setIsShow((isShow) => !isShow);
  }, []);

  const handleInput = useCallback((e) => {
    if (e.target.value.length > 4) {
      alert("less 5 letters, please");
      return;
    }
    setInputText(e.target.value);
  }, []);

  const handleAdd = useCallback(() => {
    setArray((prevArray) => {
      if (prevArray.some((item) => item === inputText)) {
        alert("this word is already used");
        return prevArray; //しまぶーさんは、なぜここにさらっとprevArrayを入れるのか？　入れないとエラーがループ？してしまう。
      }
      return [...prevArray, inputText];
    });
  }, [inputText]);

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
      <Main page={"index"} />
    </div>
  );
}
