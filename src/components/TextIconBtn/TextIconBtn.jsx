/* eslint-disable react/prop-types */
import ArrowBackIcon from "@mui/icons-material/ArrowBack"
import ArrowForwardIcon from "@mui/icons-material/ArrowForward"
const TextIconBtn = ({ arrow }) => {
  return (
    <div
      className="btn__arrow"
      style={{ flexDirection: `${arrow === "odd" ? "row-reverse" : "row"}` }}
    >
      <ArrowBackIcon
        className="btn__arrow--odd"
        style={{
          height: "24px",
          width: "24px",
          display: `${arrow === "odd" ? "flex" : "none"}`,
        }}
      />
      <span style={{ fontWeight: "500" }}>Shop Now</span>
      <ArrowForwardIcon
        className="btn__arrow--even"
        style={{
          height: "24px",
          width: "24px",
          display: `${arrow === "even" ? "flex" : "none "}`,
        }}
      />
    </div>
  )
}

export default TextIconBtn
