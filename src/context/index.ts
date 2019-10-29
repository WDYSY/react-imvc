import React from 'react'
import { ClientController } from 'create-app/client'
import Controller from '../controller'

function createContext<Ctrl extends Controller<any, any>>(ctrl: Ctrl & ClientController) {
  type GlobalContextType = {
    ctrl: typeof ctrl,
    location: typeof ctrl.location,
    history: typeof ctrl.history,
    state: ReturnType<typeof ctrl.store.getState>,
    actions: typeof ctrl.store.actions,
    preload: typeof ctrl.context.preload,
    matcher: typeof ctrl.matcher,
    loader: typeof ctrl.loader,
    prefetch: typeof ctrl.prefetch
  }

  return React.createContext<GlobalContextType>({} as any)
}

const GlobalContext = createContext({} as Controller<any, any> & ClientController)

export default GlobalContext