import './Header.css';

import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <header>
            <div className="title">Todo App</div>
            <div className="links">
                <Link to="/" className="link">Home</Link>
                <Link to="/about" className="link">Why Todo App?</Link>
            </div>
        </header>
    )
}
