import React from 'react'
import { Helmet } from 'react-helmet'

const Meta = ({ title, description, keywords }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name='description' content={description} />
      <meta name='keyword' content={keywords} />
    </Helmet>
  )
}

Meta.defaultProps = {
  title: 'Welcome to RE:TROFY',
  description: 'We sell retro style clothing specifically for you!',
  keywords: 'retro, outfits, clothing, shop',
}

export default Meta
