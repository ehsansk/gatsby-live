import React, { useState } from 'react'
import Layout from '../../components/Layout'

function BmiCalculator() {
    const [height,setHeight] = useState(null);
  return (
      <Layout>
    <div className='container'>
         <div className='row'>
            <div className='col-md-12 col-lg-10 m-auto'>
               <div className='card'>
                 <h3 className='text-center'>BMI CALCULATOR</h3>
                 <div className="row">
                  <div className="col-md-7 col-lg-7">
                      <label>Height</label>
                     <div className="row">
                     <div className="col-md-3 col-lg-2">
                     <div className='height form-group'>
                      <select name="ft" value={height} id="opt2" onChange={(e)=>setHeight(e?.target?.value)} className="form-select" placeholder={height ? height : 'select'}>
                       <option name="feet" value="2">2</option>     
                       <option name="feet" value="3">3</option>     
                       <option name="feet" value="4">4</option>     
                       <option name="feet" value="5">5</option>     
                       <option name="feet" value="6">6</option>     
                       <option name="feet" value="7">7</option>     
                     </select>  
                    </div>     
                    </div>     
                    
                    </div>
                  </div>     
                  <div className="col-md-5 col-lg-5 border-start border-danger">
                  <button type="button" class="btn btn-outline-primary">Calculate</button>
                  <button type="button" class="btn btn-outline-primary">Reset</button>
                      </div>
                </div>
                </div> 
                </div> 
            </div>
    </div>
    </Layout>
  )
}

export default BmiCalculator