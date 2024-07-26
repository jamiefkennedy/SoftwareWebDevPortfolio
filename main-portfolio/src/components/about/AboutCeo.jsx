import React from "react";

const AboutCeo = () => {
  const aboutData = {
    title: {
      subtitle: "About Jamie",
      mainTitle: (
        <>
          Crafting Digital <span>Experiences</span> That Captivate and Convert.
        </>
      ),
    },
    content: {
      sectionTitle: "Who is Jamie?",
      description:
        "With expertise in UX/UI design, front-end engineering, and custom web applications, Jamie Kennedy creates tailored solutions that resonate with your audience. Whether you're a spiritual business owner, non-profit, or privately owned company, Jamie ensures your online presence is impactful and effective.",
    },
    // rating: {
    //   text: "Avg 4.8 rating makes us world best agency.",
    //   starsCount: 5,
    // },
  };

  // const starIcons = Array.from(
  //   { length: aboutData.rating.starsCount },
  //   (_, index) => (
  //     <li key={index}>
  //       <i className="bi bi-star-fill" />
  //     </li>
  //   )
  // );

  return (
    <>
      <div id="about" className="container mt-150 pt-100 xl-pt-50 md-mt-80 mb-300 xl-mb-200 md-mb-120">
        <div className="row align-items-center">
          <div className="col-md-6 ms-auto order-md-last">
            <div className="block-style-one" data-aos="fade-left">
              <div className="title-style-one">
                <div className="sc-title text-uppercase">
                  {aboutData.title.subtitle}
                </div>
                <h2 className="main-title fw-bold tx-dark m0">
                  {aboutData.title.mainTitle}
                </h2>
              </div>
              {/* <h4 className="tx-dark pt-65 pb-20 lg-pt-40 lg-pb-10">
            {aboutData.content.sectionTitle}
          </h4> */}
              <p className="fs-20 pt-65 pb-20 lg-pt-40 lg-pb-10">
                {aboutData.content.description}
              </p>
              {/* <p className="fs-18 mb-10 pt-30 lg-pt-20">
            <span className="fw-500 tx-dark">{aboutData.rating.text}</span>
          </p>
          <ul className="d-flex style-none rating">{starIcons}</ul> */}
            </div>
            {/* /.block-style-one */}
          </div>
          {/* End .col-5 */}

          <div className="col-md-6 order-md-first" data-aos="fade-right">
            <div className="img-meta d-inline-block position-relative ps-3 ps-lg-5 pb-50 sm-mt-90">
              <img
                style={{ objectFit: "cover" }}
                src="/images/media/img_01.jpg"
                alt="shape"
                className="lazy-img"
              />
              {/* <img
            src="/images/shape/shape_09.svg"
            alt="shape"
            className="lazy-img shapes shape-one"
          /> */}
              <img
                src="/images/shape/shape_10.svg"
                alt="shape"
                className="lazy-img shapes shape-two"
              />
              <div className="shapes shape-three" />
              <img
                src="/images/shape/shape_11.svg"
                alt="shape"
                className="lazy-img shapes shape-four"
              />
              <img
                src="/images/shape/shape_12.svg"
                alt="shape"
                className="lazy-img shapes shape-five"
              />
              <div className="shapes shape-six" />
              <img
                src="/images/shape/shape_13.svg"
                alt="shape"
                className="lazy-img shapes shape-seven"
              />
              <div className="card-one" data-aos="fade-up" data-aos-delay="250">
                <div className="icon d-flex align-items-center justify-content-center rounded-circle">
                  <img
                    src="/images/icon/icon_06.svg"
                    alt="shape"
                    className="lazy-img"
                  />
                </div>
                <div className="name fs-18 fw-500 tx-dark mb-10">
                  - Jamie Kennedy, <span className="opacity-75">Owner</span>
                </div>
                {/* <p className="fs-18 m0">
              We aim to answer any quis query in a minute
            </p> */}
              </div>{" "}
              {/* /.card-one */}
            </div>{" "}
            {/* /.img-meta */}
          </div>
        </div>
        <div className="text-center">
          <a
            href="#contact"
            className="btn-eight"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            Learn More About Jamie
          </a>
        </div>
      </div>
    </>
  );
};

export default AboutCeo;
