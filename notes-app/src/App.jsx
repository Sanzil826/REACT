import { useState } from "react"

const App = () => {
  const[ title, setTitle] = useState('')
  const [desc, setDesc] = useState('')
  const [task, setTask] = useState([])

  const submitHandler=(e)=>{
    e.preventDefault()
    
    const copyTask =[...task];
    copyTask.push({title, desc})
    setTask(copyTask)
    console.log(task);
    
    
    
    setTitle('')
    setDesc('')
  }

  const deleteNote=(idx)=>{
    const copyTask = [...task];
    copyTask.splice(idx,1)
    setTask(copyTask)
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

        <button className="bg-white active:bg-gray-300 w-full font-medium outline-none text-black px-5 py-2 rounded">Add Notes</button>
      </form>

      <div className=" lg:w-1/2 lg:border-l  p-10">

        <h1 className="text-3xl font-bold">Your Notes</h1>

        <div className=" flex gap-5 h-[90%] overflow-auto bg-gray-900 flex-wrap items-start justify-start mt-5">

          {task.map(function(elem,idx){
            
            return (<div key={idx} className="relative flex flex-col items-start justify-between h-52 bg-cover w-40 rounded-2xl bg-[url('https://static.vecteezy.com/system/resources/thumbnails/010/793/873/small/a-lined-note-paper-covered-with-transparent-tape-on-a-yellow-background-with-a-white-checkered-pattern-free-png.png')] text-black p-4 bg-white">
              <div>
              <h3 className="leading-tight text-xl font-bold">{elem.title}</h3>
              <p className="mt-2 leading-tight font-medium text-gray-700">{elem.desc}</p>
              </div>
              <button onClick={()=>{
                deleteNote(idx)
              }} className="w-full cursor-pointer active:scale-95 bg-red-600 py-1 text-xs rounded font-bold text-white">Delete</button>
            </div>)
          })}
        </div>
      </div>
    </div>
  )
}

export default App
