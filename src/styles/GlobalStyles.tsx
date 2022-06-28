import { createGlobalStyle } from "styled-components";
import { linkColor, primaryColor, textColor } from "../config/colors";

export default createGlobalStyle`
    
    *{
        margin:0;
        padding:0;
        outline:none;
        box-sizing:border-box;
    }
    body{
        font-family: 'Roboto Condensed', sans-serif;
        background:linear-gradient(to bottom, #C1CD40, #636C00, #C1CD40);
    }
   
    html,body,#root{
        height:100%; 
    }
   
    button{
        cursor:pointer;
        background: ${primaryColor};
        border: none;
        color: ${linkColor};
        padding: 10px 20px;
        border-radius: 4px;
        font-weight: 700;
        transition: all 300ms;
    }
    button:hover{
        filter: brightness(75%);
    }
    a{
        text-decoration:none;
        color: ${linkColor}; 
        font-size: 1rem;
        font-weight: bold;
    }
    h1 {
        font-family: 'Josefin Sans', sans-serif;
        color: ${linkColor};
        font-size: 4rem;
        @media(max-width:768px){
            font-size: 2.1rem;
        }
        
    }
    h2 {
        font-family: 'Zilla Slab', serif;
        color: ${linkColor};
        font-size:2rem;
        @media(max-width:768px){
            font-size: 1.5rem;
        }
    }
    h3 {
        font-family: 'Zilla Slab', serif;
        @media(max-width:768px){
            font-size: 1rem;
        }
    }
    h4 {
        font-family: 'Zilla Slab', serif;
        font-size: 1.2rem;
        @media(max-width:768px){
            font-size: 0.9rem;
        }
    }
    p{
        font-family: 'Zilla Slab', serif;
        font-size: 1rem;
        @media(max-width:768px){
            font-size: 0.9rem;
        }
    }
    label{
        font-family: 'Zilla Slab', serif;
        font-size: 1.2rem;
    }
`;
