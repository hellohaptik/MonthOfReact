import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';

const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500/';

const Card = ({ img, title, subtitle, link }) => {
  return (
    <div className="card">
      <img className="card-poster" src={`${IMAGE_BASE_URL}/${img}`} />
      <div className="card-text">
        <h3 className="card-text-title">{title}</h3>
        <p className="card-text-overview">{subtitle}</p>
        {link ? <Link to={link}>Read More</Link> : null}
      </div>
    </div>
  );
};

export default Card;
