import React, { useEffect, useState } from "react";
import Buttons from "./components/Buttons";
import Input from "./components/Input";

const App = () => {
  const [second, setSeconds] = useState(0);

  const [minutes, setMinutes] = useState(0);

  useEffect(() => {
    setInterval(() => {
      setSeconds(second => second +1 );
    }, 1000);
  }, [second]);

  return (
    <div className="">
      <h1 className="text-center py-3 text-2xl font-bold">My Time App</h1>
      <form className="flex justify-center">
        <Input type="number" onChange={(e) => setMinutes(e.target.value)} />
        <Input type="number" onChange={(e) => setSeconds(e.target.value)} />
        <Buttons type="button" value="start" id="start" />
        <Buttons id="pause" type="button" value="pause/resume" />

        <Buttons id="reset" type="button" value="reset" />
      </form>
      <div className="text-center">
        {minutes}:{second}
      </div>
    </div>
  );
};

export default App;
