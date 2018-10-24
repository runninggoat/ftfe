import React, { Component } from 'react'
import {Route, BrowserRouter} from 'react-router-dom'
import TopHeader from './top_header/top_header.js'
import Home from './home/home.js'
import Search from './search/search.js'
import BottomFooter from './bottom_footer/bottom_footer.js'
import LoginPanel from './top_header/login'

class App extends Component {
  state = {
    blur: false,
    displayLogin: false,
  }

  turnOnBlur () {
    this.setState((state) => {
      return {
        blur: true,
      }
    })
  }

  turnOffBlur () {
    this.setState((state) => {
      return {
        blur: false,
      }
    })
  }

  handleOpenLogin (e) {
    this.setState(() => {
      return { displayLogin: true }
    })
    this.turnOnBlur()
  }

  handleCloseLogin (e) {
    // console.log(e)
    this.setState((state) => {
      return {
        displayLogin: false,
      }
    })
    this.turnOffBlur()
  }

  render() {
    let loginP = null
    if (this.state.displayLogin) {
      loginP = (
        <LoginPanel
          onCloseLogin={ this.handleCloseLogin.bind(this) }
        />
      )
    }
    return (
      <BrowserRouter>
        <div>
          <div style={{
            filter: this.state.blur ? 'blur(5px)' : '',
          }}>
            <TopHeader
              handleOpenLogin={ this.handleOpenLogin.bind(this) }
            />
            <Route exact path="/" component={ Home } />
            <Route exact path="/search" component={ Search } />
            <BottomFooter></BottomFooter>
          </div>
          { loginP }
        </div>
      </BrowserRouter>
    )
  }
}

export default App
