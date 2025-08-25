'use client'
import React, { useState } from "react";
import "./QA.scss";

const imagesTwo = [
    "/assets/Best_Practices_1.jpg",
    "/assets/Best_Practices_2.jpg",
    "/assets/Best_Practices_3.jpg",
    "/assets/Best_Practices_4.jpg",
    "/assets/Best_Practices_5.jpg",
    "/assets/Best_Practices_6.jpg",
    "/assets/Best_Practices_7.jpg"
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
                                        style={{ width: "500px", height: "auto" }}
                                        loading="eager"
                                    />
                                    <button className="carousel-button" onClick={nextSlideTwo}>{">"}</button>
                                </div>
                            </div>
                        </div>
                        <a href="/assets/E2E_Testing_Best_Practices.pptx" download className="download_button">
                            <p><img src="/assets/download.png" alt="Download Icon" style={{ height: "20px" }}/> 'Steps & Best Practices: E2E Testing'</p>
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default QA_Second;