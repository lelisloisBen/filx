import React, { useContext } from 'react';
// import { Link } from 'react-router-dom';
import styles from './Home.module.css';
import { UserContext } from '../../../UserContext';

import tv from '../../../img/home/tv.png';
import mobile from '../../../img/home/mobile.jpg';
import device from '../../../img/home/device-pile.png';

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
                                            Register
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
                            <h1 className={styles.section1Title1}>Enjoy on your TV.</h1>
                            <h3 className={styles.section1Title2}>Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.</h3>
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
                            <h1 className={styles.section2Title1}>Download your shows to watch offline.</h1>
                            <h3 className={styles.section2Title2}>Save your favorites easily and always have something to watch.</h3>
                        </div>
                    </div>
            </div>

            <div className={["container-fluid", styles.section1].join(' ')}>
                    <div className="row">
                        <div className="col my-auto">
                            <h1 className={styles.section1Title1}>Watch everywhere.</h1>
                            <h3 className={styles.section1Title2}>Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV without paying more.</h3>
                        </div>
                        <div className="col">
                            <img src={device} alt="device"/>
                        </div>
                    </div>
            </div>

            <div className={["container-fluid", styles.section4].join(' ')}>
                <p className={["text-li mb-2", styles.section4Title].join(' ')}>Enter your email to create or restart your membership.</p>
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
                                Register
                            </button>
                        </span>
                        </div>
                    </div>
                </div>
            </div>


        </section>
    );
};

export default Home;