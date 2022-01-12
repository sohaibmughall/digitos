import React, { Component } from 'react'

export default class Shop2 extends Component {
    render() {
        return (
            <div>
                <section class="pageBanner" style={{backgroundimage: "url(assets/images/bg/banner.png);"}}>
            <div class="vmiddle">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-8 offset-lg-2 text-center">
                            <h2 class="banner-title">Shop Page</h2>
                            <p class="banner-desc">Our versatile team is built of designers, developers and digital marketers who all bring unique experience</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="shopPageSection">
            <div class="container">
                <div class="row">
                    <div class="col-lg-3">
                        <div class="sidebar lsb">
                            <aside id="woocommerce_product_search-2" class="widget woocommerce widget_product_search">
                                <h3 class="widget_title">Search Product</h3>
                                <form role="search" method="get" class="search_form" action="#">
                                    <input type="search" class="search-field" placeholder="Search…" value="" name="s"/>
                                    <button type="submit"><i class="digitos-loupe"></i></button>
                                </form>
                            </aside>
                            <aside id="woocommerce_price_filter-2" class="widget woocommerce widget_price_filter">
                                <h3 class="widget_title">Filter by price</h3>
                                <div class="price_slider_wrapper">
                                    <form action="#" method="get" class="clearfix">
                                        <div id="slider-range"></div>
                                        <div class="price_wrap">
                                            <button type="submit" class="button">Filter</button>
                                            <label>Price:</label>
                                            <p id="amount"></p>
                                        </div>
                                    </form>
                                </div>
                            </aside>
                            <aside id="woocommerce_product_categories-2" class="widget woocommerce widget_product_categories">
                                <h3 class="widget_title">Product categories</h3>
                                <ul class="product-categories">
                                    <li><a href="shop1.html">Clothing</a> <span class="count">(11)</span>
                                    <ul class="children">
                                        <li><a href="shop1.html">Accessories</a> <span class="count">(4)</span></li>
                                        <li class="cat-item cat-item-37"><a href="shop1.html">Hoodies</a> <span class="count">(3)</span></li>
                                        <li class="cat-item cat-item-36"><a href="shop1.html">Tshirts</a> <span class="count">(4)</span></li>
                                    </ul>
                                </li>
                                <li class="cat-item cat-item-40"><a href="shop1.html">Decor</a> <span class="count">(0)</span></li>
                                <li class="cat-item cat-item-39"><a href="shop1.html">Music</a> <span class="count">(2)</span></li>
                                <li class="cat-item cat-item-34"><a href="shop1.html">Uncategorized</a> <span class="count">(0)</span></li>
                            </ul>
                        </aside>
                        <aside id="woocommerce_product_tag_cloud-2" class="widget woocommerce widget_product_tag_cloud">
                            <h3 class="widget_title">Product tags</h3>
                            <div class="tagcloud">
                                <a href="shop1.html">Bel</a>
                                <a href="shop1.html">Belt</a>
                                <a href="shop1.html">Cap</a>
                                <a href="shop1.html">Consulting</a>
                                <a href="shop1.html">Decor</a>
                                <a href="shop1.html">Fashion</a>
                                <a href="shop1.html">Hoody</a>
                                <a href="shop1.html">Music</a>
                                <a href="shop1.html">Shirt</a>
                            </div>
                        </aside>
                    </div>
                </div>
                <div class="col-lg-9">
                    <div class="row shop_sort_count_row">
                        <div class="col-lg-6 col-md-6">
                            <p class="woocommerce-result-count">
                            Showing 01–09 of 13 results</p>
                        </div>
                        <div class="col-lg-6 col-md-6 text-right">
                            <form class="woocommerce-ordering" method="get">
                                <select name="orderby" class="orderby" aria-label="Shop order">
                                    <option value="menu_order" selected="selected">Default sorting</option>
                                    <option value="popularity">Sort by popularity</option>
                                    <option value="rating">Sort by average rating</option>
                                    <option value="date">Sort by latest</option>
                                    <option value="price">Sort by price: low to high</option>
                                    <option value="price-desc">Sort by price: high to low</option>
                                </select>
                                <input type="hidden" name="paged" value="1"/>
                            </form>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-6 col-lg-4">
                            <div class="loop_product">
                                <div class="lp_thumb">
                                    <img src="assets/images/shop/1.jpg" alt="Singular"/>
                                    <div class="pt_labels"><span class="pt_sale">Sale</span></div>
                                    <div class="lp_thumb_hover">
                                        <a href="/single-product" class="button add_to_cart_button"><i class="twi-shopping-cart2"></i></a>
                                        <a href="/single-product"><i class="twi-eye-slash2"></i></a>
                                    </div>
                                </div>
                                <div class="lp_details">
                                    <p class="lp_cate"><a href="shop1.html">Music</a></p>
                                    <h4><a href="/single-product">Singular</a></h4>
                                    <div class="star-rating" role="img" aria-label="Rated 5.00 out of 5"></div>
                                    <div class="loop_price">
                                        <span class="price"><del aria-hidden="true"><span class="woocommerce-Price-amount amount"><bdi><span class="woocommerce-Price-currencySymbol">£</span>3.00</bdi></span></del> <ins><span class="woocommerce-Price-amount amount"><bdi><span class="woocommerce-Price-currencySymbol">£</span>2.00</bdi></span></ins></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6 col-lg-4">
                            <div class="loop_product">
                                <div class="lp_thumb">
                                    <img src="assets/images/shop/10.jpg" alt="Sunglasses"/>
                                    <div class="pt_labels"><span class="pt_featured">Featured</span></div>
                                    <div class="lp_thumb_hover">
                                        <a href="/single-product" class="button add_to_cart_button"><i class="twi-shopping-cart2"></i></a>
                                        <a href="/single-product"><i class="twi-eye-slash2"></i></a>
                                    </div>
                                </div>
                                <div class="lp_details">
                                    <p class="lp_cate"><a href="shop1.html">Accessories</a></p>
                                    <h4><a href="/single-product">Sunglasses</a></h4>
                                    <div class="star-rating" role="img" aria-label="Rated 5.00 out of 5"></div>
                                    <div class="loop_price">
                                        <span class="price"><span class="woocommerce-Price-amount amount"><bdi><span class="woocommerce-Price-currencySymbol">£</span>90.00</bdi></span></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6 col-lg-4">
                            <div class="loop_product">
                                <div class="lp_thumb">
                                    <img src="assets/images/shop/2.jpg" alt="Beanie"/>
                                    <div class="lp_thumb_hover">
                                        <a href="/single-product" class="button add_to_cart_button"><i class="twi-shopping-cart2"></i></a>
                                        <a href="/single-product"><i class="twi-eye-slash2"></i></a>
                                    </div>
                                </div>
                                <div class="lp_details">
                                    <p class="lp_cate"><a href="shop1.html">Clothing</a></p>
                                    <h4><a href="/single-product">Beanie</a></h4>
                                    <div class="star-rating" role="img" aria-label="Rated 5.00 out of 5"></div>
                                    <div class="loop_price">
                                        <span class="price"><del aria-hidden="true"><span class="woocommerce-Price-amount amount"><bdi><span class="woocommerce-Price-currencySymbol">£</span>20.00</bdi></span></del> <ins><span class="woocommerce-Price-amount amount"><bdi><span class="woocommerce-Price-currencySymbol">£</span>18.00</bdi></span></ins></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6 col-lg-4">
                            <div class="loop_product">
                                <div class="lp_thumb">
                                    <img src="assets/images/shop/3.jpg" alt="Belt"/>
                                    <div class="pt_labels">
                                        <span class="pt_sale">Sale</span><div class="clearfix"></div></div>
                                        <div class="lp_thumb_hover">
                                            <a href="/single-product" class="button add_to_cart_button"><i class="twi-shopping-cart2"></i></a>
                                            <a href="/single-product"><i class="twi-eye-slash2"></i></a>
                                        </div>
                                    </div>
                                    <div class="lp_details">
                                        <p class="lp_cate"><a href="shop1.html">Accessories</a></p>
                                        <h4><a href="/single-product">Belt</a></h4>
                                        <div class="star-rating" role="img" aria-label="Rated 5.00 out of 5"></div>
                                        <div class="loop_price">
                                            <span class="price"><del aria-hidden="true"><span class="woocommerce-Price-amount amount"><bdi><span class="woocommerce-Price-currencySymbol">£</span>65.00</bdi></span></del> <ins><span class="woocommerce-Price-amount amount"><bdi><span class="woocommerce-Price-currencySymbol">£</span>55.00</bdi></span></ins></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6 col-lg-4">
                                <div class="loop_product">
                                    <div class="lp_thumb">
                                        <img src="assets/images/shop/4.jpg" alt="Cap"/>
                                        <div class="pt_labels">
                                            <span class="pt_sale">Sale</span><div class="clearfix"></div></div>
                                            <div class="lp_thumb_hover">
                                                <a href="/single-product" class="button add_to_cart_button"><i class="twi-shopping-cart2"></i></a>
                                                <a href="/single-product"><i class="twi-eye-slash2"></i></a>
                                            </div>
                                        </div>
                                        <div class="lp_details">
                                            <p class="lp_cate"><a href="shop1.html">Music</a></p>
                                            <h4><a href="/single-product">Cap</a></h4>
                                            <div class="star-rating" role="img" aria-label="Rated 5.00 out of 5"></div>
                                            <div class="loop_price">
                                                <span class="price"/><ins/><span class="woocommerce-Price-amount amount"><bdi><span class="woocommerce-Price-currencySymbol">£</span>28.00</bdi></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-6 col-lg-4">
                                    <div class="loop_product">
                                        <div class="lp_thumb">
                                            <img src="assets/images/shop/5.jpg" alt="Hoodie"/>
                                            <div class="lp_thumb_hover">
                                                <a href="/single-product" class="button add_to_cart_button"><i class="twi-shopping-cart2"></i></a>
                                                <a href="/single-product"><i class="twi-eye-slash2"></i></a>
                                            </div>
                                        </div>
                                        <div class="lp_details">
                                            <p class="lp_cate"><a href="shop1.html">Hoodie</a></p>
                                            <h4><a href="/single-product">Hoodie</a></h4>
                                            <div class="star-rating" role="img" aria-label="Rated 5.00 out of 5"></div>
                                            <div class="loop_price">
                                                <span class="price"><del aria-hidden="true"><span class="woocommerce-Price-amount amount"><bdi><span class="woocommerce-Price-currencySymbol">£</span>3.00</bdi></span></del> <ins><span class="woocommerce-Price-amount amount"><bdi><span class="woocommerce-Price-currencySymbol">£</span>2.00</bdi></span></ins></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-6 col-lg-4">
                                    <div class="loop_product">
                                        <div class="lp_thumb">
                                            <img src="assets/images/shop/6.jpg" alt="Singular"/>
                                            <div class="pt_labels"><span class="pt_featured">Featured</span></div>
                                            <div class="lp_thumb_hover">
                                                <a href="/single-product" class="button add_to_cart_button"><i class="twi-shopping-cart2"></i></a>
                                                <a href="/single-product"><i class="twi-eye-slash2"></i></a>
                                            </div>
                                        </div>
                                        <div class="lp_details">
                                            <p class="lp_cate"><a href="shop1.html">Hoodie</a></p>
                                            <h4><a href="/single-product">Hoodie with Logo</a></h4>
                                            <div class="star-rating" role="img" aria-label="Rated 5.00 out of 5"></div>
                                            <div class="loop_price">
                                                <span class="price"><del aria-hidden="true"><span class="woocommerce-Price-amount amount"><bdi><span class="woocommerce-Price-currencySymbol">£</span>63.00</bdi></span></del> <ins><span class="woocommerce-Price-amount amount"><bdi><span class="woocommerce-Price-currencySymbol">£</span>52.00</bdi></span></ins></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-6 col-lg-4">
                                    <div class="loop_product">
                                        <div class="lp_thumb">
                                            <img src="assets/images/shop/7.jpg" alt="Hoodie with Zipper"/>
                                            <div class="pt_labels"><span class="pt_sale">Sale</span></div>
                                            <div class="lp_thumb_hover">
                                                <a href="/single-product" class="button add_to_cart_button"><i class="twi-shopping-cart2"></i></a>
                                                <a href="/single-product"><i class="twi-eye-slash2"></i></a>
                                            </div>
                                        </div>
                                        <div class="lp_details">
                                            <p class="lp_cate"><a href="shop1.html">Decor</a></p>
                                            <h4><a href="/single-product">Hoodie with Zipper</a></h4>
                                            <div class="star-rating" role="img" aria-label="Rated 5.00 out of 5"></div>
                                            <div class="loop_price">
                                                <span class="price"><del aria-hidden="true"><span class="woocommerce-Price-amount amount"><bdi><span class="woocommerce-Price-currencySymbol">£</span>3.00</bdi></span></del> <ins><span class="woocommerce-Price-amount amount"><bdi><span class="woocommerce-Price-currencySymbol">£</span>2.00</bdi></span></ins></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-6 col-lg-4">
                                    <div class="loop_product">
                                        <div class="lp_thumb">
                                            <img src="assets/images/shop/8.jpg" alt="Long Sleeve Tee"/>
                                            <div class="lp_thumb_hover">
                                                <a href="/single-product" class="button add_to_cart_button"><i class="twi-shopping-cart2"></i></a>
                                                <a href="/single-product"><i class="twi-eye-slash2"></i></a>
                                            </div>
                                        </div>
                                        <div class="lp_details">
                                            <p class="lp_cate"><a href="shop1.html">T-shirt</a></p>
                                            <h4><a href="/single-product">Long Sleeve Tee</a></h4>
                                            <div class="star-rating" role="img" aria-label="Rated 5.00 out of 5"></div>
                                            <div class="loop_price">
                                                <span class="price"/><span class="woocommerce-Price-amount amount"><bdi><span class="woocommerce-Price-currencySymbol">£</span>25.00</bdi></span>
                                            </div>
                                        </div>
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
