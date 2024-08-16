import React from 'react';
import '../styles/Carousel.css';

const dishes = [
    { id: 1, name: 'Special Salad', price: '$12', description: 'Food is any substance consumed by an organism for nutritional support.', image: null },
    { id: 2, name: 'Russian Salad', price: '$12', description: 'Food is any substance consumed by an organism for nutritional support.', image: null },
    { id: 3, name: 'Asian Salad', price: '$12', description: 'Food is any substance consumed by an organism for nutritional support.', image: null },
    { id: 4, name: 'American Salad', price: '$12', description: 'Food is any substance consumed by an organism for nutritional support.', image: null },
];

export function Carousel() {
    return (
        <div className="carousel">
            {dishes.map(dish => (
                <div key={dish.id} className="carousel-item">
                    <div className="price-tag">{dish.price}</div>
                    <div className="image-placeholder">
                        {}
                    </div>
                    <h3 className="dish-name">{dish.name}</h3>
                    <p className="description">{dish.description}</p>
                </div>
            ))}
        </div>
    );
}

