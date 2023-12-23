/* eslint-disable react/prop-types */

const LinkText = ({ children }) => {
  return (
    <div className="link">
      <span className="link__text">{children}</span>
      <span className="link__text--hovered">{children}</span>
    </div>
  )
}

export default LinkText
