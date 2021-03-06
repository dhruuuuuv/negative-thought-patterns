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
          `All-or-nothing thinking is where we think, and tend to see the world, only as extremes. People are either good, or bad, we view ourselves as either a complete success or an utter failure. This way of thinking completely disqualifies the middle 'shades' that realistically make up the world.
          `
        }
        example={
          `
          You're at a job interview. You think everything's going quite well, but then suddenly you're sprung with a question that throws you off. You feel as if the answer you gave wasn't reflective of your knowledge. You leave the interview thinking it was awful, and there's no chance you've got the job.
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
          `This is where we conclude something from, say, only one example. This could be predicting the outcome of something based on one instance, or after meeting one kind of person, assuming that all similar-looking people will look the same.
          It's usually wrong, and unhelpful, as it's not very accurate - the world is much more complex than we like to think. 
          `
        }
        example={
          `
          You've been on a date. You thought it went well but for whatever reason the other person decides they don't want to see you again. You conclude that because of this, you'll never ever get a partner - you abandon dating all together, and focus on your career instead. 
          `
        }
        help={
          `
          It can be helpful to ask yourself what you're basing the assumption on. Do you have a lot of evidence to back it up? Imagine a friend was in the same situation as you, and think about what you'd say to them,
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
          This is a very common cognitive distortion. It's where we filter out everything positive about a situation, so we're only left with the negative. It often comes with very high, or unrealistic expectations for yourself.
          `
        }
        example={
          `
          You're usually on time with your deadlines, and your boss is pushing you to complete this one as soon as possible. You're burnt out, so you miss the deadline. Suddenly, you're unable to see all the times you've been on time, and everyone has been happy with your work, and you can only see the one time you miss, so you call yourself a failure.
          `
        }
        help={
          `
          The best thing to lift the mental filter is to think about, and write down the actual facts, or evidence of the situation. By doing this, you become aware of the reality of the situation, and are getting a more rounded, fair view of everything.
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
          Here you take one part of a person's character, and apply it them completely. Instead of thinking about a person as a whole, you're making assumptions. The main problem with labelling is that you're taking a complex character, with different hopes, fears and dreams, and reducing it to one, simplistic thing.
          Doing this can lead to problems when we do it with others - if you call your partner unreliable because he's late once,
          you can feel sad that you're with an unreliable person.
          `
        }
        example={
          `
          You get a bad result in one test, and you call yourself a failure. A co-worker speaks to you in a short tone, so you call her 'cold', or 'unfriendly'.
          `
        }
        help={
          `
          It's best to try and consider the behaviour as the problem, rather than the label, as this can lead to anger, frustration, and sadness. We can try to describe (fairly and objectively) the behaviour we're seeing, rather than the label.
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
          This is simply thinking that you know what other people are thinking. Another person's behaviour can give us hints about how they're feeling, but ultimately it's impossible for us to know what someone else is thinking by guessing.
          We tend to extrapolate the own way we think onto others, and therefore end up thinking that someone must be thinking along the same lines as us.
          `
        }
        example={
          `
          You arrive to work late, and you 'know' that everyone is thinking about you being late, about how you are unreliable. You spend the rest of the day being snappy with everyone because you're annoyed at them for thinking that.
          We often do this subconsciously, so we can find oursevles in a bad mood with others, when we assume we know what they're thinking.
          `
        }
        help={
          `
          As with other distortions, identifying the thoughts can be helpful here. Try writing down what you think other people are thinking, which can sometimes immediately lead you to seeing the problem with the logic.
          What evidence is there for this assumption? What are the costs and benefits of thinking this thought?
          Is it leading to increased anxiety - perhaps it would be better to try and let it go. It can be helpful to 'test out' the thought - or act against the thought. If you think someone is unfriendly, go and say hello and see how they react.
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
          This is a distortion where we predict a negative outcome without any solid basis for thinking this, or feeling sure that you can tell the future. This can often be 'chained together', so we assume that we know the way that future events will pan out.
          This is often negative, so we assume that something bad will happen to us, or those close to us.
          Often, the world is highly unpredictable, so our assumptions are wrong.
          `
        }
        example={
          `
          You've just had a job interview. You felt like you were picking up signals from the interviewer, so you say "I'm not going to get the job". We can get a sense of what's happening, but when we're doing this, we fail to see the factors outside of our control - we have a very focused, narrow view of the situation.
          `
        }
        help={
          `
          As with other distortions, it helps to think about the evidence that sits for and against the prediction you've made. Whilst doing this, it's important to try and think outside of just your perspective.
           With the example above you could still have weighed better than the other candidates. Try also to think about other predictions you've made, and your success ratio with these.
          
          `
        }
      />
    )
  }
  else if (match.params.distortion === 'personalisation') {
    return (
      <DistortionPage
        title='Personalisation'
        description={
          `
          This is where we think that anything that happens in the world, or from people is directed to us. It can also lead to unhealthy comparisons to others, or to thinking that you're responsible for something that was completely out of your control, such as some natural accident, or by simply not being there.
          `
        }
        example={
          `
          Imagine you're walking down the street and you move out of the way of a very grumpy looking man, storming down the road. Immediately, you assume that he's grumpy because of you, because of the way you look, or for being in the way. 
          In fact, it's likely that the man is stressed as he's late for work, had a disagreement this morning, or almost anything else. In most instances, we only feature a small part in someone's life, and we likely didn't even register with them.
          `
        }
        help={
          `
          A helpful way to avoid this is to think about the scale of yourself in the world. Many things and many factors affect the way the world operates. This distortion often comes about from exaggerated emphasis on the self. 
          You could also try writing down the reasons for the event, and you'll often find that the number of reasons that are unrelated to you far outweigh those that relate. 
          `
        }
      />
    )
  }
  else if (match.params.distortion === 'should-statements') {
    return (
      <DistortionPage
        title='Should Statements'
        description={
          `For this distortion, we attack ourselves when we do something wrong, or even when we don't do anything. We say: "I must be doing this...", or "I should be doing this...". This often happens when we think about exercise, diet, habits, and other things. There are no things we must do. 
          Often, this comes about from the person expecting absolute perfection from themselves. We deviate from our impossibly high expectations of ourselves and we diminish ourselves.
          The interesting thing about this approach is we often think we need to punish ourselves in this way to motivate, but this will often make us feel worse, leading to more negative behaviours as we try and rid ourselves of the bad feeling. If we instead tried a softer approach - "Oh well, I'll try harder next time", we can sometimes find more motivation through this approach.`
        }
        example={
          `
          You decided that you would go on a run twice a week. You wake up feeling ill, so you decide not to go for your second run of the week. You're not feeling that well, so you decide to have some cake. Immediately after, you say to yourself - "What am I doing? I shouldn't be doing this, I should be running! I'm a complete failure".
          You now feel awful after beating yourself up, so you eat another piece of cake to try and feel better. Instead, if you tried saying to yourself "Oh well, it's ok, I'm not feeling well today, I'll try again tomorrow", you wouldn't be left with negative feelings, so you could try again the next day.
          People aren't perfect - we all make mistakes, so try and be kind to yourself.
          `
        }
        help={
          `
          A helpful way to think about it is - would you say these statements to someone you loved? To a child? Would you hold them to the same standards as yourself? In likelihood, you wouldn't - so try being kinder to yourself. Try replacing "must" and "should" with "I can try to...", "I wish..." or another softer phrase.
          `
        }
      />
    )
  }
  else if (match.params.distortion === 'emotional-reasoning') {
    return (
      <DistortionPage
        title='Emotional Reasoning'
        description={
          `
          Here, we assume that something must be true because we feel a certain way, regardless of the evidence of the situation. The most common instance of this is assuming that because you're feeling anxious, something must be wrong. 
          `
        }
        example={
          `
          An example of emotional reasoning is when if we're in a relationship, and we start to feel jealous of our partner - we assume that they must be doing wrong. Often jealousy can come from our own internal feelings of inadequacy, instead of concrete facts.
          `
        }
        help={
          `
          We can work against this by identifying the underlying thoughts that underpins the feelings - why am I feeling this way? Our thoughts have a direct impact on our emotions. It can also help to try and view the situation from someone else's perspective. This can help us form a rounded opinion.
          `
        }
      />
    )
  }
  else if (match.params.distortion === 'magnification-minification') {
    return (
      <DistortionPage
        title='Magnification / Minification'
        description={
          `
          In this distortion, either the importance of insignificant events is exaggerated, or something significant is lessened. We can blow our problems out of proportion, whilst ignoring the positive things that are happening.
          `
        }
        example={
          `
          During a job interview, you think it's going well, and suddenly you make a slip of the tongue, and call the interviewer by the wrong name. After the interview, all you can focus on is this one mistake, and decide that you've definitely not got the job.
          When they call you up to tell you you've got the job, you say it must be down to luck, or you feel like an imposter. Here, it becomes easy for you to see how we're personally magnifying on certain issues, and minimizing your successes.
          `
        }
        help={
          `
          As with many of the other distortions, it's helpful to try and examine the reasons that underpin your thinking. Write down the reasons for and against thinking what you're thinking, and this may allow you to come to a more fair conclusion.
          As this way of thinking is common in those who suffer from panic attacks, you could also try keeping a panic diary, and notice how your thoughts affect how you're feeling.
          `
        }
      />
    )
  }
  else if (match.params.distortion === 'jumping-to-conclusions') {
    return (
      <DistortionPage
        title='Jumping To Conclusions'
        description={
          `
          This cognitive distortion encompasses the three other distortions described here: mind reading, fortune telling, and labelling. In general this happens when we make an assumption, and form a conclusion with an inadequate set of information to make this conclusion.
          `
        }
        example={
          `
          You're working hard on a project at work, and it's been a tough month. You've been trying to keep afloat of the work, but you've felt that you're lagging behind a bit. A colleague comes up to you, and says that your boss would like to chat with you. You immediately assume that you're fired. You've already started mentally packing up your stuff and updating your resume.
          You walk into his office, and he asks you how everything is going, and that he appreciates your extra work, and that he's very happy with how you're handling it.
          Here, we can see that we're forming the conclusion without a strong foundation of evidence. This can often happen automatically, so it occurs before we've even noticed it happening.
          `
        }
        help={
          `
          To help with this, think about sometimes when you've previously jumped to conclusions and you've been wrong. It can also help to form up a bigger picture of what's happening, and not focus too much on what's happening to you.
          It can also help to consider if you're generally quick to judge, and see if this is reflective of your level of cognitive distortion.
          `
        }
      />
    )
  }
  else if (match.params.distortion === 'disqualifying-positive') {
    return (
      <DistortionPage
        title='Disqualifying the Positive'
        description={
          `
          This is best considered as an extreme form of all-or-nothing thinking, where we completely ignore everything positive about ourselves: just 'nothing thinking'! This often reinforces our negative feelings, and diminishes our positive thoughts about ourselves.
          `
        }
        example={
          `
          You've done a test and receive a good mark for it. You assume that the reason you did well was completely luck, and not the fact that you're knowledgeable, or studied hard - but instead that it was pure chance.
          `
        }
        help={
          `
          We can help negate this effect by focusing on the language we use to describe ourselves, or what happens to us. If we try and describe a situation more positively, through using positive language, we can adjust our thinking subconsciously.
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
