import React from "react";


const Header = (props) => {
    console.log(props)
    return (
    <>
    <h1>Hello there indeed, {props.name}, {props.color}</h1>
    </>
    )
}


export default Header;