import React from 'react'

const Answer = props => {
  return (
    <>
      <div>
        <p>Answer Content: {props.content}</p>

        <div>
          <span>Up Votes: {props.respUpvote}</span>
          <span>Down Votes: -{props.respDownVote}</span>
        </div>
      </div>
    </>
  )
}
export default Answer
