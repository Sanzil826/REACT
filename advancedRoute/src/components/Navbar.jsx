import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <div className="flex py-4 px-8 justify-between bg-cyan-900 ">
        <h2 className="text-xl font-bold">Sanjeel</h2>
      <div className="flex gap-10">
        <Link className="text-lg font-semi" to='/'>Home</Link>
        <Link className="text-lg font-semi" to='/about'>About</Link>
        <Link className="text-lg font-semi" to='/product'>Product</Link>
        <Link className="text-lg font-semi" to='/courses'>Courses</Link>
      </div>
    </div>
  )
}

export default Navbar
