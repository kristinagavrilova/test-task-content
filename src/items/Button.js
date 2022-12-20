import PropTypes from "prop-types";

const Button = (props) => {
    const {caption, width, height, visible} = props

    return (
        <button className={visible ? '' : 'hidden'} style={
            {
                width: width + 'px',
                height: height + 'px'
            }
        }>{caption}</button>
    );
}

export default Button;

Button.propTypes = {
    caption: PropTypes.string.isRequired,
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
    visible: PropTypes.bool.isRequired
}