import User from "./User";
import UserClass from "./UserClass";

const About = () => {
  return (
    <div className="about-container">
      <h1 className="about-heading">About Us</h1>
      <p>This is about us page.</p>
      <User />
      <UserClass />
    </div>
  );
};

export default About;
