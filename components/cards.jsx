import Link from "../utils/activeLink";

const Cards = () => {
  return (
    <div className="container">
      <div className="card-deck mb-3 text-center">
        <div className="card mb-4 shadow-sm">
          <div className="card-header">
            <h4 className="my-0 font-weight-normal">3rd Party Fetch</h4>
          </div>
          <div className="card-body">
            <p>
              Learn about the accessing data using isomorphic fetch, aynsc
              await.
            </p>
            <Link href="/isomorphic-fetch">
              <button
                type="button"
                className="btn btn-lg btn-block btn-primary"
              >
                Examples
              </button>
            </Link>
          </div>
        </div>
        <div className="card mb-4 shadow-sm">
          <div className="card-header">
            <h4 className="my-0 font-weight-normal">Axios</h4>
          </div>
          <div className="card-body">
            <p>Setting up axios to get data from 3rd party apis.</p>
            <Link href="/axios-fetch">
              <button
                type="button"
                className="btn btn-lg btn-block btn-primary"
              >
                Examples
              </button>
            </Link>
          </div>
        </div>
        <div className="card mb-4 shadow-sm">
          <div className="card-header">
            <h4 className="my-0 font-weight-normal">Node Service</h4>
          </div>
          <div className="card-body">
            <p>
              Learn about the accessing data with node express apis. Also covers
              overriding existing server config using custom server.js
            </p>
            <Link href="/node-fetch">
              <button
                type="button"
                className="btn btn-lg btn-block btn-primary"
              >
                Examples
              </button>
            </Link>
          </div>
        </div>
        <div className="card mb-4 shadow-sm">
          <div className="card-header">
            <h4 className="my-0 font-weight-normal">Dynamic Import</h4>
          </div>
          <div className="card-body">
            <p>Dynamic importing of components</p>
            <Link href="/dynamic-import">
              <button
                type="button"
                className="btn btn-lg btn-block btn-primary"
              >
                Examples
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Cards;
