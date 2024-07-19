const BlockContact4 = () => {
  const addressBlocks = [
    {
      icon: "/images/icon/icon_178.svg",
      title: "Our Address",
      content: "1012 Pebda Parkway, Mirpur 2 Dhaka, Bangladesh",
      delay: "100",
    },
    {
      icon: "/images/icon/icon_179.svg",
      title: "Contact Info",
      content: "Open a chat or give us call at",
      link: "tel:310.841.5500",
      delay: "200",
    },
    {
      icon: "/images/icon/icon_180.svg",
      title: "Live Support",
      content: "live chat service",
      link: "www.janolivechat.com",
      delay: "300",
    },
  ];

  return (
    <>
      {addressBlocks.map((block, index) => (
        <div
          className="col-md-4"
          key={index}
          data-aos="fade-up"
          data-aos-delay={block.delay}
        >
          <div className="address-block-two text-center mb-40">
            <div className="icon border rounded-circle d-flex align-items-center justify-content-center m-auto">
              <img src={block.icon} alt="icon" />
            </div>
            <h5 className="title">{block.title}</h5>
            <p>
              {block.content} <br />
              {block.link && (
                <a
                  href={block.link}
                  className={
                    block.link.includes("tel:") ? "call" : "webaddress"
                  }
                >
                  {block.link.replace("tel:", "")}
                </a>
              )}
            </p>
          </div>
        </div>
      ))}
    </>
  );
};

export default BlockContact4;
