import React from "react";
import "../About-Me/Aboutme.scss";
import {Data_TechTools} from "./Data_TechTools";

const TechTools = () => {
  return (
    <div className="drivesMe">
      <p className="subtitleRight">TECHNOLOGIES I WORK WITH</p>
      <div className="gridTechTools">
        {Data_TechTools.map((tool, index) => (
          <div key={index} className="techTool">
            <img src={tool.icon} alt={tool.name} />
            <p>{tool.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechTools;
