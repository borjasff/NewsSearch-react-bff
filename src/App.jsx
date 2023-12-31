import { Container, Grid, Typography} from '@mui/material';
import { Component } from 'react';
import Form from './components/Form';
import {NewsProvider} from './context/NewsProvider';
import NewsList from './components/NewsList';
function App() {


  return (
    <NewsProvider>
          <Container>
            <header>
              <Typography align='center' 
                          marginY={5} Component="h1" variant='h1'>
                News Search
              </Typography>
            </header>
            <Grid
                  container
                  direction="row"
                  justifyContent="center"
                  alignItems="center"
            >
                <Grid item xs={12} md={6} lg={4}>
                      <Form/>     
                </Grid>
            </Grid>
            <NewsList/>
          </Container>
    </NewsProvider>
  )
}

export default App
