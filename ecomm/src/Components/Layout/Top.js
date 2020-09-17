import React from 'react'
import { Link } from 'react-router-dom'


function Top() {
    return (
        <div classNameName="container">
            <div id="top">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 offer mb-3 mb-lg-0"><Link to="#" className="btn btn-success btn-sm">Offer of the day</Link><Link to="#" className="ml-1">Get flat 35% off on orders over $50!</Link></div>
                        <div className="col-lg-6 text-center text-lg-right">
                            <ul className="menu list-inline mb-0">
                                <li className="list-inline-item"><Link to="/Login" data-toggle="modal" data-target="#login-modal">Login</Link></li>
                                <li className="list-inline-item"><Link to="/Register">Register</Link></li>
                                <li className="list-inline-item"><Link to="/Contact">Contact</Link></li>
                                <li className="list-inline-item"><Link to="/RecentlyViewed">Recently viewed</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div id="login-modal" tabindex="-1" role="dialog" aria-labelledby="Login" aria-hidden="true" className="modal fade">
                    <div className="modal-dialog modal-sm">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Customer login</h5>
                                <button type="button" data-dismiss="modal" aria-label="Close" className="close"><span aria-hidden="true">×</span></button>
                            </div>
                            <div className="modal-body">
                                <form action="customer-orders.html" method="post">
                                    <div className="form-group">
                                        <input id="email-modal" type="text" placeholder="email" className="form-control" />
                                    </div>
                                    <div className="form-group">
                                        <input id="password-modal" type="password" placeholder="password" className="form-control" />
                                    </div>
                                    <p className="text-center">
                                        <button className="btn btn-primary"><i className="fa fa-sign-in"></i> Log in</button>
                                    </p>
                                </form>
                                <p className="text-center text-muted">Not registered yet?</p>
                                <p className="text-center text-muted"><Link to="register.html"><strong>Register now</strong></Link>! It is easy and done in 1 minute and gives you access to special discounts and much more!</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Top
