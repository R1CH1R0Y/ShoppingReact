import React, { useState } from 'react'
import NavBar from './NavBar'

const Add = () => {
    const [shop, changeData] = useState(
        {
            "pname": "",
            "pcode": "",
            "pdesc": "",
            "mdate": "",
            "edate": ""
        }
    )

    const inputHandler = (event) => {
        changeData({ ...shop, [event.target.name]: event.target.value })
    }

    const readValue = () => {
        console.log(shop)
    }

    return (
        <div>
            <NavBar />
            <br />
            <div class="card text-center mb-3">
                <div class="card-body">
                    <h5 class="card-title">Add Product</h5>
                    <p></p>
                    <p></p>
                    <div className="container">
                        <div className="row">
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <div className="row g-3">
                                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                        <label htmlFor="" className="form-label">Product Name  :</label>
                                        <input type="text" className="form-control" name='pname' value={shop.pname} onChange={inputHandler} />
                                    </div>
                                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                        <label htmlFor="" className="form-label">Product Code :</label>
                                        <input type="text" className="form-control" name='pcode' value={shop.pcode} onChange={inputHandler} />
                                    </div>
                                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                        <label htmlFor="" className="form-label">Description :</label>
                                        <textarea id="" className="form-control" name='pdesc' value={shop.pdesc} onChange={inputHandler}></textarea>
                                    </div>
                                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                        <label htmlFor="" className="form-label">Manufacture Date :</label>
                                        <input type="date" id="" className="form-control" name='mdate' value={shop.mdate} onChange={inputHandler} />
                                    </div>
                                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                        <label htmlFor="" className="form-label">Expiry Date :</label>
                                        <input type="date" id="" className="form-control" name='edate' value={shop.edate} onChange={inputHandler} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <br />
                    <button className="btn btn-outline-success" onClick={readValue}>Add</button>
                </div>
            </div>
            <br />
        </div>
    )
}

export default Add