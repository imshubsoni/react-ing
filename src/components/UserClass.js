import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    // ALWAYS Call Props, it is necessary
    super(props);

    this.state = {
      count: 0,
    };
  }

  render() {
    const { name, location } = this.props;

    return (
      <div className="user-card">
        <h4>Count: {this.state.count}</h4>
        <button
          onClick={() => {
            this.setState({
              count: ++this.state.count,
            });
          }}
        >
          Increase Count
        </button>
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h3>Contact: @imshubsoni</h3>
      </div>
    );
  }
}

export default UserClass;
