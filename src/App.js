import React, { useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { TailSpin } from 'react-loading-icons'
import { openai } from '@deezy-inc/web-ai'
// Import react social icons
import { SocialIcon } from 'react-social-icons';
// Import NavBar
import Navbar from 'react-bootstrap/Navbar';

import Container from 'react-bootstrap/Container';
import './App.css';

const messages = [{
  "role": "system",
  "content": "You are a custom ChatGPT on WebAI Demo gated by bitcoin lightning micropayments"
}]
const App = () => {
  const [responseText, setResponseText] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  return (
    <>
      <Navbar variant="dark">
        <SocialIcon target="_blank" url="https://github.com/deezy-inc/web-ai-demo-site" />
      </Navbar>
      <Container className="text-center">
        <h1 className="py-3 my-5">WebAI Demo</h1>
        <Form.Label className="mb-4">Enter a prompt for ChatGPT:</Form.Label>
        <Form.Control
          type="text"
          id="promptInput"
          aria-describedby="promptInput"
          className="m-auto"
          placeholder="Tell me a fun fact"
          style={{ maxWidth: '600px', textAlign: 'center' }}
        />
        <Button variant="primary" className="shadowed-orange-small mt-4 mb-5" disabled={isLoading} onClick={async () => {
          if (!window.webln) {
            alert('Oops, you need a WebLN compatible browser extension wallet to use this demo. Download Alby from https://getalby.com to get one!')
            return
          }
          setResponseText('')
          setIsLoading(true)
          messages.push({
            "role": "user",
            "content": document.getElementById('promptInput').value
          })
          const response = await openai.createChatCompletion({
            model: 'gpt-3.5-turbo',
            messages
          }).catch(err => {
            console.log(err)
            return null
          })
          setIsLoading(false)
          if (!response) return
          messages.push(response.choices[0].message)
          console.log(messages)
          setResponseText(response.choices[0].message.content)
        }}>
          ⚡ Submit ⚡<br />
        </Button>
        <br />
        {isLoading ? <TailSpin /> : <></>}
        <p style={{ maxWidth: '600px', textAlign: 'center', margin: 'auto' }}>
          {responseText ? <>
            {responseText}
          </>
            :
            <></>
          }
        </p>
      </Container>
    </>
  )
}

export default App;
