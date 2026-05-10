import { useState } from "react"

const App = () => {
  const[ title, setTitle] = useState('')
  const [desc, setDesc] = useState('')
  const [task, setTask] = useState([])

  const submitHandler=(e)=>{
    e.preventDefault()
    
    const copyTask =[]

    setTitle('')
    setDesc('')
  }

  return (
    <div className="h-screen p-12 lg:flex bg-black text-white">
      
      <form onSubmit={(e)=>{
        submitHandler(e)
      }} className="flex lg:w-1/2 flex-col gap-4 items-start p-10">
        <h1 className="text-3xl font-bold">Add Notes</h1>
          <input 
        type="text" 
        placeholder="Enter task heading"
        className="px-5 py-2 w-full border-2 font-medium outline-none rounded "
        value={title}
        onChange={(e)=>[
          setTitle(e.target.value)
        ]} />

        <textarea
        type="text"
        placeholder="Enter details" 
        className="px-5 w-full outline-none font-medium   py-2 flex items-start flex-row h-32 border-2 rounded "
        value={desc}
        onChange={(e)=>{
          setDesc(e.target.value)
        }}/>

        <button className="bg-white w-full font-medium outline-none text-black px-5 py-2 rounded">Add Notes</button>
      </form>

      <div className=" lg:w-1/2 lg:border-l  p-10">

        <h1 className="text-3xl font-bold">Your Notes</h1>

        <div className="flex gap-5 h-full overflow-auto bg-gray-900 flex-wrap mt-5">
          <div className="h-52 w-40 rounded-2xl bg-white"></div>

        <div className="h-52 w-40 rounded-2xl bg-white"></div>

        <div className="h-52 w-40 rounded-2xl bg-white"></div>

        </div>
      </div>
    </div>
  )
}

export default App
