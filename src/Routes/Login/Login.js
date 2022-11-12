import React,{useState} from 'react';
import "./Login.css"
import logoDark from "../../images/logoDark.png"
import {Link} from "react-router-dom"
import {auth, googleProvider, firebase} from "../../server/firebase"
import {useStateValue} from "../../context/stateprovider/StateProvider"

function Login() {
    const [{user}, dispatch] = useStateValue()
    const [inputFocus, setInputFocus] = useState(false);
    const [phone, setPhone] = useState("+998")

    const singInWithGoogle = ()=>{
        auth.signInWithPopup(googleProvider).then(user => dispatch({type:"ADD_USER", payload:user}))
    }

    const phoneMes = ()=>{
        let recaptcha = new firebase.auth.RecaptchaVerifier("recaptcha")
        firebase
            .auth()
            .signInWithPhoneNumber(phone, recaptcha)
            .then((e)=>{
                let parol = prompt("parolni kiriting")
                e.confirm(parol).then(user => console.log(user))
            })
            .catch(error=>console.log(error))
    }

    return (
        <div className='login'>
           <Link  to="/">
           <img className='login_logo' src={logoDark} alt="" />
           </Link>
           <div className="login_container">
               <h2>Sign-In</h2>
               <h3>Email or mobile phone number</h3>
               <div className={inputFocus ? "containerInput_wrapper goldBorder" : "containerInput_wrapper"}>
               <input value={phone} onChange={(e)=> setPhone(e.target.value)} autoFocus type="text"  />
               </div>
               <div id="recaptcha"></div>
               <button onClick={phoneMes} className='login_btn'>Continue</button>
               <button onClick={singInWithGoogle} className='login_btn'>with Google</button>
               <p>By continuing, you agree to Amazon's <a href="">Conditions of Use</a> and <a href="">Privacy Notice</a>.</p>
                <a href="" className='openLink'>Need help?</a>
           </div>
           <li>New to Amazon?</li>
           <button className='createNewLoginBtn'>Create your Amazon account</button>

           <div className="copyRightLinks">
               <div className="copyRightLinks_collection">
                   <a href=""> Conditions of Use </a>
                   <a href=""> Privacy Notice</a>
                   <a href=""> Help</a>
               </div>
               <p>© 1996-2022, Amazon.com, Inc. or its affiliates</p>
           </div>
        </div>
    );
}

export default Login;