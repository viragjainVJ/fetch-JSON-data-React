import React, { Component } from "react";
import axios from "axios";

class Post extends Component {
  constructor() {
    super();
    this.state = {
      data: []
    };
  }

  componentWillMount() {
    //this.getItems();
    this.getItemDetails();
  }

  //Using Fetch
  getItems() {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(results => results.json())
      .then(results => {
        this.setState({ data: results });
        console.log(results);
      });
  }

  //Using Axios
  getItemDetails() {
    axios.get("https://jsonplaceholder.typicode.com/posts").then(result => {
      this.setState({
        data: result.data
      });
      console.log(result);
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
