import WebPage from "./components/WebPage";

import { NavBarProvider } from "./contexts/NavBarContext";

import "./styles/App.css";

function App() {
  return (
    <div className="app">
      <NavBarProvider>
        <WebPage />
      </NavBarProvider>
    </div>
  );
}

export default App;
