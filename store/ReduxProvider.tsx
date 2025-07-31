"use client"
import React from 'react'
import { Provider } from 'react-redux'
import { appStore } from './store'

function ReduxProvider({children}: {children: React.ReactNode}) {
  return (
    <div>
      <Provider store={appStore}>
        {children}
      </Provider>
    </div>
  )
}

export default ReduxProvider
