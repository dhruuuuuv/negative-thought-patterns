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
      className={`flex flex-wrap flex-nowrap-ns items-center align-center pa2 pa3-ns ${color}`}
    >
      <div
        className='w-100 w-10-l pa1 ttu sans-serif f2-ns fw7 pl2 pl5-l glow'
      >
        {children}
      </div>
      <div
        className='w-100 w-30-l pa1 ttu sans-serif f3-ns fw7 pl2 pl5-l grow pointer underline'
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
        className='w-100 w-60-l pa1 code ttl f4-ns pl2 pl5-l w6'
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
