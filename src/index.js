import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import axios from 'axios'
import { Provider } from 'react-redux'
import store from './redux/store'
// import Layout from './modules/layout'
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';

import { transactionIdgenerator } from "./modules/common/utils";



// axios.defaults.baseURL = "http://10.222.184.238:8000/"
// axios.defaults.headers = {
//   Authorization: 'Basic Q2hhbm5lbElzbGFuZDpDM0c1VE8zRw=='
// }
// axios.defaults.params = {
//   lob: "CIMobility",
//   consumerName: "CI",
//   programmeName: "Butterfly",
//   customerMigrated: true,
//   consumerTransactionId: transactionIdgenerator(),
//   accountType: 1,
//   flag: 2,
//   type: 11
// }
axios.interceptors.request.use(function (config) {
  // Do something before request is sent
  return config;

}, function (error) {
  // Do something with request error
  return Promise.reject(error);
});

// Add a response interceptor
axios.interceptors.response.use(function (response) {
  // Any status code that lie within the range of 2xx cause this function to trigger
  // Do something with response data
  return response;
}, function (error) {
  // Any status codes that falls outside the range of 2xx cause this function to trigger
  // Do something with response error
  return Promise.reject(error);
});

ReactDOM.render(
  <Provider store={store}>
    {/* <Layout> */}
    <App />
    {/* </Layout> */}
  </Provider>,
  document.getElementById("root")
);
