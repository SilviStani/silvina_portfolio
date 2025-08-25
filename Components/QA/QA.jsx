'use client'
import React, { useState } from "react";
import "./QA.scss";
import Image from "next/image";
import{ images } from "./data.js";


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
                                    <Image
                                        src={images[current]}
                                        alt={`slide-${current}`}
                                        width={500}
                                        height={300}
                                        style={{ objectFit: "cover" }}
                                        loading="eager"
                                        className="carousel-image"
                                    />
                                    <button className="carousel-button" onClick={nextSlide}>{">"}</button>
                                </div>
                            </div>
                        </div>
                        <a href="/assets/Brief_Guide_E2E_Testing_Key_Takeaways.pptx" download >
                            <p className="download_button"><img src="/assets/download.png" alt="Download Icon" style={{ height: "20px" }}/> 'Brief Guide E2E Testing'</p>
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default QA;