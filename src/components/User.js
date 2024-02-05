import { useState } from "react";

const User = (props) => {
  const { name, location } = props;

  const [count, setCount] = useState(0);
  const [count2] = useState(1);

  return (
    <div className="user-card">
      <h4>Count: {count}</h4>
      <h4>Count2: {count2}</h4>
      <h2>Name: {name}</h2>
      <h3>Location: {location}</h3>
      <h3>Contact: @imshubsoni</h3>
    </div>
  );
};

export default User;
