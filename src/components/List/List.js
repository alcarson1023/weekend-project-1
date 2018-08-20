import React from 'react';

const List = props => {
  return(
    <div>
      <h1>{props.list}</h1>
      {/*<button onClick={() => props.deletePerson(i)}>Delete</button>*/}
    </div>
  )
};

export default List;