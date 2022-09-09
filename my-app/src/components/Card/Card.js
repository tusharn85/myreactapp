import React from "react";

import './Card.css';

const Card = props => {
    const {
        data: {
            source,
            title,
            description,
            author,
            urlToImage,
            url
        }
    } = props;

    return (
        <div className="card">
            <img src={urlToImage} alt="image" />
            <p className="source">{source.name}</p>
            <p className="title"><b>{title}</b></p>
            <p className="desc">{description}</p>
            <p className="author">{author}</p>
            <a href={url} target="#">
                <button>Read More</button>
            </a>
        </div>
    );
}

export default Card;