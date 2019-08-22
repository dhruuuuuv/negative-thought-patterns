import React from 'react'

export const addLineBreaks = string =>
  string.split('\n').map((text, index) => {
    if (index === 0 || index === string.split('\n').length - 1) {
      return (
        <React.Fragment key={`${text}-${index}`}>
          {console.log(text)}
          {text}
        </React.Fragment>
      )
    }
    else return (
      <React.Fragment key={`${text}-${index}`}>
        {console.log(text)}
        {text}
        <br /> <br />
      </React.Fragment>
    )
  });