const Block = () => {
  const blocks = [
    {
      iconSrc: "/images/icon/icon_11.svg",
      bgColor: "#EBF8F8",
      title: "UX/UI Design",
    },
    {
      iconSrc: "/images/icon/icon_133.svg",
      bgColor: "#FFF8F8",
      title: "Software Development",
    },
    {
      iconSrc: "/images/icon/icon_164.svg",
      bgColor: "#F3F5FF",
      title: "Custom Web Applications",
    },
    {
      iconSrc: "/images/icon/icon_172.svg",
      bgColor: "#EBF8F8",
      title: "Web Design & Development",
    },
    {
      iconSrc: "/images/icon/icon_40.svg",
      bgColor: "#FFF8F8",
      title: "Front End Engineering",
    },
    {
      iconSrc: "/images/icon/icon_14.svg",
      bgColor: "#F3F5FF",
      title: "Content Management Systems",
    },
  ];

  return (
    <>
      {blocks.map((block, index) => (
        <div
          key={index}
          className="align-items-stretch d-flex col-md-4 "
          data-aos="fade-up"
          data-aos-delay={index * 100}
        >
          <div
            className="card-style-six md-mt-30 mt-2 mb-2 text-center w-100 "
            style={{ backgroundColor: block.bgColor }}
          >
            <div className="icon d-flex align-items-end justify-content-center">
              <img src={block.iconSrc} alt="icon" className="lazy-img" />
            </div>
            <h4 className="mt-55 lg-mt-30">{block.title}</h4>
          </div>
          {/* /.card-style-six */}
        </div>
      ))}
    </>
  );
};

export default Block;
