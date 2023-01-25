import { fstat } from "fs";
import React from "react";
import './Header.css'

function Header(props: {
    name: string,
    position: string,
    address: string,
    cellNum: string,
    dateOfBirth: string,
    email: string,
    mode: string,
    setMode: any,
    setLang: any,
    URL: string
}) {
    return (
        <div className="Header">
            <div className={`right ${props.mode}`}>
                <div>
                    <h1>{props.name}</h1>
                    <p>{props.position}</p>
                </div>
                <div className="imgDiv">
                    <img src={require('.././me.jpeg')} alt="" width={100} height={100} />
                </div>
            </div>
            <div className="left d-flex justify-content-around">
                <div>
                    <span onClick={props.setLang} className="material-symbols-outlined">
                        language
                    </span>
                    <span onClick={props.setMode} className="material-symbols-outlined">
                        {props.mode === "dark" ? "light_mode" : "dark_mode"}
                    </span>
                </div>
                <ul>
                    <li> {props.address}</li>
                    <li> {props.cellNum}</li>
                    <li><b>{props.dateOfBirth}</b></li>
                    <li><b>{props.email}</b></li>
                </ul>
                <button className="pdf"><a className="pdf" href=".././public/CV.pdf" download>download pdf</a></button>
            </div>
        </div >
    )
}
export default Header