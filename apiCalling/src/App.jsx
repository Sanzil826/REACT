
const App = () => {
  // async function getData(){
  //  const response= await fetch('https://jsonplaceholder.typicode.com/todos/1')

  //  console.log(response); 
  // }

  const getData = async()=>{
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')

    const data = await response.json()
    console.log(data);   
  } 

  return (
    <div>
      <button onClick={getData}>Get data</button>
    </div>
  )
}

export default App
