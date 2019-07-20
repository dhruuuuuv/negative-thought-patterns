import React from 'react'
import PropTypes from 'prop-types'
import 'tachyons'


const Item = ({
  description,
  title,
  color,
  children
}) => {
  return (
    <div
      className={`flex items-center align-center pa3 ${color}`}
    >
      <div
        className='w-10 pa1 ttu sans-serif f2-ns fw7 pl5 glow'
      >
        {children}
      </div>
      <div
        className='w-30 pa1 ttu sans-serif f3-ns fw7 pl5 grow pointer'
      >
        {title}
      </div>
      <div
        className='w-60 pa1 code ttl f4-ns pl5 w6'
      >
        {description}
      </div>
    </div>
  )
}

Item.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string
}

Item.defaultProps = {
  title: 'Distortion',
  description: 'this is a descrption of the distortion'
}

export default Item
