import React from 'react'
import InfoList from '../../atoms/InfoList'
import NewsletterForm from '../../atoms/NewsletterForm'
import SocialMediaList from '../../atoms/SocialMediaList'

export default function Footer() {
  return (
    <div className="flex justify-between px-40 py-4 bg-indigo-900">
      <InfoList />
      <SocialMediaList />
      <NewsletterForm />
    </div>
  )
}
