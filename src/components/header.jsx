import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <div>
                <header class="header01 isSticky">
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-lg-12">
                                <div class="navBar01">
                                    <div class="logo">
                                        <a href="/"><img src="assets/images/logo.png" alt="digitos" /></a>
                                    </div>
                                    <a href="javascript:void(0)" class="menu_btn"><i class="twi-bars2"></i></a>
                                    <nav class="mainMenu">
                                        <ul>
                                            <li class="menu-item-has-children">
                                                <a href="javascript:void(0);">Home</a>
                                                <ul class="sub-menu">
                                                    <li class="menu-item-has-children">
                                                        <a href="javascript:void(0);">Banner Version</a>
                                                        <ul class="sub-menu">
                                                            <li><a href="/">Home One</a></li>
                                                            <li><a href="/hometwo">Home Two</a></li>
                                                            <li><a href="/homethree">Home Three</a></li>
                                                        </ul>
                                                    </li>
                                                    <li class="menu-item-has-children">
                                                        <a href="javascript:void(0);">Slider Version</a>
                                                        <ul class="sub-menu">
                                                            <li><a href="/homefour">Home One</a></li>
                                                            <li><a href="/homefive">Home Two</a></li>
                                                            <li><a href="/homesix">Home Three</a></li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li class="menu-item-has-children">
                                                <a href="javascript:void(0);">Services</a>
                                                <ul class="sub-menu">
                                                    <li><a href="/servicepage">Service Page</a></li>
                                                    <li><a href="/servicedetail">Service Details</a></li>
                                                </ul>
                                            </li>
                                            <li class="menu-item-has-children">
                                                <a href="javascript:void(0);">Portfolio</a>
                                                <ul class="sub-menu">
                                                    <li><a href="/portfolio01">Portfolio 01</a></li>
                                                    <li><a href="/portfolio02">Portfolio 02</a></li>
                                                    <li><a href="/portfoliodetail">Portfolio Details</a></li>
                                                </ul>
                                            </li>
                                            <li class="menu-item-has-children">
                                                <a href="javascript:void(0);">blogs</a>
                                                <ul class="sub-menu">
                                                    <li class="menu-item-has-children">
                                                        <a href="javascript:void(0);">Blog List Views</a>
                                                        <ul class="sub-menu">
                                                            <li><a href="/listleft">Left Sidebar</a></li>
                                                            <li><a href="/listright">Right Sidebar</a></li>
                                                            <li><a href="/listwithout">Without Sidebar</a></li>
                                                        </ul>
                                                    </li>
                                                    <li class="menu-item-has-children">
                                                        <a href="javascript:void(0);">Blog Grid Views</a>
                                                        <ul class="sub-menu">
                                                            <li><a href="/gridleft">Left Sidebar</a></li>
                                                            <li><a href="/gridright">Right Sidebar</a></li>
                                                            <li><a href="/gridwithout">Without Sidebar</a></li>
                                                        </ul>
                                                    </li>
                                                    <li><a href="/blogsdetail">Blog Details</a></li>
                                                </ul>
                                            </li>
                                            <li class="menu-item-has-children">
                                                <a href="javascript:void(0);">pages</a>
                                                <ul class="sub-menu">
                                                    <li><a href="/about01">About 01</a></li>
                                                    <li><a href="/about02">About 02</a></li>
                                                    <li><a href="/contact">Contact</a></li>
                                                    <li class="menu-item-has-children">
                                                        <a href="javascript:void(0);">Shop Page</a>
                                                        <ul class="sub-menu">
                                                            <li><a href="shop1.html">Shop 01</a></li>
                                                            <li><a href="shop2.html">Shop 02</a></li>
                                                            <li><a href="shop3.html">Shop 03</a></li>
                                                            <li><a href="single-product.html">Shop Details</a></li>
                                                        </ul>
                                                    </li>
                                                    <li class="menu-item-has-children">
                                                        <a href="javascript:void(0);">Team</a>
                                                        <ul class="sub-menu">
                                                            <li><a href="team.html">Our Team</a></li>
                                                            <li><a href="single-team.html">Team Details</a></li>
                                                        </ul>
                                                    </li>
                                                    <li><a href="/gallery">Gallery</a></li>
                                                    <li><a href="/companyhistory">Company History</a></li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </nav>
                                    <div class="accessNav">
                                        <a class="phoneBtn" href="tel:+01682648101"><i class="digitos-telephone-call"></i>+ 01682648101</a>
                                        <a class="cartBtn" href="javascript:void(0);"><i class="digitos-shopping-bag"></i><span>0</span></a>
                                        <a class="dgBtn_two" href="contact.html"><span><i class="digitos-enter"></i>Get Quote</span></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
            </div>
        );
    }
}

export default Header;
