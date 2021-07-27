import React, {useEffect} from "react";
import {Link} from 'react-router-dom';
import '../css/App.css';
import { FaWindows, FaApple, FaLinux } from "react-icons/fa";

const samples  = [
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
  {
    id: 2,
    title: "Spinning square",
    src: "./samples/spinningSquare.js",
    screenshot: "./samples/spinningSquare.png",
    description: "Description text."
  },
]

const DownloadLink = (props) => {
  let icon = null;
  switch (props.arch) {
    case "windows":
      icon = <FaWindows></FaWindows>;
      break;
    case "macos":
      icon = <FaApple></FaApple>;
      break;
    case "linux":
      icon = <FaLinux></FaLinux>;
      break;
  }
  return <Link to={props.href}>{icon}{props.children}</Link>
}

const ShowcaseItem = ({sample}) => {
  return(
    <div key={sample.id} className={"showcase-list-item"}>
        <h2>{sample.title}</h2>
        <div>
          <img src={sample.screenshot} alt={sample.title}></img>
          <p>{sample.description}</p>
        </div>
        <div className={"showcase-download-links"}>
          <DownloadLink href={"/showcase"} arch={"windows"}>Windows</DownloadLink>
          <DownloadLink href={"/showcase"} arch={"macos"}>Macos</DownloadLink>
          <DownloadLink href={"/showcase"} arch={"linux"}>Linux</DownloadLink>
        </div>
    </div>
  );
}

const ShowcaseList = (props)=>{

    // const [samples, setSamples] = useState(data);

    useEffect(() => {
        
    }, []);

    return(
        <div className={"showcase-list"}>
            {samples.map(sample=>
                <ShowcaseItem sample={sample}></ShowcaseItem>
            )}
        </div>
    );
}

export default ShowcaseList;