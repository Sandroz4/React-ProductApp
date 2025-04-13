import React from 'react';
import ProductCard from './ProductCard'

function ProductList( {products, onDelete, onEdit} ) {
    if (products.length === 0) {
        return <p className='empty'>No Products Yet</p>
    }

    return ( 
        <div className='grid'>
            {products.map(product => {
                return (
                <ProductCard 
                key={product.id}
                product={product}
                onDelete={onDelete}
                onEdit={onEdit}
                /> )
            })}
        </div>
    )
}

export default ProductList