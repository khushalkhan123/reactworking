import React, { Fragment } from 'react';
import Menu from "./Menu";

function SinglePost () {
    return(
        <Fragment>
               
    <header class="page-header page-header-mini">
        <Menu />
        <h1 class="title">Voluptates Corporis Placeat</h1>
        <ol class="breadcrumb pb-0">
            <li class="breadcrumb-item"><a href="index.html">Home</a></li>
            <li class="breadcrumb-item active" aria-current="page">Voluptates Corporis Placeat</li>
        </ol>
    </header>
    

    <section class="container">
        <div class="page-container">
            <div class="page-content">
                <div class="card">
                    <div class="card-header pt-0">
                        <h3 class="card-title mb-4">Voluptates Corporis Placeat</h3>
                        <div class="blog-media mb-4">
                            <img src="assets/imgs/blog-6.jpg" alt="" class="w-100" />
                            <a href="#" class="badge badge-primary">#Salupt</a> 
                        </div>  
                        <small class="small text-muted">
                            <a href="#" class="text-muted">BY Admin</a>
                            <span class="px-2">·</span>
                            <span>January 24 2019</span>
                            <span class="px-2">·</span>
                            <a href="#" class="text-muted">32 Comments</a>
                        </small>
                    </div>
                    <div class="card-body border-top">
                        <p class="my-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos saepe dolores et nostrum porro odit reprehenderit animi, est ratione fugit aspernatur ipsum. Nostrum placeat hic saepe voluptatum dicta ipsum beatae.</p> 
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta mollitia assumenda quasi itaque, et doloremque voluptatem, praesentium cumque aperiam. Nobis aut expedita recusandae aliquam sapiente perferendis, perspiciatis quasi, vel, fugit eligendi aliquid. Minus, odit repellendus eligendi. Esse illo assumenda dolore sed.</p>

                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error, obcaecati veritatis enim earum neque, eveniet quasi commodi alias, adipisci magnam, ab praesentium dolore culpa!
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas eius nam pariatur necessitatibus, enim, consectetur, esse sint qui sed nisi unde vero! Ratione dolore quod perferendis, non ad et, tempora quisquam, iusto nesciunt rem ut excepturi eligendi nam? Repellendus itaque hic fuga ducimus asperiores dolorem dolores, aliquid quaerat temporibus ratione doloribus eius nihil expedita adipisci in quis modi unde repudiandae iusto reiciendis ipsa deleniti accusamus maxime, dolor animi? Animi ut quia natus in aliquid error quaerat, adipisci quisquam labore ipsa sapiente illo quidem, blanditiis doloribus voluptas et nam, omnis? Inventore minima ipsa non porro fugit, reprehenderit voluptates officiis.</p>
                    </div>
                    
                    <div class="card-footer">
                         <h6 class="mt-5 mb-3 text-center"><a href="#" class="text-dark">Comments 4</a></h6>
                        <hr />
                        <div class="media">
                            <img src="assets/imgs/avatar-1.jpg" class="mr-3 thumb-sm rounded-circle" alt="..." />
                            <div class="media-body">
                                <h6 class="mt-0">Janice Wilder</h6>
                                <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin.</p>
                                <a href="#" class="text-dark small font-weight-bold"><i class="ti-back-right"></i> Replay</a>
                                <div class="media mt-5">
                                    <a class="mr-3" href="#">
                                    <img src="assets/imgs/avatar.jpg" class="thumb-sm rounded-circle" alt="..." />
                                    </a>
                                    <div class="media-body align-items-center">
                                        <h6 class="mt-0">Joe Mitchell</h6>
                                        <p>Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus</p>
                                        <a href="#" class="text-dark small font-weight-bold"><i class="ti-back-right"></i> Replay</a>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="media mt-5">
                            <img src="assets/imgs/avatar-2.jpg" class="mr-3 thumb-sm rounded-circle" alt="..." />
                            <div class="media-body">
                                <h6 class="mt-0">Crosby Meadows</h6>
                                <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin.</p>
                                <a href="#" class="text-dark small font-weight-bold"><i class="ti-back-right"></i> Replay</a>
                            </div>
                        </div>
                        <div class="media mt-4">
                            <img src="assets/imgs/avatar-3.jpg" class="mr-3 thumb-sm rounded-circle" alt="..." />
                            <div class="media-body">
                                <h6 class="mt-0">Jean Wiley</h6>
                                <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin.</p>
                                <a href="#" class="text-dark small font-weight-bold"><i class="ti-back-right"></i> Replay</a>
                            </div>
                        </div>

                        <h6 class="mt-5 mb-3 text-center"><a href="#" class="text-dark">Write Your Comment</a></h6>
                        <hr/>
                        <form>
                            <div class="form-row">
                                <div class="col-12 form-group">
                                    <textarea name="" id="" cols="30" rows="10" class="form-control" placeholder="Enter Your Comment Here"></textarea>
                                </div>
                                <div class="col-sm-4 form-group">
                                    <input type="text" class="form-control" value="Name" />
                                </div>
                                <div class="col-sm-4 form-group">
                                    <input type="email" class="form-control" placeholder="Email" />
                                </div>
                                <div class="col-sm-4 form-group">
                                    <input type="url" class="form-control" placeholder="Website" />
                                </div>
                                <div class="form-group col-12">
                                    <button class="btn btn-primary btn-block">Post Comment</button>
                                </div>
                            </div>
                        </form>
                    </div>                  
                </div> 

                <h6 class="mt-5 text-center">Related Posts</h6>
                <hr />
                <div class="row">                       
                    <div class="col-md-6 col-lg-4">
                        <div class="card mb-5">
                            <div class="card-header p-0">                                   
                                <div class="blog-media">
                                    <img src="assets/imgs/blog-2.jpg" alt="" class="w-100" />
                                    <a href="#" class="badge badge-primary">#Placeat</a>        
                                </div>  
                            </div>
                            <div class="card-body px-0">
                                <h6 class="card-title mb-2"><a href="#" class="text-dark">Voluptates Corporis Placeat</a></h6>  
                                <small class="small text-muted">January 20 2019 
                                    <span class="px-2">-</span>
                                    <a href="#" class="text-muted">34 Comments</a>
                                </small>
                            </div>                  
                        </div>
                    </div>
                    <div class="col-md-6 col-lg-4">
                        <div class="card mb-5">
                            <div class="card-header p-0">                                   
                                <div class="blog-media">
                                    <img src="assets/imgs/blog-3.jpg" alt="" class="w-100" />
                                    <a href="#" class="badge badge-primary">#dolores</a>        
                                </div>  
                            </div>
                            <div class="card-body px-0">
                                <h6 class="card-title mb-2"><a herf="#" class="text-dark">Dolorum Dolores Itaque</a></h6>   
                                <small class="small text-muted">January 19 2019 
                                    <span class="px-2">-</span>
                                    <a href="#" class="text-muted">64 Comments</a>
                                </small>
                            </div>      
                        </div>
                    </div>
                    <div class="col-md-6 col-lg-4 d-none d-lg-block">
                        <div class="card mb-5">
                            <div class="card-header p-0">                                   
                                <div class="blog-media">
                                    <img src="assets/imgs/blog-4.jpg" alt="" class="w-100" />
                                    <a href="#" class="badge badge-primary">#amet</a>       
                                </div>  
                            </div>
                            <div class="card-body px-0">
                                <h6 class="card-title mb-2">Quisquam Dignissimos</h6>   
                                <small class="small text-muted">January 17 2019 
                                    <span class="px-2">-</span>
                                    <a href="#" class="text-muted">93 Comments</a>
                                </small>
                            </div>  
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="page-sidebar">
                <h6 class=" ">Tags</h6>
                <a href="javascript:void(0)" class="badge badge-primary m-1">#iusto</a>
                <a href="javascript:void(0)" class="badge badge-primary m-1">#quibusdam</a>
                <a href="javascript:void(0)" class="badge badge-primary m-1">#officia</a>
                <a href="javascript:void(0)" class="badge badge-primary m-1">#animi</a>
                <a href="javascript:void(0)" class="badge badge-primary m-1">#mollitia</a>
                <a href="javascript:void(0)" class="badge badge-primary m-1">#quod</a>
                <a href="javascript:void(0)" class="badge badge-primary m-1">#ipsa at</a>
                <a href="javascript:void(0)" class="badge badge-primary m-1">#dolor</a>
                <a href="javascript:void(0)" class="badge badge-primary m-1">#incidunt</a>
                <a href="javascript:void(0)" class="badge badge-primary m-1">#possimus</a>
    
                <div class="ad-card d-flex text-center align-items-center justify-content-center mt-4">
                    <span href="#" class="font-weight-bold">ADS</span>
                </div>
            </div>
        </div>
    </section>

    <div class="instagram-wrapper mt-5">
        <div class="ig-id">
            <a href="javascript:void(0)">Follow @joe_mitchell On Instagram</a>
        </div>
        <a href="javascript:void(0)" class="insta-item">
            <img src="assets/imgs/insta-1.jpg" alt="" class="w-100" />
            <div class="overlay">
                <span>
                    <i class="ti-heart"></i> 23
                </span>
                <span>
                    <i class="ti-comment"></i> 12
                </span>
            </div>
        </a>
        <a href="javascript:void(0)" class="insta-item">
            <img src="assets/imgs/insta-2.jpg" alt="" class="w-100" />
            <div class="overlay">
                <span>
                    <i class="ti-heart"></i> 23
                </span>
                <span>
                    <i class="ti-comment"></i> 12
                </span>
            </div>
        </a>
        <a href="javascript:void(0)" class="insta-item">
            <img src="assets/imgs/insta-3.jpg" alt="" class="w-100" />
            <div class="overlay">
                <span>
                    <i class="ti-heart"></i> 23
                </span>
                <span>
                    <i class="ti-comment"></i> 12
                </span>
            </div>
        </a>
        <a href="javascript:void(0)" class="insta-item">
            <img src="assets/imgs/insta-4.jpg" alt="" class="w-100" />
            <div class="overlay">
                <span>
                    <i class="ti-heart"></i> 23
                </span>
                <span>
                    <i class="ti-comment"></i> 12
                </span>
            </div>
        </a>
        <a href="javascript:void(0)" class="insta-item">
            <img src="assets/imgs/insta-5.jpg" alt="" class="w-100" />
            <div class="overlay">
                <span>
                    <i class="ti-heart"></i> 23
                </span>
                <span>
                    <i class="ti-comment"></i> 12
                </span>
            </div>
        </a>
        <a href="javascript:void(0)" class="insta-item">
            <img src="assets/imgs/insta-6.jpg" alt="" class="w-100" />
            <div class="overlay">
                <span>
                    <i class="ti-heart"></i> 23
                </span>
                <span>
                    <i class="ti-comment"></i> 12
                </span>
            </div>
        </a>
    </div>

    
    <footer class="page-footer">
        <div class="container">
            <div class="row align-items-center justify-content-between">
                <div class="col-md-3 text-center text-md-left mb-3 mb-md-0">
                    <img src="assets/imgs/logo.svg" alt="" class="logo" />
                </div>
                <div class="col-md-9 text-center text-md-right">
                    <div class="socials">
                        <a href="javascript:void(0)" class="font-weight-bold text-muted mr-4"><i class="ti-facebook pr-1"></i> 123,345</a>
                        <a href="javascript:void(0)" class="font-weight-bold text-muted mr-4"><i class="ti-twitter pr-1"></i> 321,534</a>
                        <a href="javascript:void(0)" class="font-weight-bold text-muted mr-4"><i class="ti-pinterest-alt pr-1"></i> 543,312</a>
                        <a href="javascript:void(0)" class="font-weight-bold text-muted mr-4"><i class="ti-instagram pr-1"></i> 123,023</a>
                        <a href="javascript:void(0)" class="font-weight-bold text-muted mr-4"><i class="ti-youtube pr-1"></i> 231,043</a>
                    </div>
                </div>  
            </div>
            <p class="border-top mb-0 mt-4 pt-3 small">&copy; <script>document.write(new Date().getFullYear())</script>, JoeBlog Created By <a href="https://www.devcrud.com" class="text-muted font-weight-bold" target="_blank">DevCrud.</a>  All rights reserved </p> 
        </div>      
    </footer>
    
	
    <script src="assets/vendors/jquery/jquery-3.4.1.js"></script>
    <script src="assets/vendors/bootstrap/bootstrap.bundle.js"></script>

    
    <script src="assets/js/joeblog.js"></script>
        </Fragment>
    )
}

export default SinglePost;