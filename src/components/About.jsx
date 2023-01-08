import React from "react";

const About = () => {
  return (
    <>
      <div name="about" className="w-full flex flex-col justify-between">
        <div className="grid md:grid-cols-2 max-w-[1240px] text-center m-2 gap-4">
          <div className="border rounded bg-indigo-500 text-white">
            <p className="text-2xl font-bold">Training and consulting</p>
            <p className="text-sm leading-6 p-2">
              We are pioneers in delivering software solutions by implementing
              Agile methodologies within the organization. We empower
              organizations to embrace change such that they successfully
              transition into implementing Agile within the organization. Along
              with being expert in the Agile methodology, our training
              encompasses the human element in having individuals and teams
              perform at their peak levels.
            </p>
          </div>
          <div className="border rounded bg-indigo-500 text-white">
            <p className="text-2xl font-bold">IT Staffing</p>
            <p className="text-sm leading-6 p-2">
              We give you the right kind of people who you need to fulfill on
              your vision and mission of the project / program.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
