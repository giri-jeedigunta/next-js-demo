import React, { Component } from "react";
import fetch from "isomorphic-unfetch";
import UserTable from "../components/userTable";
import BackToHome from "../components/backToHome";

class UsersListWithFetch extends Component {
  static async getInitialProps() {
    const res = await fetch("https://reqres.in/api/users?per_page=12");
    //const errorCode = res.statusCode > 200 ? res.statusCode : false;
    const json = await res.json();

    return {
      userList: json.data
    };
  }
  render() {
    return (
      <React.Fragment>
        <div className="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
          <BackToHome />
          <br />
          <h1 className="display-4">Isomorpheic Fetch</h1>
          <p className="lead">
            The below data is fetched from
            <a href="https://reqres.in/" target="_blank">
              https://reqres.in/
            </a>
            <br />
            using Isomorpheic Fetch npm and Next.JS
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

export default UsersListWithFetch;
