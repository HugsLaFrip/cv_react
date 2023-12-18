import React from 'react';

export const Hobbies = () => {
    return (
        <div className="hobbies">
            <h3>Intérêts</h3>
            <ul>
                <li className="hobby">
                    <i className="fas fa-futbol"></i>
                    Sports (Rugby, basket, football, tennis...)
                </li>
                <li className="hobby">
                    <i className="fas fa-book"></i>
                    Lecture (Science-fiction...)
                </li>
                <li className="hobby">
                    <i className="fas fa-gamepad"></i>
                    Jeux-vidéo (Star Wars, The witcher, Uncharted, Sports...)
                </li>
            </ul>
        </div>
    );
};