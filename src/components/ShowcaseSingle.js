import React, {useEffect} from "react";
import '../css/App.css';

const ShowcaseSingle = (props)=>{
    useEffect(() => {
        const script = document.createElement('script');
      
        script.src = props.src;
        script.async = true;
      
        document.body.appendChild(script);
      
        return () => {
          document.body.removeChild(script);
        }
      }, [props.src]);

    return(
        <div className={"showcase-single"}>
            <h1>{props.title}</h1>
            <canvas id="webgl"></canvas>
            <div>
              <button>Source</button>
            </div>
            <text id={"description"}>{props.description}</text>
        </div>
    );
}

export default ShowcaseSingle;