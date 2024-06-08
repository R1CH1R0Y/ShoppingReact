import React, { useState } from 'react'
import NavBar from './NavBar'

const Remove = () => {
    const [shop,changeData]=useState(
        {
            "pcode":""
        }
    )

    const inputHandler=(event)=>{
        changeData({...shop,[event.target.name]:event.target.value})
    }

    const readValue=()=>{
        console.log(shop)
    }

  return (
    <div>
        <NavBar/>
        <br />
            <div class="card text-center mb-3">
                <div class="card-body">
                    <h5 class="card-title">Remove Product</h5>
                    <p></p>
                    <div className="container">
                        <div className="row">
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <label htmlFor="" className="form-label">Product Code :</label>
                                <input type="text" className="form-control" name='pname' value={shop.pname} onChange={inputHandler}/>
                            </div>
                        </div>
                    </div>
                    <br />
                    <button className="btn btn-outline-danger" onClick={readValue}>Remove</button>
                </div>
            </div>
            <br />
    </div>
  )
}

export default Remove