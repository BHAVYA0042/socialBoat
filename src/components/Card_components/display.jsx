import Card from "./Card";
import "./../comp.css";
function Display(props){
  return(
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 ">
      {props.data.map((item)=>{
        return(
          <Card 
          heading={item.heading}
          video={item.video}
          tags={item.tags}
          />
        )
      })}
    </div>
  )
}
export default Display;