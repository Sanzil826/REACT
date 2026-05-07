import Section1 from "./components/Section1/Section1"
import Section2 from "./components/Section2/Section2"

const App = () => {

  const users=[
    { id:"1",
      img:"https://images.unsplash.com/photo-1773332585815-f106a5d6ed6c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      intro:"asdfasdf dfasdf fdas fasdsfa dasdffa sdf dfasdfa dafd fs dsfasd fad dafd fd sdfa ddfa ",
      tag:"Satisfied"
    },
    { id:"2",
      img:"https://images.unsplash.com/photo-1773332585788-9104ec6f38ef?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      intro:"asdfasdf dfasdf fdas fasdsfa dasdffa sdf dfasdfa dafd fs dsfasd fad dafd fd sdfa ddfa ",
      tag:"Underbanked"
    },
    { id:"3",
      img:"https://images.unsplash.com/photo-1776665713351-8c0e38dfef7b?q=80&w=1550&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      intro:"asdfasdf dfasdf fdas fasdsfa dasdffa sdf dfasdfa dafd fs dsfasd fad dafd fd sdfa ddfa ",
      tag:"Underserved"
    }
  ]
  return (
    <div>
      <Section1 users={users}/>
      <Section2/>
    </div>
  )
}

export default App
