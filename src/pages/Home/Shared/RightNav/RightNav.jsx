import React from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import { FaFacebookF, FaGithub, FaGoogle, FaInstagram, FaTwitter } from 'react-icons/fa';
import Qzone from '../Qzone/Qzone';

const RightNav = () => {
    return (
        <div>
            <h4 className='mt-4'>Login With</h4>
            <Button variant="outline-primary" className='mt-2' ><FaGoogle></FaGoogle> Login with Google</Button><br />
            <Button variant="outline-dark" className='mt-3'><FaGithub></FaGithub> Login with Github</Button>

            <div className='mt-4'>
                <h4>Find us on</h4>
                <ListGroup>
                    <ListGroup.Item variant='primary'><FaFacebookF></FaFacebookF> Facebook</ListGroup.Item>
                    <ListGroup.Item><FaTwitter></FaTwitter> Twitter</ListGroup.Item>
                    <ListGroup.Item><FaInstagram></FaInstagram> Instagram</ListGroup.Item>
                </ListGroup>
            </div>
           <div className='mt-4'>
           <Qzone></Qzone>
           </div>
           <div>
            
           </div>
        </div>
    );
};

export default RightNav;