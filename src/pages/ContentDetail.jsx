import React from 'react';
import ContentDetailHeader from '../components/ContentDetailHeader';
import ContentDetailCard from '../components/ContentDetailCard';
import Toast from '../components/Toast';

export default function ContentDetail() {

    return (
        <div>
            <Toast />
            <ContentDetailHeader />
            <ContentDetailCard />
        </div>
    );
}
