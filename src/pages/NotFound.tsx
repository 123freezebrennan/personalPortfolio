import { Stack, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import TopMenu from '../components/TopMenu';

const NotFound: React.FC = () => {
  return (
    <>
      <TopMenu />
      <Stack
        spacing={4}
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          color: 'white',
          height: '100vh',
        }}
      >
        <Typography
          variant="h2"
          component="h1"
          p={2}
          sx={{
            textAlign: 'center',
            fontFamily: 'Lato, sans-serif',
            backgroundColor: 'primary.main',
            background:
              '-webkit-linear-gradient(220deg, #ce40ad 10%, #4b70dd 80%)',
            WebkitBackgroundClip: 'text',
            color: 'transparent',
            fontWeight: 'bold',
          }}
        >
          Nothing here.
        </Typography>
        <Typography
          variant="h6"
          color="white"
          component={Link}
          to="/"
          p={2}
          sx={{
            textAlign: 'center',
            fontWeight: 'bold',
            fontFamily: 'Lato, sans-serif',
            textDecoration: 'none',
            border: 'solid white 2px',
            borderRadius: '25px',
          }}
        >
          Back To Home
        </Typography>
      </Stack>
    </>
  );
};

export default NotFound;
