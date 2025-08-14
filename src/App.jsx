import React from 'react'
import Head from './components/Head'
import Body from './components/Body'
import { Provider } from 'react-redux'
import store from './utils/store'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import WatchPage from './components/WatchPage'
import MainContainer from './components/MainContainer'

const appRouter = createBrowserRouter([
{
  path: '/',
  element: <Body/>,
  children: [
   {
    path: '/',
    element: <MainContainer/>
  },
    {
      path: '/watch',
      element: <WatchPage/>
    }
  ]
},
])
const App = () => {
  return (
    <div>
      <Provider store={store}>
        <Head/>
        <RouterProvider router={appRouter}/>
      </Provider> 
    </div>
  )
}

export default App
