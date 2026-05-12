import { useEffect } from "react";
import { useState } from "react";

const App = () => {
  const [data, setdata] = useState(0);
  const [num2, setnum2] = useState(100);

  useEffect(function () {
    console.log("use effect is running...");
  }, []); //only run once

  useEffect(
    function () {
      console.log("use effect 1 is running...");
    },
    [data],
  );

  useEffect(
    function () {
      console.log("use effect 2 is running...");
    },
    [num2],
  );

  return (
    <div>
      <h1>value of num is{data}</h1>
      <h1>value of num2 is {num2}</h1>
      <button
        onMouseEnter={() => {
          setdata(data + 1);
        }}
        onMouseLeave={() => [setnum2(num2 + 1)]}
        className="px-6 py-3 text-xl bg-blue-500 text-white rounded-lg"
      >
        Hover
      </button>
    </div>
  );
};

export default App;
