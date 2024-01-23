import React from "react";
import fst1 from "../images/photo-1623278589094-6741f418d3bf.avif";

const Undp = () => {
  return (
    <>
      <div className="row ">
        <div className="col-6" style={{ width: "400px", marginTop :'70px',marginLeft:'20px' }}>
          <h1 className="">The Goals </h1>
          <p
            className=""
            style={{ fontFamily: "ui-rounded", fontSize: "23px", marginTop : '24px',marginLeft : '24px'}}
          >
            As the United Nations lead agency on international development, UNDP
            works in 170 countries and territories to eradicate poverty and
            reduce inequality. We help countries to develop policies, leadership
            skills, partnering abilities, institutional capabilities, and to
            build resilience to achieve the Sustainable Development Goals. Our
            work is concentrated in three focus areas; sustainable development,
            democratic governance and peace building, and climate and disaster
            resilience.
          </p>
        </div>
        <img
          className="col-6"
          src={fst1}
          style={{ height: "550px", width: "700px",marginLeft :'200px',marginTop :'70px' }}
        />
      </div>
      <div>
        <h4> Limit Global Warming:</h4>
        <p>
          Limit global temperature increase to well below 2 degrees Celsius
          above pre-industrial levels, with efforts to limit it to 1.5 degrees
          Celsius. This goal is in line with the Paris Agreement, which aims to
          prevent the most severe impacts of climate change.
        </p>
        <h4>Transition to Renewable Energy:</h4>
        <p>
          Increase the use of renewable energy sources such as solar, wind,
          hydro, and geothermal power. Transitioning away from fossil fuels
          reduces greenhouse gas emissions and mitigates climate change.
        </p>
        <h4>Energy Efficiency:</h4>
        <p>
          Improve energy efficiency in all sectors, including industry,
          transportation, and buildings. Energy efficiency measures reduce
          overall energy consumption and contribute to lowering carbon
          emissions.
        </p>
        <h4>Reforestation and Afforestation:</h4>
        Promote reforestation (replanting trees in deforested areas) and
        afforestation (planting trees in areas that were not previously
        forested) to enhance carbon sequestration and biodiversity.
        <h4>Sustainable Agriculture:</h4>
        <p>
          Implement sustainable agricultural practices that reduce
          deforestation, minimize the use of chemical inputs, and promote soil
          conservation. Sustainable agriculture contributes to food security and
          helps mitigate climate change.
        </p>
        <h4>Capture and Storage (CCS):</h4>
        <p>
          Invest in technologies and strategies for carbon capture and storage
          to capture carbon dioxide emissions from industrial processes and
          power plants, preventing them from entering the atmosphere.
        </p>
        <h4>Adaptation and Resilience:</h4>
        <p>
          Enhance adaptive capacity and resilience to climate-related impacts,
          including sea-level rise, extreme weather events, and changes in
          precipitation patterns. This involves infrastructure planning, early
          warning systems, and community preparedness.
        </p>
        <h4>Circular Economy:</h4>
        <p>
          Promote a circular economy that minimizes waste and encourages the
          reuse and recycling of materials. Reducing waste and promoting
          sustainable consumption patterns contribute to lower carbon
          footprints.
        </p>
        <h4>International Cooperation:</h4>
        <p>
          Foster international cooperation and collaboration to address climate
          change collectively. This involves supporting developing nations in
          their efforts to adapt to and mitigate climate change, as well as
          sharing knowledge and technologies.
        </p>
        <h4>Public Awareness and Education:</h4>
        <p>
          Increase public awareness and education on climate change issues, its
          impacts, and the importance of individual and collective actions.
          Informed and engaged communities are more likely to support and adopt
          sustainable practices.
        </p>
        <h4>Policy and Regulation:</h4>
        <p>
          Advocate for and implement policies and regulations that incentivize
          and enforce sustainable practices. Governments play a crucial role in
          creating a regulatory framework that supports climate action.
        </p>
        <h4>Innovation and Research:</h4>
        <p>
          Invest in research and innovation to develop new technologies and
          solutions for climate mitigation and adaptation. Scientific
          advancements can drive breakthroughs in sustainable practices.
        </p>
      </div>
    </>
  );
};

export default Undp;
