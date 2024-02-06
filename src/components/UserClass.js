import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    // ALWAYS Call Props, it is necessary
    super(props);

    this.state = {
      count: 0,
      userInfo: {
        name: "default",
        location: "default",
        avatar_url: "https://www.google.com/image1.jpg",
      },
    };
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/imshubsoni");

    const json = await data.json();

    this.setState({
      userInfo: json,
    });
  }

  render() {
    const { name, location, avatar_url } = this.state.userInfo;

    return (
      <div className="user-card">
        <img src={avatar_url} />
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h3>Contact: @imshubsoni</h3>
      </div>
    );
  }
}

export default UserClass;
