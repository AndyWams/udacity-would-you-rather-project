import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { Menu, Image, Container } from "semantic-ui-react";
import { setAuthUser } from "../Actions/Auth";

class Nav extends Component {
  handleLogout = (e) => {
    e.preventDefault();
    this.props.setAuthUser(null);
  };

  render() {
    const { auth, users } = this.props;

    return (
      <Container>
        <div className="d-flex justify-content-between align-items-center py-3">
          <div className="d-flex">
            <Menu.Item name="home" className="me-4" as={NavLink} to="/" exact />
            <Menu.Item
              name="new question"
              className="me-4"
              as={NavLink}
              to="/add"
            />
            <Menu.Item
              name="leader board"
              className="me-4"
              as={NavLink}
              to="/leaderboard"
            />
          </div>
          <div className="d-flex align-items-center">
            <Menu.Item className="me-4">
              <span className="d-flex align-items-center">
                <Image
                  src={users[auth].avatarURL}
                  avatar
                  spaced="right"
                  verticalAlign="bottom"
                />
                {users[auth].name}
              </span>
            </Menu.Item>
            <Menu.Item className="cursor" onClick={this.handleLogout}>
              <span>Logout</span>
            </Menu.Item>
          </div>
        </div>
      </Container>
    );
  }
}

const mapStateToProps = ({ users, auth }) => {
  return {
    users,
    auth,
  };
};

export default connect(mapStateToProps, { setAuthUser })(Nav);
