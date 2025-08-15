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
const QA = () => {
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
                        Proyectos QA
                    </h2>
                    <p className="description">
                        ¿Qué es E2E Testing?
                    </p>
                    {/* Grid de proyectos */}
                    <div className="projects-grid">
                        {/* Proyecto 1 */}
                        <div className="project-card">
                            <div className="project-content">
                                <h3 className="project-title">E2E TESTING</h3>
                                <div className="carousel">
                                    <button className="carousel-button" onClick={prevSlide}>{"<"}</button>
                                    <img
                                        src={images[current]}
                                        alt={`slide-${current}`}
                                        style={{ width: "500px", height: "auto" }}
                                    />
                                    <button className="carousel-button" onClick={nextSlide}>{">"}</button>
                                </div>
                            </div>
                        </div>
                        <a href="/carousel/Brief_Guide_E2E_Testing_Key_Takeaways.pptx" download >
                            <p className="download_button">Descargar Presentación: 'Brief Guide E2E Testing'</p>
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default QA;