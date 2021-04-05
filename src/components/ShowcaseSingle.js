import React, {useEffect} from "react";

const ShowcaseSingle = (props)=>{
    useEffect(() => {
        const script = document.createElement('script');
      
        script.src = props.src;
        script.async = true;
      
        document.body.appendChild(script);
      
        return () => {
          document.body.removeChild(script);
        }
      }, []);

    return(
        <div>
            <h1>{props.title}</h1>
            <canvas id="webgl"></canvas>
        </div>
    );
}

export default ShowcaseSingle;