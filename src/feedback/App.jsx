import renderApp from "../components/index.jsx";
import HeaderFooter from "../components/HeaderFooter.jsx";
import RatingForm from "./FeedbackForm.jsx";

export default function App() {
  return (
    <HeaderFooter>
      <RatingForm />
    </HeaderFooter>
  );
}

renderApp(App);
