import React, { useReducer, useState } from 'react'
import { Alert, Card, Col, Container, Row } from 'react-bootstrap'
import { initialMessage, messageReducer } from '../reducers/messageReducer'



const Home = () => {

    const [ messageState, dispatch] = useReducer( messageReducer, initialMessage )

  return (
    
    <Container className='my-5'>
        <Row className='justify-content-center'>
            <Col md={5}>
                <Card className='shadow'>
                    <Card.Body>
                        {messageState.error && <Alert variant='danger'>Tumi amar error</Alert>}

                        <input className="form-control" value={ messageState.name } onChange={ e => dispatch({ type : 'DEVS_DATA_LOAD', payload : { name : e.target.value}})} type="text" placeholder='Name'/>
                        <br />
                        <input className="form-control" value={ messageState.age } onChange={ e => dispatch({ type : 'DEVS_DATA_LOAD', payload : { age: e.target.value}})} type="text" placeholder='Email'/>
                        <br />
                        <input className="form-control" value={ messageState.skill } onChange={ e => dispatch({ type : 'DEVS_DATA_LOAD', payload : { skill: e.target.value}})} type="text" placeholder='Skill'/>
                        <br />
                        <select className="form-control" onChange={ e => dispatch({ type : 'ALERT_LOAD', payload : { error: e.target.value}})}>
                            <option value="Start">Start</option>
                            <option selected value="Off">Off</option>
                        </select>
                        <hr />
                        <p>Name : { messageState.name }</p>
                        <p>Age : { messageState.age }</p>
                        <p>Skill : { messageState.skill }</p>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    </Container>
    
  )
}

export default Home;