import React from 'react';
import {useSelector} from "react-redux";
import ProductCard from "../Product/ProductCard";

const Favorite = () => {
    const {favorites} = useSelector(state => state.favorite)
    return (
    <div className="py-10 bg-gray-950">
        <div className="flex flex-wrap gap-24 justify-center">
            {
                favorites.map(el => <ProductCard el={el}/>)
            }
        </div>
    </div>
    );
};

export default Favorite;