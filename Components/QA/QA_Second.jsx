'use client'
import React, { useState } from "react";
import "./QA.scss";

const images = [
    "/carouseltwo/slide1.png",
    "/carouseltwo/slide2.png",
    "/carouseltwo/slide3.png",
    "/carouseltwo/slide4.png",
    "/carouseltwo/slide5.png"
];
const imagesTwo = [
    "/carousel/slide1.png",
    "/carousel/slide2.png",
    "/carousel/slide3.png",
    "/carousel/slide4.png",
    "/carousel/slide5.png",
    "/carousel/slide6.png",
    "/carousel/slide7.png",
];
const QA_Second = () => {
    const [current, setCurrent] = useState(0);
    const [currentTwo, setCurrentTwo] = useState(0);

    const nextSlide = () => setCurrent((current + 1) % images.length);
    const prevSlide = () => setCurrent((current - 1 + images.length) % images.length);
    const nextSlideTwo = () => setCurrentTwo((currentTwo + 1) % imagesTwo.length);
    const prevSlideTwo = () => setCurrentTwo((currentTwo - 1 + imagesTwo.length) % imagesTwo.length);
    return (
        <div className="Container">
            <section id="qa-projects" className="id_projects">
                <div className="content" >
                    {/* Título */}
                    <h2 className="title">
                        Steps and Best Practices
                    </h2>
                    {/* Grid de proyectos */}
                    <div className="projects-grid">
                        {/* Proyecto 2 */}
                        <div className="project-card">
                            <div className="project-content">
                                <h3 className="project-title">BEST PRACTICES</h3>
                                <div className="carousel">
                                    <button className="carousel-button" onClick={prevSlideTwo}>{"<"}</button>
                                    <img
                                        src={imagesTwo[currentTwo]}
                                        alt={`slide-${currentTwo}`}
                                        className="carousel-image"
                                        style={{ width: "500px", height: "auto" }} />
                                    <button className="carousel-button" onClick={nextSlideTwo}>{">"}</button>
                                </div>
                            </div>
                        </div>
                        <a href="/carouseltwo/E2E_Testing_Best_Practices.pptx" download className="download_button">
                            <p>Descargar Presentación: 'Steps & Best Practices: E2E Testing'</p>
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default QA_Second;