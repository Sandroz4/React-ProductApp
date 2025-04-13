import React from 'react'

function ProductCard({ product, onDelete, onEdit}) {
    return ( 
        <div className='card'>
            <p>{product.name}</p>
            <div className='card-buttons'>
                <button onClick={() => onEdit(product)}>Edit</button>
                <button onClick={() => onDelete(product.id)}>Delete</button>
            </div>
        </div>
    )
}

export default ProductCard


