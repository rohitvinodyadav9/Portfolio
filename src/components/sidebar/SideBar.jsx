import React from "react";
import { Link } from "react-router-dom";


function SideBar() {
    return (
        <aside className="sidebar" data-sidebar>
            <div className="sidebar-info">
                <figure className="avatar-box">
                    <img
                        src="./my-avatar.png"
                        alt="Rohit Yadav"
                        width="80"
                    />
                </figure>

                <div className="info-content">
                    <h1 className="name" title="Rohit Yadav">
                        Rohit Yadav
                    </h1>

                    <p className="title">Frontend Developer</p>
                </div>

                <button className="info_more-btn" data-sidebar-btn>
                    <span>Show Contacts</span>

                    <ion-icon name="chevron-down"></ion-icon>
                </button>
            </div>

            <div className="sidebar-info_more">
                <div className="separator"></div>

                <ul className="contacts-list">
                    <li className="contact-item">
                        <div className="icon-box">
                            <ion-icon name="mail-outline"></ion-icon>
                        </div>

                        <div className="contact-info">
                            <p className="contact-title">Email</p>

                            <Link to="mailto:rohitvinodyadav9@gmail.com" className="contact-link">
                                rohitvinodyadav9
                            </Link>
                        </div>
                    </li>

                    <li className="contact-item">
                        <div className="icon-box">
                        <ion-icon name="logo-linkedin"></ion-icon>
                        </div>

                        <div className="contact-info">
                            <p className="contact-title">LinkedIn</p>

                            <Link to="https://www.linkedin.com/in/rohitvinodyadav/" className="contact-link">
                                rohitvinodyadav
                            </Link>
                        </div>
                    </li>

                    <li className="contact-item">
                        <div className="icon-box">
                        <ion-icon name="logo-github"></ion-icon>
                        </div>

                        <div className="contact-info">
                            <p className="contact-title">Github</p>

                            <Link to="https://github.com/rohitvinodyadav9" className="contact-link">
                                rohitvinodyadav9
                            </Link>
                        </div>
                    </li>

                    <li className="contact-item">
                        <div className="icon-box">
                            <ion-icon name="location-outline"></ion-icon>
                        </div>

                        <div className="contact-info">
                            <p className="contact-title">Location</p>

                            <address>New Delhi, India</address>
                        </div>
                    </li>
                </ul>

                <div className="separator"></div>

                <ul className="social-list">
                    <li className="social-item">
                        <Link to="https://www.facebook.com/profile.php?id=100004244447394" className="social-link">
                            <ion-icon className="socials-icons" name="logo-facebook"></ion-icon>
                        </Link>
                    </li>

                    <li className="social-item">
                        <Link to="https://twitter.com/rohitvinodyadav" className="social-link">
                            <ion-icon className="socials-icons" name="logo-twitter"></ion-icon>
                        </Link>
                    </li>

                    <li className="social-item">
                        <Link to="https://www.instagram.com/rohitvinodyadav/" className="social-link">
                            <ion-icon className="socials-icons" name="logo-instagram"></ion-icon>
                        </Link>
                    </li>
                </ul>
            </div>
        </aside>
    );
}

export default SideBar;
