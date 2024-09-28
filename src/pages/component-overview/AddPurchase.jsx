// import { Button } from '@mui/material'
// import { ThemeProvider } from '@emotion/react'
import { Box, Button, Card, CardActionArea, CardContent, CardMedia, Container, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Divider,  Stack, TextField, Typography } from '@mui/material'
import React from 'react'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { DeleteFilled, DeleteOutlined, DeleteTwoTone } from '@ant-design/icons';
import { color } from 'framer-motion';
// import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
// import { DataGrid } from '@mui/x-data-grid';


// import './Css/AddPurchase.css'
// import AddStockDiv from '../relationComponents/AddStockDiv';


export default function AddPurchase() {
  let today = new Date();
  let dd = String(today.getDate()).padStart(2, '0');
  let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
  let yyyy = today.getFullYear();

  today = dd + '/' + mm + '/' + yyyy;
  const [orderNumber,setOrderNumber]=React.useState('');
  const [supplierName,setSupplierName]=React.useState('');
  const [purchaseDate,setPurchaseDate]=React.useState(today);
  const [totalAmount,setTotalAmount]=React.useState('');
  const [paidAmount,setPaidAmount]=React.useState('');
  const [creditAmount,setCreditAmount]=React.useState('');
  const [open, setOpen] = React.useState(false);
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
    setStockData([...stockData,newDataForm]);
    setProdName('');
    setProdQty('');
    setProdCatagory('');
    setProdPurcahsePrice('');
    setProdMrpPrice('');
  }
  let deletestock = (e)=>{
    console.clear();
    console.log(stockData[e]);
    setStockData(l => l.filter((item,i) => i != e));
  };
  let orderNumberOnchange=(e)=>{
    const result = e.target.value.replace(/\D/g, '');

       setOrderNumber(result)
  }
  // console.log(stockData)
  return (
    <Container maxWidth='md' >
      <h3 className='ColorPrimary'>Purchase Order</h3>
      <Divider ></Divider>
      <Stack spacing={2} marginTop={3} marginBottom={3}>          
        <TextField id="outlined-basic" label="Order Number" variant="outlined" fullWidth autoComplete='off' value={orderNumber} onChange={orderNumberOnchange}/>

        <TextField id="outlined-basic" label="Supplier Name" variant="outlined" fullWidth value={supplierName} onChange={(event)=>setSupplierName(event.target.value)}/>

        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker label='Purchase Date' format='DD/MM/YYYY' fullWidth  onChange={(event)=>setPurchaseDate(event.target.value)}/>
        </LocalizationProvider>

        <TextField id="outlined-basic" label="Total Amount" variant="outlined" fullWidth value={totalAmount} onChange={(event)=>setTotalAmount(event.target.value)}/>

        <TextField id="outlined-basic" label="Paid Amount" variant="outlined" fullWidth value={paidAmount} onChange={(event)=>setPaidAmount(event.target.value)}/>

        <TextField id="outlined-basic" label="Credit Amount" variant="outlined" fullWidth value={creditAmount} onChange={(event)=>setCreditAmount(event.target.value)}/>

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
          {/* <DialogTitle>
            
            
          </DialogTitle> */}
          <Container >
                <DialogContent>
                  <DialogContentText>
                    <br></br>
                  </DialogContentText>
                  {/* <AddStockDiv data={{prodName,prodQty,prodCatagory,prodMrpPrice,prodPurcahsePrice}}/> */}
                  <Stack  spacing={2} >
                        <Typography variant='h4' style={{ paddingBottom:"10px"}} color="primary">Add Stock</Typography>
                        <TextField id="outlined-basic" label="Product Name" variant="outlined" name="prodName" value={prodName} onChange={(event)=>setProdName(event.target.value)}></TextField>
                        <TextField id="outlined-basic" label="Product Catagory" variant="outlined" name="prodCat" value={prodCatagory} onChange={(event)=>setProdCatagory(event.target.value)}></TextField>
                        <TextField id="outlined-basic" label="Quantity" variant="outlined" name="prodCat" value={prodQty} onChange={(event)=>setProdQty(event.target.value)}></TextField>
                        <TextField id="outlined-basic" label="Purchase Price" variant="outlined" name="prodPur" value={prodPurcahsePrice} onChange={(event)=>setProdPurcahsePrice(event.target.value)}></TextField>
                        <TextField id="outlined-basic" label="MRP" variant="outlined" name="prodMrp" value={prodMrpPrice} onChange={(event)=>setProdMrpPrice(event.target.value)}></TextField>
                  <div style={{display:"flex",justifyContent:"flex-end"}}>
                  <Button variant="outlined" onClick={handleClose} style={{margin:"0 10px 0 0"}}>Cancel</Button>
                  <Button variant="outlined" onClick={()=>addStock()}>Add</Button>
                  </div>
                  </Stack>
                </DialogContent>
                
                <DialogActions>
                  
                </DialogActions>
                
            </Container>
        </Dialog>
        <Divider style={{margin:"20px 0px 20px 0px"}}></Divider>
        <Typography variant='h5'  > List of stocks added:</Typography>
          {/* {stockData.map((stockDtls,index)=>(
              <Card stockdtls={stockDtls} index={index}/>
            ))} */}
            {/* <DataGridDemo stockdata={stockData}/> */}
          <div style={stockData.length? {display:"flex", flexWrap:"wrap",justifyContent:"center",maxHeight:"500px",overflow:"scroll"} : {}}>
            {
              stockData.map((e,i)=>{
                return (
                
                  <CardFunction prodData={e} prodIndex= {i} handleDelete={deletestock}/>                
                
                )
              })
            }
          </div>
    </Container>
  )
}
function CardFunction({prodData,prodIndex,handleDelete}){
  // alert(proddata.prodName);
  // console.log(prodData);
  return(
    // <div >
      <Card  style={{margin:"8px 0px 8px 0px",display:"flex"}}>
        <CardActionArea>
          
          <CardContent style={{width:800}} >
            <div style={{display:"flex",justifyContent:"space-between"}}>
              <Typography gutterBottom variant="h5" component="div">
                  {prodData.prodName}
              </Typography>
              <div>QTY: {prodData.prodQty}</div>
            </div>
            <div style={{display:"flex",justifyContent:"space-between"}}>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  Category: {prodData.prodCatagory}
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  MRP: {prodData.prodMrpPrice}
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  Pruchase Price: {prodData.prodPurcahsePrice}
              </Typography>
            </div>

          </CardContent>
          
        </CardActionArea>
        <Button variant="outlined" color="error" onClick={()=>handleDelete(prodIndex)}>
        {/* error  */}
        <DeleteFilled style={{fontSize:"21px"}}/>
        {/* <DeleteForeverIcon/> */}
      </Button>
      </Card>
      
    // </div>  
  );
}


