import Banner from "./components/Banner";
import Blog from "./components/Blog";
import Card from "./components/Card";
import Footer from "./components/Footer";
import Main from "./components/Main";
import Some from "./components/Main/Some";
import Navbar from "./components/Navbar";
import Testimonial from "./components/Testimonial";

export default function App() {
  return (
    <>
      <Navbar />
      <Main />
      <Banner />
      <Card />
      <Some />
      {/* <Testimonial /> */}
      {/* <Blog /> */}
      <Footer />
    </>
  );
}
