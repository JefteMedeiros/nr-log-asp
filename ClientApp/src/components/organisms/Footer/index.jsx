import React from 'react'
import InfoList from '../../atoms/InfoList'
import NewsletterForm from '../../atoms/NewsletterForm'
import SocialMediaList from '../../atoms/SocialMediaList'

export default function Footer() {
  return (
    <div className="flex gap-4 flex-col md:flex-row md:items-stretch justify-between px-10 lg:px-40 xl:px-60 py-4 bg-indigo-900">
      <InfoList />
      <SocialMediaList />
      <NewsletterForm />
    </div>
  )
}
