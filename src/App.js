import { useState } from "react";
import "./styles.css";
import Button from "./comp";

export default function App() {
  const [left, setLeft] = useState(0);
  const [en, setEn] = useState(null);
  const [right, setRight] = useState(0);
  const [ans, setAns] = useState(null);
  const [memo, setMemo] = useState(0);

  function keyPressed(key) {
    if (en === null) {
      setLeft(left * 10 + key);
    } else {
      setRight(right * 10 + key);
    }
  }

  function opeKeyPressed(key) {
    setEn(key);
  }

  function equalKeyPressed() {
    if (ans === null) {
      if (en === "+") {
        setAns(left + right);
      } else if (en === "-") {
        setAns(left - right);
      } else if (en === "*") {
        setAns(left * right);
      } else if (en === "/") {
        setAns(left / right);
      }
    } else {
      if (en === "+") {
        setAns(ans + right);
      } else if (en === "-") {
        setAns(ans - right);
      } else if (en === "*") {
        setAns(ans * right);
      } else if (en === "/") {
        setAns(ans / right);
      }
    }

    // setLeft(0);
    setRight("");
    setEn(null);
  }

  function clearKeyPressed() {
    setLeft(0);
    setAns(null);
  }

  function memoKeyPressed(key) {
    if (key === "M+") {
      setMemo(memo + ans);
      console.log(memo);
    } else if (key === "M-") {
      setMemo(memo - ans);
    } else if (key === "MRC") {
      setAns(memo);
      setMemo(0);
    }
  }

  return (
    <div className="calc">
      <header>電卓</header>
      <div className="display">
        {ans === null ? left : ans}
        {en === null ? "" : en}
        {en === null ? "" : right}
      </div>
      <div className="input">
        <div className="namber">
          <Button
            text="1"
            onClick={() => {
              keyPressed(1);
            }}
          />
          <Button
            text="2"
            onClick={() => {
              keyPressed(2);
            }}
          />
          <Button
            text="3"
            onClick={() => {
              keyPressed(3);
            }}
          />
          <Button
            text="4"
            onClick={() => {
              keyPressed(4);
            }}
          />
          <Button
            text="5"
            onClick={() => {
              keyPressed(5);
            }}
          />
          <Button
            text="6"
            onClick={() => {
              keyPressed(6);
            }}
          />
          <Button
            text="7"
            onClick={() => {
              keyPressed(7);
            }}
          />
          <Button
            text="8"
            onClick={() => {
              keyPressed(8);
            }}
          />
          <Button
            text="9"
            onClick={() => {
              keyPressed(9);
            }}
          />
          <Button
            text="0"
            onClick={() => {
              keyPressed(0);
            }}
          />

          <Button
            text="="
            onClick={() => {
              equalKeyPressed("=");
            }}
          />
          <Button
            text="C"
            onClick={() => {
              clearKeyPressed();
            }}
          />
        </div>
        <div className="enzan">
          <Button
            text="+"
            onClick={() => {
              opeKeyPressed("+");
            }}
          />
          <Button
            text="-"
            onClick={() => {
              opeKeyPressed("-");
            }}
          />
          <Button
            text="*"
            onClick={() => {
              opeKeyPressed("*");
            }}
          />
          <Button
            text="/"
            onClick={() => {
              opeKeyPressed("/");
            }}
          />
          <br />

          <Button
            text="M+"
            onClick={() => {
              memoKeyPressed("M+");
            }}
          />
          <Button
            text="M-"
            onClick={() => {
              memoKeyPressed("M-");
            }}
          />
          <Button
            text="MRC"
            onClick={() => {
              memoKeyPressed("MRC");
            }}
          />
        </div>
      </div>
    </div>
  );
}
