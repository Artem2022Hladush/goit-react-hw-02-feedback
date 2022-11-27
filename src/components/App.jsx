
import React, { Component } from "react"
import Section from "./Section/Section";

class App extends Component {
state = {
  good: 0,
  neutral: 0,
  bad: 0,
};

handleAddGoodFeedback = () => {
  this.setState(prevState => {
    return {
      good: prevState.good + 1,
    }
  })
}

handleAddNeutralFeedback = () => {
  this.setState(prevState => {
    return {
      neutral: prevState.neutral + 1,
    }
  })
}

handleAddBadFeedback = () => {
  this.setState(prevState => {
    return {
      bad: prevState.bad + 1,
    }
  })
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
<div>
  <button type="button"  onClick={this.handleAddGoodFeedback}>Good</button>
  <button type="button" onClick={this.handleAddNeutralFeedback}>Neutral</button>
  <button type="button" onClick={this.handleAddBadFeedback}>Bad</button>
</div>
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
    <h1>There is no feedback</h1>
    }
    </>
  )
}

}; 

export default App;
