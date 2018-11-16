import React, { Component } from 'react'
import {Route, HashRouter} from 'react-router-dom'
import TopHeader from './top_header/top_header.js'
import Home from './home/home.js'
import Search from './search/search.js'
import BottomFooter from './bottom_footer/bottom_footer.js'
import LoginPanel from './top_header/login'
import UploadPanel from './top_header/upload/upload'
import { Provider } from 'react-redux'
import store from './stores/store'

class App extends Component {
  state = {
    blur: false,
    displayLogin: false,
    displayUpload: false,
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
      return { displayLogin: false }
    })
    this.turnOffBlur()
  }

  handleOpenUpload (e) {
    this.setState(() => {
      return { displayUpload: true }
    })
    this.turnOnBlur()
  }

  handleCloseUpload (e) {
    // console.log(e)
    this.setState((state) => {
      return { displayUpload: false }
    })
    this.turnOffBlur()
  }

  render() {
    let loginP = null
    if (this.state.displayLogin) {
      loginP = (
        <LoginPanel
          display={ this.state.displayLogin }
          onCloseLogin={ this.handleCloseLogin.bind(this) }
        />
      )
    }
    let uploadP = null
    if (this.state.displayUpload) {
      uploadP = (
        <UploadPanel
          display={ this.state.displayUpload }
          onCloseUpload={ this.handleCloseUpload.bind(this) }
        />
      )
    }
    return (
      <Provider store={store}>
        <HashRouter>
          <div>
            <div style={{
              filter: this.state.blur ? 'blur(5px)' : '',
            }}>
              <TopHeader
                handleOpenLogin={ this.handleOpenLogin.bind(this) }
                handleOpenUpload={ this.handleOpenUpload.bind(this) }
              />
              <Route exact path="/" component={ Home } />
              <Route exact path="/search" component={ Search } />
              <BottomFooter></BottomFooter>
            </div>
            { loginP }
            { uploadP }
            <div style={{ height: 0 }}>
              <svg width="0" height="0">
                <linearGradient id="rg" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop stopColor="#FF8487" offset="0%" />
                  <stop stopColor="#FF1367" offset="100%" />
                </linearGradient>
              </svg>
            </div>
          </div>
        </HashRouter>
      </Provider>
    )
  }
}

export default App
