import React from 'react'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import { Button, Paper } from '@material-ui/core'
import styled from 'styled-components'
import App from '../components/App'
import Header from '../components/Header'
import MyLayout from '../layouts/MyLayout'

const MaterialContainer = styled(Container)`
  background-color: ${({ theme }) => theme.palette.secondary.main};
  margin-top: 40px;
  padding: 40px;
`

export default function Index() {
  return (
    <>
      <MaterialContainer maxWidth="sm">
        <Paper elevation={10}>
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
    </>
  )
}
Index.Layout = MyLayout
