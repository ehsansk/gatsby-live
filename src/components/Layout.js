import React, { Children } from 'react'
import Navheader from './Navheader'
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
function Layout({children}) {
    

    // toast.error("Error Notification !", {
    //   position: toast.POSITION.TOP_LEFT
    // });

  return (
    <div className="layout">
        <ToastContainer  className="text-center" />
        <Navheader />
        <div className="content">
            {children}
        </div>
        <footer className="dark bg-oppacity-25 bg-secondary text-center text-white fixed-bottom">
            <div className='py-2'>
            all right reserved@2022
            </div>
        </footer>
    </div>
  )
}

export default Layout