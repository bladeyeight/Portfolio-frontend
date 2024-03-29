import { Link } from "react-router-dom";

function Header(props) {
  //inline style for the nav tag
  const navStyle = {
    display: "flex",
    justifyContent: "space-around",
    border: "3px solid black",
    padding: "8px",
    width: "90%",
    margin: "auto",
    backgroundColor: "gray",
  };

  return (
    <header>
      <h1>Sam Perry's Portfolio</h1>
      <nav style={navStyle}>
        <Link to="/">
          <div>HOME</div>
        </Link>
        <Link to="/about">
          <div>CERTIFICATIONS & ABOUT ME</div>
        </Link>
        <Link to="/projects">
          <div>SIDE-PROJECTS</div>
        </Link>
        <Link to ="/resume">
          <div>RESUME</div>
        </Link>
      </nav>
    </header>
  );
}

export default Header;