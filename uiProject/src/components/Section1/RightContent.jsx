import RightCard from "./RightCard"

const RightContent = (props) => {
  return (
    <div id="right" className="h-full rounded-4xl overflow-x-auto p-6 w-3/4 flex flex-nowrap gap-10">
      {props.users.map((elem,idx)=>{
        return <RightCard key={idx}{...elem}/>
      })}
    </div>
  )
}

export default RightContent
