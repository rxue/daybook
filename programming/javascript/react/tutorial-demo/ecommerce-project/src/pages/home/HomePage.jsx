import axios from 'axios'
import { useEffect, useState } from 'react'
import './HomePage.css'
import { Header } from '../../components/header'
import { ProductGrid } from './ProductGrid'
export function HomePage({ cart }) {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        async function getHomeData() {
            const response = await axios.get('/api/products');
            setProducts(response.data);
        }
        getHomeData();
    }, [])
    
    return (
        <>
            <Header cart={cart} />
            <div className="home-page">
                <ProductGrid products={products} />
            </div>
        </>
    );
}