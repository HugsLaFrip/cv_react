import React from 'react';
import { Link } from 'react-router-dom';

export const Links = () => {
  return (
    <div className="navigation">
      <ul>
        <li>
          <Link exact="true" to="/">
            <i className="fas fa-home"></i>
            <span>Accueil</span>
          </Link>
        </li>
        <li>
          <Link to="/competences">
            <i className="fas fa-mountain"></i>
            <span>Compétences</span>
          </Link>
        </li>
        <li>
          <Link to="/portfolio">
            <i className="fas fa-images"></i>
            <span>Portfolio</span>
          </Link>
        </li>
        <li>
          <Link to="/contact">
            <i className="fas fa-address-book"></i>
            <span>Contact</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};