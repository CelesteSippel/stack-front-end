import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCog } from '@fortawesome/free-solid-svg-icons'
import SideNav from '../components/SideNav'
import Question from '../components/Question'
import axios from 'axios'
import { Link } from 'react-router-dom'
// import Footer from '../components/Footer'
const cog = <FontAwesomeIcon icon={faCog} />

const HomePage = () => {
  const [postData, setPostData] = useState([])
  const getPosts = async () => {
    const resp = await axios.get('https://localhost:5001/api/Post')
    console.log(resp.data)
    setPostData(resp.data)
  }

  useEffect(() => {
    getPosts()
  }, [])

  return (
    <>
      <div>
        <main>
          <SideNav />
          <div className="main-content">
            <header>
              <div className="top-part">
                <h1>All Questions</h1>
                <Link
                  to="/ask-question"
                  className="ask-question-button"
                  href="#"
                >
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
              {postData.map((item, i) => {
                return (
                  <Question
                    key={item.id}
                    postTitle={item.postTitle}
                    postContent={item.postContent}
                    votes={item.postUpVote}
                  />
                )
              })}
            </section>
          </div>
        </main>
      </div>
    </>
  )
}

export default HomePage
