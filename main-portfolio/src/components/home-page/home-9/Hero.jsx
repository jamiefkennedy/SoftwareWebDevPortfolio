const Hero = () => {
  const images = [
    {
      src: "/images/shape/shape_56.svg",
      alt: "media",
      className: "lazy-img shapes shape-one",
    },
    {
      src: "/images/shape/shape_57.svg",
      alt: "media",
      className: "lazy-img shapes shape-two",
    },
    {
      src: "/images/shape/shape_58.svg",
      alt: "media",
      className: "lazy-img shapes shape-three",
    },
    {
      src: "/images/shape/shape_59.svg",
      alt: "media",
      className: "lazy-img shapes shape-four",
    },
  ];

  const renderImages = () => {
    return images.map((image, index) => (
      <img
        key={index}
        src={image.src}
        alt={image.alt}
        className={image.className}
      />
    ));
  };

  return (
    <div className="hero-banner-four text-center position-relative" id="banner">
      <div className="container">
        <img
          src="/images/media/img_26.jpg"
          alt=""
          className="lazy-img avatar-img m-auto rounded-circle"
          data-aos="fade-up"
        />
        <div
          className="profile-name tx-dark text-lg mt-35 mb-20"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <span className="fw-500">Jamie Kennedy</span> - Expert in Web Design, Development, and Software Solutions
        </div>
        <div className="row">
          <div
            className="col-xxl-11 col-lg-10 col-md-8 m-auto "
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <h1 className="hero-heading fw-500 font-recoleta tx-dark mb-65 lg-mb-40">
            Bring Your Vision to Life Online
            </h1>
          </div>
          <div
            className="col-lg-6 col-md-8 m-auto "
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <p className="text-lg pe-xxl-4 ps-xxl-4 mb-75 lg-mb-50">
            Struggling to make your spiritual business or non-profit stand out online? Overwhelmed by coding and programming challenges?
            </p>
          </div>
        </div>
        <a
          href="#contact"
          className="btn-eight"
          data-aos="fade-up"
          data-aos-delay="500"
        >
          Get Started Today
        </a>
      </div>

      {/* Fancy Image Block One */}
      <div className="fancy-img-block fancy-block-one">
        <div className="r-shape-one position-absolute" />
        <div className="r-shape-two position-absolute rounded-circle" />
        {/* <img
          src="/images/media/img_27.jpg"
          alt="media"
          className="lazy-img main-img"
        /> */}
      </div>

      {/* Fancy Image Block Two */}
      <div className="fancy-img-block fancy-block-two">
        <div className="r-shape-three position-absolute rounded-circle" />
        <div className="r-shape-four position-absolute rounded-circle" />
        {/* <img
          src="/images/media/img_28.jpg"
          alt="media"
          className="lazy-img main-img"
        /> */}
      </div>

      {/* {renderImages()} */}
    </div>
  );
};

export default Hero;
