import React, { useContext } from 'react';
// import { Link } from 'react-router-dom';
import styles from './Home.module.css';
import { UserContext } from '../../../UserContext';

import tv from '../../../img/home/tv.png';
import mobile from '../../../img/home/mobile.jpg';

const Home = () => {

    const {windowHeight} = useContext(UserContext);

    return (
        <section>

            <div className={["text-center", styles.main].join(' ')} style={{minHeight: windowHeight}}>
                <div className={styles.bannerInfo}>
                    <div className="container">
                        <div className="style-banner text-center">
                            <p className={["text-wh font-weight-bold", styles.mainTitle].join(' ')}>Unlimited movies, private scenes, <br/> Porn star, and more. </p>
                            <p className={["text-li mb-2", styles.mainSubTitle1].join(' ')}>Watch anywhere, cancel anytime</p>
                            <p className={["text-li mb-2", styles.mainSubTitle2].join(' ')}>Enter your email to create or restart your membership.</p>

                            
                            
                            <div class="row">
                                <div class="col-12 col-lg-6 offset-lg-3 col-md-6 offset-md-3">
                                    <div class="input-group input-group-lg">
                                    <input 
                                        type="text" 
                                        className={["form-control input-lg", styles.mainInput].join(' ')} 
                                        id="search" 
                                        placeholder="Email address"  
                                    />
                                    <span class="input-group-btn">
                                        <button 
                                            className={["btn btn-danger btn-lg", styles.mainButton].join(' ')}
                                            type="submit"
                                        >
                                            Search
                                        </button>
                                    </span>
                                    </div>
                                </div>
                            </div>

                        </div>

                        
                    </div>
                </div>
            </div>

            <div className={["container-fluid", styles.section1].join(' ')}>
                    <div className="row">
                        <div className="col my-auto">
                            <h1>Enjoy on your TV.</h1>
                            <h3>Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.</h3>
                        </div>
                        <div className="col">
                            <img src={tv} alt="tv"/>
                        </div>
                    </div>
            </div>

            <div className={["container-fluid", styles.section2].join(' ')}>
                    <div className="row">
                        <div className="col">
                            <img src={mobile} alt="mobile"/>
                        </div>
                        <div className="col my-auto">
                            <h1>Enjoy on your TV.</h1>
                            <h3>Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.</h3>
                        </div>
                    </div>
            </div>


        </section>
    );
};

export default Home;