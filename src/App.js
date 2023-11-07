import {
  createBrowserRouter,
  Link,
  Outlet,
  Route,
  RouterProvider,
  Routes,
} from "react-router-dom";
import "./App.css";
import logo from "./logo.svg";

const router = createBrowserRouter([{ path: "*", Component: Root }]);

function App() {
  return <RouterProvider router={router} />;
}

function Root() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Route>
    </Routes>
  );
}

function Layout() {
  const titleText = "Learn React";
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
        <Outlet />
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          This is the NodeSpell test app created by{" "}
          <code>create-react-app</code>
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          {titleText}
        </a>
      </header>
      <Footer />
    </div>
  );
}

function NavBar() {
  const navStyle = {
    padding: "10px",
    marginBottom: "15px",
  };

  const ulStyle = {
    listStyleType: "none",
    margin: 0,
    padding: 0,
    overflow: "hidden",
  };

  const liStyle = {
    float: "left",
  };

  const linkStyle = {
    display: "block",
    color: "white",
    textAlign: "center",
    padding: "14px 16px",
    textDecoration: "none",
  };

  return (
    <nav style={navStyle}>
      <ul style={ulStyle}>
        <li style={liStyle}>
          <Link to="/" style={linkStyle}>
            Home
          </Link>
        </li>
        <li style={liStyle}>
          <Link to="/about" style={linkStyle}>
            About
          </Link>
        </li>
        <li style={liStyle}>
          <Link to="/projects" style={linkStyle}>
            Projects
          </Link>
        </li>
        <li style={liStyle}>
          <Link to="/contact" style={linkStyle}>
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}

function Footer() {
  return (
    <footer>
      <p>Footer</p>
    </footer>
  );
}

function Home() {
  return (
    <>
      <h1>Welcome!</h1>
      <p>This is a demo section for router.</p>
    </>
  );
}

function About() {
  return (
    <>
      <h1>About</h1>
      <p>Some information about me.</p>
    </>
  );
}

function Projects() {
  return (
    <>
      <h1>Projects</h1>
      <p>Here shows the projects</p>
    </>
  );
}

function Contact() {
  return (
    <>
      <h1>Contact</h1>
      <p>Contact information</p>
    </>
  );
}

export default App;
