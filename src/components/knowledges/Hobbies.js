import React from 'react';

const Hobbies = () => {
    return (
        <div className="hobbies">
            <h3>Intérêts</h3>
            <ul>
                <li className="hobby">
                    <i className="fas fa-book"></i>
                    Lecture
                </li>
                <li className="hobby">
                    <i className="fas fa-gamepad"></i>
                    Jeux-vidéo
                </li>
                <li className="hobby">
                    <i className="fas fa-futbol"></i>
                    Sports
                </li>
            </ul>
        </div>
    );
};

export default Hobbies;