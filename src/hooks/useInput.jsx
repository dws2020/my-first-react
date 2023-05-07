import { useCallback, useState } from "react";

export const useInput = () => {
  const [inputText, setInputText] = useState("");
  const [array, setArray] = useState([]);

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
  return { inputText, array, handleInput, handleAdd };
};
