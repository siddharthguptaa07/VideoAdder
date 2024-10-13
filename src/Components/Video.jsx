import '../index.css'
import { useState } from 'react';
function Video({id,title,channelName,views,verified}){

const [state , setstate] = useState(true);
function handleClick(){
setstate(!state);
console.log("button called");
}
    return (<>
   <div>
<div>
<img src={`https://picsum.photos/id/${id}/140/100`} alt="gg" />
</div>
<div className="details">

     <h4 className ="vid">{title}</h4>
   <span className="channelName">{channelName}</span>
     <span className="views">{views} 2 month ago 

          {verified?<span><b>V</b></span>:<span>X</span>}
          <button className="btn" onClick={handleClick}>{state?<span>Play</span>:<span>Pause</span>}</button>
     </span>
     

</div>
     
   </div>
     </>)

}
export default Video;
