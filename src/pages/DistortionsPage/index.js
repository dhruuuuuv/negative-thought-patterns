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
        description={
          `All-or-nothing thinking is where we think, and tend to see the world, only as extremes.
          People are either good, or bad, we view ourselves as either a complete success or an utter failure.
          This way of thinking completely disqualifies the middle 'shades' that realistically make up the world.
          `
        }
        example={
          `
          You're at a job interview. You think everything's going quite well, but then suddenly you're sprung with a question that throws you off.
          You feel as if the answer you gave wasn't as well as you could have done.
          You leave the interview thinking it was awful, and there's no chance you've got the job.
          Here, you're disqualifying the majority of the interview which went well, and branding yourself a failure.
          This can often lead to feelings of disappointment or shame.
          `
        }
      />
    )
  }
  else if (match.params.distortion === 'over-generalisation') {
    return (
      <DistortionPage
        title='Over-Generalisation'
        description={
          `This is where we conclude something from, say, only one example. This could be predicting the outcome of something based on one instance,
          or after meeting one kind of person, assuming that all similar-looking people will look the same.
          It's usually wrong, and unhelpful, as it's not very accurate - the world is much more complex than we like to think. 
          `
        }
        example={
          `
          You've been on a date. You thought it went well but for whatever reason the other person decides they don't want to see you again.
          You conclude that because of this, you'll never ever get a partner - you abandon dating all together, and focus on your career instead. 
          `
        }
        help={
          `
          It can be helpful to ask yourself what you're basing the assumption on.
          Do you have a lot of evidence to back it up?
          Imagine a friend was in the same situation as you, and think about what you'd say to them,
          if they were in the same position.
          `
        }
      />
    )
  }
  else if (match.params.distortion === 'mental-filter') {
    return (
      <DistortionPage
        title='Mental Filter'
        description={
          `
          This is a very common cognitive distortion. It's where we filter out everything positive about a situation,
          so we're only left with the negative. \n It often comes with very high, or unrealistic expectations for yourself.
          `
        }
        example={
          `
          You're usually on time with your deadlines, and your boss is pushing you to complete this one as soon as possible.
          You're burnt out, so you miss the deadline. Suddenly, you're unable to see all the times you've been on time, and everyone has been happy with your work,
          and you can only see the one time you miss, so you call yourself a failure.
          `
        }
        help={
          `
          The best thing to lift the mental filter is to think about, and write down the actual facts, or evidence of the situation.
          By doing this, you become aware of the reality of the situation, and are getting a more rounded, fair view of everything.
          Being this way allows us to break out of the pessimistic perspective.
          `
        }
      />
    )
  }
  else if (match.params.distortion === 'labelling') {
    return (
      <DistortionPage
        title='Labelling'
        description={
          `
          Here you take one part of a person's character, and apply it them completely. Instead of thinking about a person as a whole,
          you're making assumptions.
          The main problem with labelling is that you're taking a complex character, with different hopes, fears and dreams, and reducing it to one, simplistic thing.
          Doing this can lead to problems when we do it with others - if you call your partner unreliable because he's late once,
          you can feel sad that you're with an unreliable person.
          `
        }
        example={
          `
          You get a bad result in one test, and you call yourself a failure.
          A co-worker speaks to you in a short tone, so you call her 'cold', or 'unfriendly'.
          `
        }
        help={
          `
          It's best to try and consider the behaviour as the problem, rather than the label, as this can lead to anger, frustration, and sadness.
          We can try to describe (fairly and objectively) the behaviour we're seeing, rather than the label.
          Doing this reduces the amount of highly emotional language, and allows us to deal with our problems in a level-headed way.
          `
        }
      />
    )
  }
  else if (match.params.distortion === 'mind-reading') {
    return (
      <DistortionPage
        title='Mind Reading'
        description={
          `
          This is simply thinking that you know what other people are thinking.
          Another person's behaviour can give us hints about how they're feeling, but ultimately it's impossible for us to know what someone else is thinking by guessing.
          We tend to extrapolate the own way we think onto others, and therefore end up thinking that someone must be thinking along the same lines as us.
          `
        }
        example={
          `
          You arrive to work late, and you 'know' that everyone is thinking about you being late, about how you're unreliable.
          You spend the rest of the day being snappy with everyone because you're annoyed at them for thinking that. 
          We often do this subconsciously, so we can find oursevles in a bad mood with others, when we assume we know what they're thinking.
          `
        }
        help={
          `
          As with other distortions, identifying the thoughts can be helpful here.
          Try writing down what you think other people are thinking, which can sometimes immediately lead you to seeing the problem with the logic.
          What evidence is there for this assumption?
          What are the costs and benefits of thinking this thought?
          Is it leading to increased anxiety - perhaps it would be better to try and let it go. \n
          It can be helpful to 'test out' the thought - or act against the thought. If you think someone is unfriendly, go and say hello and see how they react.
          `
        }
      />
    )
  }
  else if (match.params.distortion === 'fortune-telling') {
    return (
      <DistortionPage
        title='Fortune Telling'
        description={
          `
          This is a distortion where we predict a negative outcome without any solid basis for thinking this,
          or feeling sure that you can tell the future. This can often be 'chained together', so we assume that we know the way that future events will pan out.
          This is often negative, so we assume that something bad will happen to us, or those close to us.
          Often, the world is highly unpredictable, so our assumptions are wrong.
          `
        }
        example={
          `
          You 
          `
        }
        help={
          `
          As with other distortions, identifying the thoughts can be helpful here.
          Try writing down what you think other people are thinking, which can sometimes immediately lead you to seeing the problem with the logic.
          What evidence is there for this assumption?
          What are the costs and benefits of thinking this thought?
          Is it leading to increased anxiety - perhaps it would be better to try and let it go. \n
          It can be helpful to 'test out' the thought - or act against the thought. If you think someone is unfriendly, go and say hello and see how they react.
          `
        }
      />
    )
  }
  else {
    return <NotFoundPage />
  }

}

DistortionsPage.propTypes = {
}

export default DistortionsPage
