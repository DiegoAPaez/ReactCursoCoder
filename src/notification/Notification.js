import { createContext, useContext, useState } from "react"

const Notification = ({message, severity}) => {
    const notificationStyle = {
      position: 'absolute',
      top: 100,
      right: 5,
      padding: '10px 20px'
    }
    
    if(message === '') {
        return null
    }

    return (
      <div style={notificationStyle} className={`${severity === 'success' ? 'bg-green-600' : 'bg-rose-600'} text-white rounded w-auto h-auto`}>
        <p>{message}</p>      
      </div>
    )
  }

const NotificationContext = createContext()

export const NotificationProvider = ({children}) => {
    const [message, setMessage] = useState('')
    const [severity, setSeverity] = useState('success')

    const setNotification = (sev, msg) => {
        setMessage(msg)
        setSeverity(sev)
        setTimeout (() => {
            setMessage('')
        }, 3000)
    }

    return (
        <NotificationContext.Provider value={{setNotification}}>
            <Notification message={message} severity={severity}/>
            {children}
        </NotificationContext.Provider>
    )
}

  export const useNotification = () => {
      return useContext(NotificationContext)
  }