import React from 'react'
import 'tachyons'

import './styles.css'
import DistortionList from '../DistortionList';

const HomePage = () => {
  return (
    <>
      <div
        className='lh-copy f5 ph5 pv3 code washed-red'
      >
        <b>Negative Thought Patterns,</b> or <b>Cognitive Distortions </b> are irrational thought patterns, or biased ways of thinking,
        which can lead to mental health issues, such as anxiety, depression, or relationship problems.
      </div>

      <div
        className='lh-copy f5 ph5 pv3 code washed-red'
      >
        Essentially, this can mean that the way you are thinking about something is different to the reality of what is happening.
      </div>

      <div
        className='lh-copy f5 ph5 pv3 code washed-red'
      >
        They are important to understand as often they can lead to a negative loop of thoughts, causing a rapid downturn of mood, and
        can often happen subconsciously, leaving you in a bad mood.
      </div>

      <div
        className='lh-copy f5 ph5 pv3 code washed-red'
      >
        Cognitive distortions often lie at the core of <b>CBT</b> (Cognitive Behavioural Therapy) based treatments. Understanding these patterns can help in managing and understanding your mood.
        This page outlines and explores the most common <b>12 distortions. </b>
      </div>

      <div
        className='pa5 ph5-ns ph3 ttu sans-serif f4 f2-ns light-yellow fw7'
      >
        List of Distortions
      </div>

      <DistortionList />

    </>
  )
}

export default HomePage
