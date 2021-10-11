import React, { Component } from "react";
import { Container, Header } from "semantic-ui-react";

export class PageNotFound extends Component {
  render() {
    return (
      <Container textAlign="center">
        <Header as="h3">404</Header>
        <p>Page Not Found</p>
      </Container>
    );
  }
}

export default PageNotFound;
