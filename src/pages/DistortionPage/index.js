import React from 'react'
import PropTypes from 'prop-types'
import { addLineBreaks } from '../../helpers'

const DistortionPage = ({
  title,
  description,
  example,
  help
}) => {
  return (
    <>
      <div
        className='pa2 pa5-ns ph5-ns ph3 ttu sans-serif f4 f2-ns yellow fw7'
      >
        {title}
      </div>

      <div
        className='lh-copy f4 ph3 ph5-ns pv3 code gold'
      >
        {addLineBreaks(description)}
      </div>
      {example &&
        <>
          <div
            className='pa2 pa5-ns ph5-ns ph3 ttu sans-serif f4 f2-ns green fw7'
          >
            EXAMPLE
      </div>

          <div
            className='lh-copy f4 ph3 ph5-ns pv3 code light-green'
          >
            {addLineBreaks(example)}
          </div>
        </>
      }
      {help &&
        <>
          <div
            className='pa2 pa5-ns ph5-ns ph3 ttu sans-serif f4 f2-ns light-red fw7'
          >
            How to Help
      </div>

          <div
            className='lh-copy f4 ph3 ph5-ns pv3 code washed-red'
          >
            {addLineBreaks(help)}
          </div>
        </>
      }
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
