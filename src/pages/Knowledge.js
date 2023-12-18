import React from 'react';
import { Experience } from '../components/knowledges/Experience';
import { Hobbies } from '../components/knowledges/Hobbies';
import { Languages } from '../components/knowledges/Languages';
import { OtherSkills } from '../components/knowledges/OtherSkills';

export const Knowledge = () => {
    return (
        <div className="knowledgeContent">
            <Languages />
            <Experience />
            <OtherSkills />
            <Hobbies />
        </div>
    );
};