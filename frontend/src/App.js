import Header from "./components/Header";
import NotesListPage from "./pages/NotesListPage";
import { HashRouter, Route } from "react-router-dom";
import NotePage from "./pages/NotePage";
import "./App.css";

function App() {
  return (
    <HashRouter>
      <div className="container dark">
        <div className="app">
          <Header />
          <Route path="/" exact component={NotesListPage} />
          <Route path="/note/:id" component={NotePage} />
        </div>
      </div>
    </HashRouter>
  );
}

export default App;
