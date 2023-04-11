import hotelImgs from "./data/hotel_imgs.json";

const Welcome = () => {
  return (
    <div className="scene" id="welcome">
      <article className="content">
        <div className="gallery">
          {hotelImgs.map((image) => {
            return (
              <img className={image.class} src={image.src} alt={image.alt} />
            );
          })}
        </div>
        <h1>Welcome to the Australia&nbsp;Hotel</h1>
        <p>
          The Australia Hotel is a five-star accommodation that offers
          unparalleled luxury and comfort to its guests. The hotel boasts modern
          architecture and stylish design, providing a sophisticated atmosphere
          for a memorable stay. The rooms are spacious and well-appointed,
          equipped with top-of-the-line amenities to ensure maximum comfort.{" "}
          <a href="files/landon_information_sheet_London.pdf">
            Download our handy information sheet
          </a>
          .
        </p>
      </article>
    </div>
  );
};

export default Welcome;
