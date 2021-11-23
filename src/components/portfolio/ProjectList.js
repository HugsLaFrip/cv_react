import React, { Component } from 'react';
import { portfolioData } from '../../data/portfolioData';
import Project from './Project';

class ProjectList extends Component {
    state = {
        projects: portfolioData,
        radios: [
            { id: 1, value: 'javascript' },
            { id: 2, value: 'php' },
            { id: 3, value: 'react' },
            { id: 4, value: 'symfony' },
        ],
        selectedRadio: 'javascript'
    }

    handleRadio = (event) => {
        let radio = event.target.value;

        this.setState({ selectedRadio: radio });
    }

    render() {
        let { projects, radios, selectedRadio } = this.state;

        return (
            <div className="portfolioContent">
                <ul className="radioDisplay">
                    {
                        radios.map(elm => (
                            <li key={elm.id}>
                                <span>
                                    <input type="radio" name="radio" checked={elm.value === selectedRadio} id={elm.value} value={elm.value} onChange={this.handleRadio} />
                                    <label htmlFor={elm.value}>{elm.value}</label>
                                </span>
                            </li>
                        ))
                    }
                </ul>
                <div className="projects">
                    {
                        projects
                            .filter(elm => elm.languages.includes(selectedRadio))
                            .map(elm => <Project key={elm.id} item={elm} />)
                    }
                </div>
            </div>
        );
    }
}

export default ProjectList;