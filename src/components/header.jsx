import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <div>
                <header class="header01 centerMenu isSticky">
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
                                                    <li><a href="service.html">Service Page</a></li>
                                                    <li><a href="single-service.html">Service Details</a></li>
                                                </ul>
                                            </li>
                                            <li class="menu-item-has-children">
                                                <a href="javascript:void(0);">Portfolio</a>
                                                <ul class="sub-menu">
                                                    <li><a href="folio1.html">Portfolio 01</a></li>
                                                    <li><a href="folio2.html">Portfolio 02</a></li>
                                                    <li><a href="single-folio.html">Portfolio Details</a></li>
                                                </ul>
                                            </li>
                                            <li class="menu-item-has-children">
                                                <a href="javascript:void(0);">blogs</a>
                                                <ul class="sub-menu">
                                                    <li class="menu-item-has-children">
                                                        <a href="javascript:void(0);">Blog List Views</a>
                                                        <ul class="sub-menu">
                                                            <li><a href="blog2.html">Left Sidebar</a></li>
                                                            <li><a href="blog1.html">Right Sidebar</a></li>
                                                            <li><a href="blog3.html">Without Sidebar</a></li>
                                                        </ul>
                                                    </li>
                                                    <li class="menu-item-has-children">
                                                        <a href="javascript:void(0);">Blog Grid Views</a>
                                                        <ul class="sub-menu">
                                                            <li><a href="blog5.html">Left Sidebar</a></li>
                                                            <li><a href="blog4.html">Right Sidebar</a></li>
                                                            <li><a href="blog6.html">Without Sidebar</a></li>
                                                        </ul>
                                                    </li>
                                                    <li><a href="single-blog.html">Blog Details</a></li>
                                                </ul>
                                            </li>
                                            <li class="menu-item-has-children">
                                                <a href="javascript:void(0);">pages</a>
                                                <ul class="sub-menu">
                                                    <li><a href="about.html">About 01</a></li>
                                                    <li><a href="about2.html">About 02</a></li>
                                                    <li><a href="contact.html">Contact</a></li>
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
                                                    <li><a href="gallery.html">Gallery</a></li>
                                                    <li><a href="company.html">Company History</a></li>
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
