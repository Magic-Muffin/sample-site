import React, {useState, useEffect} from "react";
import '../css/App.css';

const data  = [
  {
    id: 0,
    title: "Spinning square",
    src: "./samples/spinningSquare.js",
    // screenshot: "./images/samples/spinningSquare.jpg",
    description: "Description text."
  },
  {
    id: 1,
    title: "Spinning square",
    src: "./samples/spinningSquare.js",
    // screenshot: "./images/samples/spinningSquare.jpg",
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
                <div key={sample.id}>
                    <h2>{sample.title}</h2>
                </div>
            )}
        </div>
    );
}

export default ShowcaseList;