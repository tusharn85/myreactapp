import React from "react";
import Card from "./Cards";
import data from './sampleNews.json';

export default function NewsApp() {
    return (
        <div className="container">
            {data.map((element, index) => {
                return <Card
                key = {index}
                data = {element}
                />
            })}
        </div>
    );
};