import local from "./configFiles/config-local";
import production from "./configFiles/config-production";
import staging from "./configFiles/config-staging";


const config = process.env.REACT_APP_STAGE === 'production'? production: process.env.REACT_APP_STAGE === 'staging' ? staging : local;

export default {
...config
};