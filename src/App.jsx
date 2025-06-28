import Header from "./components/Header";
import LeftSidebar from "./components/Left";
import MainContent from "./components/Main";
import RightSidebar from "./components/Right";
import LoginForm from "./components/Form";
import CreateUser from "./components/CreateUser";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
   <Router>
  <div className="flex flex-col min-h-screen bg-black text-white">
    <header className="fixed top-0 left-0 right-0 z-50 h-16">
      <Header />
    </header>

    <div className="flex h-screen pt-16">
      <Routes>
        <Route
          path="/"
          element={
            <>
              <LeftSidebar />
              <MainContent />
              <div className="hidden md:block">
                <RightSidebar />
              </div>
            </>
          }
        />
        <Route
          path="/form"
          element={
            <div className="flex-1">
              <LoginForm />
            </div>
          }
        />
        <Route
          path="/create"
          element={
            <div className="flex-1">
              <CreateUser />
            </div>
          }/>
      </Routes>
              
    </div>
  </div>
</Router>
  );
}
export default App;
