'use client'
import React, { useState } from "react";
import "./QA.scss";

const imagesTwo = [
    "/assets/E2E_BestPractices_1.png",
    "/assets/E2E_BestPractices_2.png",
    "/assets/E2E_BestPractices_3.png",
    "/assets/E2E_BestPractices_4.png",
    "/assets/E2E_BestPractices_5.png",
    "/assets/E2E_BestPractices_6.png",
    "/assets/E2E_BestPractices_7.png",
];
const QA_Second = () => {
    const [currentTwo, setCurrentTwo] = useState(0);

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