import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook ,faTwitter,faLinkedin,faInstagram } from '@fortawesome/free-brands-svg-icons'

import { Container } from 'react-bootstrap'

const Links = () => {

    return (
        <Container>
        <div className='fluid-container'>
            
                <div className='singlecol social_icon d-flex justify-content-evenly'>
                    <h3 className='py-4'>Get Connected with us on social networks</h3>
                    
                    <a href='https://www.facebook.com/'>
                        <FontAwesomeIcon icon={faFacebook} />
                    </a>
                    <a href='https://twitter.com/'>
                        <FontAwesomeIcon icon={faTwitter} />
                    </a>
                    <a href='https://www.linkedin.com/'>
                        <FontAwesomeIcon icon={faLinkedin} />
                    </a>
                    <a href='https://www.instagram.com/'>
                        <FontAwesomeIcon icon={faInstagram} />
                    </a>
                </div>



            
               

        </div>

        </Container>

    )
    }
    export default Links;