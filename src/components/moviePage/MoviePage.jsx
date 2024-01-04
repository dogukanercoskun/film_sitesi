

import Table from 'react-bootstrap/Table';
import Card from 'react-bootstrap/Card';
import './moviePage.css'
import Form from 'react-bootstrap/Form';

import { MOVIES } from '../../data'
import { useState } from 'react'

function MoviePage () {
  // eslint-disable-next-line no-unused-vars
  const [filmAdi,  setFilmAdi] = useState("");
  const  [movie, setMovie] = useState(MOVIES); 


  function handleFilmAdiChange (e)  {
    const filmAdi = e.target.value;
    setFilmAdi(filmAdi)
    

    // Film adına göre filtreleme yap
    const filtrelenmisFilmler = MOVIES.filter((film) =>
      film.Title.toLowerCase().includes(filmAdi.toLowerCase())
    );
 
    
    
    setMovie(filtrelenmisFilmler);
  }
   
    return (
      <div className='containar'>
        
        <Form>
      <Form.Group className="mb-3 text-center" controlId="exampleForm.ControlInput1">
        <Form.Label className='formlabel'><strong>Film Adı </strong> </Form.Label>
        <Form.Control value={filmAdi} 
        onChange={handleFilmAdiChange}
        type="text" placeholder="Film Adı Giriniz" />
      </Form.Group>
    </Form>
    
      <div className='box'>
      {
      movie.map((item,index)=> <Card className="card" key={index} style={{ width: '18rem' }}>
      <Card.Img variant="top" src={item.Poster} />
      
      <Card.Body>
      <hr/>
        <Card.Title>{item.Title}</Card.Title>
        <hr/>
        <Card.Text>
        <Table striped bordered hover >
      <thead>
        <tr>
         IMDb Puanı: {item.imdbRating}
        </tr>
      </thead>
      <tbody>
        <tr >
          <td><strong>Yılı: </strong>{item.Year}</td>
        </tr>
        <tr >
         
          <td> <strong>Yazar:</strong> {item.Writer}</td>
          
        </tr>
        <tr >
          
          <td> <strong>Türü:</strong> {item.Genre}</td>
         
        </tr>
        <tr >
          <td> <strong>Aktörleri:</strong> {item.Actors}</td>
        </tr>
        
      </tbody>
    </Table>
        </Card.Text>
      </Card.Body>
    </Card>
      
      
      
      )
      }
      </div>
    </div>
    )
  }

export default MoviePage