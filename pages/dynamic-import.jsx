import dynamic from "next/dynamic";
import BackToHome from "../components/backToHome";

const HelloBundle = dynamic({
  modules: () => {
    const components = {
      Hello1: () =>
        import("../components/dynamic/hello1").then(mod => mod.Hello1),
      Hello2: () =>
        import("../components/dynamic/hello2").then(mod => mod.Hello2)
    };

    console.log("components : ", components);

    return components;
  },
  render: (props, { Hello1, Hello2 }) => (
    <React.Fragment>
      <div className="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
        <BackToHome />
        <h1>{props.title}</h1>
        <p className="lead">
          Below components are dynamically imported... Refer the_
          <a
            href="https://nextjs.org/docs#with-multiple-modules-at-once"
            target="_blank"
          >
            Dynamic import examples
          </a>
          import BackToHome from '../components/backToHome'; on Next JS
        </p>
        <div>
          <style jsx>{`
            div {
              border: 1px dashed #eee;
              padding: 10px;
            }
          `}</style>
          <Hello1 />
          <Hello2 />
        </div>
      </div>
    </React.Fragment>
  )
});

function DynamicBundle() {
  return <HelloBundle title="Dynamic Import" />;
}

export default DynamicBundle;
