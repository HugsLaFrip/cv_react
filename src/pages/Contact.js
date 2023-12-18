import React from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';

export const Contact = () => {
    return (
        <div className="contactContent">
            <div className="header"></div>
            <div className="contactBox">
                <h1>Contactez-moi</h1>
                <ul>
                    <li>
                        <i className="fas fa-map-marker-alt"></i>
                        <span>Aix-en-Provence</span>
                    </li>
                    <li>
                        <i className="fas fa-mobile-alt"></i>
                        <CopyToClipboard text="06.59.04.42.02">
                            <span className="clickInput" onClick={() => alert('Télephone copié !')}>06.59.04.42.02</span>
                        </CopyToClipboard>
                    </li>
                    <li>
                        <i className="far fa-envelope"></i>
                        <CopyToClipboard text="hugo.sorabella@gmail.com">
                            <span className="clickInput" onClick={() => alert('E-mail copié !')}>hugo.sorabella@gmail.com</span>
                        </CopyToClipboard>
                    </li>
                </ul>
            </div>
            <div className="socialNetwork">
                <ul>
                    <li>
                        <a href="https://www.google.com" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-github"></i>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.google.com" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-linkedin"></i>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
};