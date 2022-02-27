// eslint-disable-next-line
import { React } from "react";
import "./LovePercent.css"

export default function LovePercent (){
    let lovePercent = Math.round(Math.random() * 100);
    console.log(lovePercent)
 
    if (lovePercent <= 15 ) {
        return (
            <div className="lowScore">
            `You are ${lovePercent}% in love...🥶`
            </div>
        )
    } if (lovePercent <= 30 ) {
        return (
            <div className="score low">
            You are {lovePercent}% in love.😣
            </div>
        )
    } if (lovePercent <= 50 ) {
        return (
            <div className="score">
            You are {lovePercent}% in love.😊
            </div>
        )
    } if (lovePercent <= 70 ) {
        return (
            <div className="score">
            You are {lovePercent}% in love😘
            </div>
        )
    } if (lovePercent <= 90 ) {
        return (
            <div className="score">
            You are {lovePercent}% in love!😍
            </div>
        )
    } if (lovePercent <= 100 ) {
        return (
             <div className="score">
            You are {lovePercent}% in love!!!🥰❤️✨
            </div>
        )
    }  
}