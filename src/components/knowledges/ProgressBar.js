import React from 'react';

const ProgressBar = (props) => {
    const { languages, className, title } = props;

    return (
        <div className={className}>
            <h3>{title}</h3>
            <div className="years">
                <span>Années d'expériences</span>
                <span>1 an</span>
                <span>2 ans</span>
            </div>
            <div>
                {
                    languages.map(elm => {
                        let xpYears = 2;
                        let progressBar = elm.xp / xpYears * 100 + '%';

                        return (
                            <div key={elm.id} className="languagesList">
                                <li>{elm.value}</li>
                                <div className="progressBar" style={{ width: progressBar }}></div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default ProgressBar;