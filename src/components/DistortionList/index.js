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
    icon: <WiMoonAltFirstQuarter />,
    link: '/distortion/all-nothing-thinking'
  },
  {
    title: 'Over-generalisation',
    description: `Blowing a single negative event out of proportion, so that you see it in a long line of never-ending defeats.`,
    icon: <FiRotateCw />,
    link: '/distortion/over-generalisation'
  },
  {
    title: 'Mental Filter',
    description: `Becoming fixated on a single bad thing that's happening, so that everything else gets ignored,
          and your view becomes darkened.`,
    icon: <FiEye />,
    link: '/distortion/mental-filter'
  },
  {
    title: 'Disqualifying the Positive',
    description: `Positive things that happen are dismissed, due to a belief that they don't count - leaving only negatives.`,
    icon: <FiPlus />,
    link: '/distortion/disqualifying-positive'
  },
  {
    title: 'Jumping to Conclusions',
    description: `Drawing negative conclusions with little to no evidence of assumptions - often works through mind reading, or fortune telling.`,
    icon: <MdDirectionsRun />,
    link: '/distortion/jumping-to-conclusions'
  },
  {
    title: 'Mind Reading',
    description: `Thinking that you know what someone else is thinking, often negatively, without any evidence.`,
    icon: <FaBrain />,
    link: '/distortion/mind-reading'
  },
  {
    title: 'Fortune Telling',
    description: `Anticipating that things will turn out badly in the future, and you feel like this is a certain fact.`,
    icon: <GiCrystalBall />,
    link: '/distortion/fortune-telling'
  },
  {
    title: 'Magnification / Minification',
    description: `Exaggerating the gravity of a mistake you've made, or minimise positive things, such as your own positive traits.`,
    icon: <MdSearch />,
    link: '/distortion/magnification-minification'
  },
  {
    title: 'Emotional Reasoning',
    description: `Assuming that your negative emotions reflect how things actually are - 'I feel it, so it's true'.`,
    icon: <FiHeart />,
    link: '/distortion/emotional-reasoning'
  },
  {
    title: 'Should Statements',
    description: `Trying to motivate yourself with 'shoulds' and 'shouldn't', as if you have to force yourself to do something,
    leading to guilty feelings when things don't work out.`,
    icon: <MdTrendingDown />,
    link: '/distortion/should-statements'
  },
  {
    title: 'Labelling and Mislabelling',
    description: `An extreme form of overgeneralisation - an error leads you to label yourself: e.g. 'I'm a loser', or using highly emotional language.`,
    icon: <MdLabelOutline />,
    link: '/distortion/labelling'
  },
  {
    title: 'Personalisation of Events',
    description: `Seeing yourself as the cause of negative events that you are not responsible for.`,
    icon: <FiUser />,
    link: '/distortion/personalisation'
  },
]

//   Personalization – You see yourself as the cause of some negative external event which in fact you were not primarily responsible for.

const DistortionList = () => {
  return (
    <main className="pa-2 ph6-ns pb6-ns pa4-ns center flex flex-column flex-wrap flex-nowrap-ns items-center justify-center">
      {items.map((item, index) => (
        <Item
          key={index}
          title={item.title}
          description={item.description}
          link={item.link}
          color={index % 2 === 0 ? 'yellow' : 'gold'}
        >
          {item.icon}
        </Item>
      ))}
    </main>
  )
}

export default DistortionList
