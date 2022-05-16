import  React,{useState} from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Layout from "../components/Layout";
import { Button, Modal } from "react-bootstrap";
import api from "../api/login";
import { navigate } from "gatsby";
import { toast } from "react-toastify";
import "bootstrap/dist/css/bootstrap.min.css"
const IndexPage = () => {
  const [show, setshow] = useState(false);
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [register, setregister] = useState(false);
  const handleShow = () => {
    setshow(true);
  };
  const logindetail = {username,password}
  const handleClose = () => {
    setshow(false);
  };
 const submitHandler = (e)=>{
   e.preventDefault();
  //  alert(`username = ${username} and paswd = ${password}`)
  //  console.log(logindetail)
   login(logindetail)
 }

 const login = (details)=>{
  api.loginUser(details)
  .then(res=>{
    console.log(res)
    toast.success('success',{
      position: toast.POSITION.TOP_CENTER
    })
    navigate("/aboutus")
  }).catch((error)=>{
    toast.error("something wrong",{
      position:toast.POSITION.TOP_CENTER
    })
  })
 }
 
  return (
    <Layout>
      <div className="container m-auto pt-5" style={{ maxWidth: "700px" }}>
        {register ? (
          <h1>Register User</h1>
        ) :  <h1>Login User</h1> }
        <div className="card mb-4">
        {!register ? (
          <div className="row px-4 py-3">
            <div className="col-12 col-md-8">
              <form onSubmit={submitHandler}>
                <div className="mb-3">
                  <label for="exampleInputEmail1" className="form-label">
                    Email address
                  </label>
                  <input
                   onChange={(e)=>setUsername(e?.target?.value)}
                    type="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                  />
                 
                </div>
                <div className="mb-3">
                  <label for="exampleInputPassword1" className="form-label">
                    Password
                  </label>
                  <input
                   onChange={(e)=>setPassword(e?.target?.value)}
                    type="password"
                    className="form-control"
                    id="exampleInputPassword1"
                  />
                </div>
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </form>
            </div>
            <div className="col-12 col-md-4 bg-light">
              <img
                src="https://cdn.pixabay.com/photo/2015/03/04/22/35/head-659652_1280.png"
                className="w-100"
                alt=""
              />
            </div>
          </div>
          ) : 
          <div className="row px-4 py-3">
            <div className="col-12 col-md-8">
              <form onSubmit={submitHandler}>
                <div className="mb-3">
                  <label for="exampleInputEmail1" className="form-label">
                    User
                  </label>
                  <input
                   onChange={(e)=>setUsername(e?.target?.value)}
                    type="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                  />
                 
                </div>
                <div className="mb-3">
                  <label for="exampleInputPassword1" className="form-label">
                    Password
                  </label>
                  <input
                   onChange={(e)=>setPassword(e?.target?.value)}
                    type="password"
                    className="form-control"
                    id="exampleInputPassword1"
                  />
                </div>
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </form>
            </div>
            <div className="col-12 col-md-4 bg-light">
              <img
                src="https://cdn.pixabay.com/photo/2015/03/04/22/35/head-659652_1280.png"
                className="w-100"
                alt=""
              />
            </div>
          </div>
          }
          {!register ?(
          <a href="#" className="ml-2 m-4 text-decoration-none" onClick={(e)=>setregister(true)}>Register</a>
          ) : 
          // <Button onClick={(e)=>setregister(false)}>Sign In</Button>
          <a href="#" className="m-4 text-decoration-none" onClick={(e)=>setregister(false)}>Sign In</a>
          }
        </div>

        <div className="credential">
         <span>username : "eve.holt@reqres.in"</span>  ||   <span>password : "cityslicka"</span>  
         </div>

      </div>
      {/* <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal> */}
    

    </Layout>
  );
};

export default IndexPage;
