import React from 'react';

const SubmitButton = props => {
  return(
      <button class='submitButton' onClick={() => props.putIpsum(props.index, props.input)}>Change</button>
  )
}

export default SubmitButton;