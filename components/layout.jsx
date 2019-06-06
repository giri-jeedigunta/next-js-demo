import NavBar from "./navBar";

export default ({ children }) => {
  return (
    <div>
      <NavBar />
      {children}
    </div>
  );
};
