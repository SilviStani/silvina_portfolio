'use client'
import React, { useState } from "react";
import "./QA.scss";

const images = [
    "/assets/E2E_BriefGuide_1.png",
    "/assets/E2E_BriefGuide_2.png",
    "/assets/E2E_BriefGuide_3.png",
    "/assets/E2E_BriefGuide_4.png",
    "/assets/E2E_BriefGuide_5.png"
];

const QA = () => {
    const [current, setCurrent] = useState(0);

    const nextSlide = () => setCurrent((current + 1) % images.length);
    const prevSlide = () => setCurrent((current - 1 + images.length) % images.length);
    return (
        <div className="Container">
            <section id="qa-projects" className="id_projects">
                <div className="content" >
                    {/* Título */}
                    <h2 className="title">
                        ¿Qué es E2E Testing?
                    </h2>
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