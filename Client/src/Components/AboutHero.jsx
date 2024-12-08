// import React from 'react';

const AboutHero = () => {
    return (
        <div className="hero min-h-screen">
  <div className="hero-content flex-col-reverse lg:flex-row">

    <div className="lg:ms-4">

      <h1 className="text-xl sm:text-5xl font-bold">Your Trusted 
      Advisors in <span className="text-[#0096C7]">Business Success.</span></h1>
      <p className="py-6">
      We understand the challenges and complexities that businesses face in todays dynamic marketplace. Thats why we offer a comprehensive suite of consulting services.Founded on the principles of innovation, integrity, and excellence, we are a team of  seasoned professionals.
      </p>
      <button className="btn btn-outline">Read More</button>
      <div className="flex gap-8 py-8">
        <div>
            <h1 className="font-bold text-4xl">500+</h1>
            <p className="font-medium"> Satisfied Customers</p>
        </div>
        <div>
        <h1 className="font-bold text-4xl">5+</h1>
        <p className="font-medium"> Years Experience</p>
        </div>
        <div>
        <h1 className="font-bold text-4xl">20+</h1>
        <p className="font-medium"> Projects Completed</p>
        </div>
      </div>
    </div>
  </div>
</div>
    );
};

export default AboutHero;