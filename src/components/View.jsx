import React, { useEffect, useState } from 'react'
import NavBar from './NavBar'
import axios from 'axios'

const View = () => {
    const [shop, changeData] = useState([])
    const fetchData=()=>{
        axios.get("https://fakestoreapi.com/products").then(
            (response)=>{
                changeData(response.data)
            }
        ).catch().finally()
    }
    useEffect(()=>{fetchData()},[])
    return (
        <div>
            <NavBar/>
            <br />
            <div class="card text-center mb-3">
                <div class="card-body">
                    <h5 class="card-title">Product List</h5>
                    <p></p>
                    <p></p>
                    <div className="container">
                        <div className="row">
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <div className="row g-3">
                                    {shop.map(
                                        (value, index) => {
                                            return <div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">
                                                <div className="card mb-3">
                                                    <img src={value.image} className="card-img-top" alt="..."></img>
                                                    <div className="card-body">
                                                        <p className="card-text"><b>NAME : {value.title}</b></p>
                                                        <p className="card-text"><b>PRICE : {value.price}</b></p>
                                                        <p className="card-text"><b>RATING : {value.rating.rate}</b></p>
                                                        <p className="card-text"><b>COUNT : {value.rating.count}</b></p>
                                                    </div>
                                                </div>
                                            </div>
                                        }
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                    <br />
                </div>
            </div>
            <br />
        </div >
    )
}

export default View