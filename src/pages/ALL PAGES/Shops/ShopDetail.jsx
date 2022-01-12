import React, { Component } from 'react'

export default class ShopDetail extends Component {
    render() {
        return (
            <>
                <section class="pageBanner" style={{ backgroundImage: "url(assets/images/bg/banner.png)" }}>
                    <div class="vmiddle">
                        <div class="container">
                            <div class="row">
                                <div class="col-lg-8 offset-lg-2 text-center">
                                    <h2 class="banner-title">Single Product</h2>
                                    <p class="banner-desc">Our versatile team is built of designers, developers and digital marketers who all bring unique experience</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section class="shop_details_page_section">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-7 col-lg-6">
                                <div class="product_gallery">
                                    <ul id="product_gallery" class="gallery_sliders cS-hidden">
                                        <li data-thumb="assets/images/shop/g1.jpg">
                                            <div class="pg_item"><img src="assets/images/shop/g1.jpg" alt="" /></div>
                                        </li>
                                        <li data-thumb="assets/images/shop/g2.jpg">
                                            <div class="pg_item"><img src="assets/images/shop/g2.jpg" alt="" /></div>
                                        </li>
                                        <li data-thumb="assets/images/shop/g3.jpg">
                                            <div class="pg_item"><img src="assets/images/shop/g3.jpg" alt="" /></div>
                                        </li>
                                        <li data-thumb="assets/images/shop/g4.jpg">
                                            <div class="pg_item"><img src="assets/images/shop/g4.jpg" alt="" /></div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-md-5 col-lg-6">
                                <div class="product_details">
                                    <div class="pd_cates"><a href="shop1.html">T-Shirts</a></div>
                                    <h3>Hoodie with Logo</h3>
                                    <div class="pd_price 4.50">
                                        <p class="price"><span class="woocommerce-Price-amount amount"><bdi><span class="woocommerce-Price-currencySymbol">£</span>20.00</bdi></span></p>
                                    </div>
                                    <div class="woocommerce-product-rating">
                                        <div class="star-rating" role="img" aria-label="Rated 4.50 out of 5"></div><a href="#reviews" class="woocommerce-review-link" rel="nofollow">(<span class="count">2</span> customer reviews)</a>
                                    </div>
                                    <div class="pd_excrpt">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut ullamcorper leo, eget euismod orci. Cum sociis natoque penatibus et magnis dis parturient montes.</p>
                                    </div>
                                    <div class="pd_button_area clearfix">
                                        <div class="quantity pdq_main">
                                            <span class="minus"><i class="twi-caret-left2"></i></span>
                                            <input type="number" class="carqty input-text qty text" step="1" min="1" max="" name="quantity" value="1" title="Qty" size="4" placeholder="" inputmode="numeric" />
                                            <span class="plus"><i class="twi-caret-right2"></i></span>
                                        </div>
                                        <button type="submit" class="dgBtn">Add to cart</button>
                                    </div>
                                    <div class="productMetas">
                                        <div class="productMeta tagese">
                                            <span>Tags: </span><a href="shop1.html" rel="tag">Cap</a> / <a href="shop1.html" rel="tag">Long</a> / <a href="shop1.html" rel="tag">T-Shirt</a>
                                        </div>
                                        <div class="productMeta"><span>SKU: </span>woo-long-sleeve-tee</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row mt134">
                            <div class="col-lg-12">
                                <ul class="nav nav-tabs product_details_tab" id="product_details_tab" role="tablist">
                                    <li class="nav-item" role="presentation">
                                        <a class="active" id="description-tab" data-toggle="tab" href="#description" role="tab" aria-controls="description" aria-selected="true">Description</a>
                                    </li>
                                    <li class="nav-item" role="presentation">
                                        <a id="additionalinfo-tab" data-toggle="tab" href="#additionalinfo" role="tab" aria-controls="additionalinfo" aria-selected="false">Additional Information</a>
                                    </li>
                                    <li class="nav-item" role="presentation">
                                        <a id="reviews-tab" data-toggle="tab" href="#reviews" role="tab" aria-controls="reviews" aria-selected="false">Review (2)</a>
                                    </li>
                                </ul>
                                <div class="tab-content" id="pdt_content">
                                    <div class="tab-pane fade show active" id="description" role="tabpanel" aria-labelledby="description-tab">
                                        <div class="pdtc_inner">
                                            <h3 class="pdtc_title">Description</h3>
                                            <div class="pdtci_content pdtci_content_description">
                                                <p>
                                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                                                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
                                                    sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut
                                                    perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque
                                                    ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem
                                                    quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi
                                                    nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non
                                                    numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="tab-pane fade" id="additionalinfo" role="tabpanel" aria-labelledby="additionalinfo-tab">
                                        <div class="pdtc_inner">
                                            <h3 class="pdtc_title">Additional Information</h3>
                                            <div class="pdtci_content">
                                                <table>
                                                    <tbody>
                                                        <tr>
                                                            <th>Weight:</th>
                                                            <td>0.15 kg</td>
                                                        </tr>
                                                        <tr>
                                                            <th>Dim:</th>
                                                            <td>15 x 15 x 10 cm</td>
                                                        </tr>
                                                        <tr>
                                                            <th>Color:</th>
                                                            <td>Black, Green, Mixed, Red, White</td>
                                                        </tr>
                                                        <tr>
                                                            <th>Size</th>
                                                            <td>Extra Large, Extra Small, Medium, Small</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="tab-pane fade" id="reviews" role="tabpanel" aria-labelledby="reviews-tab">
                                        <div class="pdtc_inner">
                                            <h3 class="pdtc_title">2 Reviews</h3>
                                            <div class="pdtci_content">
                                                <ol class="product_reviews_list">
                                                    <li>
                                                        <div class="single_comment">
                                                            <img src="assets/images/blog/c1.jpg" alt="" />
                                                            <h3 class="cm_author"><a href="#">Mark Smith</a></h3>
                                                            <span class="cm_date">3 weeks</span>
                                                            <div class="sc_content">
                                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sagittis orci ac odio dictum tincidunt. Donec ut metus leo. Class aptent taciti sociosqu ad litora torquent per conubia nostra.</p>
                                                            </div>
                                                            <div class="star-rating" role="img" aria-label="Rated 4.50 out of 5"></div>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div class="single_comment">
                                                            <img src="assets/images/blog/c1.jpg" alt="" />
                                                            <h3 class="cm_author"><a href="#">Mark Smith</a></h3>
                                                            <span class="cm_date">4 weeks</span>
                                                            <div class="sc_content">
                                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sagittis orci ac odio dictum tincidunt. Donec ut metus leo. Class aptent taciti sociosqu ad litora torquent per conubia nostra.</p>
                                                            </div>
                                                            <div class="star-rating" role="img" aria-label="Rated 4.50 out of 5"></div>
                                                        </div>
                                                    </li>
                                                </ol>
                                                <div class="commentForm product_comment_form">
                                                    <h3 class="pdtc_title">Add a Review</h3>
                                                    <form method="post" action="#" class="row">
                                                        <div class="col-md-12">
                                                            <textarea name="comment" placeholder="Comment"></textarea>
                                                        </div>
                                                        <div class="col-md-6 clearfix">
                                                            <input type="text" placeholder="Your Name" name="name" />
                                                        </div>
                                                        <div class="col-md-6 clearfix">
                                                            <input type="email" placeholder="Your Email" name="email" />
                                                        </div>
                                                        <div class="col-md-12">
                                                            <button type="submit" name="submit" class="dgBtn_two"><span>Submit Review</span></button>
                                                        </div>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        )
    }
}
