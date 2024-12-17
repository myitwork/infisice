import { AppBar, Toolbar, Typography, Button, List, ListItem, ListItemText, Box, Container} from '@mui/material';
import React, { useEffect, useState } from 'react';
import { fetchNavigations } from '../utils/api';

const Header = () => {
  const [navigations, setNavigations] = useState([]);

  useEffect(() => {
    const getNavigations = async () => {
      const data = await fetchNavigations();
      setNavigations(data);
    };

    getNavigations();
  }, []);

  return (
    <>
    <AppBar position="sticky" enableColorOnDark>
        <Container maxWidth="xl">
            <Toolbar>
            <Typography variant="h6" >
                Infisice
            </Typography>
            <List sx={{display:'flex', flexDirection:"row", justifyContent:'flex-start'}}>
                {navigations.map((item) => (
                    <ListItem Button key={item.id} component="a" href={item.url}>
                        <ListItemText primary={item.name} />
                    </ListItem>
                    ))}
                </List>
                <Box sx={{ flexGrow: 1 }}/>
            <Button color="inherit">Login</Button>
            </Toolbar>
            
        {/* <ul>
            {navigations.map((item) => (
            <li key={item.id}>
                <a href={item.url} >{item.name}</a>
            </li>
            ))}
        </ul> */}
        </Container>
        
      </AppBar>
    </>
  );
};

export default Header;
