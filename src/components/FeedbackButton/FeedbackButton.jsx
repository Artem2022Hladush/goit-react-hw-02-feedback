import PropTypes from "prop-types";
import { MdInsertEmoticon, TbMoodNeutral, MdMoodBad} from 'react-icons/fa';

const FeedbackButton = () => {
<div>
  <button type="button"  onClick={this.handleAddGoodFeedback}>Good</button>
  <button type="button" onClick={this.handleAddNeutralFeedback}>Neutral</button>
  <button type="button" onClick={this.handleAddBadFeedback}>Bad</button>
</div>
};

FeedbackButton.propTypes = {

}

export default FeedbackButton;