// import ProductList from '../components/ProductList';
// import Header from '../components/Header';

// export default function Home() {
//   return (
//     <div>
//       <h1>Welcome to the Store</h1>
//       <Header/>
//       <ProductList />
//     </div>
//   );
// }
import { AppBar, Toolbar, Typography, Box, Grid, Card, CardMedia, CardContent, Button,Container ,CssBaseline} from '@mui/material';
import { ThemeProvider } from '@emotion/react';
import theme from '../theme/theme';
import Header from '../components/Header';
import Background from '../components/Background';

export default function HomePage() {
  // Example product data
  const products = [
    {
      id: 1,
      name: 'Product One',
      description: 'This is an amazing product.',
      image: '/product1.jpg',
      price: '$49.99',
    },
    {
      id: 2,
      name: 'Product Two',
      description: 'Another fantastic item.',
      image: '/product2.jpg',
      price: '$69.99',
    },
    {
      id: 3,
      name: 'Product Three',
      description: 'You will love this one.',
      image: '/product3.jpg',
      price: '$89.99',
    },
  ];

  return (
    <>
    <ThemeProvider theme={theme}>
    <CssBaseline/>
      {/* Navbar */}
      <Header/>
      <Background/>
      <Container maxWidth="xl">
      
      

      {/* Hero Section */}
      <Box
        sx={{
          textAlign: 'center',
          py: 8,
          backgroundColor: '#f5f5f5',
        }}
      >
        <Typography variant="h3" gutterBottom>
          Welcome to Our Store!
        </Typography>
        <Typography variant="h6" gutterBottom>
          Discover the best products at unbeatable prices.
        </Typography>
        <Button variant="contained" color="primary" size="large" sx={{ mt: 3 }}>
          Shop Now
        </Button>
      </Box>

      {/* Product Grid */}
      <Box sx={{ py: 6, px: 2 }}>
        <Typography variant="h4" textAlign="center" gutterBottom>
          Featured Products
        </Typography>
        <Grid container spacing={4}>
          {products.map((product) => (
            <Grid item xs={12} sm={6} md={4} key={product.id}>
              <Card sx={{ height: '100%' }}>
                <CardMedia
                  component="img"
                  height="200"
                  image={product.image}
                  alt={product.name}
                />
                <CardContent>
                  <Typography variant="h5" gutterBottom>
                    {product.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {product.description}
                  </Typography>
                  <Typography variant="h6" sx={{ mt: 2 }}>
                    {product.price}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
      </Container>
      </ThemeProvider>
    </>
    
  );
}
