import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Admin from "./Admin";
import Layout from "./Components/Layout/Layout";
import Student from "./Student";

function App() {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path="/" component={Student} />
          <Route exact path="/admin" component={Admin} />
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
