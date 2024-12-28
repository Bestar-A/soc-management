import { Link } from 'react-router-dom';
import Contact from '../components/Contact';
import { useSelector } from 'react-redux';
import svg from "../assets/decoration-star.svg";
import slide1 from "../assets/images/header-slide-1.jpg";
import slide2 from "../assets/images/header-slide-2.jpg";
import slide3 from "../assets/images/header-slide-3.png";



const HomeScreen = () => {
  
  return (
    <>
      <header className="header position-relative mt-6 overflow-hidden">
        <img
          src={svg}
          alt=""
          className="decoration-star position-absolute w3-spin"
        />
        <img
          src={svg}
          alt=""
          className="decoration-star-2 position-absolute w3-spin"
        />
        <div className="container position-relative z-3">
          <div className="row">
            <div className="col-lg-6" data-aos="zoom-out">
              <div className="mt-3" >
                <h1 className="xl-text animated">
                Welcome to <span className="text-primary">Our Site</span>  
                </h1>
                {/* <p className="lead mb-4">
                Get started!
                </p> */}
                <Link
                  to='/assesments'
                  className="btn btn-outline-primary btn-lg m-2"
                >
                  <i class="fa fa-hourglass-start"></i>  Get Started 
                </Link>
                <a
                  href="#contact"
                  className="btn btn-outline-secondary btn-lg m-2"
                >
                  <i class="fa fa-envelope"></i>  Contact Us                  
                </a>
              </div>
            </div>
            <div className="col-lg-6" data-aos="zoom-out" data-aos-delay="300">
              <div className="image-container">
                <div
                  id="slider"
                  className="carousel slide"
                  data-bs-ride="carousel"
                >
                  <div className="carousel-indicators">
                    <button
                      className="active"
                      type="button"
                      data-bs-slide-to="0"
                      data-bs-target="#slider"
                      aria-current="true"
                      aria-label="Slide 1"
                    ></button>
                    <button
                      type="button"
                      data-bs-slide-to="1"
                      data-bs-target="#slider"
                      aria-label="Slide 2"
                    ></button>
                    <button
                      type="button"
                      data-bs-slide-to="2"
                      data-bs-target="#slider"
                      aria-label="Slide 3"
                    ></button>
                  </div>
                  <div className="carousel-inner rounded-5">
                    <div className="carousel-item active">
                      <img
                        src={slide1}
                        alt=""
                        className="d-block w-100 rounded-5"
                        width="490"
                        height="560"
                      />
                    </div>
                    <div className="carousel-item">
                      <img
                        src={slide2}
                        alt=""
                        className="d-block w-100 rounded-5"
                        width="490"
                        height="560"
                      />
                    </div>
                    <div className="carousel-item">
                      <img
                        src={slide3}
                        alt=""
                        className="d-block w-100 rounded-5"
                        width="490"
                        height="560"
                      />
                    </div>
                  </div>

                  <button
                    className="carousel-control-prev"
                    type="button"
                    data-bs-slide="prev"
                    data-bs-target="#slider"
                  >
                    <span className="carousel-control-prev-icon"></span>
                    <span className="visually-hidden">Previous</span>
                  </button>
                  <button
                    className="carousel-control-next"
                    type="button"
                    data-bs-slide="next"
                    data-bs-target="#slider"
                  >
                    <span className="carousel-control-next-icon"></span>
                    <span className="visually-hidden">Next</span>
                  </button>
                </div>
                {/* <!-- <img src="images/header.png" alt="" className="img-fluid" /> --> */}
              </div>
            </div>
          </div>
        </div>
      </header>
      
      
    {/* <section id="gallery" className="gallery">
      <div className="container">

        <div className="section-title" data-aos="fade-up">
          <h2>Gallery</h2>
          <p>Check our Insutruments</p>
        </div>

        <div className="row g-0" data-aos="fade-left">

          <div className="col-lg-3 col-md-4">
            <div className="gallery-item" data-aos="zoom-in" data-aos-delay="150">
              <a href="assets/img/gallery/gallery-2.jpg" className="gallery-lightbox">
                <img src="assets/img/gallery/gallery-2.jpg" alt="" className="img-fluid"/>
              </a>
            </div>
          </div>

          <div className="col-lg-3 col-md-4">
            <div className="gallery-item" data-aos="zoom-in" data-aos-delay="200">
              <a href="assets/img/gallery/gallery-3.jpg" className="gallery-lightbox">
                <img src="assets/img/gallery/gallery-3.jpg" alt="" className="img-fluid"/>
              </a>
            </div>
          </div>

          <div className="col-lg-3 col-md-4">
            <div className="gallery-item" data-aos="zoom-in" data-aos-delay="250">
              <a href="assets/img/gallery/gallery-4.jpg" className="gallery-lightbox">
                <img src="assets/img/gallery/gallery-4.jpg" alt="" className="img-fluid"/>
              </a>
            </div>
          </div>

          <div className="col-lg-3 col-md-4">
            <div className="gallery-item" data-aos="zoom-in" data-aos-delay="300">
              <a href="assets/img/gallery/gallery-5.jpg" className="gallery-lightbox">
                <img src="assets/img/gallery/gallery-5.jpg" alt="" className="img-fluid"/>
              </a>
            </div>
          </div>     
          
        </div>

      </div>
    </section>

    <section className="section">
        <div className="container">
        <div className="section-title" data-aos="fade-up">
          <h2>Articles</h2>
          <p>Popular articles</p>
        </div>
          <div className="row mb-5">
            <div className="col-md-3">
              <div className="post-entry shadow-lg" data-aos-delay="400" data-aos="zoom-in">
                <a href="blog-single.html" className="d-block mb-4">
                  <img
                    src="assets/img/img_1.jpg"
                    alt="1"
                    className="img-fluid"
                  />
                </a>
                <div className="post-text">
                  <h3>
                    <a href="#">
                      Chrome now alerts you when someone steals your password
                    </a>
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Rem, optio.
                  </p>
                  <p>
                    <Link to='/blogsingle' className="readmore">
                      Read more
                    </Link>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="post-entry" data-aos-delay="400" data-aos="zoom-in">
                <a href="blog-single.html" className="d-block mb-4">
                  <img
                    src="assets/img/img_2.jpg"
                    alt="Image"
                    className="img-fluid"
                  />
                </a>
                <div className="post-text">
                  <h3>
                    <a href="#">
                      Chrome now alerts you when someone steals your password
                    </a>
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Rem, optio.
                  </p>
                  <p>
                    <a href="#" className="readmore">
                      Read more
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="post-entry" data-aos-delay="400" data-aos="zoom-in">
                <a href="blog-single.html" className="d-block mb-4">
                  <img
                    src="assets/img/img_3.jpg"
                    alt="Image"
                    className="img-fluid"
                  />
                </a>
                <div className="post-text">
                  <h3>
                    <a href="#">
                      Chrome now alerts you when someone steals your password
                    </a>
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Rem, optio.
                  </p>
                  <p>
                    <a href="#" className="readmore">
                      Read more
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="post-entry" data-aos-delay="400" data-aos="zoom-in">
                <a href="blog-single.html" className="d-block mb-4">
                  <img
                    src="assets/img/img_4.jpg"
                    alt="Image"
                    className="img-fluid"
                  />
                </a>
                <div className="post-text">
                  <h3>
                    <a href="#">
                      Chrome now alerts you when someone steals your password
                    </a>
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Rem, optio.
                  </p>
                  <p>
                    <a href="#" className="readmore">
                      Read more
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-12 text-center">
              <span className="p-3 active text-primary">1</span>
              <a href="#" className="p-3">
                2
              </a>
              <a href="#" className="p-3">
                3
              </a>
              <a href="#" className="p-3">
                4
              </a>
            </div>
          </div>
        </div>
      </section> */}

      <Contact />
    </>
  );
};

export default HomeScreen;
