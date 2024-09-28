import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useNavigate } from "react-router-dom";
import { createTheme } from '@mui/material/styles';
// import DashboardIcon from '@mui/icons-material/Dashboard';
// import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
// import BarChartIcon from '@mui/icons-material/BarChart';
// import DescriptionIcon from '@mui/icons-material/Description';
// import LayersIcon from '@mui/icons-material/Layers';
import { AppProvider } from '@toolpad/core/AppProvider';
import { DashboardLayout } from '@toolpad/core/DashboardLayout';
import PetsIcon from '@mui/icons-material/Pets';
import { BrowserRouter, Routes,Route,Link } from 'react-router-dom';
import Addstock from './AddStock';
import { NAVIGATION } from './Menu';
import Dashboard from './Dashboard';
import AddStock from './AddStock';
import ViewStock from './ViewStock';
import AddPurchase from './AddPurchase';
import ViewPurchase from './ViewPurchase';
import AddSale from './AddSale';
import ViewSale from './ViewSale';
import AddSupplier from './AddSupplier';
import ViewSupplier from './ViewSupplier';
import ViewCustomer from './ViewCustomer';
// 
// import ViewStock from './ViewStock';
// import AddPurchase from './AddPurchase';
// import ViewPurchase from './ViewPurchase';
// import AddPale from './AddSale';
// import ViewSale from './ViewSale';




const demoTheme = createTheme({
  cssVariables: {
    colorSchemeSelector: 'data-toolpad-color-scheme',
  },
  colorSchemes: { light: true, dark: true },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 600,
      lg: 1200,
      xl: 1536,
    },
  },
});

function DemoPageContent({ pathname }) {
  return (
    <Box
      sx={{
        py: 4,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
      }}
    >
      <Typography>Dashboard content for {pathname}</Typography>
    </Box>
  );
}

DemoPageContent.propTypes = {
  pathname: PropTypes.string.isRequired,
};

function DashboardLayoutBasic(props) {
  const { window } = props;

  const [pathname, setPathname] = React.useState('/dashboard');

  const router = React.useMemo(() => {
    
    return {
      pathname,
      searchParams: new URLSearchParams(),
      navigate: (path) => setPathname(String(path)),
    };
  }, [pathname]);
  

 
  // Remove this const when copying and pasting into your project.
  const demoWindow = window !== undefined ? window() : undefined;//// comment by me

  return (
    // preview-start
    <AppProvider
      navigation={NAVIGATION}
      
      branding={{
        logo: <PetsIcon color="primary" className='petLogo'/>,
        title: 'POPO\'S SHOP',
      }}
      router={router}
      // theme={demoTheme}
      
      // window={demoWindow} // comment by me
    >
      <DashboardLayout>
        {/* <DemoPageContent pathname={pathname} /> */}

        <div style={{width:'100%', height:'100%',margin:'50px'}}>
          <BrowserRouter>
            <Routes>
              <Route path='/' element={<AddPurchase/>}/>
              <Route path='/stock/addstock' element={<AddStock/>}/>
              <Route path='/stock/viewstock' element={<ViewStock/>}/>
              <Route path='/purchase/addpurchase' element={<AddPurchase/>}/>
              <Route path='/purchase/viewpurchase' element={<ViewPurchase/>}/>
              <Route path='/sale/addsale' element={<AddSale/>}/>
              <Route path='/sale/viewsales' element={<ViewSale/>}/>
              <Route path='/supplier/addsupplier' element={<AddSupplier/>}/>
              <Route path='/supplier/viewsupplier' element={<ViewSupplier/>}/>
              <Route path='/customer/viewcustomer' element={<ViewCustomer/>}/>

            </Routes>
          </BrowserRouter>

        </div>

      </DashboardLayout>
    </AppProvider>
    // preview-end
  );
}

DashboardLayoutBasic.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * Remove this when copying and pasting into your project.
   */
  window: PropTypes.func,
};

export default DashboardLayoutBasic;
