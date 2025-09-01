import renderApp from "../components/index.jsx";
import Steps from "./Steps.jsx";
import HeaderFooter from "../components/HeaderFooter.jsx";

export default function App() {
  return <HeaderFooter >
    <Steps />
  </HeaderFooter>;
}

renderApp(App);
