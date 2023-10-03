import React, { useState} from 'react'

import Data from './data';
import Card from './Card';

const Nav = () => {
    const [query, setQuery]= useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const numOfTotalPages = Math.ceil(Data.length/6);
    const pages = [...Array(numOfTotalPages+1).keys()].slice(1);

    const indexOfLastTodo = currentPage + 6;
    const indexOfFirstTodo = indexOfLastTodo - 6;

    const visibleData = Data.slice(indexOfFirstTodo,indexOfLastTodo);

    const prevPageHandler = ()=>{
      if(currentPage!==1) setCurrentPage(currentPage-1)
    }

    const nextPageHandler = ()=>{
      if(currentPage!==numOfTotalPages) setCurrentPage(currentPage+1)
    }
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
        
        {visibleData.filter((car)=>{return(car.title.toLowerCase().includes(query))}).map((val)=>{
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

      <div className='d-flex'>
      <span className='px-4' onClick={prevPageHandler}>Prev</span>
      <p>
        {
          pages.map((page)=>{
            return(
            <span className='px-4 mx-2 border rounded bg-light' onClick={()=>setCurrentPage(page)}>{page}</span>
            )
          })
        }
      </p>
      <span className='px-4' onClick={nextPageHandler}>Next</span>
      </div>
</div>


    </>
  )
}

export default Nav

