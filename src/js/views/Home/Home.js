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
                            <p className="text-li mb-2">Ready to masturbate? Enter your email to create membership.</p>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default Home;