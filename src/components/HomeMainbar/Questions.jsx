import React from "react";
import { Link } from "react-router-dom";
import moment from "moment";

const Questions = ({ question }) => {

// axios.get('https://api.stackexchange.com/2.3/posts?page=1&order=desc&sort=activity&site=stackoverflow')
//   .then(function (response) {
//     // handle success
//     const data = response.data; // Assuming the response data is what you're interested in
//     console.log(data);
    
//     // You can perform further processing with 'data' here if needed
//   })
//   .catch(function (error) {
//     // handle error
//     console.log(error);
//   })
//   .finally(function () {
//     // always executed
//   });

  return (
    <div className="display-question-container">
      <div className="display-votes-ans">
        {/* <p>{data}</p> */}
        <p>{question.upVote.length - question.downVote.length}</p>
        <p>votes</p>
      </div>
      <div className="display-votes-ans">
        <p>{question.noOfAnswers}</p>
        <p>answers</p>
      </div>
      <div className="display-question-details">
        <Link to={`/Questions/${question._id}`} className="question-title-link">
          {question.questionTitle.length > (window.innerWidth <= 400 ? 70 : 90)
            ? question.questionTitle.substring(
              0,
              window.innerWidth <= 400 ? 70 : 90
            ) + "..."
            : question.questionTitle}
        </Link>
        <div className="display-tags-time">
          <div className="display-tags">
            {question.questionTags.map((tag) => (
              <p key={tag}>{tag}</p>
            ))}
          </div>
          <p className="display-time">
            asked {moment(question.askedOn).fromNow()} by {question.userPosted}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Questions;
