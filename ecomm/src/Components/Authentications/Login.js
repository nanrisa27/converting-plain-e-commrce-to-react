import React from 'react';

const Login = () => {
    return (

        <div>
            <div className="col-lg-6">
                <div className="box">
                    <h1>Login</h1>
                    <p className="lead">Already our customer?</p>
                    <p className="text-muted">Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>
                    <hr />
                    <form action="customer-orders.html" method="post">
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input id="email" type="text" className="form-control" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input id="password" type="password" className="form-control" />
                        </div>
                        <div className="text-center">
                            <button type="submit" className="btn btn-primary"><i className="fa fa-sign-in"></i> Log in</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>







    );
}

export default Login;


