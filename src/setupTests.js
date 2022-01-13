// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import Enzyme from 'enzyme';

Enzyme.configure ({ adapter: new Adapter() });

// configure({
//   adapter: new Adapter({
//     setupFiles: ["<rootDir>/src/setupTests.js"],
//     testRegex: "/*.test.js$",
//     collectCoverage: true,
//     coverageReporters: ["lcov"],
//     coverageDirectory: "test-coverage",
//     coverageThreshold: {
//       global: {
//         branches: 0,
//         functions: 0,
//         lines: 0,
//         statements: 0,
//       },
//     },
//     moduleDirectories: ["node_modules", "src"],
//   }),
// });
