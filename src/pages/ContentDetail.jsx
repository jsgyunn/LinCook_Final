import React from 'react';
import ContentDetailHeader from '../components/ContentDetailHeader';
import ContentDetailCard from '../components/ContentDetailCard';
import ContentDetailList from '../components/ContentDetailList';

export default function ContentDetail() {
    // 반복할 횟수
    const numberOfCards = 2;

    return (
        <div>
            <ContentDetailHeader />
            <ContentDetailList />
            {Array.from({ length: numberOfCards }, (_, index) => (
                <ContentDetailCard key={index} />
            ))}
        </div>
    );
}
