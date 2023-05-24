import Base from "../components/Base";
import Cards from "../components/cars";
import Slider from "../components/Slider";
import Copy from "./Copy";
import ContactUs from "./cmp/ContactUs";
import Links from "./Links";
import About from "./About";
<link rel="stylesheet" href="/static/css/style.css" />

const Home=()=>(
    <Base>
        <Slider />
        <Cards />
        <ContactUs />
        <Links />
        <About />
        <Copy />

    </Base>
)
export default Home;