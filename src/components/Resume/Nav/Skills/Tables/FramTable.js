import React from "react";
import Row from "./Row";

class FramTable extends React.Component {
  render() {
    return (
      <table>
        <Row skill="Symfony 2/3" score={4} />
        <Row skill="NodeJS" score={3} />
        <Row skill="ReactJS" score={2} />
      </table>
    );
  }
}

export default FramTable;