import React from "react";
import TypeEffect from "../components/TypeEffect";
import Contact from "../components/Contact";
import { useGetAdminQuery } from "../store/slices/usersApiSlice";
import Loader from "../components/Loader";
import { Link } from "react-router-dom";

const AboutMeScreen = () => {
  const { data: adminInfo, isLoading } = useGetAdminQuery();
  
  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <header className="header-profile vh-100 text-center position-relative">
            <div className="text-container position-relative d-flex flex-column justify-content-center align-items-center h-100">
              <h5 className="text-secondary fs-3 fw-bold text-uppercase">
              Lär dig spela fiol!
              </h5>
              <h1 id="typing-text" className="display-1 fw-bold text-white">
                <TypeEffect string={`I am ${adminInfo[0].adminName}`} />
              </h1>

              <p className="roles text-white text-uppercase fs-4">
                <span>Vilolin Teacher | </span>
                <span>Online Educator</span>
              </p>

              <a href="#about" className="btn btn-outline-light btn-lg mt-3">
                <div className="d-flex">
                  <div className="me-3">
                    <i className="fas fa-chevron-down"></i>
                  </div>
                  <div className="text-start">
                    <span>More About Me</span>
                  </div>
                </div>
              </a>

              <div className="social d-flex gap-3 position-absolute">
                <Link to={adminInfo[0].instagram}>
                  <i className="fab fa-instagram fa-3x text-white"></i>
                </Link>
                <Link to={adminInfo[0].linkedin}>
                  <i className="fab fa-linkedin fa-3x text-white"></i>
                </Link>
                <Link to={adminInfo[0].facebook}>
                  <i className="fab fa-facebook fa-3x text-white"></i>
                </Link>
              </div>
            </div>
          </header>

          <section
            id="about"
            className="about bg-light py-5"
            data-aos="fade-left"
          >
            <div className="container" style={{ width: "70%" }}>
              <div className="text-center">
                <h4 className="text-uppercase fw-bold text-secondary">
                  About Me
                </h4>
                <hr className="w-25 mx-auto" />
                <h2 className="mb-4">Välkommen till min webbplats!</h2>
              </div>
              <div className="about-content d-flex gap-5 align-items-center h-100">
                <img
                  src={adminInfo[0].pic}
                  alt="profile"
                  className="about-img img-fluid rounded-circle animated"
                />
                <p className="lead">
                  Jag heter Martin och mitt största intresse i livet har alltid
                  varit att spela fiol. När jag utbildade mig till fiollärare
                  upptäckte jag hur roligt det är att öva och utvecklas. Tänk
                  dig den där låten eller musikstycket som du älskar och vill
                  lära dig att spela – hur lär man sig det? Hur uppnår man det
                  där ögonblicket när man känner att man behärskar något? Att
                  spela fiol har inte alltid varit en framgångssaga för mig.
                  Efter fem år på musikhögskolan var jag ganska trött på
                  prestationer och krav. Självklart var jag stolt över att ha
                  klarat en lång och gedigen utbildning och att ha fått arbete
                  på en musikskola där jag undervisade många nya violinister.
                  Efter några år bestämde jag mig för att prova något annat och
                  utbildade mig till ingenjör inom elektronik och data. Jag
                  började arbeta med produktutveckling och trivdes bra med att
                  endast ibland undervisa några få elever. Jag startade då
                  fiolskolan.se för att nå ut till mina elever. Jag var
                  intresserad av hur ny teknik kan användas i fiolundervisning.
                  Jag byggde upp en webbplats som skulle kunna fungera som
                  lärplattform för mina elever. Tyvärr fungerade den tekniskt
                  långsamt och få var intresserade av att lära sig spela ett
                  instrument via internet. När min hemsida blev hackad och jag
                  hade glömt att ta backup lade jag ner det hela. Med tiden har
                  jag insett hur mycket jag saknar mötet med eleverna. Hur man
                  överbryggar svårigheterna med att komma igång och möter varje
                  elev utifrån deras specifika förutsättningar. Inom fiolspelet
                  är det så många parametrar som ska samspela, och metoderna för
                  vuxna glöms ofta bort. Därför har jag bestämt mig för att
                  starta min fiolskola igen, och nu har tekniken kommit ikapp!
                  Stay tuned!
                </p>
              </div>
            </div>
          </section>

          <section className="profile my-0">
            <div className="container" style={{ width: "70%" }}>
              <div className="row">
                <div className="col-md-6" data-aos="fade-right">
                  <h3 className="text-uppercase fw-bold">Profile</h3>
                  <p>
                  Här är lite mer information om mig själv för att hjälpa dig att lära känna mig bättre
                  </p>
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item mb-3">
                      <h5 className="text-transform">
                        <i className="fas fa-user text-secondary"></i> Full
                        Name:
                      </h5>
                      <p>{adminInfo[0].adminName}</p>
                    </li>
                    <li className="list-group-item mb-3">
                      <h5 className="text-transform">
                        <i className="fas fa-guitar text-secondary"></i>{" "}
                        Instrument
                      </h5>
                      <p>{adminInfo[0].instrument}</p>
                    </li>
                    <li className="list-group-item mb-3">
                      <h5 className="text-transform">
                        <i className="fas fa-phone text-secondary"></i> Phone
                      </h5>
                      <p>{adminInfo[0].phone}</p>
                    </li>
                    <li className="list-group-item mb-3">
                      <h5 className="text-transform">
                        <i className="fas fa-envelope text-secondary"></i>{" "}
                        Email:
                      </h5>
                      <p>{adminInfo[0].email}</p>
                    </li>
                  </ul>
                </div>
                <div className="col-md-6" data-aos="fade-left">
                  <h3 className="text-uppercase fw-bold">Skills</h3>
                  <p>
                  Här är en lista över några av mina färdigheter med procentsatser som såklart inte betyder något alls  😉
                  </p>
                  <h5>
                    <i className="fas fa-check"></i> Violin metodik
                  </h5>
                  <div
                    className="progress mb-4"
                    role="progressbar"
                    aria-valuenow="100"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                    <div className="progress-bar" style={{ width: "95%" }}>
                      95%
                    </div>
                  </div>

                  <h5>
                    <i className="fas fa-check"></i> Violin nybörjarnivå
                  </h5>
                  <div
                    className="progress mb-4"
                    role="progressbar"
                    aria-valuenow="90"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                    <div className="progress-bar" style={{ width: "90%" }}>
                    90%
                    </div>
                  </div>

                  <h5>
                    <i className="fas fa-check"></i> Violin online lektioner
                  </h5>
                  <div
                    className="progress mb-4"
                    role="progressbar"
                    aria-valuenow="90"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                    <div className="progress-bar" style={{ width: "100%" }}>
                    100%
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Services  */}
          {/* <section className="services text-bg-dark py-5 position-relative">
        <div className="container position-relative">
          <div className="text-center mb-5">
            <h4 className="text-uppercase fw-bold text-secondary">Services</h4>
            <hr className="w-25 mx-auto" />
            <h2 className="mb-4">What Can I Do For You?</h2>
            <p className="lead">
              Here are some of the services that I offer when it comes to web
              development and business.
            </p>
          </div>
          <div className="row">
            <div className="col-md-4 text-center">
              <i className="fas fa-globe fa-3x text-secondary mb-3"></i>
              <h3 className="fs-3">Web Design</h3>
              <hr className="w-25 mx-auto" />
              <p className="fs-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum quis
                autem quam, illo quisquam eligendi illum delectus nam amet porro!
              </p>
            </div>
  
            <div className="col-md-4 text-center">
              <i className="fas fa-code fa-3x text-secondary mb-3"></i>
              <h3 className="fs-3">Web Development</h3>
              <hr className="w-25 mx-auto" />
              <p className="fs-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum quis
                autem quam, illo quisquam eligendi illum delectus nam amet porro!
              </p>
            </div>
  
            <div className="col-md-4 text-center">
              <i className="fas fa-shopping-cart fa-3x text-secondary mb-3"></i>
              <h3 className="fs-3">Advetising & SEO</h3>
              <hr className="w-25 mx-auto" />
              <p className="fs-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum quis
                autem quam, illo quisquam eligendi illum delectus nam amet porro!
              </p>
            </div>
          </div>
        </div>
      </section> */}

          {/* Status */}
          {/* <section className="stats py-5 text-bg-secondary">
        <div className="container">
          <div className="row g-0">
            <div className="col-md-4 col-lg-2">
              <div className="stat text-center border-end border-dark">
                <i className="fas fa-users fa-3x mb-3"></i>
                <p className="fs-1">500+</p>
                <h3 className="fs-6 text-uppercase">Clients</h3>
              </div>
            </div>
            <div className="col-md-4 col-lg-2">
              <div className="stat text-center border-end border-dark">
                <i className="fas fa-project-diagram fa-3x mb-3"></i>
                <p className="fs-1">700+</p>
                <h3 className="fs-6 text-uppercase">Projects</h3>
              </div>
            </div>
            <div className="col-md-4 col-lg-2">
              <div className="stat text-center border-end border-dark">
                <i className="fas fa-clock fa-3x mb-3"></i>
                <p className="fs-1">16+</p>
                <h3 className="fs-6 text-uppercase">Years</h3>
              </div>
            </div>
            <div className="col-md-4 col-lg-2">
              <div className="stat text-center border-end border-dark">
                <i className="fas fa-book fa-3x mb-3"></i>
                <p className="fs-1">25</p>
                <h3 className="fs-6 text-uppercase">Publications</h3>
              </div>
            </div>
            <div className="col-md-4 col-lg-2">
              <div className="stat text-center border-end border-dark">
                <i className="fas fa-youtube fa-3x mb-3"></i>
                <p className="fs-1">2.06M</p>
                <h3 className="fs-6 text-uppercase">Subscribers</h3>
              </div>
            </div>
            <div className="col-md-4 col-lg-2">
              <div className="stat text-center border-end border-dark">
                <i className="fas fa-graduation-cap fa-3x mb-3"></i>
                <p className="fs-1">1M+</p>
                <h3 className="fs-6 text-uppercase">Students</h3>
              </div>
            </div>
          </div>
        </div>
      </section> */}
          <Contact />
        </>
      )}
    </>
  );
};

export default AboutMeScreen;
