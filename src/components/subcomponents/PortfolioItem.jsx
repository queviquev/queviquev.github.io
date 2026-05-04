import { useState } from "react";

function PortfolioItem({ title, date, description, img, href, side = "left", isOpen, onToggle }) {

    return (
        <div className={`container ${side} ${isOpen ? "open" : "closed"}`}>
            <button
                type="button"
                className="timeline-date"
                aria-expanded={isOpen}
                onClick={onToggle}
            >
                {date}
            </button>
            <div className={`content ${isOpen ? "open" : "closed"}`}>
                <h2>{title}</h2>
                <p>{description}</p>
                <div className='cardImage'>
                    <img src={img} alt={title} />
                </div>
                <button className="btn project-link">
                    <a href={href} target="_blank" rel="noopener noreferrer">
                        View Project
                    </a>
                </button>
            </div>
        </div>
    )
}

export default PortfolioItem;