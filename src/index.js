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
import ServicePage from './pages/Services/ServicePage';
import ServiceDetail from './pages/Services/ServiceDetail';
import Portfolio01 from './pages/Portfolio/Portfolio01';
import Portfolio02 from './pages/Portfolio/Portfolio02';
import PortfolioDetail from './pages/Portfolio/PortfolioDetail';
import LeftSidebar from './pages/Blogs/Blog ListView/LeftSidebar';
import WithoutSidebar from './pages/Blogs/Blog ListView/WithoutSidebar';
import RightSidebar from './pages/Blogs/Blog ListView/RightSidebar';
import GLeftSidebar from './pages/Blogs/Blog Grid View/GLeftSidebar';
import GRightSidebar from './pages/Blogs/Blog Grid View/GRightSidebar';
import GWithoutSidebar from './pages/Blogs/Blog Grid View/GWithoutSidebar';
import BlogsDetail from './pages/Blogs/BlogsDetail';
import About01 from './pages/ALL PAGES/About01';
import About02 from './pages/ALL PAGES/About02';
import Contact from './pages/ALL PAGES/Contact';
import Gallery from './pages/ALL PAGES/Gallery';
import CompanyHistory from './pages/ALL PAGES/CompanyHistory';
import Shop1 from './pages/ALL PAGES/Shops/Shop1';
import Shop2 from './pages/ALL PAGES/Shops/Shop2';
import Shop3 from './pages/ALL PAGES/Shops/Shop3';
import OurTeam from './pages/ALL PAGES/Teams/OurTeam';
import TeamDetail from './pages/ALL PAGES/Teams/TeamDetail';
import ShopDetail from './pages/ALL PAGES/Shops/ShopDetail';



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
                <Route path="/servicepage" element={<ServicePage/>} />
                <Route path="/servicedetail" element={<ServiceDetail />} />
                <Route path="/portfolio01" element={<Portfolio01 />} />
                <Route path="/portfolio02" element={<Portfolio02 />} />
                <Route path="/portfoliodetail" element={<PortfolioDetail />} />
                <Route path="/listleft" element={<LeftSidebar />} />
                <Route path="/listright" element={<RightSidebar />} />
                <Route path="/listwithout" element={<WithoutSidebar />} />
                <Route path="/gridleft" element={<GLeftSidebar />} />
                <Route path="/gridright" element={< GRightSidebar/>} />
                <Route path="/gridwithout" element={< GWithoutSidebar/>} />
                <Route path="/blogsdetail" element={< BlogsDetail/>} />
                <Route path="/about01" element={<About01 />} />
                <Route path="/about02" element={< About02/>} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/gallery" element={<Gallery />} />
                <Route path="/companyhistory" element={<CompanyHistory />} />
                <Route path="/shop1" element={< Shop1/>} />
                <Route path="/shop2" element={< Shop2/>} />
                <Route path="/shop3" element={< Shop3/>} />
                <Route path="/ourteam" element={<OurTeam/>} />
                <Route path="/teamdetail" element={<TeamDetail/>} />
                <Route path="/single-product" element={<ShopDetail/>} />
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