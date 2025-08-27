import renderApp from "../components/index.jsx";
import HeaderFooter from "../components/HeaderFooter.jsx";
import RatingForm from "./RatingForm.jsx";

export default function App() {
  return (
    <HeaderFooter>
      <RatingForm />
    </HeaderFooter>
  );
}

renderApp(App);
