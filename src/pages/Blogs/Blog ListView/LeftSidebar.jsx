import React, { Component } from 'react'

export default class LeftSidebar extends Component {
    render() {
        return (
            <div>
                 <section class="pageBanner" >
            <div class="vmiddle">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-8 offset-lg-2 text-center">
                            <h2 class="banner-title">Blog Post</h2>
                            <p class="banner-desc">Our versatile team is built of designers, developers and digital marketers who all bring unique experience</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="blogPage">
            <div class="container">
                <div class="row">
                    <div class="col-lg-4">
                        <div class="sidebar lsb">
                            <aside class="widget widget_search">
                                <h3 class="widget_title">Search</h3>
                                <form method="get" action="#" class="search_form">
                                    <input type="search" name="s" id="s" placeholder="Search"/>
                                    <button type="submit"><i class="digitos-loupe"></i></button>
                                </form>
                            </aside>
                            <div class="widget widget_categories">
                                <h3 class="widget_title">Categories</h3>
                                <ul>
                                    <li><a href="/blogsdetail">Design</a>(10)</li>
                                    <li><a href="/blogsdetail">Digital Marketing</a>(01)</li>
                                    <li><a href="/blogsdetail">Development</a>(11)</li>
                                    <li><a href="/blogsdetail">Science</a>(02)</li>
                                    <li><a href="/blogsdetail">Other</a>(02)</li>
                                </ul>
                            </div>
                            <aside class="widget">
                                <h3 class="widget_title">Popular Posts</h3>
                                <div class="pp_post_item">
                                    <img src="assets/images/blog/t1.jpg" alt=""/>
                                    <span>25 July, 2021</span>
                                    <a href="/blogsdetail">How to Build a Strategy with Data</a>
                                </div>
                                <div class="pp_post_item">
                                    <img src="assets/images/blog/t2.jpg" alt=""/>
                                    <span>25 July, 2021</span>
                                    <a href="/blogsdetail">What is Conversion Rate Optimization?</a>
                                </div>
                                <div class="pp_post_item">
                                    <img src="assets/images/blog/t3.jpg" alt=""/>
                                    <span>25 July, 2021</span>
                                    <a href="/blogsdetail">Optimizing Paid Search and PPC | Terms</a>
                                </div>
                            </aside>
                            <div class="widget">
                                <h3 class="widget_title">Kayword</h3>
                                <div class="tagcloud">
                                    <a href="/blogsdetail">marketing</a>
                                    <a href="/blogsdetail">consulting</a>
                                    <a href="/blogsdetail">social</a>
                                    <a href="/blogsdetail">digital</a>
                                    <a href="/blogsdetail">business plan</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-8">
                        <div class="blogItem03">
                            <img src="assets/images/blog/7.jpg" alt=""/>
                            <div class="blogContent02">
                                <div class="bpmeta"><a href="/blogsdetail">25 July, 2021</a><a href="/blogsdetail">0 Comment</a></div>
                                <h3><a href="/blogsdetail">How to Create a Digital Marketing Plan for the second half of the year</a></h3>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna ad aliqua.
                                </p>
                                <a class="rm_more" href="/blogsdetail">Read More <i class="digitos-arrow"></i></a>
                            </div>
                        </div>
                        <div class="blogItem03">
                            <img src="assets/images/blog/8.jpg" alt=""/>
                            <div class="blogContent02">
                                <div class="bpmeta"><a href="/blogsdetail">25 July, 2021</a><a href="/blogsdetail">0 Comment</a></div>
                                <h3><a href="/blogsdetail">Are Pinterest Stories Right for Your Marketing Strategy?</a></h3>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna ad aliqua.
                                </p>
                                <a class="rm_more" href="/blogsdetail">Read More <i class="digitos-arrow"></i></a>
                            </div>
                        </div>
                        <div class="blogItem03">
                            <img src="assets/images/blog/9.jpg" alt=""/>
                            <div class="blogContent02">
                                <div class="bpmeta"><a href="/blogsdetail">25 July, 2021</a><a href="/blogsdetail">0 Comment</a></div>
                                <h3><a href="/blogsdetail">How to Optimize Your SEO Marketing Strategy Search Engine Optimization </a></h3>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna ad aliqua.
                                </p>
                                <a class="rm_more" href="/blogsdetail">Read More <i class="digitos-arrow"></i></a>
                            </div>
                        </div>
                        <div class="blogItem03">
                            <img src="assets/images/blog/10.jpg" alt=""/>
                            <div class="blogContent02">
                                <div class="bpmeta"><a href="/blogsdetail">25 July, 2021</a><a href="/blogsdetail">0 Comment</a></div>
                                <h3><a href="/blogsdetail">Optimizing Paid Search and PPC | Terms to Know</a></h3>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna ad aliqua.
                                </p>
                                <a class="rm_more" href="/blogsdetail">Read More <i class="digitos-arrow"></i></a>
                            </div>
                        </div>
                        <div class="blogItem03 noThumb">
                            <div class="blogContent02">
                                <div class="bpmeta"><a href="/blogsdetail">25 July, 2021</a><a href="/blogsdetail">0 Comment</a></div>
                                <h3><a href="/blogsdetail">Supercharge Your Link Building with a Digital PR Newsroom</a></h3>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna ad aliqua.
                                </p>
                                <a class="rm_more" href="/blogsdetail">Read More <i class="digitos-arrow"></i></a>
                            </div>
                        </div>
                        <div class="blogItem03">
                            <img src="assets/images/blog/11.jpg" alt=""/>
                            <div class="blogContent02">
                                <div class="bpmeta"><a href="/blogsdetail">25 July, 2021</a><a href="/blogsdetail">0 Comment</a></div>
                                <h3><a href="/blogsdetail">13 Takeaways from the State of Link Building Report 2021</a></h3>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna ad aliqua.
                                </p>
                                <a class="rm_more" href="/blogsdetail">Read More <i class="digitos-arrow"></i></a>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-lg-12">
                                <div class="digitos_pagination text-left">
                                    <span class="current">1</span>
                                    <a href="blog2.html">2</a>
                                    <a href="blog2.html">3</a>
                                    <a href="blog2.html">4</a>
                                    <a class="next" href="blog2.html">Next</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
            </div>
        )
    }
}
