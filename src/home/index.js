import React from 'react';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import Box from '@mui/material/Box'
import CropDinIcon from '@mui/icons-material/CropDin';
import Divider from '@mui/material/Divider';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import Typography from '@mui/material/Typography';
import UnsubscribeOutlinedIcon from '@mui/icons-material/UnsubscribeOutlined';
import QrCodeIcon from '@mui/icons-material/QrCode';

export default function HomeComponent({ }) {
  return (
    <>
      <HeaderComponent />
      <Box px={2.5} mt={2}>
        <Typography variant='h6' style={{ marginTop: "20px" }}>
          <strong>Conta</strong>
        </Typography>
        <Typography variant='h5'>
          <strong>R$851,65</strong>
        </Typography>

        <OptionsSpeed />

        <MyCardsComponent />


        <Box display="flex">
          <Box
            mt={3}
            p={3}
            mr={2}
            display="flex"
            alignItems="center"
            style={{ backgroundColor: "#EEEFF2", borderRadius: "8px" }}
            onClick={() => alert("Veja seus cartões")}
          >
            <Typography variant="subtitle2">
              Você tem R$25.000,00
              <Typography variant="subtitle2" color>
                disponiveis para <span style={{ color: "#A349A4" }}>
                  empréstimo
                </span>
              </Typography>
            </Typography>
          </Box>


          <Box
            mt={3}
            p={3}
            display="flex"
            alignItems="center"
            style={{ backgroundColor: "#EEEFF2", borderRadius: "8px" }}
            onClick={() => alert("Veja seus cartões")}
          >
            <Typography variant="subtitle2">
              Salve seus amigos.
              <Typography variant="subtitle2" color>
                <span style={{ color: "#A349A4" }}>
                  Faça um convite agora
                </span>
              </Typography>
            </Typography>
          </Box>

        </Box>

        <Divider style={{ marginTop: "20px" }} />

        <AccountBalanceWalletOutlinedIcon
          color="action"
          style={{ marginRight: "10px", transform: "rotate(-90deg)", marginTop: "20px" }}
        />
        <Typography variant="subtitle2">
          Cartão de crédito
        </Typography>

        <Typography variant="subtitle2" style={{ marginTop: "20px", color: "#6B6B6B" }}>
          Fatura atual
        </Typography>
        <Typography>
          <strong>
            R$250,00
          </strong>
        </Typography>
        <Typography variant="subtitle2" style={{ color: "#6B6B6B" }}>
          Limite disponível de 550,00
        </Typography>
        {
          /*
          Caiu o 13°? Nas Caixinhas ele pode render o ano todo.
  
          <h2>Cartão de crédito</h2>
          <h2>Fatura atual</h2>
          <h2>Limite disponivel de 550,00</h2>
          
          <h2>Rewards</h2>*/
        }
      </Box>
    </>
  )
}

function HeaderComponent() {
  return (
    <Box
      display="flex"
      style={{ backgroundColor: "#7A28C4", color: "white" }}
      flexDirection="column"
      pt={2}
      px={2.5}
      justifyContent="flex-start"
      alignItens="flex-start"
      alignContent="flex-start"
    >
      <Box display="flex" flexDirection="row" justifyContent="space-between">
        <AccountCircleOutlinedIcon style={{ width: "40px", height: "40px" }} />
        <Box>



          <RemoveRedEyeOutlinedIcon style={{ width: "30px", height: "30px" }} />
          <HelpOutlineOutlinedIcon style={{ width: "30px", height: "30px", marginLeft: "16px", marginRight: "16px" }} />
          <UnsubscribeOutlinedIcon style={{ width: "30px", height: "30px" }} />
        </Box>
      </Box>
      <Box my={2}>
        <Typography variant="h5" align="left">
          <strong>Olá. Gérson</strong>
        </Typography>
      </Box>
    </Box >
  )
}

function MyCardsComponent() {
  return <Box
    mt={3}
    p={2}
    display="flex"
    alignItems="center"
    style={{ backgroundColor: "#EEEFF2", borderRadius: "8px" }}
    onClick={() => alert("Veja seus cartões")}
  >
    <AccountBalanceWalletOutlinedIcon
      color="action"
      style={{ marginRight: "10px", transform: "rotate(-90deg)" }}
    />


    <Typography variant="subtitle2">
      Meus Cartões
    </Typography>
  </Box>
}

function OptionsSpeed() {
  return (
    <Box mt={2} display="flex">
      <Box mr={2} display="flex" alignItems="center" flexDirection="column">
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          mb={1}
          onClick={() => alert("Deseja fazer um pix?")}
          style={{
            backgroundColor: "#EEEFF2",
            borderRadius: "50%",
            width: "80px",
            height: "80px",
            transform: "rotate(45deg)"
          }}>
          <CropDinIcon color="action" style={{ width: "40px", height: "40px" }} />
        </Box>
        <Typography variant='subtitle2'>
          Pix
        </Typography>


      </Box>

      <h1>
        EP 09
      </h1>
      <Box mr={2} display="flex" alignItems="center" flexDirection="column">
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          mb={1}
          onClick={() => alert("Deseja pagar?")}
          style={{
            backgroundColor: "#EEEFF2",
            borderRadius: "50%",
            width: "80px",
            height: "80px"
          }}>
          <QrCodeIcon color="action" style={{ width: "40px", height: "40px" }} />
        </Box>
        <Typography variant='subtitle2'>
          Pagar
        </Typography>
      </Box>

      <Box mr={2} display="flex" alignItems="center" flexDirection="column">
        <Box
          mb={1}
          display="flex"
          alignItems="center"
          justifyContent="center"
          onClick={() => alert("Deseja Transferir?")}
          style={{ backgroundColor: "#EEEFF2", borderRadius: "50%", width: "80px", height: "80px" }}>
          <ArrowUpwardIcon color="action" style={{ width: "40px", height: "40px" }} />
        </Box>
        <Typography variant='subtitle2'>
          Transferir
        </Typography>
      </Box>

      <Box mr={2} display="flex" alignItems="center" flexDirection="column">
        <Box
          mb={1}
          display="flex"
          alignItems="center"
          justifyContent="center"
          onClick={() => alert("Deseja Depositar?")}
          style={{ backgroundColor: "#EEEFF2", borderRadius: "50%", width: "80px", height: "80px" }}>
          <ArrowDownwardIcon color="action" style={{ width: "40px", height: "40px" }} />
        </Box>
        <Typography variant='subtitle2'>
          Depositar
        </Typography>
      </Box>

      <Box mr={2} display="flex" alignItems="center" flexDirection="column">
        <Box display="flex" alignItems="center" justifyContent="center"
          style={{ backgroundColor: "#EEEFF2", borderRadius: "50%", width: "80px", height: "80px" }}>
          <ArrowDownwardIcon color="action" style={{ width: "40px", height: "40px" }} />
        </Box>
        <Typography variant='subtitle2'>
          Depositar
        </Typography>
      </Box>

      <Box mr={2} display="flex" alignItems="center" flexDirection="column">
        <Box display="flex" alignItems="center" justifyContent="center"
          style={{ backgroundColor: "#EEEFF2", borderRadius: "50%", width: "80px", height: "80px" }}>
          <ArrowDownwardIcon color="action" style={{ width: "40px", height: "40px" }} />
        </Box>
        <Typography variant='subtitle2'>
          Depositar 04
        </Typography>
      </Box>
    </Box>
  )
}
