import React, { Fragment } from "react";
import Menu from "./Menu";



class Home  extends React.Component{
    
    render(){
        return ( 
        <Fragment>
            
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

           
            <div className="page-sidebar text-center">
                <h6 className="sidebar-title section-title mb-4 mt-3">About</h6>
                <img src="assets/imgs/avatar.jpg" alt="" className="circle-100 mb-3" />
                <div className="socials mb-3 mt-2">
                    <a href="javascript:void(0)"><i className="ti-facebook"></i></a>
                    <a href="javascript:void(0)"><i className="ti-twitter"></i></a>
                    <a href="javascript:void(0)"><i className="ti-pinterest-alt"></i></a>
                    <a href="javascript:void(0)"><i className="ti-instagram"></i></a>
                    <a href="javascript:void(0)"><i className="ti-youtube"></i></a>
                </div>
                <p>Consectetur adipisicing elit Possimus tempore facilis dolorum veniam impedit nobis. Quia, soluta incidunt nesciunt dolorem reiciendis iusto.</p>
                

                <h6 className="sidebar-title mt-5 mb-4">Newsletter</h6>
                <form action="">
                    <div className="subscribe-wrapper">
                        <input type="email" className="form-control" placeholder="Email Address" />
                        <button type="submit" className="btn btn-primary"><i className="ti-location-arrow"></i></button>
                    </div>
                </form>

                <h6 className="sidebar-title mt-5 mb-4">Tags</h6>
                <a href="javascript:void(0)" className="badge badge-primary m-1">#iusto</a>
                <a href="javascript:void(0)" className="badge badge-primary m-1">#quibusdam</a>
                <a href="javascript:void(0)" className="badge badge-primary m-1">#officia</a>
                <a href="javascript:void(0)" className="badge badge-primary m-1">#animi</a>
                <a href="javascript:void(0)" className="badge badge-primary m-1">#mollitia</a>
                <a href="javascript:void(0)" className="badge badge-primary m-1">#quod</a>
                <a href="javascript:void(0)" className="badge badge-primary m-1">#ipsa at</a>
                <a href="javascript:void(0)" className="badge badge-primary m-1">#dolor</a>
                <a href="javascript:void(0)" className="badge badge-primary m-1">#incidunt</a>
                <a href="javascript:void(0)" className="badge badge-primary m-1">#possimus</a>

                <h6 className="sidebar-title mt-5 mb-4">Instagram</h6>
                <div className="row px-3">
                    <div className="col-4 p-1 figure">
                        <a href="#" className="figure-img">
                            <img src="assets/imgs/insta-1.jpg" alt="" />
                        </a>
                    </div>
                    <div className="col-4 p-1 figure">
                        <a href="#" className="figure-img">
                            <img src="assets/imgs/insta-2.jpg" alt="" className="w-100 m-0" />
                        </a>
                    </div>  
                    <div className="col-4 p-1 figure">
                        <a href="#" className="figure-img">
                            <img src="assets/imgs/insta-3.jpg" alt="" className="w-100" />
                        </a>
                    </div>
                    <div className="col-4 p-1 figure">
                        <a href="#" className="figure-img">
                            <img src="assets/imgs/insta-4.jpg" alt="" className="w-100 m-0" />
                        </a>
                    </div>  
                    <div className="col-4 p-1 figure">
                        <a href="#" className="figure-img">
                            <img src="assets/imgs/insta-5.jpg" alt="" className="w-100" />
                        </a>
                    </div>
                    <div className="col-4 p-1 figure">
                        <a href="#" className="figure-img">
                            <img src="assets/imgs/insta-6.jpg" alt="" className="w-100 m-0" />
                        </a>
                    </div>                          
                </div>  

                <figure className="figure mt-5">
                    <a href="single-post.html" className="figure-img">
                        <img src="assets/imgs/img-4.jpg" alt="" className="w-100" />
                        <figcaption className="figcaption">Laboriosam</figcaption>
                    </a>
                </figure>

                <h6 className="sidebar-title mt-5 mb-4">Popular Posts</h6>
                <div className="card mb-4">
                    <a href="single-post.html" className="overlay-link"></a>
                    <div className="card-header p-0">                                   
                        <div className="blog-media">
                            <img src="assets/imgs/blog-6.jpg" alt="" className="w-100" />
                            <a href="#" className="badge badge-primary">#Lorem</a>      
                        </div>  
                    </div>
                    <div className="card-body px-0">
                        <h5 className="card-title mb-2">Corporis Placeat</h5>   
                        <small className="small text-muted"><i className="ti-calendar pr-1"></i> January 24 2019
                        </small>
                        <p className="my-2">consectetur adipisicing Cum veritatis minus iustorpo cupiditate voluptas ...</p>
                    </div>      
                </div>

                <div className="media text-left mb-4">
                    <a href="single-post.html" className="overlay-link"></a>
                    <img className="mr-3" src="assets/imgs/blog-1.jpg" width="100px" alt="Generic placeholder image" />
                    <div className="media-body">
                        <h6 className="mt-0">Nobis Mollitia</h6>
                        <p className="mb-2"> deserunt quisqua...</p>
                        <p className="text-muted small"><i className="ti-calendar pr-1"></i>  January 02 2019</p>
                    </div>
                </div>
                <div className="media text-left mb-4">
                    <a href="single-post.html" className="overlay-link"></a>
                    <img className="mr-3" src="assets/imgs/blog-2.jpg" width="100px" alt="Generic placeholder image" />
                    <div className="media-body">
                        <h6 className="mt-0">Officiis Laborum</h6>
                        <p className="mb-2"> deserunt quisqua...</p>                            
                        <p className="text-muted small"><i className="ti-calendar pr-1"></i>  January 10 2019</p>
                    </div>
                </div>
                <div className="media text-left mb-4">
                    <a href="single-post.html" className="overlay-link"></a>
                    <img className="mr-3" src="assets/imgs/blog-3.jpg" width="100px" alt="Generic placeholder image" />
                    <div className="media-body">
                        <h6 className="mt-0">Sapiente fugit vero</h6>
                        <p className="mb-2"> deserunt ard quisqua...</p>                        
                        <p className="text-muted small"><i className="ti-calendar pr-1"></i>  January 04 2019</p>
                    </div>
                </div>  
                <div className="ad-card d-flex text-center align-items-center justify-content-center">
                    <span href="#" className="font-weight-bold">ADS</span>
                </div>
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
        );
    }
}

export default Home;