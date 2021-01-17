import React from 'react'
import {Link } from 'react-router-dom';

export default function BrandLogo(){
    const logoStyle = {
        fontFamily: 'IBM Plex Serif', 
        fontWeight: 600,
        fontSize: '25px',
        marginLeft: '15%',
    };
    const logoContainerStyle = {
        paddingRight: '74%'
    }
    return(
        
            <div style={logoContainerStyle}>
                <Link to="/" style={{ textDecoration: 'none',
                                color: '#000000'}}> 
                    <h2 style={logoStyle}>Marketeer</h2>
                </Link>
            </div>
        
    );
}