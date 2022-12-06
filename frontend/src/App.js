import Header from "./components/Header";
import NotesListPage from "./pages/NotesListPage";
import { BrowserRouter, Route } from "react-router-dom";
import NotePage from "./pages/NotePage";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="container dark">
        <div className="app">
          <Header />
          <Route path="/" exact component={NotesListPage} />
          <Route path="/note/:id" component={NotePage} />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
