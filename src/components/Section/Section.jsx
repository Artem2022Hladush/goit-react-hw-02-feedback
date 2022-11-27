import PropTypes from "prop-types"
import css from "../Section/Section.module.css"
// import { MdInsertEmoticon, TbMoodNeutral, MdMoodBad} from 'react-icons/fa';

const Section = ({title, children}) => {
return (
	<div>
		<h2 className={css.title}>{title}</h2>
		{children}
	</div>
)
};
Section.propTypes = {
	title: PropTypes.string.isRequired,
	children: PropTypes.node.isRequired,
}

export default Section;

