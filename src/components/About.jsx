import { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import NekoOzzy from "./images/NekoOzzyDryer.jpg";
import EldenRing from "./images/elden-ring.webp";
import Myself from "./images/gengarme.png";

const imageModules = import.meta.glob('./images/cats/*.{png,jpg,jpeg,svg}', {
  eager: true,
  import: "default",
});

// Convert the object into an array of image URLs
const images = Object.values(imageModules);

function About() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const swiperRef = useRef(null);

  useEffect(() => {
    if (!swiperRef.current || !prevRef.current || !nextRef.current) return;

    swiperRef.current.params.navigation.prevEl = prevRef.current;
    swiperRef.current.params.navigation.nextEl = nextRef.current;
    swiperRef.current.navigation.init();
    swiperRef.current.navigation.update();
  }, []);

  return (
    <section>
      <div>
        <div>
          <div>
            <h1 className="page-title">About Me</h1>
            <h3>So you want to know about me... weird.</h3>
          </div>
        </div>
      </div>
      <div>
        <div className="about-content">
          <div className="about-text">
            <h2>Personal Life</h2>
            <p>
              My name is Larry Kevin Resendiz, but I prefer to go by Kevin. I am a
              cat dad of two, Neko and Ozzy. I received Neko on Christmas of 2024.
              Ever since, he's been my best friend. He's your typical stereotype
              of an orange cat with an attitude. He loves to climb high places,
              play fetch, and sit inside boxes and bags. Ozzy on the other hand,
              is my little prince of darkness. I received him from a coworker who
              found him covered in fleas and hungry at a Home Depot parking
              lot. I took him in, and he turned out to be the sweetest cat ever.
              He absolutely LOVES food. He loves food so much, that I have had to
              replace two trash cans due to him being able to get inside of them.
            </p>
          </div>
          {NekoOzzy && <div className='about-image'>
            <img src={NekoOzzy} alt="A picture of my cats Neko and Ozzy" />
          </div>}
        </div>
      </div>
      <div >
        <div className="about-content">
          <div className="about-text">
            <h2>How did I become interested in web development?</h2>
            <p>
              I returned to college to pursue a second degree in database
              development in the Spring of 2024. I already have a bachelor's in
              psychology with a minor in biology, but I had no prior experience in
              the field and was not able to find a job. After working in Amazon
              for a few of years, I attended Collin College and during my first
              semester took an introductory course to web development. Needless to say, I got hooked. I ended up changing my major to web development and
              here I am now, making websites.
            </p>
          </div>
          {Myself && <div className='about-image'>
            <img src={Myself} alt="A picture of myself" />
          </div>}
        </div>
      </div>
      
      <div>
        <div className="about-content">
          <div className="about-text">
            <h2>Hobbies</h2>
            <p>
              I enjoy Rubik's cube puzzles and have enjoyed them since I was in high school. During my high school years, I could solve a cube in less than 20 seconds.
              After high school, however, I haven't been able to get back into
              speedcubing. It would probably take me around a minute now to solve
              one. I also enjoy playing video games. Typically I play challenging
              platformers and metroidvanias, but my favorite game is Elden Ring.
              I've put so many hours into that game despite not being the typical
              genre I play. It is truly a masterpiece.
            </p>
          </div>
          {EldenRing && <div className='about-image'>
            <img src={EldenRing} alt="A picture of Elden Ring" />
          </div>}
        </div>
      </div>
      <div>
        <div>
          <h2>For visiting my page, have some pictures of my cats</h2>
        </div>
      </div>
      <div className="about-swiper-container">
        <button ref={prevRef} className="about-swiper-button about-swiper-prev" type="button">
          ‹
        </button>
        <Swiper
          modules={[Navigation]}
          navigation={{ prevEl: prevRef.current, nextEl: nextRef.current }}
          onBeforeInit={(swiper) => {
            swiperRef.current = swiper;
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
          }}
          spaceBetween={50}
          slidesPerView={1}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
        >
          {images.map((imgSrc, index) => (
            <SwiperSlide key={index}>
              <img src={imgSrc} alt={`Cat ${index + 1}`} />
            </SwiperSlide>
          ))}
        </Swiper>
        <button ref={nextRef} className="about-swiper-button about-swiper-next" type="button">
          ›
        </button>
      </div>
    </section>
  );
}

export default About;
