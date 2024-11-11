import React from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Landingpage() {
  return (
    <>
    <Row className='mt-5 align-items-center justify-content-between w-100'>
      <Col></Col>
      <Col lg={5}>
      <h1 className='text-primary' style={{color:'',fontSize:'40px'}}>Welcome to <span className='text-warning'>Media-Player</span></h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum beatae repellendus distinctio excepturi nostrum dolorum quod aperiam, tempore voluptas eum reiciendis dignissimos, recusandae debitis repellat praesentium totam nesciunt soluta quos?</p>
      <Link style={{textDecoration:"none"}} to={'/home'} className='btn btn-primary'>Get started</Link>
      </Col>
      <Col lg={5}>
      <img src="https://img.freepik.com/free-vector/social-media-modern-video-player-mockup-template-design_1017-27214.jpg?semt=ais_hybrid" alt="" />
      </Col>
      <Col></Col>
    </Row>

    <div className="container mt-3 mb-5 d-flex justify-content-center align-items-center flex-column w-100">
      <h2 className='text-center text-warning'>Features</h2>
      <div className="card mb-5 mt-5 d-flex align-items-center justify-content-between w-100 flex-row">
        <Card style={{width:"18rem"}} className='bg-primary'>
          <Card.Img variant='top' height={'300px'} width={'300px'} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsKssfEH2SFxrn-_YINNAASUdm33mth7vmsw&s'/>
          <Card.Body>
            <Card.Title>
              Managing Videos
            </Card.Title>
            <Card.Text>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus omnis explicabo sit id fugit maiores exercitationem commodi, 
            </Card.Text>
          </Card.Body>
        </Card>
        <Card style={{width:"18rem"}} className='bg-primary'>
          <Card.Img variant='top' height={'300px'} width={'300px'} src='https://primalvideo.com/wp-content/uploads/2022/06/frame_2538.png'/>
          <Card.Body>
            <Card.Title>
              Categorized Videos
            </Card.Title>
            <Card.Text>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus omnis explicabo sit id fugit maiores exercitationem commodi, 
            </Card.Text>
          </Card.Body>
        </Card>
        <Card style={{width:"18rem"}} className='bg-primary'>
          <Card.Img variant='top' height={'300px'} width={'300px'} src='https://cdn.pixabay.com/video/2023/07/15/171688-845775828_tiny.jpg'/>
          <Card.Body>
            <Card.Title>
              Watching History
            </Card.Title>
            <Card.Text>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus omnis explicabo sit id fugit maiores exercitationem commodi, 
            </Card.Text>
          </Card.Body>
        </Card>
      
      </div>
    </div>
    <div className="container border border-2 d-flex align-items-center justify-content-center mt-5 p-3">
      <div className="col-lg-5">

        <h4 className='text-warning fw-bolder'>Simple,Powerful & Fast</h4>
        <h6 className='m-3'><span className='text-warning fw-bolder'>Play Everything</span>: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod sint nulla obcaecati nihil mollitia eveniet voluptate deleniti recusandae suscipit, distinctio porro aperiam quis velit! Exercitationem sunt suscipit quibusdam laboriosam atque.</h6>

        <h6 className='m-3'><span className='text-warning fw-bolder'>Categorize Videos</span>: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod sint nulla obcaecati nihil mollitia eveniet voluptate deleniti recusandae suscipit, distinctio porro aperiam quis velit! Exercitationem sunt suscipit quibusdam laboriosam atque.</h6>

        <h6 className='m-3'><span className='text-warning fw-bolder'>Managing Videos</span>: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod sint nulla obcaecati nihil mollitia eveniet voluptate deleniti recusandae suscipit, distinctio porro aperiam quis velit! Exercitationem sunt suscipit quibusdam laboriosam atque.</h6>

      </div>
        <div className="col-lg-5 ">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/KccYEaJSaT8?si=0Ql7BM4x5uTUjK_x" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowFullscreen></iframe>
        </div>
    </div>
    </>

  )
}

export default Landingpage
