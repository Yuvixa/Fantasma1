import logo2 from './fotitos/persona.png';
import logo3 from './fotitos/chicas.png';
import logo4 from './fotitos/palma.png';
import * as React from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';

export default function VariantButtonGroup() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        '& > *': {
          m: 1,
        },
      }}
    >
      <img src={logo2} className="App-logo" alt="logo" />
      <ButtonGroup size="large" variant="text" aria-label="text button group">
        <Button>Superventas para hombre</Button>
        <Button>Superventas para mujer</Button>
        <Button>Superventas para niños</Button>
      </ButtonGroup>
      
      
      <img src={logo3} className="App-logo" alt="logo" />
      <ButtonGroup size="large" variant="text" aria-label="text button group">
        <Button>Training</Button>
        <Button>Casual</Button>
        <Button>Running</Button>
      </ButtonGroup>
      <img src={logo4} className="App-logo" alt="logo" />
      <ButtonGroup size="large" variant="text" aria-label="text button group">
        <Button>Fútbol</Button>
        <Button>Running</Button>
        <Button>Gym</Button>
      </ButtonGroup>
    </Box>
  );
}
