import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCog } from '@fortawesome/free-solid-svg-icons'
import SideNav from '../components/SideNav'
import Question from '../components/Question'
import axios from 'axios'
import { Link } from 'react-router-dom'
const cog = <FontAwesomeIcon icon={faCog} />

const HomePage = () => {
  const [questionData, setQuestionData] = useState([])
  const getQuestions = async () => {
    const resp = await axios.get('https://localhost:5001/api/Questions')
    console.log(resp.data)
    setQuestionData(resp.data)
  }

  useEffect(() => {
    getQuestions()
  }, [])

  return (
    <>
      <main>
        <SideNav />
        <div className="main-content">
          <header>
            <div className="top-part">
              <h1>All Questions</h1>
              <Link to="/ask-question" className="ask-question-button" href="#">
                Ask a Question
              </Link>
            </div>
            <div className="bottom-part">
              <p>18,269,585 questions</p>
              <div className="filter-options">
                <a className="newest-filter" href="#">
                  Newest
                </a>
                <a href="#">Active</a>
                <a href="#">Bountied</a>
                <a href="#">Unanswered</a>
                <a className="more-filter" href="#">
                  More
                </a>
                <a className="filter-button" href="#">
                  {cog} Filter
                </a>
              </div>
            </div>
          </header>
          <section className="question-preview">
            {questionData.map((item, i) => {
              return (
                <Question
                  key={item.id}
                  questionTitle={item.questionTitle}
                  questionContent={item.questionContent}
                  votes={item.questionLike}
                />
              )
            })}
          </section>
        </div>
      </main>
    </>
  )
}

export default HomePage
