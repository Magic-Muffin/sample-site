import React, {useState, useEffect} from "react";
import '../css/App.css';

const data  = [
  {
    id: 0,
    title: "Spinning square",
    src: "./samples/spinningSquare.js",
    screenshot: "./samples/spinningSquare.png",
    description: "Description text."
  },
  {
    id: 1,
    title: "Spinning square",
    src: "./samples/spinningSquare.js",
    screenshot: "./samples/spinningSquare.png",
    description: "Description text."
  },
]

const ShowcaseList = (props)=>{

    const [samples, setSamples] = useState(data);

    useEffect(() => {
        
    }, []);

    return(
        <div className={"showcase-list"}>
            {samples.map(sample=>
                <div key={sample.id} to={`/showcase/${sample.id}`}>
                    <h2>{sample.title}</h2>
                    <img src={sample.screenshot} width={600}></img>
                </div>
            )}
        </div>
    );
}

export default ShowcaseList;