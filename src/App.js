import React, { useEffect, useState } from "react";
import Buttons from "./components/Buttons";
import Input from "./components/Input";

function App() {
  // const [minutes, setMinutes] = useState("00");

  // const [seconds, setSeconds = useState("00");
  const [seconds, setSeconds] = useState(1);

  const [minutes, setMinutes] = useState(1);

  // const [min, setMin] = useState("");
  useEffect(() => {
    const timer = setInterval(() => {
      setSeconds(seconds + 1);
      setMinutes(minutes + 1);
    }, 1000);

               // clearing interval
    return () => clearInterval(timer);
  });


  // const changeValue = () => {
  //   console.log(min);
  //   console.log(sec);
  // };


  return (
    <div className="">
      <form className="flex justify-center">
        <Input type="number" onChange={(e) => setMinutes(e.target.value)} />
        <Input type="number" onChange={(e) => setSeconds(e.target.value)} />
        <Buttons type="button" value="start" id="start" />
        <Buttons
          id="pause"
          type="button"
          value="pause/resume"
        
        />
        <Buttons id="reset" type="button" value="reset" />
      </form>
      <div className="text-center">
        {minutes}:{seconds}

      </div>
    </div>
  );
}

export default App;
