import React from 'react';
import './index.css';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from './pages/Landing';
import { render } from "react-dom";
import Header from './components/header';
import Footer from './components/footer';
import Hometwo from './pages/Home/hometwo';
import Homethree from './pages/Home/homethree';
import Homefour from './pages/Home/homefour';
import Homefive from './pages/Home/homefive';
import Homesix from './pages/Home/homesix';

render(
    <>

        <Header />
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Landing />} />
                <Route path="/hometwo" element={<Hometwo />} />
                <Route path="/homethree" element={<Homethree />} />
                <Route path="/homefour" element={<Homefour />} />
                <Route path="/homefive" element={<Homefive />} />
                <Route path="/homesix" element={<Homesix />} />
                <Route path="/" element={<Landing />} />
                <Route path="/" element={<Landing />} />
                <Route path="/" element={<Landing />} />
                <Route path="/" element={<Landing />} />
                <Route path="/" element={<Landing />} />
                <Route path="/" element={<Landing />} />
                <Route path="/" element={<Landing />} />
                <Route path="/" element={<Landing />} />
                <Route path="/" element={<Landing />} />
                <Route path="/" element={<Landing />} />
                <Route path="/" element={<Landing />} />
                <Route path="/" element={<Landing />} />
            </Routes>
        </BrowserRouter>
        <Footer />
    </>,
    document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();