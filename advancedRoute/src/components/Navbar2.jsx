import { useNavigate } from "react-router-dom"


const Navbar2 = () => {

    const navigate= useNavigate(); 

    const btnClicked=()=>{
        navigate('/');
    }

  return (
    <div className="px-5 py-2 bg-cyan-800">
      <button onClick={btnClicked} className="bg-amber-600 font-medium px-5 py-2 rounded m-2 cursor-pointer active:scale-95">Return To Home page</button>

        <button onClick={()=>{
            navigate(-1)
        }} className="bg-amber-600 font-medium px-5 py-2 rounded m-2 cursor-pointer active:scale-95">Back</button>

        <button onClick={()=>{
            navigate(+1)
        }} className="bg-amber-600 font-medium px-5 py-2 rounded m-2 cursor-pointer active:scale-95">Next</button>
    </div>
  )
}

export default Navbar2
