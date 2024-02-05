import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    // ALWAYS Call Props, it is necessary
    super(props);
  }

  render() {
    const { name, location } = this.props;

    return (
      <div className="user-card">
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h3>Contact: @imshubsoni</h3>
      </div>
    );
  }
}

export default UserClass;
