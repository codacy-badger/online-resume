import React from "react";

class Repo extends React.Component {
  render() {
    let repo = this.props.repo;
    console.log(repo);
    let barStyle = { width: 200, height: 20, border: "1px solid dimgrey", padding: 0 };
    let total = 0;
    let parts = [];
    let lang = [];
    repo.languages.edges.forEach(edge => {
      total += edge.size;
    })
    repo.languages.edges.forEach(edge => {
      let percent = Math.floor(edge.size * 100 / total);
      percent = percent < 2 ? 2 : percent;
      parts.push(
        <div key={edge.node.name}
          style={{ display: 'inline-block', backgroundColor: edge.node.color,height: 20 , width: percent + "%" }}
        />
      );
      lang.push(<strong style={{color: edge.node.color}}>{edge.node.name} </strong>);
    });
    let bar = <div style={barStyle}>{parts}</div>;
    return (
      <article className="git-repo">
        <h2>
          <a href={repo.url}>{repo.name}</a>
        </h2>
        <p>{repo.description}</p>
        <p>{lang}</p>
        {bar}
      </article>
    );
  }
}

export default Repo;