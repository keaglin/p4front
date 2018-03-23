import React from 'react'
import { Switch, Route }    from 'react-router-dom'
import Landing              from './Landing'
import Header               from './Header'
import Footer               from './Footer'
import PostContainer        from './PostContainer'
import PostDetail           from './PostDetail'
import PostEdit             from './PostEdit'
import PostAdd              from './PostAdd'
import ThemeProvider        from 'react-emotion'
import theme                from '../theme'
import '../css/App.css'

const App = props => {
  <ThemeProvider theme={theme}>
    return (
      <div className="App">
        <Header />
        <main>
          <Switch>
            <Route exact path='/'              render={()      => (<Landing />)}/>
            <Route exact path='/posts'         render={(props) => (<PostContainer {...props}/>)}/>
            <Route exact path='/posts/add'     render={()      => (<PostAdd />)} />
            <Route path='/posts/:title/edit'   render={(props) => (<PostEdit {...props} />)} />
            <Route path='/posts/:title'        render={(props) => (<PostDetail {...props}/>)} />
            {/* <Route exact path='/records'       render={(props) => (<RecordContainer {...props}/>)}/>
            <Route exact path='/records/add'   render={()      => (<RecordAdd />)} />
            <Route path='/records/:title/edit' render={(props) => (<RecordEdit {...props} />)} />
            <Route path='/records/:title'      render={(props) => (<RecordDetails {...props}/>)} />
            <Route exact path='/users'         render={()      => (<UserAuth />)} /> */}
            <Route path='/*' render={() => (<Landing />)} />
          </Switch>
        </main>
        <Footer />
      </div>
    )
  </ThemeProvider>
}

export default App
