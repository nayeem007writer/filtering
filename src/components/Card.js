import React from 'react'
import { FaStar } from "react-icons/fa";
import { IoBagAddSharp } from "react-icons/io5"
export default function Card({img, title, star, reviews, prevPrice, newPrice, company,color, category}) {
  return (
    <div>
                  <section className='card'>
                <img className='card-image' src={img} alt='loading...'></img>
                <div className='card-details'>
                    <h3 className='card-title'>
                        {title}
                    </h3>
                    <section className='card-reviews'>
                    <FaStar className='rating-star' />
                    <FaStar className='rating-star'/>
                    <FaStar className='rating-star'/>
                    <FaStar className='rating-star'/>
                    <FaStar className='rating-star'/>
                    <span className='total-reviews'>{reviews}</span>
                    </section>

                    <section className='card-price'>
                        <div className='price'>
                            <del>{prevPrice}</del>{newPrice}
                        </div>
                        <div className='bag'>
                        <IoBagAddSharp className='bag-icon'/>
                        </div>
                    </section>
                </div>
            </section>
    </div>
  )
}
