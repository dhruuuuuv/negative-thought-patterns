import React from 'react'
import PropTypes from 'prop-types'
import NotFoundPage from '../NotFoundPage';

const DistortionsPage = ({
  match,
}) => {
  if (match.params.distortion === 'black-white-thinking') {
    return (
      <div>
      </div>
    )
  } else {
    return <NotFoundPage />
  }

}

DistortionsPage.propTypes = {

}

export default DistortionsPage
