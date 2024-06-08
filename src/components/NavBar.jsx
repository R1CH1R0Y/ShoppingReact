import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div>
        <nav class="navbar navbar-expand-lg bg-warning">
  <div class="container-fluid">
    <a class="navbar-brand" href="#"><i><b>Shopping App</b></i></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <Link class="nav-link active" aria-current="page" to="/">Add Product</Link>
        <Link class="nav-link active" to="/remove">Remove Product</Link>
        <Link class="nav-link active" to="/search">Search Product</Link>
        <Link class="nav-link active" to="/view">Product List</Link>
        <Link class="nav-link active" to="/jsonobj">New Products</Link>
      </div>
    </div>
  </div>
</nav>
    </div>
  )
}

export default NavBar