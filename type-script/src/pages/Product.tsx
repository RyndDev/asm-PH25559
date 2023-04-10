import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom';
interface IProduct {
  _id:number|string,
  name:string,
  price:number,
  images:string
}
interface IProps {
  products: IProduct[],
}
const Product = (props:IProps) => {
    const [data, setData]= useState<IProduct[]>([]);
    useEffect(()=>{
      setData(props.products)
    },[props])
    console.log(props);
    
  return (
    <div className='product-container'  style={{width:"250px"}}  >
   { data.map((item)=>{
      return <div key={item._id} style={{width:"250px"}}>
             <Link style={{textDecoration:"none"}} to={`./products/${item._id}`}>
             <div style={{width:"250px"}}>
                <img style={{width:"250px"}} src={item.images}/>
                  <p>{item.name}</p>  
                  <p>{item.price}</p>

                </div>
             </Link>
                
                
      </div>
    })
  }
  </div>
  )
}

export default Product