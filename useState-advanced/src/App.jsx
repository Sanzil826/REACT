// import { useState } from "react";

// const App = () => {
//   const [num, setnum] = useState({user:"aman",age:20});

//   const btnClicked = () => {
//     const newNum={...num};
//     newNum.user="Ace"
//     newNum.age = 40
//     setnum(newNum)
    
//   }
//   return (
//     <div>
//       <h1>{num.user},{num.age}</h1>
//       <button onClick={btnClicked}>click</button>
//     </div>
//   );
// };

// export default App;

// import { useState } from "react";

// const App = () => {
//   const [num, setnum] = useState([10,20,30]);

//    const btnClicked = () => {
//      const newNum = [...num];
//      newNum.push(50)
//      setnum(newNum)
//    }
//   return (
//     <div>
//       <h1>{num}</h1>
//        <button onClick={btnClicked}>click</button>
//      </div>
//   )
// }

// export default App

import { useState } from "react";

const App = () => {
  const [num, setnum] = useState(10);

  const btnClicked = () => {
    setnum(prev=>(prev+1))
    setnum(prev=>(prev+1))
    setnum(prev=>(prev+1)) 
  }   
  return (
    <div>
      <h1>{num}</h1>
      <button onClick={btnClicked}>click</button>
    </div>
  );
};

export default App;
