import React from "react";
import PropTypes from "prop-types";

const Card = (props) => {
    return (
        <div className="card h-100">
            {props.image && (
                <img
                    src={props.image}
                    className="card-img-top"
                    alt="Card Image"
                    style={{ height: "200px", objectFit: "cover" }}
                />
            )}
            <div className="card-body d-flex flex-column">
                <h5 className="card-title">{props.name}</h5>
                <p className="card-text flex-grow-1">{props.text}</p>
                <a href={props.buttonLink} className="btn btn-primary mt-auto">
                    {props.buttonLabel}
                </a>
            </div>
        </div>
    );
};

Card.propTypes = {
    name: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    image: PropTypes.string,
    buttonLabel: PropTypes.string.isRequired,
    buttonLink: PropTypes.string.isRequired,
};

Card.defaultProps = {
    image: null,
};

export default Card;
