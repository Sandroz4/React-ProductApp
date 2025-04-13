import React, { useState, useEffect } from "react";

function ProductForm({ onAdd, onUpdate, editingProduct}) {
    const [name, setName] = useState('')

    useEffect(() => {
        if (editingProduct) {
            setName(editingProduct.name)
        }
    }, [editingProduct])

    const handleSubmit = (e) => {
        e.preventDefault()
        if (!name.trim()) return;

        if(editingProduct) {
            onUpdate({ ...editingProduct, name})
        }else{
            onAdd({name})
        }

        setName('')
    }

    return (
        <form onSubmit={handleSubmit} className="form">
            <input type="text"  placeholder="enter product name" 
            value={name} onChange={(e) => setName(e.target.value)}/>
            <button type="submit">{editingProduct ? 'Update' : 'Add'}</button>
        </form>
    )
}

export default ProductForm