import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import BarChartIcon from '@mui/icons-material/BarChart';
import DescriptionIcon from '@mui/icons-material/Description';
import LayersIcon from '@mui/icons-material/Layers';
// import { Link } from 'react-router-dom';
// import icon from '@mui/icons-material/icon';
export const NAVIGATION = [
    {
      kind: 'header',
      title: 'Main items',
    },
    {
      segment: 'dashboard',
      title: "A",
      icon: <DashboardIcon />,
    },
    {
      segment: 'purchase',
      title: 'Purchase',
      icon: <ShoppingCartIcon />,
      children:[
        {
          segment:"addpurchase",
          title: "Add Purcahse",
          icon: '',
        
        },
        {
          segment:"Viewpurchase",
          title: "View Purchase ",
          icon: '',
        
        },
      ]
    },
    {
      segment: 'sales',
      title: 'Sales',
      icon: <ShoppingCartIcon />,
      children:[
        {
          segment:"Addsale",
          title: "Add Sale",
          icon: '',
        
        },
        {
          segment:"Viewsale",
          title: "View Sales ",
          icon: '',
        
        },
      ]
    },
    {
      segment: 'Stock',
      title: 'Stock',
      icon: <ShoppingCartIcon />,
      children: [
        {
          segment: 'addStock',
          title: 'Add Stock',
          icon: <ShoppingCartIcon />,
        },
        {
          segment: 'stockView',
          title: 'Stock View',
          icon: <ShoppingCartIcon />,
        },
      ],
    },
    {
      kind: 'divider',
    },
    {
      kind: 'header',
      title: 'Analytics',
    },
    {
      segment: 'reports',
      title: 'Reports',
      icon: <BarChartIcon />,
      children: [
        {
          segment: 'sales',
          title: 'Sales',
          icon: <DescriptionIcon />,
        },
        {
          segment: 'traffic',
          title: 'Traffic',
          icon: <DescriptionIcon />,
        },
      ],
    },
    {
      segment: 'integrations',
      title: 'Integrations',
      icon: <LayersIcon />,
    },
  ];