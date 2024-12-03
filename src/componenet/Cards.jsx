import React from 'react'

function Cards({item}) {
	// console.log(item);

  return (
	<>
	<div className='mt-4 p-3'>
	<div className="card bg-base-100 w-96 shadow-xl my-3 hover:scale-105  dark:bg-slate-900 text-white duration-200">
  <figure>
    <img
      src={item.image}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
      {item.name}
      <div className="badge badge-secondary">{item.category}</div>
    </h2>
    <p>{item.title}</p>
    <div className="card-actions  justify-between">
      <div className="badge badge-outline">${item.price}</div>
      <div className=" badge badge-outline cursor-pointer p-3 border-black-2 hover:bg-pink-500 hover:text-white duration-200">Buy Now</div>
    </div>
  </div>
</div>
	</div>
	</>
  )
}

export default Cards
