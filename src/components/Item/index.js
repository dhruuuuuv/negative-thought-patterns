import React from 'react'
import PropTypes from 'prop-types'
import 'tachyons'
import { Link } from 'react-router-dom'

const Item = ({
  description,
  title,
  color,
  link,
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
        <Link
          to={link}
          className={color}
          style={{
            textDecoration: 'none'
          }}
        >
          {title}
        </Link>
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
  description: PropTypes.string,
  link: PropTypes.string,
  color: PropTypes.string
}

Item.defaultProps = {
  title: 'Distortion',
  description: 'this is a descrption of the distortion',
  color: 'washed-blue',
  link: ''
}

export default Item
