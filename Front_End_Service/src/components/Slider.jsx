
import Carousel from 'react-bootstrap/Carousel';
const Slider = ()=>{

    return(

       
         <Carousel>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100 slider-image "
          src="https://integrisok.com/-/media/Blog/21-Jan/OYH_donating-blood.ashx?as=1&mh=405&mw=720&revision=60c0b51b-e5ab-44e3-bdc2-28f5c5cb5254&hash=202370654A048BB97541D3E5FC2F7072"
          alt="First slide"
        />
        <Carousel.Caption  className='carslid'>
          <h3>Blood Donors</h3>
          <p>Service to others is the rent you pay for your room here on earth.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img
          className="d-block w-100 slider-image"
          src="https://img1.goodfon.com/original/1366x768/c/9f/everything-will-be-ok-skoraya.jpg"
          alt="Second slide"
        />
        <Carousel.Caption  className='carslid'>
          <h3>Ambulance Service</h3>
          <p>Save a Life by Giving Way To An Ambulance</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 slider-image"
          src="https://miro.medium.com/max/1200/1*JktzC9GrA_l4yz0cCy8a5Q.jpeg"
          alt="Third slide"
        />
        <Carousel.Caption  className="carslid">
          <h3>Mechanical services</h3>
          <p>
          We mech— WE MOVE THE WORLD. Every nut needs a bolt. Mechanical engineers do it with less stress and strain..
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
       
       

    )
}

export default Slider;