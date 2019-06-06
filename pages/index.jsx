import Cards from "../components/cards";

export default props => {
  return (
    <React.Fragment>
      <div className="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
        <h1 className="display-4">Welcome to Next.js Demo</h1>
        <p className="lead">
          A super fast React framework! Below are few examples built on NextJS.
          <br />
          Browse the examples and look through the code to see how stuff works.
          <br />
          <a href="https://nextjs.org/docs" target="_blank">
            Official Documentation
          </a>
          /
          <a href="https://github.com/zeit/next.js" target="_blank">
            Official examples on Git
          </a>
        </p>
      </div>
      <Cards />
    </React.Fragment>
  );
};
