import React from 'react';

const OtherSkills = () => {
    return (
        <div className="otherSkills">
            <h3>Autres compétences</h3>
            <div className="list">
                <ul>
                    <li>
                        <i className="fas fa-check-square"></i>
                        Anglais
                    </li>
                    <li>
                        <i className="fas fa-check-square"></i>
                        GitHub
                    </li>
                    <li>
                        <i className="fas fa-check-square"></i>
                        GitLab
                    </li>
                </ul>
                <ul>
                    <li>
                        <i className="fas fa-check-square"></i>
                        Miro
                    </li>
                    <li>
                        <i className="fas fa-check-square"></i>
                        Trello
                    </li>
                    <li>
                        <i className="fas fa-check-square"></i>
                        Agile
                    </li>
                </ul>
                <ul>
                    <li>
                        <i className="fas fa-check-square"></i>
                        Gestion
                    </li>
                    <li>
                        <i className="fas fa-check-square"></i>
                        PowerShell
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default OtherSkills;