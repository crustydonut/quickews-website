import renderApp from "../components/index.jsx";
import HeaderFooter from "../components/HeaderFooter.jsx";
import Hero from "./Hero.jsx";
import Benefits from "./Benefits.jsx";
import StatsAndRatings from "./StatsAndRatings.jsx";
import Faq from "./Faq.jsx";
import Support from "./Support.jsx";

export default function App() {
  return (
    <HeaderFooter>
      <Hero />
      <Support />
      <Benefits />
      <StatsAndRatings />
      <Faq />
    </HeaderFooter>
  );
}

renderApp(App);
