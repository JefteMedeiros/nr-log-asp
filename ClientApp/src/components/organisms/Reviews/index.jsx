import React from 'react'
import CustomerReviewsTitle from '../../atoms/CustomerReviewsTitle'
import customers from '../../../reviews.json';
import CustomerContainer from '../../molecules/CustomerContainer';

const customerReviews = customers.customers;

export default function Reviews() {
  return (
    <div className="flex flex-col bg-rose-600 items-center ">
      <CustomerReviewsTitle />
      {customerReviews.map((e, key) => {
        return (
          <CustomerContainer key={key} name={e.name} review={e.review} url={e.url}/>
        )
      })}
    </div>
  )
}
