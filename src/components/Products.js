import React, {useState, useEffect} from 'react';


const Products = () => {
    const [products , setProducts] = useState([]);
    useEffect(()=>{
        const fetchProducts = async () => {
            const res = await fetch('https://fakestoreapi.com/products');
            const data = await res.json();
            setProducts(data);
        };
        fetchProducts();
    },[])
  return (
    <div className='productsWrapper'>
        {
            products.map((product, key)=>(
                <div className="card" key={product.id}>
                    <img src={product.image} alt="" />
                    <h4>{product.title}</h4>
                    <h5>{product.price}</h5>
                    <div className="btn">Add to cart</div>
                </div>
            ))
        }
    </div>
  )
}

export default Products