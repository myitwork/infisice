import React, { useState } from 'react';
import { addProduct } from '../utils/api';

const AddProduct = () => {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        await addProduct({ name, price });
        setName('');
        setPrice('');
        alert('Product added!');
    };

    return (
        <div>
            <h1>Add a New Product</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Product Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <input
                    type="number"
                    placeholder="Price"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                />
                <button type="submit">Add Product</button>
            </form>
        </div>
    );
};

export default AddProduct;
