import React from 'react';
import ContentDetailHeader from '../components/ContentDetailHeader';
import ContentDetailCard from '../components/ContentDetailCard';
import ContentDetailList from '../components/ContentDetailList';

export default function ContentDetail() {

    return (
        <div>
            <ContentDetailHeader />
            <ContentDetailList />
            <ContentDetailCard />
        </div>
    );
}
