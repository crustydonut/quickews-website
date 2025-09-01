import renderApp from "../components/index.jsx";
import HeaderFooter from "../components/HeaderFooter.jsx";
import Guide from "./Guide.jsx";

export default function App() {
  return <HeaderFooter>
    <Guide />
  </HeaderFooter>;
}

renderApp(App);
