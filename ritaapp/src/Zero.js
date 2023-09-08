import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/MenuItem';


import { products } from './Data.js'

// const products = [
//   {
//     id: 1,
//     name: 'Product 1',
//     description: 'Description for Product 1',
//     imageSrc: 'https://via.placeholder.com/150',
//     price: 19.99,
//   },
//   {
//     id: 2,
//     name: 'Product 2',
//     description: 'Description for Product 2',
//     imageSrc: 'https://via.placeholder.com/150',
//     price: 29.99,
//   },
//   // Add more products as needed
// ];

function ProductCard({ product }) {
  const { id, name, description, imageSrc, price } = product;
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (event) => {
    setQuantity(event.target.value);
  };

  const handlePurchase = () => {
    // Implement purchase logic here
    console.log(`Product ${id} purchased. Quantity: ${quantity}`);
  };

  return (
    <div >
    <Card className='flex-child'>
            <CardMedia
              component="img"
              image={imageSrc}
              alt={name}
              sx={{ margin: "30px", height: 150, width: 150 }}
            />
            <CardContent>
              <Typography variant="body2" color="textSecondary">
                {description}
              </Typography>
              <Typography ><strong>${price}</strong></Typography>
              <div style={{ display: 'flex' }}>
                <div>
                  <Select
                    value={quantity}
                    onChange={handleQuantityChange}
                    style={{ height: "30px",fontSize: '13px',marginRight:'10px' }}
                  >
                    {Array.from({ length: 5 }, (_, index) => (
                      <Menu key={index + 1} value={index + 1} >
                         Qty :{index + 1}
                      </Menu>
                    ))}
                  </Select>
                </div>
                <div>
                  <Button variant="contained" style={{ fontSize: '12px', backgroundColor: "green", height: "30px",marginLeft:"auto" }} onClick={handlePurchase}>
                    Purchase
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
    </div>
  );
}

function ProductList() {
  return (
      <div className='product'>
          <h4 style={{ color: "green", marginLeft: "80px" }}><strong>Purchase Merchandise</strong></h4>
          <div className='flex-Container'>
              {products.map((product) => (
                  <ProductCard key={product.id} product={product} />
              ))}
          </div>
      </div>
  );
}

export default ProductList;