import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Navbar } from './Navbar';
import { MobileMenu } from './MobileMenu';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <div className='h-screen flex flex-col justify-between content-between'>
        <Navbar/>
        <MobileMenu />
    </div>

)
