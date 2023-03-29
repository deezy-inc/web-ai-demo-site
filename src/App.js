import React, { useState, useRef, useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Modal from 'react-bootstrap/Modal'
import { SocialIcon } from 'react-social-icons';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { openai } from '@deezy-inc/web-ai'

import Container from 'react-bootstrap/Container';
import './App.css';
const axios = require('axios')

const App = () => {
  const [index, setIndex] = useState({})
  const [showGenerateModal, setShowGenerateModal] = useState(false)
  const [currentGlpyh, setCurrentGlyph] = useState('')

  useEffect(() => {
    
  }, [])

  return (
    <>
      <Navbar id="top-nav" className="pt-3 pb-3 text-center" expand="lg">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav id="top-social-links">
              <Nav.Link onClick={() => window.open(GITHUB_URL)}>
                <SocialIcon url={GITHUB_URL} />
              </Nav.Link>
              <Nav.Link onClick={() => window.open(DISCORD_URL)}>
                <SocialIcon url={DISCORD_URL} />
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Container className="text-center">
        <h1 className="py-3">WebAI Demo</h1>
        <Form>
          <Form.Label>Enter prompt</Form.Label>
          <Form.Text></Form.Text>
        </Form>
        <Button variant="primary" className="shadowed-orange-small mt-5" onClick={() => {
          console.log('click')
        }}>
          Submit<br />
        </Button>
      </Container>
    </>
  )
}

export default App;
