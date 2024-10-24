import React from "react";
import PropTypes from "prop-types";

const Jumbotron = (props) => {
  const jumbotronStyle = {
    backgroundImage: `url(${props.backgroundImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    color: props.textColor || "inherit",
    position: "relative",
  };

  const overlayStyle = {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: props.overlayColor || "rgba(0, 0, 0, 0.5)",
  };

  const contentStyle = {
    position: "relative",
    zIndex: 1,
  };

  return (
    <div className={`p-5 mb-4 rounded-3 ${props.className}`} style={jumbotronStyle}>
      <div style={overlayStyle}></div>
      <div className="container-fluid py-5" style={contentStyle}>
        <h1 className="display-5 fw-bold">{props.title}</h1>
        <p className="col-md-8 fs-4">{props.description}</p>
        {props.showButton && (
          <button
            className="btn btn-primary btn-lg"
            type="button"
            onClick={props.onButtonClick}
          >
            {props.buttonLabel}
          </button>
        )}
      </div>
    </div>
  );
};

Jumbotron.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  buttonLabel: PropTypes.string,
  onButtonClick: PropTypes.func,
  showButton: PropTypes.bool,
  className: PropTypes.string,
  backgroundImage: PropTypes.string,
  textColor: PropTypes.string,
  overlayColor: PropTypes.string,
};

Jumbotron.defaultProps = {
  buttonLabel: "Learn more",
  onButtonClick: () => {},
  showButton: true,
  className: "",
  backgroundImage: "",
  textColor: "",
  overlayColor: "",
};

export default Jumbotron;
