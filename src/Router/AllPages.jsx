import React from 'react';
import SlidAll from '../HomePage/SlidAll';
import TrendingAndRecommended from '../HomePage/TrendingAndRecommended';
import ProductCardsFirst from '../HomePage/Index';
import ProductGridTwo from '../HomePage/ProductGridTwo';

function AllPages() {
    return (
        <>
            <SlidAll />
            <TrendingAndRecommended />
            <ProductGridTwo />
            <ProductCardsFirst />

        </>

    )
}

export default AllPages;
