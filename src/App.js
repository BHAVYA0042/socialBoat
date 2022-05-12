
import {useState} from "react";
import Alert from "./components/alert";
import "./components/comp.css";
import Display from "./components/Card_components/display";
import Loading from "./components/Load";
import Example from "./components/newNav";

function App(){
  const [api_data,setApi_Data]=useState();
  const [isLoading,setIsLoading]=useState(true);
  const [isCalled,setIsCalled]=useState(false);
  const [isError,setIsError]=useState(false);
  
  async function callHandler(data){
    setIsCalled(true);
    setIsLoading(true);
    setIsError(false);
    const params="q="+data.category+"&numResults="+data.number;
    try{
      const response= await fetch("https://asia-south1-socialboat-dev.cloudfunctions.net/assignmentVideos?"+params);
      if(!response.ok){
        throw new Error("Something is not wrong");
      }else{
        const data=await response.json();
        console.log(data);
        if(data.results.length===0){
          setIsError(true);
          throw new Error("Number not entered");
          
        }else{
          const new_data=data.results.map((item)=>{
            return{
              key:Math.floor(Math.random()*100),
              heading:item.heading,
              video:item.video,
              tags:item.tags
            }
          })
          setApi_Data(new_data);
        }
      } 
      setIsLoading(false);
    }catch(error){
      setIsError(true)
      console.log("No category entered");
    }
 
  }

  return(
    <div className="app">
      <Example onAdd={callHandler}/>
      {!isCalled && <Alert col="blue"/>}
      {!isLoading && <Alert col="green"/>}
      {isError &&<Alert col="red"/>}
      {isCalled && isLoading && !isError &&<Loading />}

      {!isLoading && !isError && <Display data={api_data}/>}
    </div>
    
  )
}
export default App;

