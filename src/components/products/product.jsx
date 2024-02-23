import React from 'react';

const Product = ({title,price,description,category,image,rating}) => {
    return (
        <div className='tovar'>
            <div style={{ width: '90%', justifyContent: 'center', alignItems: 'center',display:'flex' }}><img src={image} alt='' style={{width:'80%', height:'70%'}}/> </div>
            <div className="separator"></div>
            <h5 style={{ color: 'dodgerblue' }}>{title}</h5>
            <h5 style={{fontWeight:'bold'}}>{price} $</h5>
            <h6>{description}</h6>
            <h6 style={{ color: 'dodgerblue' }}>Category: {category}</h6>
            <div style={{display:'flex'}}>
                <h6 style={{display:'flex'}} >Rating:<h6 style={{ fontWeight: 'bold' }}>{rating.rate} / </h6> </h6>
                <h6 style={{ display: 'flex' }}> in stock:<h6 style={{ fontWeight: 'bold' }}>{rating.count}</h6> </h6>
            </div>
        </div>
    );
}

export default Product;
