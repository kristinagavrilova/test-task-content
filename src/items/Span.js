import PropTypes from "prop-types";

const Span = (props) => {
    const {caption, visible} = props

    return (
        <span className={visible ? '' : 'hidden'}>{caption}</span>
    );
}

export default Span;

Span.propTypes = {
    caption: PropTypes.string.isRequired,
    visible: PropTypes.bool.isRequired
}