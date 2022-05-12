
import { Fragment } from "react";
import "./../comp.css";
import Tab from "./tabs";
function Card(props){
  return(
    <Fragment>
      <div className="pb-2 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
        <a href={props.video} target="_blank" rel="noopener noreferrer">
            <img className="rounded-t-lg" src="https://picsum.photos/id/10/500/300" alt="" />
        </a>

        <div className="p-3">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{props.heading}</h5>
        
        <ul className="grid grid-cols-2 gap-4">
          {props.tags.map((item)=>{
            return(
              <Tab text={item}/>
            )
          })}
      </ul>
      </div>
      </div>
      
    </Fragment>
    
  )
}
export default Card;

