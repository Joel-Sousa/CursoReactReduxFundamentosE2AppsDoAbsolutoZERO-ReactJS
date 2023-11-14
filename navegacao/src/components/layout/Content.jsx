import React from 'react';
import './Content.css';
import { Route, Routes } from "react-router-dom";
import About from '../../views/examples/About';
import Home from '../../views/examples/Home';
import Param from '../../views/examples/Param';
import NotFound from '../../views/examples/NotFound';

export default function Content() {
    return (
        <main className='Content'>
            <>
                {/* <h1>Content</h1> */}
                <Routes>
                    <Route exact path="/param/:id" element={<Param />}/>
                    <Route exact path="/about" element={<About />}/>
                    <Route exact path="/" element={<Home />}/>
                    <Route path="*" element={<NotFound />}/>
                </Routes>
            </>
        </main>
    )
}