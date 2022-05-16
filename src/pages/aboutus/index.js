import React,{useEffect, useState} from 'react'
import api from '../../api/login'
import Layout from '../../components/Layout'


function Index() {
  const [userdata, setUserdata] = useState([])
  console.log("userdata=>",userdata)

 useEffect(()=>{
  getUser()
 },[])

 const getUser = ()=>{
   api.getUserlist()
   .then((res)=>{
     if(res){
     setUserdata(res.data)
     }
   })
 }

  return (
      <Layout>
    <div className='container m-auto bg-gray mb-5'>
        <div className="row">
          {userdata?.map((item)=>{
            return (
              <div className="col-12 col-md-4 mb-3" key={item.id}>
              <div className="card" style={{width : '18rem'}}>
                <img src={item.avatar} className="card-img-top w-100" alt="user-img"/>
                <div className="card-body">
                  <h1 className="card-text">{item.first_name}</h1>
                  <h5 className="card-text">{item.email}</h5>
                </div>
              </div>
              </div>
            )
          })}
          </div>
         
    </div>
    </Layout>
  )
}

export default Index