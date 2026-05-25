import { useParams } from "react-router-dom"

const CourseDetail = () => {

    const params = useParams();
    console.log(params);
    
  return (
    <div>
      <h1>{params.id} Courses Detail page</h1>
    </div>
  )
}

export default CourseDetail
