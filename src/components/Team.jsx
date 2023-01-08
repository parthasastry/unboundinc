import React from "react";
import Asutosh from "../assets/asutosh.jpeg";
import Vidhya from "../assets/vidhya.jpeg";

const Team = () => {
  return (
    <>
      <div name="team">
        <p className="uppercase font-bold text-xl text-center">Team</p>
        <div className="grid md:grid-cols-2 max-w-[1240px] text-center py-2">
          <div className="p-2">
            <img src={Asutosh} alt="asutosh" />
            <p className="text-sm">
              He has over 20 years in the IT Industry having worked for
              companies like IBM Global and Cognizant to name a few. He has a
              very rich Agile Experience of over 10 years where he has been a
              Scrum Master and Agile Coach and an Agile Delivery manager. The
              Unique quality he brings to these trainings are “experiential in
              nature” with a Socrates like quality to it, thereby allowing
              participants DISCOVER the world of Agile and Scrum. He is based
              out of Pune and would be the main trainer and Coach for the Scrum
              Whisperer program.
            </p>
          </div>
          <div className="p-2">
            <img src={Vidhya} alt="asutosh" />
            <p className="text-sm">
              The founder and CEO of Unbound Solutions, a woman owned startup
              committed to empowerment of women in workforce, and an MBA and a
              Certified Scrum Master & SAFe certified Scrum Master. Has over 15
              years in Transformational Coaching both in personal Transformation
              and Organizational Transformation. Vidya has a commitment for
              empowering women as she believes a happy woman, leads to a happy
              home and happy world.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Team;
