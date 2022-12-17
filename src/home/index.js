import React from 'react';
import Box from '@mui/material/Box'
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import UnsubscribeOutlinedIcon from '@mui/icons-material/UnsubscribeOutlined';
import Typography from '@mui/material/Typography';


export default function HomeComponent({ }) {
  return (
    <>
      <HeaderComponent />
      <Box px={2.5} mt={2}>
        <Typography>
          <strong>Conta</strong>
        </Typography>
        <Typography variant='h6'>
          <strong>R$851,65</strong>
        </Typography>
        <h1> PIX</h1>
        <h1> Pagar</h1>
        <h1> Transferir</h1>
        <h1> Depositar</h1>
        <h1> Cobrar</h1>
        <h1> Doação</h1>
        <h2>Meus Cartões</h2>
        <h2>Caiu o 13°? Nas Caixinhas ele pode render o ano todo.</h2>
        <h2>Você tem R$25.000,00 disponiveis para emprestimo</h2>
        <h2>Salve seus amigos. Faça um convite agora</h2>

        <h2>Cartão de crédito</h2>
        <h2>Fatura atual</h2>
        <h2>Limite disponivel de 550,00</h2>
        <h2>Rewards</h2>
      </Box>
    </>
  )
}

function HeaderComponent({ }) {
  return (
    <Box display="flex"
      style={{
        backgroundColor: "#7A28C4", color: "white",

      }}
      flexDirection="column"
      pt={2}
      px={2.5}
      justifyContent="flex-start"
      alignItens="flex-start"
      alignContent="flex-start"
    >
      <Box display="flex" flexDirection="row" justifyContent="space-between">
        <AccountCircleOutlinedIcon />
        <Box>
          <RemoveRedEyeOutlinedIcon />
          <HelpOutlineOutlinedIcon style={{ marginLeft: "16px", marginRight: "16px" }} />
          <UnsubscribeOutlinedIcon />
        </Box>
      </Box>
      <Box my={2}>
        <Typography align="left">

          Olá. Gérson
        </Typography>
      </Box>
    </Box >

  )
}