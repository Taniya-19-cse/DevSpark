import React from 'react'

function Card({user}) {
    const{firstName,lastName,age,gender,about,photourl}=user;
  return (
    <div><div className="card bg-base-100 w-96 shadow-sm">
  <figure>
    <img
      src={photourl}
      alt="user Image" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{firstName+" "+lastName}</h2>
    <p>{user.about}</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Interested</button>
       <button className="btn btn-primary">Ignore</button>
    </div>
  </div>
</div></div>
  )

}

export default Card