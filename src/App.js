import logo from "./logo.svg";
import "./App.css";
import AuthProvider from "./context/AuthProvider";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NotFound from "./Components/NotFound/NotFound";
import Home from "./Components/Home/Home";
import Services from "./Components/Services/Services";
import Header from "./Components/Shared Folder/Header";
import Login from "./Components/Pages/Login/Login";
import SignUp from "./Components/Pages/SignUp/SignUp";
import AboutUs from "./Components/Pages/AboutUs/AboutUs";
import Blogs from "./Components/Pages/Blogs/Blogs";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import Details from "./Components/Services/Details";
import Footer from "./Components/Shared Folder/Footer";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/services">
              <Services />
            </Route>
            <PrivateRoute path="/aboutUs">
              <AboutUs />
            </PrivateRoute>
            <PrivateRoute path="/blog">
              <Blogs />
            </PrivateRoute>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/sign-up">
              <SignUp />
            </Route>
            <PrivateRoute path="/details/:userId">
              <Details />
            </PrivateRoute>
            <Route exact path="*">
              <NotFound />
            </Route>
          </Switch>
          <Footer />
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
