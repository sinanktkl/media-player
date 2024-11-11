import React, { useEffect, useState } from 'react'
import { Button, Col, FloatingLabel, Form, Modal, Row } from 'react-bootstrap'
import { addCategoryAPI, deleteCategoryAPI, getAVideoAPI, getCategoryAPI, updateCategoryAPI } from '../services/allAPPI';
import VideoCard from './VideoCard';

function Category({dropVideoResponse}) {
  const[show,setShow] = useState(false);

  const handleClose = ()=>setShow(false);
  const handleShow = ()=>setShow(true);

  const [categoryName,setCategoryName]=useState("")
  const [allcategories,setallcategories]=useState([])


  const handleAdd =async()=>{
    if (categoryName) {
      const result = await addCategoryAPI({categoryName,allvideos:[]})
     console.log(result);
      if(result.status>=200 && result.status<300){
        handleClose()
        setCategoryName("")
        getCategories()
      }
    else {
     console.log(result.message);
    } 
    } else {
     alert("please fill the missing field")
      
    }
  }
    const getCategories=async()=>{
      const {data}=await getCategoryAPI()
      setallcategories(data)
    }
  
  // console.log(allcategories);
  
  const removeCategory=async(id)=>{
    await deleteCategoryAPI(id)
    getCategories()
  }
  
  // droping
  const dragOver=(e)=>{
    console.log("video drag over the category");
    e.preventDefault()
    
  }
  // console.log(allcategories);
  const videoDrop= async (e,categoryId)=>{
    const videoId = e.dataTransfer.getData("videoId")
    console.log(videoId,"Dropped into Category Id:",categoryId);
    const {data} =await getAVideoAPI(videoId)
    console.log(data);
    const selectedCategory = allcategories.find(item=>item.id==categoryId)
    selectedCategory.allvideos.push(data)
    console.log(selectedCategory);
    await updateCategoryAPI(categoryId,selectedCategory)
    getCategories()
    
    
  }
  
  useEffect(()=>{
    getCategories()
    
  },[dropVideoResponse])


const videoDragStarted=(e,videoId,categoryId)=>{
  let datashare={videoId,categoryId}
  e.dataTransfer.setData("data",JSON.stringify(datashare))
}

  return (
    <>
      <div className='d-grid'>
        <Button onClick={handleShow} className='btn btn-primary'>Add Category</Button>
      </div>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Category Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
         <Form>
         <FloatingLabel
        controlId="floatingInput1"
        label="Category Name"
        className="mb-3"
      >
        <Form.Control type="text" placeholder="enter a category name" onChange={e=>setCategoryName(e.target.value)}/>
      </FloatingLabel>
         
         </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleAdd}>ADD</Button>
        </Modal.Footer>
      </Modal>

      {
        allcategories?.length>0?allcategories.map(category=>(
          <div className='border border-3 m-3 p-3' droppable="true" onDragOver={e=>dragOver(e)} onDrop={e=>videoDrop(e,category?.id)}>
            <div className="d-flex justify-content-between align-items-center">
              <h3>{category?.categoryName}</h3>
              <button className='text-danger btn ' onClick={()=>removeCategory(category?.id)}><i class="fa-solid fa-trash"></i></button>
            </div>
            <Row>
              {
                category?.allvideos.length>0?category?.allvideos.map(card=>(
                <Col sm={12} className='mb-3 mt-2 p-2' draggable onDragStart={e=>videoDragStarted(e,card.id,category.id)}>
                <VideoCard video={card} insideCategory={true}/>
                </Col>)):null
              }
            </Row>
          </div>
        )):<p className='text-danger'>No Categories Created</p>
      }
    </>
  )
}

export default Category
