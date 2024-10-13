import Video from "./Components/Video"; // Ensure this is the correct path
import './index.css';
import Data from "./Components/data"; // Ensure this is the correct path
import Upper from "./Upper";
import {useState} from 'react';

function FrontPage() {
  const [vid,setVid]=useState(Data);
  
  return (
    <>
    <div className="upper">
    <Upper setvid={setVid} vid={vid} ></Upper>
</div>
    
      <div className="fp">
        {vid.map((detail) => (
          <Video key={detail.id}  
        //   id1={detail.id}
        //   title={detail.title}
        //   channelName={detail.channelName}
        //   views ={detail.views}

          
          {...detail}
          
          
          ></Video>
        ))}
      </div>
    </>
  );
}

export default FrontPage;
