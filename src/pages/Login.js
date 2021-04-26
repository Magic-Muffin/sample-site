import React, {useState} from "react";

const Login = (props) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e)=>{
        e.preventDefault();
        console.log([email, password]);
        localStorage.setItem("token", "123");
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

    return(
        <div>
            <h1>Login</h1>
            <form>
                <input className={"input-text"} type={"email"} onChange={handleChange} value={email}></input>
                <input className={"input-text"} type={"password"} onChange={handleChange} value={password}></input>
                <input className={"input-submit"} type={"submit"} onClick={handleSubmit} value="Submit"></input>
            </form>
        </div>
    );
}

export default Login;