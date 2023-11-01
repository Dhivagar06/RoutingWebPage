import React from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import './Home.css'

function Home() {
  return (
    <div>


<Card className="bg-dark text-white">
      <Card.Img src={require('../img/home3.jpg')} alt="Card image" className='homeimg' />
      <Card.ImgOverlay>
        <Card.Title className='hometittle'>HIRE TOP GLOBAL TALENT</Card.Title>
        <Card.Text className='hometext'>
         <h1> Buold Remote Team Faster <br/> With Our Vetted Experts</h1>
        </Card.Text>
        <Card.Text className='hometextone'> Building a strong professional network can be essential for finding clients <br/>and maintaining a steady flow of freelance work. Networking can occur<br/> both online and in person.</Card.Text>
      <Card.Text>
      <Button variant="outline" className='homebutton' ><b>GET STARTED </b></Button>
      </Card.Text>
      
      </Card.ImgOverlay>
    </Card>
    </div>
  )
}

export default Home;