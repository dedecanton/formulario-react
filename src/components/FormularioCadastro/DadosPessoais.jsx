import React, { useState } from 'react';
import { TextField, Button, Switch, FormControlLabel } from '@material-ui/core';

function DadosPessoais({ aoEnviar, validarCPF }) {

    const [nome, setNome] = useState('');
    const [sobrenome, setSobrenome] = useState('');
    const [cpf, setCpf] = useState('')
    const [promocoes, setPromocoes] = useState(true)
    const [novidades, setNovidades] = useState(false)
    const [erros, setErros] = useState({ cpf: { valido: true, texto: "" } })


    return (
        <form method='POST' onSubmit={(event) => {
            event.preventDefault();
            aoEnviar({ nome, sobrenome, cpf, promocoes, novidades })
        }}>

            <TextField
                value={nome}
                onChange={(event) => setNome(event.target.value)}
                id="nome"
                label="Nome"
                variant="outlined"
                margin='normal'
                fullWidth />
            <TextField
                value={sobrenome}
                onChange={(event) => setSobrenome(event.target.value)}
                id="sobrenome"
                label="Sobrenome"
                variant="outlined"
                margin='normal'
                fullWidth
            />
            <TextField
                value={cpf}
                id="cpf"
                error={!erros.cpf.valido}
                helperText={erros.cpf.texto}
                onChange={(event) => setCpf(event.target.value)}
                onBlur={event => {
                    const ehValido = validarCPF(event.target.value)
                    setErros({ cpf: ehValido })
                }
                }

                label="CPF"
                variant="outlined"
                margin='normal'
                fullWidth />

            <FormControlLabel

                label='Promoções'
                control={<Switch checked={promocoes} name='promocoes' color='primary' />}
                onChange={event => setPromocoes(event.target.checked)}
            />
            <FormControlLabel

                label='Novidades'
                control={<Switch checked={novidades} name='novidades' color='primary' />}
                onChange={event => setNovidades(event.target.checked)}
            />

            <Button
                variant='contained'
                color='primary'
                type='submit'
            >Cadastrar</Button>

        </form>
    )

}

export default DadosPessoais;