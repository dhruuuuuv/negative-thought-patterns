import React from 'react'
import PropTypes from 'prop-types'
import 'tachyons'
import { Link } from 'react-router-dom'

const TitleContainer = ({
  title,
  children
}) => {
  return (
    <div
    // className='w-100 vh-100 bg-dark-blue'
    >
      <Link to='/'
        style={{
          textDecoration: 'none'
        }}
      >
        <div
          className='pa3 pa5-ns ttu sans-serif f3 f1-ns washed-red fw7 ntp'
        >
          {title}
        </div>
      </Link>
      {children}
      <div
        className='mw6 pa5 lh-copy sans-serif f6 washed-yellow center'
      >
        information taken from david d. burns' book, feeling good.
      </div>
    </div>
  )
}

TitleContainer.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.element
}

TitleContainer.defaultProps = {
  title: 'Cognitive Distortions'
}

export default TitleContainer
