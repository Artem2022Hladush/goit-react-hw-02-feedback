
import React, { Component } from "react"
import Section from "./Section/Section";
import Notification from "./Notification/Notification";
import FeedbackButton from "./FeedbackButton/FeedbackButton";

class App extends Component {
state = {
  good: 0,
  neutral: 0,
  bad: 0,
};

handleAddFeedback = (el) => {
  this.setState((prevState)=>(
    {
      [el]:prevState[el]+1
    }
  ))
}


countTotalFeedback = () => {
  return this.state.good + this.state.neutral + this.state.bad;
}

percentageGoodFeedback = () => {
  return 100*this.state.good/this.countTotalFeedback();
}

render () {
  return (
    <>
    <Section title = "Plese Leave Feeedback">
        <FeedbackButton options={Object.keys(this.state)} onAddFeedback={this.handleAddFeedback}></FeedbackButton>
    </Section>
    {
      this.countTotalFeedback() > 0 ?
      <Section title = "Statistics">
      <div>
        <p>Good: {this.state.good}</p>
        <p>Neutral: {this.state.neutral}</p>
        <p>Bad: {this.state.bad}</p>
      </div>
      <div>
        <p>Total: {this.countTotalFeedback()}</p>
        <p>Positive Feedback: {this.countTotalFeedback === 0 ?  "100" : Math.round(this.percentageGoodFeedback())}%</p>
      </div>
    </Section> :
    <Notification message="There is no feedback"/>
    }
    </>
  )
}

}; 

export default App;
