
const Hero = () => {
    return (
        <div className="hero min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img
      src="/src/assets/Hero.jpg" />
    <div>

      <h1 className="text-xl sm:text-5xl font-bold">Inspire, express, and connect—your story </h1>
      <p className="py-6">
      These services can be tailored to meet the specific needs and challenges of each client, providing valuable expertise and support to drive business success.
      </p>
      <button className="btn btn-outline">Free Consult</button>
    </div>
  </div>
</div>
    );
};

export default Hero;