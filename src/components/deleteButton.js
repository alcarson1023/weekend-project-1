import React from 'react';

const DeleteButton = props => {
  return(
      <button class='deleteButton' onClick={() => props.deleteIpsum(props.index)}>Delete</button>
  )
}

export default DeleteButton;