import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
            <div>
                <footer class={window.location.pathname === "/hometwo" ? "footer_01 white" : "footer_01"}>
                    <div class="SecLayerimg move_anim">
                        <img src="assets/images/bg/s9.png" alt="" />
                    </div>
                    <div class="container">
                        <div class="row">
                            <div class="col-md-6 col-lg-3 col-xl-3">
                                <div class="widget">
                                    <div class="aboutWidget">
                                        <a href="index.html"><img src="assets/images/logo.png" alt="" /></a>
                                        <p>1864 Lancaster Court Road Poughkeepsie, CA 12601</p>
                                        <h4>Newsletter</h4>
                                        <form action="#" method="post">
                                            <div class="mc4wp-form-fields">
                                                <input type="email" name="EMAIL" placeholder="Email Address" />
                                                <button type="submit"><i class="digitos-arrow"></i></button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6 col-xl-3 offset-xl-1 col-lg-3 ">
                                <div class="widget">
                                    <h3 class="widget_title">About Company</h3>
                                    <ul>
                                        <li><a href="about.html">About</a></li>
                                        <li><a href="team.html">Team Member</a></li>
                                        <li><a href="folio1.html">Our Portfolio</a></li>
                                        <li><a href="blog1.html">News</a></li>
                                        <li><a href="company.html">Company History</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-md-6 col-lg-3 col-xl-2">
                                <div class="widget">
                                    <h3 class="widget_title">Our Services</h3>
                                    <ul>
                                        <li><a href="single-service.html">Digital Solution</a></li>
                                        <li><a href="single-service.html">Lifecycle marketing</a></li>
                                        <li><a href="single-service.html">Sass development</a></li>
                                        <li><a href="single-service.html">App development</a></li>
                                        <li><a href="single-service.html">Digital agency</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-md-6 col-lg-3 col-xl-3">
                                <div class="widget contact_widget">
                                    <h3 class="widget_title">Contact Us</h3>
                                    <div class="contact_info">
                                        <p><a href="mailto:#" class="__cf_email__" data-cfemail="">digitos@gmail.com</a></p>
                                        <p>+88 016 826 48 11</p>
                                        <div class="abSocial">
                                            <a href="javascript:void(0);"><i class="twi-facebook-f"></i></a>
                                            <a href="javascript:void(0);"><i class="twi-linkedin-in"></i></a>
                                            <a href="javascript:void(0);"><i class="twi-instagram"></i></a>
                                            <a href="javascript:void(0);"><i class="twi-twitter"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-12">
                                <div class="copyright">
                                    <p>Copyright 2021, All Right Reserved</p>
                                    <ul>
                                        <li><a href="javascript:void(0);">Privacy</a></li>
                                        <li><a href="javascript:void(0);">Policy</a></li>
                                        <li><a href="javascript:void(0);">Terms of Service</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        );
    }
}

export default Footer;
