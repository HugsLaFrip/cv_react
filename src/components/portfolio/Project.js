import React, { useState } from 'react';

export const Project = ({ project }) => {
    const [showInfo, setShowInfo] = useState(false)

    const handleModal = () => {
        setShowInfo(!showInfo)
    }

    return (
        <div className="project">
            <div className="icons">
                {project.languagesIcons.map(icon => <i className={icon} key={icon}></i>)}
            </div>
            <h3>{project.name}</h3>
            <img src={project.picture} alt="Maquette du projet" />
            <span className="infos" onClick={handleModal}>
                <i className="fas fa-plus-circle"></i>
            </span>

            {
                showInfo && (
                    <div className="showInfos">
                        <div className="infosContent">
                            <div className="head">
                                <h2>{project.name}</h2>
                                {
                                    project.source && (
                                        <a href={project.source} className="button" target="_blank" rel="noopener noreferrer">Visiter</a>
                                    )
                                }
                            </div>
                            <p className="text">{project.info}</p>
                            <div className="button return" onClick={handleModal}>Retour sur la page</div>
                        </div>
                    </div>
                )
            }
        </div>
    );
};