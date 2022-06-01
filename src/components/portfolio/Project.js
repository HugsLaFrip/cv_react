import React, { Component } from 'react';

class Project extends Component {
    state = {
        showInfo: false
    }

    handleInfos = () => {
        this.setState({ showInfo: !this.state.showInfo });
    }

    render() {
        const { name, languagesIcons, source, info, picture } = this.props.item;

        return (
            <div className="project">
                <div className="icons">
                    {languagesIcons.map(elm => <i className={elm} key={elm}></i>)}
                </div>
                <h3>{name}</h3>
                <img src={picture} alt="Maquette du projet" onClick={this.handlePhoto} />
                <span className="infos" onClick={this.handleInfos}>
                    <i className="fas fa-plus-circle"></i>
                </span>

                {
                    this.state.showInfo && (
                        <div className="showInfos">
                            <div className="infosContent">
                                <div className="head">
                                    <h2>{name}</h2>
                                    <a href={source} className="button" target="_blank" rel="noopener noreferrer">Code source</a>
                                </div>
                                <p className="text">{info}</p>
                                <div className="button return" onClick={this.handleInfos}>Retour sur la page</div>
                            </div>
                        </div>
                    )
                }
            </div>
        );
    }
}

export default Project;