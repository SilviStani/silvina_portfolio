import React from "react";
import "../About-Me/Aboutme.scss";
import {Data_TechTools} from "./Data_TechTools";

const TechTools = () => {
  return (
    <div className="drivesMe" data-testid="tech-tools-component">
      <p className="subtitleRight" data-testid="tech-tools-title">TECHNOLOGIES I WORK WITH</p>
      <div className="gridTechTools" data-testid="tech-tools-grid">
        {Data_TechTools.map((tool, index) => (
          <div key={index} className="techTool" data-testid={`tech-tool-${tool.name.toLowerCase().replace(/\s+/g, '-')}`} id={`tool-${index}`}>
            <img src={tool.icon} alt={tool.name} data-testid={`tech-tool-icon-${tool.name.toLowerCase().replace(/\s+/g, '-')}`} />
            <p data-testid={`tech-tool-name-${tool.name.toLowerCase().replace(/\s+/g, '-')}`}>{tool.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechTools;
