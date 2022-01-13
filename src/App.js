import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.scss";
import 'react-toastify/dist/ReactToastify.css';
//import Table from "./B2B/Table";
import Login from "./modules/login/Login";
import Layout from './modules/layout'
import ProtectedRoute from "./routes/ProtectedRoute";
import postpaidRoute from "./routes/postpaidRoute";
import { useSelector } from "react-redux";
import prepaidRoutes from "./routes/prepaidRoutes";


function App() {
  const postpaid_prefix = process.env.REACT_APP_POSTPAID_PREFIX
  const { optimusDetails, auth } = useSelector(state => state.auth)
  // console.log(optimusDetails)
  // console.log(auth)
  const prepaid_prefix = process.env.REACT_APP_PREPAID_PREFIX

  return (
    <div className="App">
      <Router>
        <Layout>
          <Switch>
            <Route path={`/${postpaid_prefix}`}>
              <ProtectedRoute url={postpaid_prefix} component={postpaidRoute} />
            </Route>
            <Route path={`/${prepaid_prefix}`}>
              <ProtectedRoute url={prepaid_prefix} component={prepaidRoutes} />
            </Route>
            <Route path="/" component={Login} />
            {/* <ProtectedRoute path="/b2b" component={Table} /> */}
          </Switch>
        </Layout>
      </Router>
    </div >
  );
}

export default App;
