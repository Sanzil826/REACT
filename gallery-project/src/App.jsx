import axios from "axios"
import { useEffect, useState } from "react"
import Card from "./components/Card"

const App = () => {
  const [userData, setUserData] = useState([])
  const [index, setIndex] = useState(1)

  const getData = async()=>{
    const response = await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=10`)
    
    console.log(response.data)
    setUserData(response.data) 
  }

useEffect(function(){
    getData()
},[index])


  let printUserData = <h3 className="text-gray-400 text-xl absolute top-1/2 left-1/2 translate-x-1/2 translate-y-1/2 font-semibold">Loading...</h3>

  if (userData.length>0) {
      printUserData = userData.map(function(elem,idx){
        return <Card elem = {elem} idx={idx}/>
    })}
  console.log(printUserData);
  

  return (
    <div className="bg-black overflow-auto h-screen p-4 text-white">
      {/* <button onClick={getData} className="bg-green-600 mb-3 text-white active:scale-95 px-5 py-2 rounded">Get Data</button> */}
      <div className="flex h-[82%] flex-wrap gap-4">
        {printUserData}
      </div>

      <div className="flex justify-center items-center p-4 gap-4">

        <button className="bg-amber-200 text-black rounded px-4 py-2 font-semibold active:scale-95 cursor-pointer" onClick={()=>{
          if(index>1){
          setIndex(index -1)
          setUserData([])
          }
        }}>Previous</button>

        <button className="bg-amber-200 text-black rounded px-4 py-2 font-semibold active:scale-95 cursor-pointer" onClick={()=>{
          setIndex(index +1)
          setUserData([])
        }}>Next</button>
      </div>

    </div>
  )

}

export default App;
