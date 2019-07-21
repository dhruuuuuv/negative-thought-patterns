import React from 'react'
import PropTypes from 'prop-types'

const DistortionPage = ({
  title,
  description
}) => {
  return (
    <>
      <div
        className='pa5 ph5-ns ph3 ttu sans-serif f4 f2-ns yellow fw7'
      >
        {title}
      </div>

      <div
        className='lh-copy f4 ph5 pv3 code gold'
      >
        {description}
      </div>
    </>
  )
}

DistortionPage.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
}

DistortionPage.defaultProps = {
  title: 'DISTORTION',
  description: 'Ad reprehenderit ad exercitation cillum deserunt fugiat. Dolore esse qui eu tempor do. Esse ad eiusmod elit occaecat in consectetur quis cillum laboris quis incididunt sint ad ipsum. Consectetur quis ipsum minim nostrud cillum dolore qui proident occaecat ea amet. Eiusmod mollit anim sunt do velit non non.'
}

export default DistortionPage
