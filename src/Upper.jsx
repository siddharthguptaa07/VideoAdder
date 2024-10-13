import "./index.css";
// import {useState} from 'react';
import Data from "./Components/data";



function Upper({setvid,vid}){
    console.log(setvid);
    
    // const [vid,setvid]=useState(Data);
  
function AddVid(){
console.log("add video called");
// let len = vid.length+1;
const newvideo = { id:200, title: "java Learning Introduction", channelName: "TulWithSid", views: 4100, verified: false };
setvid([...vid,newvideo]);

}

return(<>

<div className="upper">
 <button  className = "btn1" onClick={AddVid}>Add Videos</button>
</div>

</>)

}
export default Upper;