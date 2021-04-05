import React, {useEffect} from 'react';

const Showcase = (props) =>{

    useEffect(() => {
        const script = document.createElement('script');
      
        script.src = "./samples/main.js";
        script.async = true;
      
        document.body.appendChild(script);
      
        return () => {
          document.body.removeChild(script);
        }
      }, []);

    return(
        <div>
            <h1>Showcase</h1>
            <canvas id="webgl"></canvas>
        </div>
    );
}

export default Showcase;