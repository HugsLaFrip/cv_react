import React from 'react';
import { Project } from './Project';
import { portfolio } from '../../data/portfolioData';

export const ProjectList = () => {

    return (
        <div className="portfolioContent">
            <div className="projects">
                {
                    portfolio.map(elm => <Project key={elm.id} project={elm} />)
                }
            </div>
        </div>
    );
}