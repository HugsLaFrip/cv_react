import React from 'react';
import { NavLink } from 'react-router-dom';

export const NotFound = () => {
    return (
        <div className="notFoundContent">
            <h3>Désolé, cette page n'existe pas !</h3>
            <NavLink exact="true" to="/">
                <i className="fas fa-home"></i>
                <span> Accueil</span>
            </NavLink>
        </div>
    );
};