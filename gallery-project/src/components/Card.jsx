
const Card = (props) => {
  return (
    <a href={props.elem.url} target="_blank">
            <div key={props.idx}>
            <div className="h-60 w-64 bg-white rounded-xl overflow-hidden">
              <img className="h-full w-full object-cover" src={props.elem.download_url} alt="" />
            </div>
            <h2 className="font-bold text-lg">{props.elem.author}</h2>
          </div>
    </a>
  )
}

export default Card
