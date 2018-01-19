import React, { Component } from 'react'
import MyInput from './Filters/MyInput'
import Articles from './routes/Articles'
import NewArticle from './routes/NewArticle'
import NotFound from './routes/NotFound'
import Counter from './Counter'
import CommentsPage from './routes/CommentsPage'
import { Router, Switch, Redirect, Route } from 'react-router-dom'
import history from '../history'
import { ConnectedRouter } from 'react-router-redux'
/**
 * @import style from Material UI
 */
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import Header from './Header/index'
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import baseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import * as Colors from 'material-ui/styles/colors';
import { fade } from 'material-ui/utils/colorManipulator'

const getTheme = () => {
    let overwrites = {
        "palette": {
            "shadowColor": "#000000",
            "primary1Color": "#651fff",
            "textColor": "#ffffff",
            "primary2Color": "#303f9f",
            "accent2Color": "#f50057",
            "accent3Color": "#ff80ab",
            "borderColor": "#ffffff",
            "accent1Color": "#651fff"
        },
        "appBar": {
            "textColor": "#ffffff"
        },
        "raisedButton": {
            "color": "#2196f3",
            "textColor": "#fff",
            "padding": "0 10px"
        }
    };
    return getMuiTheme(baseTheme, overwrites);
}

export default class App extends Component {

  render() {
    return (
      <ConnectedRouter history = {history}>
          <MuiThemeProvider muiTheme={getTheme()}>
                <div>
                    <Header className="alt-header" title="React Blog" />
                  <div className="alt-wrapper">
                  <MyInput />
                  <Switch>
                      <Route path = "/counter" component = { Counter }/>
                      <Route path = "/comments" component = { CommentsPage }/>
                      <Route path = "/articles/new" component = { NewArticle }/>
                      <Route path = "/articles" component = { Articles }/>
                      {/*<Redirect from="/comments" to="/comments/1" />*/}
                      <Route path = "*" component = { NotFound }/>
                  </Switch>
                  </div>
                </div>
          </MuiThemeProvider>
      </ConnectedRouter>
    )
  }

}