/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import React, { Component } from 'react'
import './aboutUs.css'
import { useState } from 'react'
import Form from 'react-bootstrap/Form';


function AboutUs (){
  const [contact, setContact] = useState(false);

  function onclick(){
    setContact((prevContact) => !prevContact);
  }
  
 
    return (
      <div className="about">
        <img src="https://images.unsplash.com/photo-1529380493850-45bc34ec03ea?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWFuJTIwYWxvbmV8ZW58MHx8MHx8fDA%3D" 
        className='pic' alt="" />
      <div className="text">
        <h2>Hakkında</h2>
        <h5>Front-end Developer & <span>Designer</span></h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita natus ad sed harum itaque ullam enim quas, veniam accusantium, quia animi id eos adipisci iusto molestias asperiores explicabo cum vero atque amet corporis! Soluta illum facere consequuntur magni. Ullam dolorem repudiandae cumque voluptate consequatur consectetur, eos provident necessitatibus reiciendis corrupti!</p>
        <div className="data">
          {!contact && (<a href="#" onClick={onclick} className="hire">İletişim</a>)}
        
        </div>
        {contact && (<div className="text" >
          <Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Email adresin</Form.Label>
        <Form.Control className="cnt" type="email" placeholder="name@example.com" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Önerin</Form.Label>
        <Form.Control className="cnt" as="textarea" rows={3} />
        <button className="hire" onClick={onclick}>Gönder</button>
      </Form.Group>
    </Form>
        </div>) }
        
      </div>
    </div>





    )
  
}

export default AboutUs