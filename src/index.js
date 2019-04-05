import React, { Component } from 'react'

import RootStackContainer from './routes'
// import { ThemeProvider } from 'styled-components'
import { globalStyles } from './styles'

import './config/ReactotronConfig'

export default class App extends Component {

  render() {

    return (
      
      // <ThemeProvider theme={globalStyles}>

        <RootStackContainer />

      // </ThemeProvider>  

    );
  }
}
