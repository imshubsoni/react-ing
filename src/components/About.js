import User from "./User";
import UserClass from "./UserClass";

const About = () => {
  return (
    <div className="about-container">
      <h1 className="about-heading">About Us</h1>
      <p>This is about us page.</p>
      <User name={"Shubham Soni (function)"} location={"Udaipur"} />
      <UserClass name={"Shubham Soni (Class)"} location={"Bengaluru"} />
    </div>
  );
};

export default About;
