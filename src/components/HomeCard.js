import React from 'react';
import PropTypes from 'prop-types';

const HomeCard = ({ title }) => {
  return (
    <div className="col-12 col-sm-4">
      <div className="card" style={{ width: '18rem' }}>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/4/46/Bitcoin.svg"
          style={{ paddingTop: '3px', width: '100px', height: '100px' }}
          className="card-img-top rounded mx-auto d-block"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="#" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    </div>
  );
};

HomeCard.propTypes = {
  title: PropTypes.string.isRequired,
};

export default HomeCard;
