import Cards from "./cars";
import Navbar from "./Navbar";
import Slider from "./Slider";
<link rel="stylesheet" href="/static/css/style.css" />
const Base=({title="Welcome",children})=>{

return (
<div className="container-fluid p-0 m-0">

<Navbar/>


{children}

</div>
)

}

export default Base;