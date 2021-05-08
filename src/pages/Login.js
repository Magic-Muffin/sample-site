import axios from "axios";
import React, {useState} from "react";
import { Redirect } from "react-router-dom";
import { saveToken } from "../utils";

const Login = ({setter}) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e)=>{
        e.preventDefault();
        console.log([email, password]);
        axios.get(`http://localhost:3005/users`).then((response)=>{
            if(response.status==200){
                let token = response.data.token;
                setSubmitted(true);
                setter(token);
                saveToken(token);
            }
        }).catch((err)=>{
            console.error(err);
        });

    }

    const handleChange = (e)=>{
        e.preventDefault();
        switch (e.target.type) {
            case "email":
                setEmail(e.target.value);
                break;
            case "password":
                setPassword(e.target.value);
                break;
            default:
                break;
        }
    }

    if(submitted) return <Redirect to="/"></Redirect>

    return(
        <div>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <input className={"input-text"} type={"email"} onChange={handleChange} value={email} required></input>
                <input className={"input-text"} type={"password"} onChange={handleChange} value={password} required></input>
                <input className={"input-submit"} type={"submit"} value="Submit"></input>
            </form>
        </div>
    );
}

export default Login;