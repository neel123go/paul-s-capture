import React from 'react';
import Albums from '../Albums/Albums';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <Albums></Albums>
        </div>
    );
};

export default Home;