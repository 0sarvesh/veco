import React from 'react'
import '../styles/Catalog.scss'
import recycle from '../assets/recycle.avif'
function Catalog() {
  return (
    <div>
      <div className="catalog">
        <div className="catalogwrapper">
            <div className="imgcatalog">

                 <img src={recycle} alt="" className='catimg' />
                <div className="childcatalog">
                   
                   
                   <h3 className=''>Catalog</h3> 
                   <button className='catalogbtn'>+</button>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Catalog
