import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import RegistrationForm from "./components/controlled and uncontrolled/ControlledComponenet";
import FileUploadForm from "./components/controlled and uncontrolled/UncontrolledComponent";
import withAuth from "./components/hoc/withAuth";
import UseReducerHook from "./components/useReducer/useReducer";
import UseContextHook from "./components/useContext/useContextHook";
import Timer from "./components/useEffect/useEffect";
import UseMemoComponenet from "./components/usememo/UseMemo";
import CallbackComponent from "./components/useCallback/UseCallback";
import UseeParentComponent from "./components/useEffect/useEffect";

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
              <Link to="/callback">Use Callback</Link>
            </li>
            <li>
              <Link to="/memo">Use Memo</Link>
            </li>
            <li>
              <Link to="/effect">Use effect</Link>
            </li>
            <li>
              <Link to="/useContext">Use Context</Link>
            </li>
            <li>
              <Link to="/usereducer">Use Reducer</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/form" element={<RegistrationForm />} />
          <Route path="/uncontrol" element={<AuthenticatedUncontolled/>}/>
          <Route path="/usereducer" element={<UseReducerHook/>} />
          <Route path="/useContext" element={<UseContextHook/>} />
          <Route path="/effect" element={<UseeParentComponent/>} />
          <Route path="/memo" element={<UseMemoComponenet/>} />
          <Route path="/callback" element={<CallbackComponent/>} />

          <Route path="/" element={<>Login</>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
