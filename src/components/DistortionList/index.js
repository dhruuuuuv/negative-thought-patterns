import React from 'react'
import 'tachyons'
import { WiMoonAltFirstQuarter } from 'react-icons/wi'
import { FiRotateCw } from 'react-icons/fi'
import { FiEye } from 'react-icons/fi'
import Item from '../Item';

const DistortionList = () => {
  return (
    <main className="ph6 pb6 pa4 center flex flex-column items-center justify-center">
      <Item
        title='All-Or-Nothing Thinking'
        description={`Everything has to fall into 2 categories - right or wrong. \n You're only content with absolute perfection,
          or expect this from others.`}
        color='yellow'
      >
        <WiMoonAltFirstQuarter

        />
      </Item>
      <Item
        title='Over-generalization'
        description={`Blowing a single negative event out of proportion, so that you see it in a long line of never-ending defeats.`}
        color='gold'
      >
        <FiRotateCw />
      </Item>
      <Item
        title='Mental Filter'
        description={`Becoming fixated on a single bad thing that's happening, so that everything else gets ignored,
          and your view becomes darkened.`}
        color='yellow'
      >
        <FiEye />
      </Item>
    </main>
  )
}

export default DistortionList
