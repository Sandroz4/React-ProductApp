import React, { useReducer, useEffect, useState } from "react";
import ProductForm from './components/ProductForm'
import ProductList from './components/ProductList'
import { productReducer } from "./reducer";

function App() {
    const [products, dispatch] = useReducer(productReducer, [])
    const [editingProduct, setEditingProduct] = useState(null)

    useEffect(() => {
        const stored = localStorage.getItem('products')
        if (stored) {
            dispatch({ type: 'INIT', payload: JSON.parse(stored)})
        }
    }, [])

    useEffect(() => {
        localStorage.setItem('products', JSON.stringify(products))
    }, [products])

    const addProduct= (product) => {
        dispatch({ type: 'ADD', payload: product})
    }

    const updateProduct = (product) => {
        dispatch({ type: 'UPDATE', payload: product})
        setEditingProduct(null)
    }

    const DeleteProduct = (id) => {
        dispatch({ type: 'DELETE', payload: id})
    }

    const handleEdit = (product) => {
        setEditingProduct(product)
    }

    return(
        <>
        <div className="container">
            <h1>Products</h1>
            <ProductForm 
            onAdd={addProduct}
            onUpdate={updateProduct}
            editingProduct={editingProduct}
            />
            <ProductList 
            products={products}
            onDelete={DeleteProduct}
            onEdit={handleEdit}/>
        </div>
        </>
    )
}

export default App