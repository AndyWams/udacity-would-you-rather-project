import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Grid } from "semantic-ui-react";
import { handleInitialData } from "../Actions/Index";
import { connect } from "react-redux";
import Login from "./Login";
import Nav from "./Nav";
import Home from "./Home";
import NewQuestion from "./NewQuestion";
import PlayersCard from "./PlayersCard";
import Leaderboard from "./Leaderboard";
import { PageNotFound } from "./PageNotFound";

class App extends Component {
  componentDidMount() {
    this.props.handleInitialData();
  }
  render() {
    const { auth } = this.props;
    return (
      <Router>
        <div className="App">
          {auth === null ? (
            <Route
              render={() => (
                <ContentGrid>
                  <Login />
                </ContentGrid>
              )}
            />
          ) : (
            <Fragment>
              <Nav />
              <ContentGrid>
                <Switch>
                  <Route exact path="/" component={Home} />
                  <Route path="/questions/404" component={PageNotFound} />
                  <Route
                    path="/questions/:question_id"
                    component={PlayersCard}
                  />
                  <Route path="/add" component={NewQuestion} />
                  <Route path="/leaderboard" component={Leaderboard} />
                </Switch>
              </ContentGrid>
            </Fragment>
          )}
        </div>
      </Router>
    );
  }
}

const ContentGrid = ({ children }) => (
  <Grid padded="vertically" columns={1} centered>
    <Grid.Row>
      <Grid.Column style={{ maxWidth: 550 }}>{children}</Grid.Column>
    </Grid.Row>
  </Grid>
);

function mapStateToProps({ auth }) {
  return {
    auth,
  };
}

export default connect(mapStateToProps, { handleInitialData })(App);
