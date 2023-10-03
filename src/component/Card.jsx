import React from 'react'

const Card = (props) => {
  return (
    <>
      <div className="card shadow boreder rounded-4" style={{width: 400}}>
  <img className="card-img-top" src={props.img}  alt="Card image" />
  <div className="card-body" >
    <div className="container d-flex justify-content-between">
      <h4 className="card-title">{props.title}</h4>
      <button className="rounded-4 px-3 border border-info bg-light" style={{fontSize: 13}}>{props.model}</button>
    </div>
    <div className="container">
      <div className="row py-2">
        <div className="col-6 d-flex"><i className="fa-solid fa-user-group " style={{color: 'rgb(51, 181, 251)'}} /><h4 style={{fontSize: 14}}>{props.people}</h4></div>
        <div className="col-6 d-flex"><i className="fa-solid fa-gas-pump" style={{color: 'rgb(51, 181, 251)'}}> </i><h4 style={{fontSize: 14}}>{props.type}</h4></div>
      </div>
      <div className="row">
        <div className="col-6 d-flex"><i className="fa-solid fa-car-rear" style={{color: 'rgb(51, 181, 251)'}} /><h4 style={{fontSize: 14}}>{props.mileage}</h4></div>
        <div className="col-6 d-flex"><i className="fa-solid fa-car-rear" style={{color: 'rgb(51, 181, 251)'}} /><h4 style={{fontSize: 14}}>{props.mode}</h4></div>
      </div>
    </div>  
    <hr />
    <div className="row">
      <div className="col-6"><h4>{props.cost}</h4></div>
      <div className="col-6 row justify-content-around">
        <div className="col-2"><i className="fa fa-heart bg-info p-2" /></div>
        <div className="col-8"><button className="p-1 rounded border border-light bg-primary text-light">Rent now</button></div>
      </div>
    </div>
  </div>
</div>

    </>
  )
}

export default Card
