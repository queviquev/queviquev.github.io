import { useEffect, useState } from "react";
import PortfolioItem from "./subcomponents/PortfolioItem";
import Spring2024Thumbnail from "./images/Spring2024Thumbnail.png";
import UdemyThumbnail from "./images/UdemyPortfolioThumbnail.png";
import MeowShelter from "./images/MeowShelterThumbnail.png";
import SevenFalls from "./images/SevenFallsThumbnail.png";
import PythonFinal from "./images/FinalProject.png";
import Platformer from "./images/platformer.png";

function Portfolio() {
  const [itemStates, setItemStates] = useState([false, false, false, false, false, false, false]);
  const [isScrolled, setIsScrolled] = useState(false);
  const hasOpenItem = itemStates.some(state => state);

  useEffect(() => {
    if (!hasOpenItem) {
      setIsScrolled(false);
      return;
    }

    const onScroll = () => setIsScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [hasOpenItem]);

  const toggleAll = () => {
    const allOpen = itemStates.every(state => state);
    setItemStates(itemStates.map(() => !allOpen));
  };

  const toggleItem = (index) => {
    setItemStates(prev => prev.map((state, i) => i === index ? !state : state));
  };

  return (
    <>
      <div className="portfolio-header">
        <h1 className="page-title">My Portfolio</h1>
        <h2>My Journey Through Web Development</h2>
        <p>Here you can find some of the projects I've worked on in courses I've taken. I decided to set it up as a timeline to showcase my progress over time and to remind myself the journey it has been. Click on any date to view the details of that project or click the "Expand All" button to view all projects.</p>
        <button onClick={toggleAll} className="btn expand-collapse-all">
          {itemStates.every(state => state) ? "Collapse All" : "Expand All"}
        </button>
      </div>
      <section id="portfolio" className={`cardBody timeline${hasOpenItem && isScrolled ? " timeline-scrolled" : ""}`}>
        <PortfolioItem
          side="left"
          date="Spring 2024"
          title="Final Project for Intro to Web Dev"
          description="My first web development course was a great experience. At first I didn't consider web development as an option, as I originally was majoring in database development. However, I ended up enjoying this course more than I originally thought I would. This was my final project for the course. I know it's not the best, but I'll leave it it the way it is as a reminder how far I've come. I reuploaded it to GitHub Pages so that I can still access it as the original project was taken down when the course ended."
          href="https://queviquev.github.io/IntroWebDevFinal/"
          img={Spring2024Thumbnail}
          isOpen={itemStates[0]}
          onToggle={() => toggleItem(0)}
        />
        <PortfolioItem
          side="right"
          date="Summer 2024"
          title='My First "Portfolio"'
          description='During the first half of my summer break, I decided to take an online course on Udemy to keep practicing web development. While this is a rather simple "portfolio" with simple projects, I feel like this course has helped and continued to help me with using HTML and CSS. It was also my first introduction to Bootstrap.'
          href="https://queviquev.github.io/html-portfolio/"
          img={UdemyThumbnail}
          isOpen={itemStates[1]}
          onToggle={() => toggleItem(1)}
        />
        <PortfolioItem
          side="left"
          date="Fall 2024"
          title="Meow Meow Shelter"
          description="This was a lab assignment assigned in IMED-1341. The assignment was
                to create a sample page for a group or organization. I made mine for
                a fictional shelter for cats. Personally this was one of my favorite
                assignments from the course. I just like how it turned out, and it
                allowed for me to look up some internet cats."
          href="https://queviquev.github.io/Lab-2--CSS-Grid-Layout/"
          img={MeowShelter}
          isOpen={itemStates[2]}
          onToggle={() => toggleItem(2)}
        />
        <PortfolioItem
          side="right"
          date="Fall 2024"
          title="Seven Falls"
          description="This was another lab assignment for IMED-1341. The assignment was to
                create a website that promotes a vacation location that uses anchor
                links for navigation. I was really proud with how it turned out,
                especially the navigation bar that helps navigate faster through the
                page as it is relatively long. I also love the images that were
                provided by a good friend of mine."
          href="https://queviquev.github.io/vacation_lab/"
          img={SevenFalls}
          isOpen={itemStates[3]}
          onToggle={() => toggleItem(3)}
        />
        <PortfolioItem
          side="left"
          date="Fall 2024"
          title="Intro to Python Final Project"
          description="This was my final project for my Python course. The assignment was to create a program that uses the skills we learned in the course. Since I was curious about using web frameworks from other languages, I decided to use Flask to create a simple web application. The project was a portfolio page that displays some of the projects I have done so far up to this point."
          href="https://queviquev.pythonanywhere.com/"
          img={PythonFinal}
          isOpen={itemStates[4]}
          onToggle={() => toggleItem(4)}
        />
        <PortfolioItem
          side="right"
          date="Spring 2025"
          title="Intermediate Web Dev Project"
          description="This was my final project for my Intermediate Web Development course. In this course I learned how to use JavaScript, and for this project I decided to create a simple platformer. For previous courses I usually just created simple websites, so I wanted to try something different. I had a lot of fun creating this project, and it was really rewarding to see what else could be done with JavaScript besides just making a website more interactive."
          href="https://queviquev.github.io/FinalProjectIntermediateWeb/"
          img={Platformer}
          isOpen={itemStates[5]}
          onToggle={() => toggleItem(5)}
        />        
        <PortfolioItem
          side="left"
          date="Spring 2026"
          title="Most Recent Project"
          description="This was my final project for my Front-End Frameworks course. In this course I learned how to use React, and for this project I decided to create a portfolio page that displays some of the projects I have done so far up to this point. I wanted to create a more modern and interactive portfolio page, and I think React was a great choice for that. This project is still a work in progress, but I'm really happy with how it turned out so far. If it looks familiar, it's because this is the project you're currently viewing. I wanted to create a portfolio page that not only showcases my projects, but also demonstrates my skills in React and web development in general."
          href="https://queviquev.github.io/"
          img={PythonFinal}
          isOpen={itemStates[6]}
          onToggle={() => toggleItem(6)}
        />
      </section>
    </>
  );
}

export default Portfolio;
