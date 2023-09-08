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


function ProductCard({ product, setCart, cart }) {
  const { id, name, description, imageSrc, price, title } = product;
  const [quantity, setQuantity] = useState(1);


  const handleQuantityChange = (event) => {
    setQuantity(event.target.value);
  };


  const handlePurchase = (product) => {
    let index = cart.findIndex((item) => item.id == product.id)
    index!==-1 && (cart[index].quantity = cart[index].quantity+product.quantity)
    index === -1 && setCart([...cart, product]) 
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
        <CardContent style={{ marginTop: '-30px' }}>
          <Typography variant="body2" color="textSecondary">
            {title}
          </Typography>
          <Typography variant="body2" color="textSecondary">
            {description}
          </Typography>
          <Typography ><strong>${price}</strong></Typography>
          <div style={{ display: 'flex' }}>
            <div>
              <Select
                value={quantity}
                onChange={handleQuantityChange}
                style={{ height: "30px", fontSize: '13px', marginRight: '10px' }}
              >
                {Array.from({ length: 10 }, (_, index) => (
                  <Menu key={index + 1} value={index + 1} >
                    Qty :{index + 1}
                  </Menu>
                ))}
              </Select>
            </div>
            <div>
              <Button variant="contained" style={{ fontSize: '12px', backgroundColor: "green", height: "30px", marginLeft: "auto" }} onClick={() => handlePurchase({ ...product, quantity })} >
                Purchase
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

const Products = ({ setCart, cart }) => {
  return (
    <div className='product'>
      <h4 style={{ color: "green", marginLeft: "80px" }}><strong>Purchase Merchandise</strong></h4>
      <div className='flex-Container'>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} cart={cart} setCart={setCart} />
        ))}
      </div>
    </div>
  )
}

export default Products
