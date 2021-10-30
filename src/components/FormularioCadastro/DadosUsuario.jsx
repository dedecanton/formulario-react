import React from 'react';
import { TextField, Button } from '@material-ui/core'

function DadosUsuario() {

    return (
        <form>
            <TextField
                id='email'
                label='email'
                type='email'
                variant="outlined"
                margin='normal'
                fullWidth
            ></TextField>

            <TextField
                id='senha'
                label='senha'
                type='password'
                variant="outlined"
                margin='normal'
                fullWidth
            ></TextField>

            <Button
                type='submit'
                variant='contained'
                color='primary'
                type='submit'
            >Cadastrar</Button>
        </form>
    )

}

export default DadosUsuario