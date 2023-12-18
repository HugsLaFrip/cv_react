import React from 'react';
import { Outlet } from 'react-router-dom';
import { Links } from './navigation/Links';
import { SocialMedia } from './navigation/SocialMedia';

export const Navigation = ({ children }) => {
    return (
        <div className='website'>
            <div className="sidebar">
                <div className="id">
                    <div className="idContent">
                        <img src="./media/Photo.jpg" alt="Portrait" />
                        <h3>Hugo Sorabella</h3>
                    </div>
                </div>
                <Links />
                <SocialMedia />
            </div>
            {children || <Outlet />}
        </div>
    );
};