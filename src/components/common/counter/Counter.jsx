import { Button } from "@mui/material";
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';
// import "./counter.css";

const Counter = ({ contador, sumar, restar, onAdd }) => {

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2}} >
            <h3>Unidades añadidas: {contador}</h3>
            <ButtonGroup variant="text" aria-label="Basic button group" size="large" fontWeight='15' color="warning" sx={{mt: 5}}>
                <Button onClick={sumar}>+</Button>
                <Button onClick={restar}>-</Button>
                <Button onClick={ () => { onAdd(contador) }}>Añadir al carrito</Button>
            </ButtonGroup>
        </Box>
    );
};

export default Counter;