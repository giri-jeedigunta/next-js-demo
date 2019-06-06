import React, { Component } from "react";

class UserTable extends Component {
  render() {
    return (
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Full name</th>
            <th scope="col">Email</th>
          </tr>
        </thead>
        <tbody>
          {this.props.data.map(e => (
            <tr key={e.id}>
              <th scope="row">{e.id}</th>
              <td>
                <img src={e.avatar} />
                <style jsx>{`
                  img {
                    width: 45px;
                    height: 45px;
                    display: inline-block;
                    margin-right: 10px;
                  }
                `}</style>
                {e.first_name + " " + e.last_name}
              </td>
              <td>{e.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

export default UserTable;
