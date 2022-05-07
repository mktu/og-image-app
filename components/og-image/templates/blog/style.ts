import React from "react"

const bodyStyle : React.CSSProperties = {
    fontFamily : 'sans-serif',
    display : 'flex',
    flexDirection : 'column',
    alignItems : 'center',
    justifyContent : 'center',
    height : '100vh',
    position : 'relative',
}

const logoStyle : React.CSSProperties = {
    position : 'absolute',
    left : 10,
    top : 10
}

const titleStyle : React.CSSProperties = {
    fontWeight : 'bold',
    marginBottom : '0.25rem'
}

const authorStyle : React.CSSProperties = {
    display : 'flex',
    alignItems : 'center'
}

const authorImageStyle : React.CSSProperties = {
    marginRight : '0.25rem',
    borderRadius : '50%'
}

export {
    bodyStyle,
    logoStyle,
    titleStyle,
    authorStyle,
    authorImageStyle
}