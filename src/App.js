import { Switch, Route } from "react-router";
import Header from "./components/header/header.component";
import Homepages from "./pages/homepages/homepages.components";
import Characters from "./pages/characters/characters.component";
import AboutUs from "./pages/about-us/about-us.component";

const App = () => {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/" component={Homepages} />
        <Route exact path="/characters" component={Characters} />
        <Route exact path="/aboutus" component={AboutUs} />
      </Switch>
    </>
  );
};

export default App;
