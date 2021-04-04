import {useEffect} from 'react';

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
        <dir>
            <h1>Showcase</h1>
            <canvas id="webgl"></canvas>
        </dir>
    );
}

export default Showcase;