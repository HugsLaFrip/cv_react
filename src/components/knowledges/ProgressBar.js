import React from 'react';

export const ProgressBar = ({ languages, className, title }) => {
    return (
        <div className={className}>
            <h3>{title}</h3>
            <div className="diagram">
                <div className="years">
                    <span>Années d'expériences</span>
                    <span>1 an</span>
                    <span>2 ans</span>
                    <span>3 ans</span>
                </div>
                <div>
                    {
                        languages.map(elm => {
                            let progressBar = elm.xp / 3 * 100 + '%';

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
        </div>
    );
};