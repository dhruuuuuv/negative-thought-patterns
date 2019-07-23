import React from 'react'
import 'tachyons'

import './styles.css'
import TitleContainer from '../TitleContainer'
import Main from '../Main';
import ScrollToTop from '../ScrollToTop';

const App = () => {
  return (
    <ScrollToTop>
      <TitleContainer>
        <Main />
      </TitleContainer>
    </ScrollToTop>
  )
}

export default App
