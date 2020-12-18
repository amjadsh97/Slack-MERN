import React from 'react';
import './Login.css';
import {Button} from "@material-ui/core";
import {auth} from "../firebase";
import {provider} from "../firebase";
import {useStateValue} from "../StateProvider";
import {actionTypes} from "../reducer";

function Login() {
    const [state, dispatch] = useStateValue();

    const signIn = (e) => {
        e.preventDefault();
        auth.signInWithPopup(provider)
            .then(result=>{
                console.log(result)
                dispatch({
                    type: actionTypes.SET_USER,
                    user: result.user,
                })
            })
            .catch(error=>{
                alert(error)
            })
    }
    return (
        <div className='login'>
            <div className="login__container">
                <img src="https://assets.stickpng.com/images/5cb480cd5f1b6d3fbadece79.png" alt="slack url"/>
                <h1>Sign in to Amjad Internship</h1>
                <p>amjadinternship.slack.com</p>
                <Button onClick={signIn}>Sign in with Google</Button>
            </div>
        </div>
    );
}

export default Login;
