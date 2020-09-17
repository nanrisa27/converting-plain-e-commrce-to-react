import React from 'react';
import { Link } from 'react-router-dom';

const blogHomePage = () => {
    return (
        <div>
            <div className="box text-center">
                <div className="container">
                    <div className="col-md-12">
                        <h3 className="text-uppercase">From our blog</h3>
                        <p className="lead mb-0">What's new in the world of fashion? <Link to="blog.html">Check our blog!</Link></p>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="col-md-12">
                    <div id="blog-homepage" className="row">
                        <div className="col-sm-6">
                            <div className="post">
                                <h4><Link to="post.html">Fashion now</Link></h4>
                                <p className="author-category">By <Link to="#">John Slim</Link> in <Link to="">Fashion and style</Link></p>
                                <hr />

                                <p className="intro">Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>
                                <p className="read-more"><Link to="post.html" className="btn btn-primary">Continue reading</Link></p>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="post">
                                <h4><Link to="post.html">Who is who - example blog post</Link></h4>
                                <p className="author-category">By <Link to="#">John Slim</Link> in <Link to="">About Minimal</Link></p>
                                <hr />
                                <p className="intro">Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>
                                <p className="read-more"><Link to="post.html" className="btn btn-primary">Continue reading</Link></p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </div>

    );
}

export default blogHomePage;
