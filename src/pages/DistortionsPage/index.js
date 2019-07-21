import React from 'react'
import PropTypes from 'prop-types'
import NotFoundPage from '../NotFoundPage';
import DistortionPage from '../DistortionPage';

const DistortionsPage = ({
  match,
}) => {
  if (match.params.distortion === 'all-nothing-thinking') {
    return (
      <DistortionPage
        title='All-Or-Nothing Thinking'
      />
    )
  } else {
    return <NotFoundPage />
  }

}

DistortionsPage.propTypes = {
}

export default DistortionsPage
