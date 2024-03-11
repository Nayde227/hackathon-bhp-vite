/* eslint-disable react/prop-types */
// Componentes MUI
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

function BasicTextFields({ value, onChange }) {
  return (
    <Stack alignItems="center">
      <Box
        component="form"
        sx={{
          '& > :not(style)': { m: 1, width: '50ch', color: 'F77F00' },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          id="filled-basic"
          label="Usuario"
          variant="outlined"
          value={value}
          onChange={onChange}
        />
      </Box>
    </Stack>
  );
}

function BasicPassword({ value, onChange }) {
  return (
    <Stack alignItems="center">
      <Box
        component="form"
        sx={{
          '& > :not(style)': { m: 1, width: '50ch' },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          id="filled-basic"
          label="Contraseña"
          variant="outlined"
          type="password"
          value={value}
          onChange={onChange}
        />
      </Box>
    </Stack>
  );
}

function BasicButtons({ onSubmit, onClick }) {
  return (
    <Stack alignItems="center" justifyContent="center" spacing={2} direction="row">
      <Button
        className='btnIngresar'
        type='submit'
        variant="contained"
        style={{ background: "#252525", color: "white", border: '2px dashed black', width: '40ch' }}
        onClick={onClick}
        onSubmit={onSubmit}
      >Ingresar</Button>
    </Stack>
  );
}

export { BasicPassword, BasicTextFields, BasicButtons };
