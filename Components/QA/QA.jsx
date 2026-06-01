'use client'
import React, { useState } from "react";
import "./QA.scss";
import Image from "next/image";

const images = [
    "/assets/Brief_1.jpg",
    "/assets/Brief_2.jpg",
    "/assets/Brief_3.jpg",
    "/assets/Brief_4.jpg",
    "/assets/Brief_5.jpg"
];

const QA = () => {
    const [current, setCurrent] = useState(0);

    const nextSlide = () => setCurrent((current + 1) % images.length);
    const prevSlide = () => setCurrent((current - 1 + images.length) % images.length);
    return (
        <div className="Container" data-testid="qa-container">
            <section id="qa-projects" className="id_projects" data-testid="qa-section">
                <div className="content" data-testid="qa-content">
                    {/* Título */}
                    <h2 className="title" data-testid="qa-title">
                        ¿Qué es E2E Testing?
                    </h2>
                    {/* Grid de proyectos */}
                    <div className="projects-grid" data-testid="qa-projects-grid">
                        {/* Proyecto 1 */}
                        <div className="project-card" data-testid="qa-project-card">
                            <div className="project-content" data-testid="qa-project-content">
                                <h3 className="project-title" data-testid="qa-project-title">E2E TESTING</h3>
                                <div className="carousel" data-testid="qa-carousel">
                                    <button className="carousel-button" onClick={prevSlide} data-testid="carousel-prev-btn">{"<"}</button>
                                    <Image
                                        src={images[current]}
                                        alt={`slide-${current}`}
                                        width={500}
                                        height={300}
                                        style={{ objectFit: "cover" }}
                                        loading="eager"
                                        className="carousel-image"
                                        data-testid={`carousel-image-${current}`}
                                    />
                                    <button className="carousel-button" onClick={nextSlide} data-testid="carousel-next-btn">{">"}</button>
                                </div>
                            </div>
                        </div>
                        <a href="/assets/Brief_Guide_E2E_Testing_Key_Takeaways.pptx" download data-testid="download-brief-link">
                            <p className="download_button" data-testid="download-button"><img src="/assets/download.png" alt="Download Icon" style={{ height: "20px" }} /> 'Brief Guide E2E Testing'</p>
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default QA;