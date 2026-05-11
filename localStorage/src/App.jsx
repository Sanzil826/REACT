//localStorage.setItem()
//localStorage.getItem()
//localStorage.clear()
//localStorage.removeItem()
//JSON.stringify()
//JSON.parse()
//localStorage stores data in key value pairs

const App = () => {
  // const user ={
    //   username: 'ace',
    //   age:18,
    //   city:'biratnagar'
    // }
    
    //localstorage only stores data in string form so we use json.stringify

  // localStorage.setItem('user', JSON.stringify(user))
  const user =JSON.parse(localStorage.getItem('user'))
  console.log(user);
  
  return (
    <div>
      
      
    </div>
  )
}

export default App
