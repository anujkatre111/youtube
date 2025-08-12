import React from 'react'
import Head from './components/Head'
import Body from './components/Body'
import { Provider } from 'react-redux'
import store from './utils/store'

const App = () => {
  return (
    <div>
      <Provider store={store}>
        <Head/>
        <Body/>
      </Provider> 
    </div>
  )
}

export default App
