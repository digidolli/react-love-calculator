// eslint-disable-next-line
import { React } from "react";

export default function LovePercent (){
    let lovePercent = Math.round(Math.random() * 100);
    console.log(lovePercent)
    
    if (lovePercent <= 15 ) {
        return (
            `this is your love number ${lovePercent} 😭`
        )
    } if (lovePercent <= 30 ) {
        return (
            `this is your love number ${lovePercent} 😵‍💫`
        )
    } if (lovePercent <= 50 ) {
        return (
            `this is your love number ${lovePercent} 😌`
        )
    } if (lovePercent <= 70 ) {
        return (
            `this is your love number ${lovePercent} 💕`
        )
    } if (lovePercent <= 90 ) {
        return (
            `this is your love number ${lovePercent} 🥰`
        )
    } if (lovePercent <= 100 ) {
        return (
            `this is your love number ${lovePercent} 😍`
        )
    }  
}