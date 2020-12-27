import React, { useContext } from 'react';
// import { Link } from 'react-router-dom';
import styles from './Home.module.css';
import { UserContext } from '../../../UserContext';

const Home = () => {

    const {windowHeight} = useContext(UserContext);

    return (
        <section>

            <div className={["text-center", styles.main].join(' ')} style={{minHeight: windowHeight}}>
                <div className={styles.bannerInfo}>
                    <div className="container">
                        <div className="style-banner text-center">
                            <h4 className="text-wh font-weight-bold">Unlimited movies, private scenes, <br/> Porn star, and more. </h4>
                            <p className="text-li mb-2">Watch anywhere, cancel anytime</p>
                            <p className="text-li mb-2">Ready to watch? Enter your email to create or restart your membership.</p>
            
                            <div class="row">
                                <div class="col-lg-6">
                                    <div class="input-group input-group-lg">
                                    <input 
                                        type="text" 
                                        class="form-control input-lg" 
                                        id="search-church" 
                                        placeholder="Your location (City, State, ZIP)" 
                                    />
                                    <span class="input-group-btn">
                                        <button 
                                            class="btn btn-danger btn-lg" 
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

        </section>
    );
};

export default Home;