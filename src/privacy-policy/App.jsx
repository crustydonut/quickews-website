import renderApp from "../components/index.jsx";
import HeaderFooter from "../components/HeaderFooter.jsx";
import PrivacyPolicy from "./PrivacyPolicy.jsx";

export default function App() {
  return <HeaderFooter>
    <PrivacyPolicy/>
  </HeaderFooter>;
}

renderApp(App);
