/* eslint-disable react/function-component-definition */
// /* eslint-disable no-nested-ternary */
import { memo } from "react";
import Router from "./Router";

// function App() {
//   return <Router />;
// }

// export default App;

const App = memo(() => <Router />);

export default App;
