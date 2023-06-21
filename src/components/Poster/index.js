import './index.css'

const Poster = () => (
  <div className="poster-container">
    <div className="left-image">
      <img
        src="https://res.cloudinary.com/dtl0m8m7u/image/upload/v1687358139/Ellipse_1-1_vqmxqu.png"
        alt="left-logo"
        className="left-logo"
      />
    </div>
    <div className="middle-container">
      <p className="poster-heading">
        Welcome to <span>Incubyte</span>
      </p>
      <p className="poster-para">
        Building bridges to success in the tech ecosystem
      </p>
      <img
        src="https://res.cloudinary.com/dtl0m8m7u/image/upload/v1687355990/Creative_team-pana_1_awq1le.png"
        alt="logo"
        className="image-size"
      />
    </div>
    <div className="right-image">
      <img
        src="https://res.cloudinary.com/dtl0m8m7u/image/upload/v1687358110/Ellipse_1_ttimms.png"
        alt="right-logo"
        className="right-logo"
      />
    </div>
  </div>
)

export default Poster
