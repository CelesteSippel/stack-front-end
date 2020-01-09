import React, { useState } from 'react'
import axios from 'axios'

const AskQuestion = () => {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)
  const postQuestion = async event => {
    event.preventDefault()
    const resp = await axios.post('https://localhost:5001/api/Questions', {
      questionTitle: title,
      questionContent: content,
    })
    setIsSubmitted(true)
    setTimeout(() => {
      setIsSubmitted(false)
    }, 3000)
    reset()
    console.log(resp.data)
  }
  const reset = () => {
    setTitle('')
    setContent('')
    setIsSubmitted(false)
  }

  return (
    <>
      <main className="ask-question-section">
        <h1>Review your question</h1>
        <p>
          Almost there! Let’s give your question one more look. And don’t
          worry—you can edit your question after it’s posted, too.
        </p>
        <form onSubmit={postQuestion}>
          <div className="title">
            <label>Title</label>
            <input
              type="text"
              placeholder="What's your programming question. Be specific"
              onChange={e => {
                setTitle(e.target.value)
              }}
              value={title}
            />
            <textarea
              type="text"
              className="question-input"
              placeholder="Type your question here"
              onChange={e => {
                setContent(e.target.value)
              }}
              value={content}
            />
          </div>
          <button type="submit">Post Your Question</button>
          {isSubmitted ? (
            <>
              <p>Your question was posted!</p>
            </>
          ) : (
            <></>
          )}
        </form>
      </main>
    </>
  )
}

export default AskQuestion
