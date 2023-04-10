import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getOneProduct } from '../api/product';

interface IProduct {
  id: string | number;
  name: string;
  price: number;
  images: string;
  description: string;
  categoryId: number | string
}

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<IProduct>({
    id: '',
    name: '',
    price: 0,
    images: '',
    description: '',
    categoryId: ''
  });
  
  

  useEffect(() => {
    getOneProduct(id).then(({ data }) => setProduct(data.data));
    
  }, [id]);

  return (
    <div>
      <h2>Detail Product</h2>
      <div style={{
        display: "flex", gridTemplateColumns: "repeat(2, minmax(0, 1fr))",justifyContent:"center"
      
      }}>
        <div><img style={{ width: '250px' }} src={product?.images} alt={product?.images} /></div>
        <div style={{ paddingLeft: '15px' }}> 
          <h1>{product?.name}</h1>
          <h3 style={{ color: "red" }}>{product?.price}</h3>
          <h3>{product?.description}</h3>
        </div>

      </div>
    </div>
  );
};

export default ProductDetail;
