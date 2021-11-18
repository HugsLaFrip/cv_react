import React, { Component } from 'react';
import ProgressBar from './ProgressBar';

class Languages extends Component {
    state = {
        languages: [
            { id: 1, value: "PHP", xp: 2 },
            { id: 2, value: "JavaScript", xp: 1.7 },
            { id: 3, value: "CSS", xp: 1.2 }
        ],
        frameworks: [
            { id: 1, value: "Symfony", xp: 1.2 },
            { id: 2, value: "CodeIgniter", xp: 1.4 },
            { id: 3, value: "React", xp: 0.4 },
            { id: 4, value: "Bootstrap", xp: 1.2 },
            { id: 5, value: "Sass", xp: 0.5 },
        ]
    }

    render() {
        let { languages, frameworks } = this.state;

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