import React, { Component } from 'react';
import ProgressBar from './ProgressBar';

class Languages extends Component {
    state = {
        languages: [
            { id: 1, value: "PHP", xp: 2 },
            { id: 2, value: "JavaScript", xp: 2 },
            { id: 3, value: "CSS", xp: 1.2 },
            { id: 4, value: "SQL", xp: 1.6 },
        ],
        frameworks: [
            { id: 1, value: "Symfony", xp: 1.7 },
            { id: 2, value: "CodeIgniter", xp: 1.2 },
            { id: 3, value: "ReactJs", xp: 0.9 },
            { id: 6, value: "NodeJs", xp: 0.6 },
            { id: 7, value: "ExpressJs", xp: 0.6 },
            { id: 8, value: "MongoDB", xp: 0.6 },
            { id: 4, value: "Bootstrap", xp: 1.6 },
            { id: 5, value: "Sass", xp: 0.7 },
        ]
    }

    render() {
        const { languages, frameworks } = this.state;

        return (
            <div className="languagesFrameworks">
                <ProgressBar
                    languages={languages}
                    className="languagesDisplay"
                    title="languages"
                />
                <ProgressBar
                    languages={frameworks}
                    className="frameworksDisplay"
                    title="frameworks & bibliothèques"
                />
            </div>
        );
    }
}

export default Languages;