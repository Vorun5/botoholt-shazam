import PropTypes from 'prop-types'

export function Avatar({ src, name, className, bgColor }) {
    return (
        <img
            src={src}
            name={name}
            className={`avatar ${className}`}
            draggable={false}
            style={{
                backgorundColor: bgColor,
            }}
        />
    )
}

Avatar.propTypes = {
    src: PropTypes.string.isRequired,
    name: PropTypes.string,
    bgColor: PropTypes.string,
    className: PropTypes.string,
}
