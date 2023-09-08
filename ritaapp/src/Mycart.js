import React, { useState } from 'react'
import { items } from './Purchasedata'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Select from '@mui/material/Select';
import Menu from '@mui/material/MenuItem';
import { grey } from '@mui/material/colors';
import { Link } from 'react-router-dom';
import cartempty from './images/empty-cart.png'

const Mycart = ({cart,setCart}) => {
  // const [quantity, setQuantity] = useState(1);

  const price=cart.map(item=>item.price*item.quantity);
  

  const subtotal = price.reduce((accumulator, currentValue) => {
    return accumulator + currentValue
  },0);

  const remove =(Id)=>{
    const items = cart.filter(item=>item.id !==Id);
    setCart(items)
  }

  let shipping = cart.length === 0 ? 0: 30.00;
  let tax = cart.length === 0 ? 0: 14.00;
  let totalItems = 0;
  // state.map((item) => {
  //   return (subtotal += item.price * item.qty);
  // });

  console.log(cart);

  const handleQuantityChange = (event,Item,Id) => {
    const items = cart.filter(item => item.id !== Id)
    Item.quantity = event.target.value
    setCart([...items,Item])
  };
  return (

    <div className='cartbg'>
      <h4 style={{ color: "green", marginLeft: "100px" }}><strong>Purchase Request</strong></h4>
      <div style={{ display: 'flex' }}>
        <div style={{ backgroundColor: 'white', width: '650px', marginLeft: "100px",borderRadius:"5px" }}>
          <div className='purchasebox'>
            <div>
              {cart.length === 0 ? <img src={cartempty} alt="Cart is Empty" style={{width:'500px',height:'300px',marginLeft:'70px'}}/> :cart.map((item) => (
                <div key={item.id}>
                  <div className='flex-Container-items'>
                    <Card sx={{ width: 100, height: 100, marginTop: 2, marginLeft: 2,backgroundColor:grey}}>
                      <CardMedia
                        component="img"
                        image={item.imageSrc}
                        alt={item.name}
                        sx={{ margin: "10px", height: 80, width: 80 }}
                      />
                    </Card>
                    <div style={{ marginLeft: '30px' }}>
                      <p> <strong>{item.description}</strong></p>
                      <Typography variant="body2" color="text.secondary">
                      <p>Size:{item.size},Color:{item.colour},Material:{item.material}</p>
                      <p>Seller:{item.seller}</p>
                      </Typography>
                      <Button variant="contained" style={{ fontSize: '12px', height: "30px", color: 'red', backgroundColor: 'white' }} onClick={()=>remove(item.id)}>
                        Remove
                      </Button>
                    </div>
                    <div style={{ marginLeft: '100px'}}>
                      <p><strong>${item.price}</strong></p>
                      <div style={{}} >
                        <Select
                          labelId="quantity-label"
                          value={item?.quantity}
                          onChange={(e)=> handleQuantityChange(e,item,item.id)}
                          style={{ height: "30px", fontSize: '13px', marginRight: '10px' }}
                        >
                          {Array.from({ length: 10 }, (_, index) => (
                            <Menu key={index + 1} value={index + 1} >
                              Qty :{index + 1}
                            </Menu>
                          ))}
                        </Select>
                      </div>
                    </div>
                  </div>
                  <hr style={{marginLeft:'20px',color:"text.secondary"}} ></hr>
                </div>
              ))}
            </div >
            <div style={{ display: 'flex',marginTop:'20px' }}>
              <Link to="/">
              <Button variant="contained" style={{ fontSize: '12px', height: "30px", backgroundColor: 'red', marginLeft: "20px" }} >
                 <span style={{fontSize:'20px'}}>&#8592;</span> Back to shop
              </Button>
              </Link>
              <Button variant="contained" style={{ fontSize: '12px', height: "30px", color: 'blue', backgroundColor: 'white', marginLeft: "auto" }} onClick={()=>setCart([])}>
                Remove All
              </Button>
            </div>
            <br />
          </div>
        </div>
        {/* submit request box */}
        <div style={{ marginLeft: "200px" }}>
          <div style={{ width: "250px",borderRadius:"5px" }}>
            <Card >
            <Typography>
            <p style={{marginLeft:'10px'}}>Subtotal :<span style={{float:'right',marginRight:'20px'}}>${Math.round(subtotal)}</span></p>
              <p style={{marginLeft:'10px'}}>Shipping :<span style={{color:'green',float:'right',marginRight:'20px'}}>+${shipping}</span></p>
              <p style={{marginLeft:'10px'}}>Tax : <span style={{color:'green',float:'right',marginRight:'20px'}}>+${tax}</span></p>
            </Typography>
              <hr/>
              <p style={{marginLeft:'10px'}}> <strong>Total : <span style={{float:'right',marginRight:'20px'}}>${Math.round(subtotal + shipping + tax)}</span></strong></p>
              <Button variant="contained" style={{ fontSize: '16px', backgroundColor: "green",marginBottom:'10px',width:"200px",marginLeft:'20px'}} onClick={()=>alert("The product will be sent to your address in next 7 working days")} >
                Submit Request
              </Button>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Mycart
