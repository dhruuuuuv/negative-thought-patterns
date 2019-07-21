import React from 'react'
import 'tachyons'

import './styles.css'

const NotFoundPage = () => {
  return (
    <>
      <div
        className='lh-copy f1 ph5 pv3 code washed-red'
      >
        404
      </div>
      <div
        className='lh-copy f3 ph5 pv3 code light-green'
      >
        Uh-oh! Page not found.
      </div>
    </>
  )
}

export default NotFoundPage
