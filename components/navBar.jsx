import Head from "next/head";
import Link from "../utils/activeLink";

const NavBar = () => {
  return (
    <React.Fragment>
      <Head>
        <title>Next.JS Demo | Giri Jeedigunta</title>
        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
          integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
          crossorigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
        />
      </Head>
      <div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom shadow-sm">
        <h5 className="my-0 mr-md-auto font-weight-normal">Next.JS | Demo</h5>
        <Link href="/contact-me" activeClassName="active">
          <a className="btn btn-outline-primary">Contact Me!</a>
        </Link>
      </div>
    </React.Fragment>
  );
};

export default NavBar;

/* 

        <nav className="my-2 my-md-0 mr-md-3">
          <style jsx>{`
            .linkActive:after {
              content: " (current page)";
            }
          `}</style>
          <Link href="/" activeClassName="disabled border">
            <a className="btn">Introduction</a>
          </Link>
          <Link href="/fetch-api">
            <a className="btn">Fetch 3rd Party</a>
          </Link>
          <Link href="/node-express-api">
            <a className={"btn"}>Fetch Node-Express</a>
          </Link>
          <Link href="/dynamic-import">
            <a className={"btn"}>Dynamic import</a>
          </Link>
        </nav>
        */
