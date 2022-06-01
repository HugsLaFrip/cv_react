import React, { Component } from 'react';
import { experiencesData } from '../../data/experiencesData';

class Experience extends Component {
    state = {
        experiences: experiencesData
    }

    render() {
        return (
            <div className="experiences">
                <h3>Expériences</h3>
                {
                    experiencesData.reverse().map(elm => {
                        return (<div className="exp" key={elm.id}>
                            <h4>{elm.jobTitle}</h4>
                            <h5>{elm.company}</h5>
                            <h6>{elm.dates}</h6>
                            {elm.missions.map(mission => { return (<p key={mission.id}>{mission.title} - <span>{mission.tools}</span></p>) })}
                        </div>)
                    })
                }
            </div>
        );
    }
}

export default Experience;