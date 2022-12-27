import {React, useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import NewsCard from './NewsCard.js';

function DriverNewsById(props) {
    const params = useParams()
    const [recentNewsData, setRecentNewsData] = useState([]);
    const driverId = params.driverId
    let count = 25000000

    const url = `/api/recent-news/${driverId}`;

    useEffect(() => {
    fetch(url)
        .then((response) => response.json())
        .then((driverData) => {
        setRecentNewsData(driverData);
        });
    }, []);

    const newsCards = [];

    for (const article of Object.values(recentNewsData)) {
        const newsCard = (
            <NewsCard
            key={`article${count}{description}`}
            description = {article.description}
            title = {article.title}
            url = {article.url}
            url_to_image = {article.url_to_img}
            />
        );
        count++
        newsCards.push(newsCard);
    }


    return (
        <div className = "newsGrid">
            {newsCards}
        </div>
        );
    }

export default DriverNewsById;