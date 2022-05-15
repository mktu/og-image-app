import React from 'react'
import useAppSetting from '@hooks/useAppSetting'

export type ContextType = ReturnType<typeof useAppSetting>

export const initialService : ContextType = {
    app : '',
    baseUrl : ''
}

const context = React.createContext<ContextType>(initialService);

export default context;