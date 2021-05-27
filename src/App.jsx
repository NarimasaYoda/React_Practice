// import React from "react";

import { useEffect, useState } from "react";
import ColorfulMessage from "./components/ColorfulMessage";

const App = () => {
  console.log("最初");
  const [num, setNum] = useState(0);
  const [faceShowFlag, setFaceShowFlag] = useState(true);

  const onClickCountUpButton = () => {
    setNum(num + 1);
  };

  const onClickOnOffButton = () => {
    setFaceShowFlag(!faceShowFlag);
  };

  useEffect(() => {
    // console.log("useEffect");
    if (num > 0) {
      if (num % 3 === 0) {
        faceShowFlag || setFaceShowFlag(true);
      } else {
        faceShowFlag && setFaceShowFlag(false);
      }
    }
  }, [num]);

  // const contentStyle = {
  //   color: "blue",
  //   fontSize: "18px"
  // };

  // const contentLedyStyle = {
  //   color: "pink",
  //   fontSize: "18px"
  // };

  return (
    <>
      <h1 style={{ color: "red" }}>こんにちは</h1>

      {/* <p style={contentStyle}>げんきですか</p> */}
      {/* <p style={contentLedyStyle}>げんきです</p> */}
      <ColorfulMessage color="blue" message="お元気ですか" />
      <ColorfulMessage color="pink" message="お元気です" />
      <ColorfulMessage color="yellow" message="別の方法">
        「こういうやり方もある」
      </ColorfulMessage>

      <button onClick={onClickCountUpButton}>カウントアップ</button>
      <button onClick={onClickOnOffButton}>オンオフ</button>
      <p>{num}</p>
      {faceShowFlag && <p>(^_-)-☆</p>}
    </>
  );
};

export default App;
