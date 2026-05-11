import axios from 'axios'
import { useState } from 'react'

const App = () => {

  const [data, setData] = useState([])
  // async function getData(){
  //  const response= await fetch('https://jsonplaceholder.typicode.com/todos/1')

  //  console.log(response); 
  // }

  // const getData = async()=>{
  //   const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')

  //   const data = await response.json()
  //   console.log(data);   
  // } 

  const getData =async()=>{
    const {data} = await axios.get('https://picsum.photos/v2/list')
    
    setData(data)
  }

  return (
    <div>
      <button onClick={getData}>Get data</button>
      {data.map((elem,idx)=>{
        return <h3 key={idx}>Hello {elem.author}, {idx}</h3>
      })}
    </div>
  )
}

export default App
