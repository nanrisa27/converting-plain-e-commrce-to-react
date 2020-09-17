import React from 'react';
import { Link } from 'react-router-dom';

const AdvantagesHomepage = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg">
                <div className="container"><Link to="index.html" className="navbar-brand home"><img src="img/logo.png" alt="Obaju logo" className="d-none d-md-inline-block" /><img src="img/logo-small.png" alt="Obaju logo" className="d-inline-block d-md-none" /><span className="sr-only">Obaju - go to homepage</span></Link>
                    <div className="navbar-buttons">
                        <button type="button" data-toggle="collapse" data-target="#navigation" className="btn btn-outline-secondary navbar-toggler"><span className="sr-only">Toggle navigation</span><i className="fa fa-align-justify"></i></button>
                        <button type="button" data-toggle="collapse" data-target="#search" className="btn btn-outline-secondary navbar-toggler"><span className="sr-only">Toggle search</span><i className="fa fa-search"></i></button><Link to="basket.html" className="btn btn-outline-secondary navbar-toggler"><i className="fa fa-shopping-cart"></i></Link>
                    </div>
                    <div id="navigation" className="collapse navbar-collapse">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item"><Link to="#" className="nav-link active">Home</Link></li>
                            <li className="nav-item dropdown menu-large"><Link to="#" data-toggle="dropdown" data-hover="dropdown" data-delay="200" className="dropdown-toggle nav-link">Men<b className="caret"></b></Link>
                                <ul className="dropdown-menu megamenu">
                                    <li>
                                        <div className="row">
                                            <div className="col-md-6 col-lg-3">
                                                <h5>Clothing</h5>
                                                <ul className="list-unstyled mb-3">
                                                    <li className="nav-item"><Link to="category.html" className="nav-link">T-shirts</Link></li>
                                                    <li className="nav-item"><Link to="category.html" className="nav-link">Shirts</Link></li>
                                                    <li className="nav-item"><Link to="category.html" className="nav-link">Pants</Link></li>
                                                    <li className="nav-item"><Link to="category.html" className="nav-link">Accessories</Link></li>
                                                </ul>
                                            </div>
                                            <div className="col-md-6 col-lg-3">
                                                <h5>Shoes</h5>
                                                <ul className="list-unstyled mb-3">
                                                    <li className="nav-item"><Link to="category.html" className="nav-link">Trainers</Link></li>
                                                    <li className="nav-item"><Link to="category.html" className="nav-link">Sandals</Link></li>
                                                    <li className="nav-item"><Link to="category.html" className="nav-link">Hiking shoes</Link></li>
                                                    <li className="nav-item"><Link to="category.html" className="nav-link">Casual</Link></li>
                                                </ul>
                                            </div>
                                            <div className="col-md-6 col-lg-3">
                                                <h5>Accessories</h5>
                                                <ul className="list-unstyled mb-3">
                                                    <li className="nav-item"><Link to="category.html" className="nav-link">Trainers</Link></li>
                                                    <li className="nav-item"><Link to="category.html" className="nav-link">Sandals</Link></li>
                                                    <li className="nav-item"><Link to="category.html" className="nav-link">Hiking shoes</Link></li>
                                                    <li className="nav-item"><Link to="category.html" className="nav-link">Casual</Link></li>
                                                    <li className="nav-item"><Link to="category.html" className="nav-link">Hiking shoes</Link></li>
                                                    <li className="nav-item"><Link to="category.html" className="nav-link">Casual</Link></li>
                                                </ul>
                                            </div>
                                            <div className="col-md-6 col-lg-3">
                                                <h5>Featured</h5>
                                                <ul className="list-unstyled mb-3">
                                                    <li className="nav-item"><Link to="category.html" className="nav-link">Trainers</Link></li>
                                                    <li className="nav-item"><Link to="category.html" className="nav-link">Sandals</Link></li>
                                                    <li className="nav-item"><Link to="category.html" className="nav-link">Hiking shoes</Link></li>
                                                </ul>
                                                <h5>Looks and trends</h5>
                                                <ul className="list-unstyled mb-3">
                                                    <li className="nav-item"><Link to="category.html" className="nav-link">Trainers</Link></li>
                                                    <li className="nav-item"><Link to="category.html" className="nav-link">Sandals</Link></li>
                                                    <li className="nav-item"><Link to="category.html" className="nav-link">Hiking shoes</Link></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown menu-large"><Link to="#" data-toggle="dropdown" data-hover="dropdown" data-delay="200" className="dropdown-toggle nav-link">Ladies<b className="caret"></b></Link>
                                <ul className="dropdown-menu megamenu">
                                    <li>
                                        <div className="row">
                                            <div className="col-md-6 col-lg-3">
                                                <h5>Clothing</h5>
                                                <ul className="list-unstyled mb-3">
                                                    <li className="nav-item"><Link to="category.html" className="nav-link">T-shirts</Link></li>
                                                    <li className="nav-item"><Link to="category.html" className="nav-link">Shirts</Link></li>
                                                    <li className="nav-item"><Link to="category.html" className="nav-link">Pants</Link></li>
                                                    <li className="nav-item"><Link to="category.html" className="nav-link">Accessories</Link></li>
                                                </ul>
                                            </div>
                                            <div className="col-md-6 col-lg-3">
                                                <h5>Shoes</h5>
                                                <ul className="list-unstyled mb-3">
                                                    <li className="nav-item"><Link to="category.html" className="nav-link">Trainers</Link></li>
                                                    <li className="nav-item"><Link to="category.html" className="nav-link">Sandals</Link></li>
                                                    <li className="nav-item"><Link to="category.html" className="nav-link">Hiking shoes</Link></li>
                                                    <li className="nav-item"><Link to="category.html" className="nav-link">Casual</Link></li>
                                                </ul>
                                            </div>
                                            <div className="col-md-6 col-lg-3">
                                                <h5>Accessories</h5>
                                                <ul className="list-unstyled mb-3">
                                                    <li className="nav-item"><Link to="category.html" className="nav-link">Trainers</Link></li>
                                                    <li className="nav-item"><Link to="category.html" className="nav-link">Sandals</Link></li>
                                                    <li className="nav-item"><Link to="category.html" className="nav-link">Hiking shoes</Link></li>
                                                    <li className="nav-item"><Link to="category.html" className="nav-link">Casual</Link></li>
                                                    <li className="nav-item"><Link to="category.html" className="nav-link">Hiking shoes</Link></li>
                                                    <li className="nav-item"><Link to="category.html" className="nav-link">Casual</Link></li>
                                                </ul>
                                                <h5>Looks and trends</h5>
                                                <ul className="list-unstyled mb-3">
                                                    <li className="nav-item"><Link to="category.html" className="nav-link">Trainers</Link></li>
                                                    <li className="nav-item"><Link to="category.html" className="nav-link">Sandals</Link></li>
                                                    <li className="nav-item"><Link to="category.html" className="nav-link">Hiking shoes</Link></li>
                                                </ul>
                                            </div>
                                            <div className="col-md-6 col-lg-3">
                                                <div className="banner"><Link to="#"><img src="img/banner.jpg" alt="" className="img img-fluid" /></Link></div>
                                                <div className="banner"><Link to="#"><img src="img/banner2.jpg" alt="" className="img img-fluid" /></Link></div>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown menu-large"><Link to="#" data-toggle="dropdown" data-hover="dropdown" data-delay="200" className="dropdown-toggle nav-link">Template<b className="caret"></b></Link>
                                <ul className="dropdown-menu megamenu">
                                    <li>
                                        <div className="row">
                                            <div className="col-md-6 col-lg-3">
                                                <h5>Shop</h5>
                                                <ul className="list-unstyled mb-3">
                                                    <li className="nav-item"><Link to="index.html" className="nav-link">Homepage</Link></li>
                                                    <li className="nav-item"><Link to="category.html" className="nav-link">Category - sidebar left</Link></li>
                                                    <li className="nav-item"><Link to="category-right.html" className="nav-link">Category - sidebar right</Link></li>
                                                    <li className="nav-item"><Link to="category-full.html" className="nav-link">Category - full width</Link></li>
                                                    <li className="nav-item"><Link to="detail.html" className="nav-link">Product detail</Link></li>
                                                </ul>
                                            </div>
                                            <div className="col-md-6 col-lg-3">
                                                <h5>User</h5>
                                                <ul className="list-unstyled mb-3">
                                                    <li className="nav-item"><Link to="register.html" className="nav-link">Register / login</Link></li>
                                                    <li className="nav-item"><Link to="customer-orders.html" className="nav-link">Orders history</Link></li>
                                                    <li className="nav-item"><Link to="customer-order.html" className="nav-link">Order history detail</Link></li>
                                                    <li className="nav-item"><Link to="customer-wishlist.html" className="nav-link">Wishlist</Link></li>
                                                    <li className="nav-item"><Link to="customer-account.html" className="nav-link">Customer account / change password</Link></li>
                                                </ul>
                                            </div>
                                            <div className="col-md-6 col-lg-3">
                                                <h5>Order process</h5>
                                                <ul className="list-unstyled mb-3">
                                                    <li className="nav-item"><Link to="basket.html" className="nav-link">Shopping cart</Link></li>
                                                    <li className="nav-item"><Link to="checkout1.html" className="nav-link">Checkout - step 1</Link></li>
                                                    <li className="nav-item"><Link to="checkout2.html" className="nav-link">Checkout - step 2</Link></li>
                                                    <li className="nav-item"><Link to="checkout3.html" className="nav-link">Checkout - step 3</Link></li>
                                                    <li className="nav-item"><Link to="checkout4.html" className="nav-link">Checkout - step 4</Link></li>
                                                </ul>
                                            </div>
                                            <div className="col-md-6 col-lg-3">
                                                <h5>Pages and blog</h5>
                                                <ul className="list-unstyled mb-3">
                                                    <li className="nav-item"><Link to="blog.html" className="nav-link">Blog listing</Link></li>
                                                    <li className="nav-item"><Link to="post.html" className="nav-link">Blog Post</Link></li>
                                                    <li className="nav-item"><Link to="faq.html" className="nav-link">FAQ</Link></li>
                                                    <li className="nav-item"><Link to="text.html" className="nav-link">Text page</Link></li>
                                                    <li className="nav-item"><Link to="text-right.html" className="nav-link">Text page - right sidebar</Link></li>
                                                    <li className="nav-item"><Link to="404.html" className="nav-link">404 page</Link></li>
                                                    <li className="nav-item"><Link to="contact.html" className="nav-link">Contact</Link></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                        <div className="navbar-buttons d-flex justify-content-end">

                            <div id="search-not-mobile" className="navbar-collapse collapse"></div><Link data-toggle="collapse" to="#search" className="btn navbar-btn btn-primary d-none d-lg-inline-block"><span className="sr-only">Toggle search</span><i className="fa fa-search"></i></Link>
                            <div id="basket-overview" className="navbar-collapse collapse d-none d-lg-block"><Link to="basket.html" className="btn btn-primary navbar-btn"><i className="fa fa-shopping-cart"></i><span>3 items in cart</span></Link></div>
                        </div>
                    </div>
                </div>
            </nav>

            <div id="search" className="collapse">
                <div className="container">
                    <form role="search" className="ml-auto">
                        <div className="input-group">
                            <input type="text" placeholder="Search" className="form-control" />
                            <div className="input-group-append">
                                <button type="button" className="btn btn-primary"><i className="fa fa-search"></i></button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>


            <div id="all">
                <div id="content">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div id="main-slider" className="owl-carousel owl-theme">
                                    <div className="item"><img src="img/main-slider1.jpg" alt="" className="img-fluid" /></div>
                                    <div className="item"><img src="img/main-slider2.jpg" alt="" className="img-fluid" /></div>
                                    <div className="item"><img src="img/main-slider3.jpg" alt="" className="img-fluid" /></div>
                                    <div className="item"><img src="img/main-slider4.jpg" alt="" className="img-fluid" /></div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AdvantagesHomepage;
