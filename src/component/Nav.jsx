import React, { useState} from 'react'

import Data from './data';
import Card from './Card';

const Nav = () => {
    const [query, setQuery]= useState("");
  return (
    <>
      
      <nav className="navbar navbar-expand-sm navbar-dark " >
  <div className="container border rounded-3 p-2 px-4"style={{backgroundColor:'#92b4c9'}}>
    
    

    <form className="d-flex">
        <input className="form-control me-2" type="text" placeholder="Search" onChange={(e)=>{setQuery(e.target.value)}}/>
        
      </form>

    <div className="collapse navbar-collapse" id="mynavbar">
      <ul className="navbar-nav me-auto">
        <li className="nav-item">
          <a className="nav-link" href="javascript:void(0)">Relevence<i class="fa-solid fa-angle-down p-1"></i></a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="javascript:void(0)">All brands<i class="fa-solid fa-angle-down p-1"></i></a>
        </li>
        
      </ul>
      
    </div>
  </div>
</nav>

<div className='container border rounded-4' style={{backgroundColor:'#92b4c9'}}>
  <div className='row'>
        
        {Data.filter((car)=>{return(car.title.toLowerCase().includes(query))}).map((val)=>{
            return(
                <div className='col-4 p-4'>
                <Card
                img={val.img}
                title={val.title}
                model={val.model}
                people={val.people}
                type={val.type}
                mode={val.mode}
                cost={val.cost}

            />
                </div>
            )
        })}
        
      </div>
</div>
    </>
  )
}

export default Nav

