import "./About.css";

const About = () => {
  return (
    <section className="about">
      <div className="about__container">
        <img src="your-photo.jpg" alt="Author photo" className="about__image" />
        <div className="about__content">
          <h2 className="about__title">About the author</h2>
          <p className="about__description">Your description here...</p>
        </div>
      </div>
    </section>
  );
};

export default About;
