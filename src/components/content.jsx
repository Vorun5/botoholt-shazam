import PropTypes from 'prop-types'

export const Content = ({ children }) => {
    return <main className="content">{children}</main>
}

Content.propTypes = {
    children: PropTypes.node,
}
