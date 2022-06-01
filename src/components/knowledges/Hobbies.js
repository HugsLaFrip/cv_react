import React from 'react';

const Hobbies = () => {
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
                    Lecture (Science-fiction, comics...)
                </li>
                <li className="hobby">
                    <i className="fas fa-gamepad"></i>
                    Jeux-vidéo (Sports, The witcher, Uncharted, Star Wars...)
                </li>
            </ul>
        </div>
    );
};

export default Hobbies;