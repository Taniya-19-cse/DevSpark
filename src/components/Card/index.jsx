import React from 'react'

function Card({user}) {
    const{firstName,lastName,age,gender,about,photoURL}=user;
    console.log(user);
  return (
    <div><div className="card bg-base-100 w-96 shadow-sm">
  <figure>
    <img
      src={photoURL}
      alt="user Image" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{firstName+" "+lastName}</h2>
    <p>{user.about}</p>
    <p>{user.gender}</p>
    <p>{user.age} years</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Interested</button>
       <button className="btn btn-secondary">Ignore</button>
    </div>
  </div>
</div></div>
  )

}

export default Card