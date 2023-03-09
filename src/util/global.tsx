/*
 * @Author: ROYIANS
 * @Date: 2023/2/13 16:34
 * @Description:
 * @sign:
 * ╦═╗╔═╗╦ ╦╦╔═╗╔╗╔╔═╗
 * ╠╦╝║ ║╚╦╝║╠═╣║║║╚═╗
 * ╩╚═╚═╝ ╩ ╩╩ ╩╝╚╝╚═╝
 */
import React, {createContext, useContext} from 'react'
import {GlobalContextProps} from "@/types/GlobalContextProps";
import {DefaultComponentProps} from "@/types/DefaultComponentProps";

const GlobalContext = createContext<GlobalContextProps>({
  themeDefault: {
    iconColor: '#212121'
  }
})

export function GlobalContextProvider({children}: DefaultComponentProps) {
  const themeDefault = {
    iconColor: '#212121'
  }
  return (
    <GlobalContext.Provider value={{themeDefault}}>
      {children}
    </GlobalContext.Provider>
  )
}

export const useGlobal = () => useContext(GlobalContext)
