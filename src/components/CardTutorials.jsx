import React from 'react'


const CardTutorials = ({title, descriptions, url}) => {
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
            <h2 className="card-title">{title}</h2>
            <p>{descriptions}</p>
            <div className="card-actions justify-end">
                <a target="_blank" href={url} className="btn btn-primary hover:shadow-2xl hover:btn-ghost">Learn</a>
            </div>
        </div>
    </div>
  )
}

export default CardTutorials