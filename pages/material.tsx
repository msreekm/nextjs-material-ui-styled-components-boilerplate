import React from 'react'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import { Button, Paper } from '@material-ui/core'
import styled from 'styled-components'
import App from '../components/App'
import Header from '../components/Header'

const MaterialContainer = styled(Container)`
  background-color: #6772e5;
  margin-top: 40px;
  padding: 20px;
`

export default function Index() {
  return (
    <App>
      <Header />

      <MaterialContainer maxWidth="sm">
        <Paper elevation={1}>
          <Button variant="contained">Default</Button>
          <Button variant="contained" color="primary">
            Primary
          </Button>
          <Button variant="contained" color="secondary">
            Secondary
          </Button>
          <Button variant="contained" disabled>
            Disabled
          </Button>
          <Button variant="contained" color="primary" href="#contained-buttons">
            Link
          </Button>
        </Paper>
      </MaterialContainer>
    </App>
  )
}
