import React, { useState } from 'react'
import NavBar from './NavBar'

const Search = () => {
    const [shop,changeData]=useState(
        {
            "pname":""
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
                    <h5 class="card-title">Search Product</h5>
                    <p></p>
                    <div className="container">
                        <div className="row">
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <label htmlFor="" className="form-label">Product Name :</label>
                                <input type="text" className="form-control" name='pname' value={shop.pname} onChange={inputHandler}/>
                            </div>
                        </div>
                    </div>
                    <br />
                    <button className="btn btn-warning" onClick={readValue}>Search</button>
                </div>
            </div>
            <br />
    </div>
  )
}

export default Search