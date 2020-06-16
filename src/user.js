import React from 'react';

export const User = ({img, name, email}) => {
    return (
        <div className="user-box">
            <img src={img} alt="User not found"/>
            <div className="user-info">
                <div className="user-name">
                    {name}
                </div>
                <div className="user-email">
                    {email}
                </div>
            </div>                
        </div>
    )
};