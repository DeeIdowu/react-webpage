import React from "react";
import Container from "react-bootstrap/Container"; // to avoid importing entire library

export const Layout = props => <Container>{props.children}</Container>;

export default Layout;
