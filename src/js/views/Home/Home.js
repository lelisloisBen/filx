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
            
                            <form className="cta-form email-form" data-uia="email-form" method="GET">
                                <h3 className="email-form-title">Ready to watch? Enter your email to create or restart your membership.</h3>
                                <div className="email-form-lockup">
                                    <ul className="simpleForm structural ui-grid">
                                        <li data-uia="field-email+wrapper" className="nfFormSpace field-email">
                                            <div data-uia="field-email+container" className="nfInput nfInputResponsive">
                                                <div className="nfInputPlacement">
                                                    <label className="input_id" placeholder="email">
                                                        <input type="email" data-uia="field-email" name="email" className="nfTextField" id="id_email_hero_fuji" value="" tabindex="0" autocomplete="email" maxlength="50" minlength="5" dir="" />
                                                            <label for="id_email_hero_fuji" className="placeLabel">Email address</label>
                                                    </label>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                    <div className="our-story-cta-container cta-link-wrapper">
                                        <button className="btn btn-red nmhp-cta nmhp-cta-extra-large btn-none btn-custom" type="submit" autocomplete="off" tabindex="0" role="link" data-uia="our-story-cta-hero_fuji">
                                            <span id="" className="cta-btn-txt" data-uia="">GET STARTED</span>
                                            <span id="" className="chevron-right-arrow" data-uia="">
                                                <svg viewBox="0 0 6 12" xmlns="http://www.w3.org/2000/svg"><desc>chevron</desc><path d="M.61 1.312l.78-.624L5.64 6l-4.25 5.312-.78-.624L4.36 6z" fill="none" fill-rule="evenodd"></path></svg>
                                            </span>
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default Home;