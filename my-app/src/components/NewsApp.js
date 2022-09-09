import React from "react";

import Card from "./Card";

import data from './SampleNews.json';

const NewsApp = () => (
    <div className="container">
        {data.map((element, index) => (
            <Card
                key={index}
                data={element}
            />
        ))}
    </div>
);

export default NewsApp;