// import { Button } from '@mui/material'
// import { ThemeProvider } from '@emotion/react'
import { Box, Button, Card, CardActionArea, CardContent, CardMedia, Container, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Divider,  Stack, TextField, Typography } from '@mui/material'
import React from 'react'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { DataGrid } from '@mui/x-data-grid';


import './Css/AddPurchase.css'
// import AddStockDiv from '../relationComponents/AddStockDiv';


export default function AddPurchase() {
  const [open, setOpen] = React.useState(false);
  // for model html data
  // const [modelHtmlData,setModelHtmlData] = React.useState(<AddStockDiv/>);
  const [stockData,setStockData]= React.useState([]);
  const [prodName,setProdName]= React.useState('');
  const [prodQty,setProdQty]= React.useState('');
  const [prodCatagory,setProdCatagory]= React.useState('');
  const [prodPurcahsePrice,setProdPurcahsePrice]= React.useState('');
  const [prodMrpPrice,setProdMrpPrice]= React.useState('');
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const addStock = () =>{
    const newDataForm = {
      prodName:prodName,
      prodQty:prodQty,
      prodCatagory:prodCatagory,
      prodPurcahsePrice:prodPurcahsePrice,
      prodMrpPrice:prodMrpPrice
    }
    // console.log(newDataForm);
    // console.log(stockData);
    const newData = [...stockData,newDataForm];
    // console.log(newData);
    setStockData(newData);
    setProdName('');
    setProdQty('');
    setProdCatagory('');
    setProdPurcahsePrice('');
    setProdMrpPrice('');
    // console.log(prodName);
    
  }
  // console.log(stockData);
  return (
    <Container maxWidth='md' >
      <h3 className='ColorPrimary'>Purchase Order</h3>
      <Divider ></Divider>
      <Stack spacing={2} marginTop={3}  marginBottom={3} >          
        <TextField id="outlined-basic" label="Order Number" variant="outlined" fullWidth autoComplete='off'/>

        <TextField id="outlined-basic" label="Supplier Name" variant="outlined" fullWidth/>

        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker label='Purchase Date' format='DD/MM/YYYY' fullWidth/>
        </LocalizationProvider>

        <TextField id="outlined-basic" label="Total Amount" variant="outlined" fullWidth/>

        <TextField id="outlined-basic" label="Paid Amount" variant="outlined" fullWidth/>

        <TextField id="outlined-basic" label="Credit Amount" variant="outlined" fullWidth/>

        {/* <TextField id="outlined-basic" label="Order Number" variant="outlined" fullWidth/> */}
        </Stack>
        {/* <Divider ></Divider> */}
        <Button variant="outlined" onClick={handleClickOpen} marginTop={3} >
          Add Stock
        </Button>
        <Dialog
          open={open}
          fullWidth
          maxWidth='lg'
          
        >
          <DialogTitle>Add Stock</DialogTitle>
          <DialogContent>
            <DialogContentText>
              <br></br>
            </DialogContentText>
            {/* <AddStockDiv data={{prodName,prodQty,prodCatagory,prodMrpPrice,prodPurcahsePrice}}/> */}
            <Container>
              <Stack  spacing={2}>
                  <TextField id="outlined-basic" label="Product Name" variant="outlined" name="prodName" value={prodName} onChange={(event)=>setProdName(event.target.value)}></TextField>
                  <TextField id="outlined-basic" label="Product Catagory" variant="outlined" name="prodCat" value={prodCatagory} onChange={(event)=>setProdCatagory(event.target.value)}></TextField>
                  <TextField id="outlined-basic" label="Quantity" variant="outlined" name="prodCat" value={prodQty} onChange={(event)=>setProdQty(event.target.value)}></TextField>
                  <TextField id="outlined-basic" label="Purchase Price" variant="outlined" name="prodPur" value={prodPurcahsePrice} onChange={(event)=>setProdPurcahsePrice(event.target.value)}></TextField>
                  <TextField id="outlined-basic" label="MRP" variant="outlined" name="prodMrp" value={prodMrpPrice} onChange={(event)=>setProdMrpPrice(event.target.value)}></TextField>
              </Stack>
          </Container>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button  onClick={()=>addStock()}>Add</Button>
          </DialogActions>
        </Dialog>
        <Divider ></Divider>
          {/* {stockData.map((stockDtls,index)=>(
              <Cardf stockdtls={stockDtls} index={index}/>
            ))} */}
            {/* <DataGridDemo stockdata={stockData}/> */}
    </Container>
  )
}

function DataGridDemo(stockdata) {
  console.log(stockdata);
  
  return (
    <Box sx={{ height: 400, width: '100%' }}>
      {stockdata.prodCatagory}
      {/* {stockdata.map((data)=>(
        <li>{data.prodName} ---- {data.prodCatagory} ---- {data.prodQty}</li>
      ))} */}
    </Box>
  );
}
