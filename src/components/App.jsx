
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
    <Section>
      <div>
        <p>Good: {this.state.good}</p>
        <p>Neutral: {this.state.neutral}</p>
        <p>Bad: {this.state.bad}</p>
      </div>
    </Section>
    </>
  )
}

}; 

export default App;
