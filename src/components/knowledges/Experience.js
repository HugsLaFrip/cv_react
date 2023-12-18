import React from 'react';
import { experiences } from '../../data/experiencesData'

export const Experience = () => {
    const experiencesData = experiences.toReversed()

    return (
        <div className="experiences">
            <h3>Expériences</h3>
            {
                experiencesData.map(experience => (
                    <div className="exp" key={experience.id}>
                        <h4>{experience.jobTitle}</h4>
                        <h5>{experience.company}</h5>
                        <h6>{experience.dates}</h6>
                        {experience.missions.map(mission => { return (<p key={mission.id}>{mission.title} - <span>{mission.tools}</span></p>) })}
                    </div>
                ))
            }
        </div>
    );
};