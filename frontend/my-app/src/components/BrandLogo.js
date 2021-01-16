import React from 'react'

export default function BrandLogo(){
    const logoStyle = {
        fontFamily: 'IBM Plex Serif', 
        fontWeight: 600,
        fontSize: '25px',
        marginLeft: '12%'
    };
    return(
        <div>
            <h1 style={logoStyle}>Marketeer</h1>
        </div>
    );
}