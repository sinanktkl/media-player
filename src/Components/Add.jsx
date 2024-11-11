import React, { useState } from 'react'
import { Button, FloatingLabel, Form, Modal } from 'react-bootstrap';
import { addVideoAPI } from '../services/allAPPI';

function Add({setUploadVideoResponse}) {
  const[show,setShow] = useState(false)
  const handleClose = ()=>{setShow(false);
  setuploadvideo({ id:"",caption:"",url:"",link:"" })
  }
  const handleShow = ()=>setShow(true);

  const [uploadvideo,setuploadvideo]=useState({id:"",caption:"",url:"",link:""})
  console.log(uploadvideo);
  

  const getYoutubeLink=(e)=>{
    const {value}= e.target

    if(value.includes("v=")){
      let VID =value.split("v=")[1].slice(0,11)
      console.log(`https://www.youtube.com/embed/${VID}`);
      setuploadvideo({...uploadvideo,link:`https://www.youtube.com/embed/${VID}`})
      
    } else{
      setuploadvideo({...uploadvideo,link:""})
    }
  }

    const handleAdd = async()=>{
      const {id,caption,url,link}=uploadvideo
      if(!id || !caption || !url || !link){
        alert("please fill the missing fields")
      }else{
        //api call-upload video to json server
        const result =await addVideoAPI(uploadvideo)
        console.log(result)
        if (result.status>=200 && result.status<300) {
          alert("video uploded")
          handleClose()
          setUploadVideoResponse(result.data)
        } else {
          alert(result.message)
        };
        
      }
    }
  return (

    <>
      <div className='d-flex'>
      <Button className='btn btn-light '>Upload Videos

        {/* <h2>Upload Videos</h2> */}
        <button onClick={handleShow} className='btn'> <i class="fa-solid fa-arrow-up-from-bracket fa-beat fs-3"></i></button>

      </Button>
      </div>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title></Modal.Title>
        </Modal.Header>
        <Modal.Body>
         <Form>
         <FloatingLabel
        controlId="floatingInput1"
        label="Video Id"
        className="mb-3"
      >
        <Form.Control type="text" placeholder="Video Id" onChange={(e)=>setuploadvideo({...uploadvideo,id:e.target.value})}/>
      </FloatingLabel>
         <FloatingLabel
        controlId="floatingInput2"
        label="Video Title"
        className="mb-3"
      >
        <Form.Control type="text" placeholder="Video Title" onChange={(e)=>setuploadvideo({...uploadvideo,caption:e.target.value})}/>
      </FloatingLabel>
         <FloatingLabel
        controlId="floatingInput3"
        label="Image URL"
        className="mb-3"
      >
        <Form.Control type="text" placeholder="Image URL" onChange={(e)=>setuploadvideo({...uploadvideo,url:e.target.value})}/>
      </FloatingLabel>
         <FloatingLabel
        controlId="floatingInput4"
        label="Video URL"
        className="mb-3"
      >
        <Form.Control type="text" placeholder="Video URL" onChange={getYoutubeLink}/>
      </FloatingLabel>
         </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button onClick={handleAdd} variant="primary">upload</Button>
        </Modal.Footer>
      </Modal>

    </>
  )
}

export default Add
