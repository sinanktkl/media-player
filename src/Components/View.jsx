import React, { useEffect, useState } from 'react'
import { Button, Col, Row } from 'react-bootstrap'
import VideoCard from '../Components/VideoCard'
import { getAllVideoAPI, getCategoryAPI, updateCategoryAPI } from '../services/allAPPI'

function View({uploadVideoResponse,setDropVideoResponse}) {

  const [deleteVideoResponse,setDeleteVideoResponse]=useState(false)

  const [allvideos,setallvideos]=useState([])

  const getAllVideos = async()=>{
    const result =await getAllVideoAPI()
    console.log(result);
    if (result.status == 200) {
      setallvideos(result.data)
    } else {
      console.log("API failed");
      setallvideos([])
    }
    
  }
  // console.log(allvideos);
  useEffect(()=>{
    getAllVideos()
    setDeleteVideoResponse(false)
  },[uploadVideoResponse,deleteVideoResponse])

  const dragOver=(e)=>{
    e.preventDefault()
  }
  
  const videoDropped=async(e)=>{
    const{videoId,categoryId}=JSON.parse(e.dataTransfer.getData("data"))
    // console.log(videoId,categoryId);
    const {data}=await getCategoryAPI()
    const selectedCategory = data.find(item=>item.id==categoryId)
    let result=selectedCategory.allvideos.filter(video=>video.id!==videoId)
    console.log(result);
    let{id,categoryName}=selectedCategory
    let newCategory={id,categoryName,allvideos:result}
    const res = await updateCategoryAPI(categoryId,newCategory)
    setDropVideoResponse(res)
  }
  return (
    <>
    <div className='d-grid'>
        <Button className='btn btn-primary'>All-Videos</Button>
      </div>
    {/* <button className='bg-primary text-'>All-Videos</button> */}
      <Row droppable="true" onDragOver={e=>dragOver(e)}
        onDrop={e=>videoDropped(e)}>
        {
          
          allvideos?.length>0?allvideos?.map((video,index)=>
         ( <Col key={index} sm={12} md={6} lg={4} xl={3} className='m-3'>
        <VideoCard video={video} setDeleteVideoResponse={setDeleteVideoResponse}/>
        </Col>)): <p className='text-danger'>Nothing to display</p>
        }
        
      </Row>
    </>
  )
}

export default View
