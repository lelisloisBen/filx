import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../UserContext';
import styles from './Login.module.css';
// import swal from 'sweetalert';

const Login = () => {

    // let history = useHistory();

    const {windowHeight} = useContext(UserContext);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // const {setAuth} = useContext(UserContext);
    // const {backen_url} = useContext(UserContext);

    const loginFormHandler = () => {
        // let userLoginData = JSON.stringify({
        //     "email": email,
        //     "password": password
        // });
        // fetch(backen_url+'/login', {
        //     method: 'POST',
        //     body: userLoginData,
        //     cors: 'no-cors',
        //     headers:{
        //         'Content-Type': 'application/json'
        //     }
        //     }).then(res => res.json())
        //     .then(response => {
        //         let token = response.token;
        //         let userID = response.id;
        //         let email = response.email;
        //         let firstname = response.firstname;
        //         let lastname = response.lastname;
        //         let avatar = response.avatar;
        //         let wallet = response.wallet;
        //         if (!token && !email && !firstname && !lastname ) {
        //             swal("Sorry we couldn't find an account with that email.", "Try to register first.!", "error", {
        //                 button: "TRY AGAIN!",
        //               })
        //             // alert("Sorry we couldn't find an account with that email.\n\n Try to register first.")
        //         } else {
        //             // alert('LOGIN SUCCESSFUL');
        //             localStorage.setItem('token', token);
        //             localStorage.setItem('userID', userID);
        //             localStorage.setItem('email', email);
        //             localStorage.setItem('firstname', firstname);
        //             localStorage.setItem('lastname', lastname);
        //             localStorage.setItem('avatar', avatar);
        //             localStorage.setItem('wallet', wallet);
        //             setAuth({
        //                 'token': token,
        //                 'userID': userID,
        //                 'email': email,
        //                 'firstname': firstname,
        //                 'lastname': lastname,
        //                 'avatar': avatar,
        //                 'wallet': wallet
        //             })
        //             swal("LOGIN SUCCESSFUL!", "Welcome to iWash", "success", {
        //                 button: "Let's Wash",
        //               }).then(() => {
        //                     history.push('/');
        //                   });
                    
        //         }
        //     })
        //     .catch(error => {
        //         swal("Something Went Wrong!", JSON.stringify("error: => "+ error), "error", {
        //             button: "OK",
        //           })
        //     });
    }

    return (
        <section className={styles.main} style={{minHeight: windowHeight}}>
            
            <div className="row">
                <div className={["col-lg-4 offset-lg-4", styles.loginContainer].join(' ')}>

                    <div className="row">
                        <div className="col mb-3">
                            <h1>
                                Login
                            </h1>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col">
                            <input 
                                className={["form-control", styles.Input].join(' ')}
                                name="email"
                                type="email" 
                                placeholder="Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                autoComplete="on"
                            />
                        </div>
                    </div>


                    <div className="row">
                        <div className="col">
                            <input 
                                className={["form-control", styles.Input].join(' ')}
                                name="password"
                                type="password" 
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                    </div>
                    
                    <div className="row">
                        <div className="col">
                            <button 
                                className={["btn btn-danger form-control",styles.btnLogin].join(' ')}
                                onClick={loginFormHandler}
                            >
                                Login
                            </button>
                        </div>
                    </div>

                </div>
            </div>

            
                
                
                <br/>
                
               

                <br/>
                <br/>
                <Link to="/" className={styles.forgotP}>
                    Forgot password?
                </Link>
           

        </section>
    );
};

export default Login;