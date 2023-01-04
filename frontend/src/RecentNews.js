import NewsCard from './NewsCard.js';
import {React, useEffect, useState} from 'react';

function RecentNews(props){

    const [recentNewsData, setRecentNewsData] = useState([]);
    
    useEffect(() => {
        fetch('/api/recent-news')
            .then((response) => response.json())
            .then((recentNewsData) => {
            setRecentNewsData(recentNewsData);
            });
        }, []);
        
    const newsCards = [];
    let count = 0

    for (const article of Object.values(recentNewsData)) {
        const newsCard = (
            <NewsCard
            key={`article${count}`}
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

export default RecentNews;