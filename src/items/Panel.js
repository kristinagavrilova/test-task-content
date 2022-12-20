import PropTypes from "prop-types";
import mapContent from "../utils/mapContent";

const Panel = (props) => {
    const {width, height, visible, content} = props

    return (
        <div className={visible ? 'border' : 'hidden'} style={
            {
                width: width + 'px',
                height: height + 'px'
            }
        }>
            {content && mapContent(content)}
        </div>
    );
}

export default Panel;

Panel.propTypes = {
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
    visible: PropTypes.bool.isRequired,
    content: PropTypes.array
}