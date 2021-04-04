import {useEffect} from 'react';
import Content from '../components/Content';

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
        <Content>
            <h1>Showcase</h1>
            <canvas id="webgl"></canvas>
        </Content>
    );
}

export default Showcase;