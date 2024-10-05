import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import RegistrationForm from "./components/controlled and uncontrolled/ControlledComponenet";
import FileUploadForm from "./components/controlled and uncontrolled/UncontrolledComponent";
import withAuth from "./components/hoc/withAuth";
import RegistrationFormm from "./components/controlled and uncontrolled/example";

function App() {
  const AuthenticatedUncontolled = withAuth(FileUploadForm);
  return (
    <div className="App">
      <Router>
        <nav>
          <ul style={{ display: "flex", flexDirection: "row", gap: "20px" }}>
            <li>
              <Link to="/form">Controlled component</Link>
            </li>
            <li>
              <Link to="/uncontrol">UnControlled Component</Link>
            </li>
            <li>
              <Link to="/contact-card">HOC</Link>
            </li>
            <li>
              <Link to="/student">Use Callback</Link>
            </li>
            <li>
              <Link to="/scroll">Use Memo</Link>
            </li>
            <li>
              <Link to="/debounce">Use effect</Link>
            </li>
            <li>
              <Link to="/callback">Use Layout Effect</Link>
            </li>
            <li>
              <Link to="/callback">Use Context</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/form" element={<RegistrationForm />} />
          <Route path="/uncontrol" element={<AuthenticatedUncontolled/>}/>
          <Route path="/" element={<>Login</>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
