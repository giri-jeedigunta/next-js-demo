import React, { Component } from "react";
import axios from "axios";
import BackToHome from "../components/backToHome";
import UserTable from "../components/userTable";

class UsersListWithAxios extends Component {
  static async getInitialProps() {
    const { data: userData } = await axios.get(
      "https://reqres.in/api/users?per_page=12"
    );

    return {
      userList: userData.data
    };
  }
  render() {
    return (
      <React.Fragment>
        <div className="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
          <BackToHome />
          <br />
          <h1 className="display-4">Axios Fetch</h1>
          <p className="lead">
            The below data is fetched from
            <a href="https://reqres.in/" target="_blank">
              https://reqres.in/
            </a>
            <br />
            using Axios Get and
            <a
              href="https://nextjs.org/docs#fetching-data-and-component-lifecycle"
              target="_blank"
            >
              getInitialProps
            </a>
            .
          </p>
        </div>
        <UserTable data={this.props.userList} />
      </React.Fragment>
    );
  }
}

export default UsersListWithAxios;
