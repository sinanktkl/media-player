import React from 'react'
import { Container, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <>
      <Navbar className="bg-primary">
        <Container>
          <Link to={'/'}>
          <Navbar.Brand href="" className='text-light fw-bolder'>
            <img
              alt=""
              src="https://w7.pngwing.com/pngs/680/244/png-transparent-windows-media-player-11-computer-icons-microsoft-blue-text-rectangle-thumbnail.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
           Media Player
          </Navbar.Brand>
          </Link>
        </Container>
      </Navbar>
    </>
  )
}

export default Header
