import React from 'react'
import 'tachyons'
import { WiMoonAltFirstQuarter } from 'react-icons/wi'
import { FiEye, FiPlus, FiRotateCw, FiHeart, FiUser } from 'react-icons/fi'
import { MdDirectionsRun, MdSearch, MdTrendingDown, MdLabelOutline, MdPersonOutline } from 'react-icons/md'
import { FaBrain } from 'react-icons/fa'
import { GiCrystalBall } from 'react-icons/gi'
import Item from '../Item';

const items = [
  {
    title: 'All-Or-Nothing Thinking',
    description: `Everything has to fall into 2 categories - right or wrong. \n You're only content with absolute perfection, or expect this from others.`,
    icon: <WiMoonAltFirstQuarter />
  },
  {
    title: 'Over-generalization',
    description: `Blowing a single negative event out of proportion, so that you see it in a long line of never-ending defeats.`,
    icon: <FiRotateCw />
  },
  {
    title: 'Mental Filter',
    description: `Becoming fixated on a single bad thing that's happening, so that everything else gets ignored,
          and your view becomes darkened.`,
    icon: <FiEye />
  },
  {
    title: 'Disqualifying the Positive',
    description: `Positive things that happen are dismissed, due to a belief that they don't count - leaving only negatives.`,
    icon: <FiPlus />
  },
  {
    title: 'Jumping to Conclusions',
    description: `Positive things that happen are dismissed, due to a belief that they don't count - leaving only negatives.`,
    icon: <MdDirectionsRun />
  },
  {
    title: 'Mind Reading',
    description: `Thinking that you know what someone else is thinking, often negatively, without any evidence.`,
    icon: <FaBrain />
  },
  {
    title: 'Fortune Teller',
    description: `Anticipating that things will turn out badly in the future, and you feel like this is a certain fact.`,
    icon: <GiCrystalBall />
  },
  {
    title: 'Magnification / Minification',
    description: `Exaggerating the gravity of a mistake you've made, or minimise positive things, such as your own positive traits.`,
    icon: <MdSearch />
  },
  {
    title: 'Emotional Reasoning',
    description: `Assuming that your negative emotions reflect how things actually are - 'I feel it, so it's true'.`,
    icon: <FiHeart />
  },
  {
    title: 'Should Statements',
    description: `Trying to motivate yourself with 'shoulds' and 'shouldn't', as if you have to force yourself to do something,
    leading to guilty feelings when things don't work out.`,
    icon: <MdTrendingDown />
  },
  {
    title: 'Labelling and Mislabelling',
    description: `An extreme form of overgeneralisation - an error leads you to label yourself: e.g. 'I'm a loser', or using highly emotional language.`,
    icon: <MdLabelOutline />
  },
  {
    title: 'Personalisation of Events',
    description: `Seeing yourself as the cause of negative events that you are not responsible for.`,
    icon: <FiUser />
  },
]

//   Personalization – You see yourself as the cause of some negative external event which in fact you were not primarily responsible for.

const DistortionList = () => {
  return (
    <main className="ph6 pb6 pa4 center flex flex-column items-center justify-center">
      {items.map((item, index) => (
        <Item
          title={item.title}
          description={item.description}
          color={index % 2 === 0 ? 'yellow' : 'gold'}
        >
          {item.icon}
        </Item>
      ))}
    </main>
  )
}

export default DistortionList
