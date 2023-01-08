import React from "react";

const Home = () => {
  return (
    <>
      <div name="home" className="w-full flex flex-col justify-between py-20">
        <div className="grid md:grid-cols-2 max-w-[1240px]">
          <div className="flex flex-col justify-center md:items-start w-full px-2 ">
            <p>
              <span className="font-bold text-xl">Unbound Solutions Inc.</span>{" "}
              is a provider of IT coaching and training services. The people
              form the core of the company in delivering meaningful technology
              solutions to our customers. We win customer confidence and loyalty
              by delivering high quality software solutions and services and
              taking utmost care of our deliveries.
            </p>
          </div>
          <div>
            <img
              src="https://images.pexels.com/photos/2041627/pexels-photo-2041627.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
            />
          </div>
        </div>
        <div className="px-2">
          <p className="font-bold text-xl">Vision</p>
          <p className="text-sm">
            To be the industry’s premier service provider by delivering
            solutions that is shaped by what the customer needs.
          </p>
          <p className="text-sm">
            As a woman-owned startup we ongoingly create programs that empower
            diversity and inclusion within organizations.
          </p>
          <p className="text-sm">
            We empower women to revel as entrepreneurs and leaders at the
            workplace We translate ideas into reality.
          </p>
        </div>
      </div>
    </>
  );
};

export default Home;
