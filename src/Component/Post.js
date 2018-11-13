import React, { Component } from "react";

class Post extends Component {
  constructor() {
    super();
    this.state = {
      data: []
    };
  }

  componentWillMount() {
    this.getItems();
  }

  getItems() {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(results => results.json())
      .then(results => {
        this.setState({ data: results });
        console.log(results);
      });
  }

  render() {
    return (
      <div>
        <table className="table-design">
          {this.state.data.map((item, index) => (
            <tr>
              <td>{item.id}</td>
              <td>{item.title}</td>
              <td>{item.body}</td>
            </tr>
          ))}
        </table>
      </div>
    );
  }
}

export default Post;
