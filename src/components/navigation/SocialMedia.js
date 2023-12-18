import React from 'react';

export const SocialMedia = () => {
  return (
    <div className="socialNetwork">
      <ul>
        <li>
          <a href="https://github.com/HugsLaFrip" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github"></i>
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/hugo-sorabella-b9718a127/" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin"></i>
          </a>
        </li>
      </ul>
      <div className="signature">
        <p><i className="far fa-copyright"></i> Hugo Sorabella - 2023</p>
      </div>
    </div>
  );
};