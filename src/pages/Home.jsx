import React, { useState } from 'react'
import Add from '../Components/Add'
import View from '../Components/View'
import Category from '../Components/Category'
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'

function Home() {
  const[uploadVideoResponse,setUploadVideoResponse]=useState({})
  const[dropVideoResponse,setDropVideoResponse]=useState({})
  
  return (
    <>
     <div className="container mt-5 d-flex justify-content-between mb-3">
      <div className="add-videos">
        <Add setUploadVideoResponse={setUploadVideoResponse}/>

      </div>
      <Link to={'/watch-history'} style={{textDecoration:"none"}} >

      <div className='d-flex'>
      <Button className='btn btn-light '>Watch-History 
          <button  className='btn'> <i className='fa-solid fa-arrow-right-to-bracket fa-beat fs-3'></i></button>
      </Button>
      </div>


      {/* <Button className=' btn-light fw-bolder  '>Watch-History  <i className='fa-solid fa-arrow-right-to-bracket fa-beat fs-3'></i>
      </Button> */}
      </Link>
     </div>
     <div className='container-fluid mt-5 w-100 row'>
      <div className="col-lg-9 all-videos">
        <View uploadVideoResponse={uploadVideoResponse} setDropVideoResponse={setDropVideoResponse}/>
      </div>
      <div className="col-lg-3 all-category">
        <Category dropVideoResponse={dropVideoResponse}/>
      </div>
     </div>

     

    </>
  )
}

export default Home
