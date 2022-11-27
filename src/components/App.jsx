import React, { Component } from "react"
import Section from "./Section/Section";

class App extends Component {
state = {
  good: 0,
  neutral: 0,
  bad: 0,
};

handleAddFeedback = () => {
  this.setState ((prevstate) => ({

  }))
}

render () {
  return (
    <>
    <Section title = "Plese Leave Feeedback">
<div>
  <button type="button"></button>
  <button type="button"></button>
  <button type="button"></button>
</div>
    </Section>
    </>
  )
}

}; 

export default App;
