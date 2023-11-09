import React from "react"

type ButtonStyle = {
    Violet: React.CSSProperties
    Orange: React.CSSProperties
}

export const Theme: ButtonStyle = {
    Violet: {
        backgroundColor: 'rgb(102, 54, 214)',
        borderColor: 'blueviolet',
    },
    Orange: {
        backgroundColor: 'orangered',
        borderColor: 'red',
    }
}