import React from 'react';
import SlidAll from '../HomePage/SlidAll';
import TrendingAndRecommended from '../HomePage/TrendingAndRecommended';
import ProductCardsFirst from '../HomePage/Index';
import ProductGridTwo from '../HomePage/ProductGridTwo';
import FirstAll from '../HomePage/ProductCard';

function AllPages() {
    return (
        <>
            <SlidAll />
            <TrendingAndRecommended />
            <ProductGridTwo />
            <FirstAll />
            <ProductCardsFirst />

        </>

    )
}

export default AllPages;
