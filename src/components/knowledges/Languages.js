import React from 'react';
import { ProgressBar } from './ProgressBar'
import { languages } from '../../data/languagesData';

export const Languages = () => {
    return (
        <div className="languagesFrameworks">
            <ProgressBar
                languages={languages.languages}
                className="languagesDisplay"
                title="languages"
            />
            <ProgressBar
                languages={languages.frameworks}
                className="frameworksDisplay"
                title="frameworks & bibliothèques"
            />
        </div>
    );
};