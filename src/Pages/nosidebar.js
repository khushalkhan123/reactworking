import React, { Fragment } from "react";
import Menu from "./Menu"

class SideBar extends React.Component{
    render(){
        return (
           <Fragment>
              
    <header className="page-header"></header>
   
    <div className="container">
        <section>
        <Menu />
            <div className="feature-posts">
                <a href="single-post.html" className="feature-post-item">                       
                    <span>Featured Posts</span>
                </a>
                <a href="single-post.html" className="feature-post-item">
                    <img src="assets/imgs/img-1.jpg" className="w-100" alt="" />
                    <div className="feature-post-caption">Incidunt Quaerat</div>
                </a>
                <a href="single-post.html" className="feature-post-item">
                    <img src="assets/imgs/img-2.jpg" className="w-100" alt="" />
                    <div className="feature-post-caption">Culpa Ducimus</div>
                </a>
                <a href="single-post.html" className="feature-post-item">
                    <img src="assets/imgs/img-3.jpg" className="w-100" alt="" />
                    <div className="feature-post-caption">Temporibus Simile</div>
                </a>
                <a href="single-post.html" className="feature-post-item">
                    <img src="assets/imgs/img-4.jpg" className="w-100" alt="" />
                    <div className="feature-post-caption">Adipisicing</div>
                </a>
            </div>
        </section>
        <hr />
        <div className="page-container">
            <div className="page-content">
                <div className="card">
                    <div className="card-header text-center">
                        <h5 className="card-title">Voluptates Corporis Placeat</h5> 
                        <small className="small text-muted">January 24 2019 
                            <span className="px-2">-</span>
                            <a href="#" className="text-muted">32 Comments</a>
                        </small>
                    </div>
                    <div className="card-body">
                        <div className="blog-media">
                            <img src="assets/imgs/blog-6.jpg" alt="" className="w-100" />
                            <a href="#" className="badge badge-primary">#Salupt</a>     
                        </div>  
                        <p className="my-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos saepe dolores et nostrum porro odit reprehenderit animi, est ratione fugit aspernatur ipsum. Nostrum placeat hic saepe voluptatum dicta ipsum beatae.</p>
                    </div>
                    
                    <div className="card-footer d-flex justify-content-between align-items-center flex-basis-0">
                        <button className="btn btn-primary circle-35 mr-4"><i className="ti-back-right"></i></button>
                        <a href="single-post.html" className="btn btn-outline-dark btn-sm">READ MORE</a>
                        <a href="#" className="text-dark small text-muted">By : Joe Mitchell</a>
                    </div>                  
                </div>
                <hr />
                <div className="row">                       
                    <div className="col-lg-6">
                        <div className="card text-center mb-5">
                            <div className="card-header p-0">                                   
                                <div className="blog-media">
                                    <img src="assets/imgs/blog-2.jpg" alt="" className="w-100" />
                                    <a href="#" className="badge badge-primary">#Placeat</a>        
                                </div>  
                            </div>
                            <div className="card-body px-0">
                                <h5 className="card-title mb-2">Voluptates Corporis Placeat</h5>    
                                <small className="small text-muted">January 20 2019 
                                    <span className="px-2">-</span>
                                    <a href="#" className="text-muted">34 Comments</a>
                                </small>
                                <p className="my-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos saepe dolores et nostrum porro odit reprehenderit animi, est ratione fugit aspernatur ipsum. Nostrum placeat hic saepe voluptatum dicta ipsum beatae.</p>
                            </div>
                            
                            <div className="card-footer p-0 text-center">
                                <a href="single-post.html" className="btn btn-outline-dark btn-sm">READ MORE</a>
                            </div>                  
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="card text-center mb-5">
                            <div className="card-header p-0">                                   
                                <div className="blog-media">
                                    <img src="assets/imgs/blog-3.jpg" alt="" className="w-100" />
                                    <a href="#" className="badge badge-primary">#dolores</a>        
                                </div>  
                            </div>
                            <div className="card-body px-0">
                                <h5 className="card-title mb-2">Dolorum Dolores Itaque</h5> 
                                <small className="small text-muted">January 19 2019 
                                    <span className="px-2">-</span>
                                    <a href="#" className="text-muted">64 Comments</a>
                                </small>
                                <p className="my-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos saepe dolores et nostrum porro odit reprehenderit animi, est ratione fugit aspernatur ipsum. Nostrum placeat hic saepe voluptatum dicta ipsum beatae.</p>
                            </div>
                            
                            <div className="card-footer p-0 text-center">
                                <a href="single-post.html" className="btn btn-outline-dark btn-sm">READ MORE</a>
                            </div>                  
                        </div>
                    </div>
                </div>
                <div className="row">                       
                    <div className="col-lg-6">
                        <div className="card text-center mb-5">
                            <div className="card-header p-0">                                   
                                <div className="blog-media">
                                    <img src="assets/imgs/blog-4.jpg" alt="" className="w-100" />
                                    <a href="#" className="badge badge-primary">#amet</a>       
                                </div>  
                            </div>
                            <div className="card-body px-0">
                                <h5 className="card-title mb-2">Quisquam Dignissimos</h5>   
                                <small className="small text-muted">January 17 2019 
                                    <span className="px-2">-</span>
                                    <a href="#" className="text-muted">93 Comments</a>
                                </small>
                                <p className="my-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos saepe dolores et nostrum porro odit reprehenderit animi, est ratione fugit aspernatur ipsum. Nostrum placeat hic saepe voluptatum dicta ipsum beatae.</p>
                            </div>
                            
                            <div className="card-footer p-0 text-center">
                                <a href="single-post.html" className="btn btn-outline-dark btn-sm">READ MORE</a>
                            </div>                  
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="card text-center mb-5">
                            <div className="card-header p-0">                                   
                                <div className="blog-media">
                                    <img src="assets/imgs/blog-5.jpg" alt="" className="w-100" />
                                    <a href="#" className="badge badge-primary">#lorem</a>      
                                </div>  
                            </div>
                            <div className="card-body px-0">
                                <h5 className="card-title mb-2">Voluptas Optio Soluta</h5>  
                                <small className="small text-muted">January 15 2019 
                                    <span className="px-2">-</span>
                                    <a href="#" className="text-muted">112 Comments</a>
                                </small>
                                <p className="my-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos saepe dolores et nostrum porro odit reprehenderit animi, est ratione fugit aspernatur ipsum. Nostrum placeat hic saepe voluptatum dicta ipsum beatae.</p>
                            </div>
                            
                            <div className="card-footer p-0 text-center">
                                <a href="single-post.html" className="btn btn-outline-dark btn-sm">READ MORE</a>
                            </div>                  
                        </div>
                    </div>
                </div>
                <div className="row">                       
                    <div className="col-lg-6">
                        <div className="card text-center mb-5">
                            <div className="card-header p-0">                                   
                                <div className="blog-media">
                                    <img src="assets/imgs/blog-1.jpg" alt="" className="w-100" />
                                    <a href="#" className="badge badge-primary">#lipsum</a>     
                                </div>  
                            </div>
                            <div className="card-body px-0">
                                <h5 className="card-title mb-2">Voluptates Corporis Placeat</h5>    
                                <small className="small text-muted">January 14 2019 
                                    <span className="px-2">-</span>
                                    <a href="#" className="text-muted">120 Comments</a>
                                </small>
                                <p className="my-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos saepe dolores et nostrum porro odit reprehenderit animi, est ratione fugit aspernatur ipsum. Nostrum placeat hic saepe voluptatum dicta ipsum beatae.</p>
                            </div>
                            
                            <div className="card-footer p-0 text-center">
                                <a href="single-post.html" className="btn btn-outline-dark btn-sm">READ MORE</a>
                            </div>                  
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="card text-center mb-5">
                            <div className="card-header p-0">                                   
                                <div className="blog-media">
                                    <img src="assets/imgs/blog-7.jpg" alt="" className="w-100" />
                                    <a href="#" className="badge badge-primary">#Elit</a>       
                                </div>  
                            </div>
                            <div className="card-body px-0">
                                <h5 className="card-title mb-2">Praesentium Asperiores</h5> 
                                <small className="small text-muted">January 10 2019 
                                    <span className="px-2">-</span>
                                    <a href="#" className="text-muted">143 Comments</a>
                                </small>
                                <p className="my-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos saepe dolores et nostrum porro odit reprehenderit animi, est ratione fugit aspernatur ipsum. Nostrum placeat hic saepe voluptatum dicta ipsum beatae.</p>
                            </div>
                            
                            <div className="card-footer p-0 text-center">
                                <a href="single-post.html" className="btn btn-outline-dark btn-sm">READ MORE</a>
                            </div>                  
                        </div>
                    </div>
                </div>
                <button className="btn btn-primary btn-block my-4">Load More Posts</button>
            </div>
        </div>
    </div>

    <div className="instagram-wrapper mt-5">
        <div className="ig-id">
            <a href="javascript:void(0)">Follow @joe_mitchell On Instagram</a>
        </div>
        <a href="javascript:void(0)" className="insta-item">
            <img src="assets/imgs/insta-1.jpg" alt="" className="w-100" />
            <div className="overlay">
                <span>
                    <i className="ti-heart"></i> 23
                </span>
                <span>
                    <i className="ti-comment"></i> 12
                </span>
            </div>
        </a>
        <a href="javascript:void(0)" className="insta-item">
            <img src="assets/imgs/insta-2.jpg" alt="" className="w-100" />
            <div className="overlay">
                <span>
                    <i className="ti-heart"></i> 23
                </span>
                <span>
                    <i className="ti-comment"></i> 12
                </span>
            </div>
        </a>
        <a href="javascript:void(0)" className="insta-item">
            <img src="assets/imgs/insta-3.jpg" alt="" className="w-100" />
            <div className="overlay">
                <span>
                    <i className="ti-heart"></i> 23
                </span>
                <span>
                    <i className="ti-comment"></i> 12
                </span>
            </div>
        </a>
        <a href="javascript:void(0)" className="insta-item">
            <img src="assets/imgs/insta-4.jpg" alt="" className="w-100" />
            <div className="overlay">
                <span>
                    <i className="ti-heart"></i> 23
                </span>
                <span>
                    <i className="ti-comment"></i> 12
                </span>
            </div>
        </a>
        <a href="javascript:void(0)" className="insta-item">
            <img src="assets/imgs/insta-5.jpg" alt="" className="w-100" />
            <div className="overlay">
                <span>
                    <i className="ti-heart"></i> 23
                </span>
                <span>
                    <i className="ti-comment"></i> 12
                </span>
            </div>
        </a>
        <a href="javascript:void(0)" className="insta-item">
            <img src="assets/imgs/insta-6.jpg" alt="" className="w-100" />
            <div className="overlay">
                <span>
                    <i className="ti-heart"></i> 23
                </span>
                <span>
                    <i className="ti-comment"></i> 12
                </span>
            </div>
        </a>
    </div>

    
    <footer className="page-footer">
        <div className="container">
            <div className="row align-items-center justify-content-between">
                <div className="col-md-3 text-center text-md-left mb-3 mb-md-0">
                    <img src="assets/imgs/logo.svg" alt="" className="logo" />
                </div>
                <div className="col-md-9 text-center text-md-right">
                    <div className="socials">
                        <a href="javascript:void(0)" className="font-weight-bold text-muted mr-4"><i className="ti-facebook pr-1"></i> 123,345</a>
                        <a href="javascript:void(0)" className="font-weight-bold text-muted mr-4"><i className="ti-twitter pr-1"></i> 321,534</a>
                        <a href="javascript:void(0)" className="font-weight-bold text-muted mr-4"><i className="ti-pinterest-alt pr-1"></i> 543,312</a>
                        <a href="javascript:void(0)" className="font-weight-bold text-muted mr-4"><i className="ti-instagram pr-1"></i> 123,023</a>
                        <a href="javascript:void(0)" className="font-weight-bold text-muted mr-4"><i className="ti-youtube pr-1"></i> 231,043</a>
                    </div>
                </div>  
            </div>
            <p className="border-top mb-0 mt-4 pt-3 small">&copy; <script>document.write(new Date().getFullYear())</script>, JoeBlog Created By <a href="https://www.devcrud.com" className="text-muted font-weight-bold" target="_blank">DevCrud.</a>  All rights reserved </p> 
        </div>      
    </footer>
        
	
    <script src="assets/vendors/jquery/jquery-3.4.1.js"></script>
    <script src="assets/vendors/bootstrap/bootstrap.bundle.js"></script>

    
    <script src="assets/js/joeblog.js"></script>
    </Fragment>
        )
    }
}

export default SideBar;