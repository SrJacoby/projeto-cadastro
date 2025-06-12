import styled, {createGlobalStyle} from "styled-components"

//Global

export const GlobalStyles = createGlobalStyle`
    *{
        font-family: sans-serif;
    }

    body{
        background-color: ${({theme}) => theme.background};
        color: ${({theme}) => theme.text};
    }

    h1{
        font-family: sans-serif;
    }

    li{
        padding: 20px;
        list-style-type: none;

        & span{
            color: ${({theme}) => theme.span};
            font-size: 1.2em;
        }

        & span:hover{
            opacity: 0.8;
        }
    }

    .switch-mode{
        background-color: transparent;
        border: 2px solid ${({theme}) => theme.border};
        border-radius: 25px;
        padding: 5px 15px;
        cursor: pointer;
        position: absolute;
        top: 5px;
        left: 5px;

        & img{
        max-height: 35px;
        }
    }
    
}
`

//Home.jsx

export const Container = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
`

export const Form = styled.div`
    display: flex;
    flex-direction: column;
    gap: 30px;
    padding: 30px;
    background-color: ${({theme}) => theme.form};
    border-radius: 25px;
    max-width: 50%;
    width: 300px;

    & input{
        border: 1px solid #6e6d7c;
        border-radius: 25px;
        height: 40px;
        background-color: ${({theme}) => theme.input};
        color: ${({theme}) => theme.text};
        font-size: 16px;
        padding-left: 10px;
        outline: none;
        box-sizing: border-box;
    }

    .password-container{
        position: relative;
        width: 100%;

        & input{
            width: 100%;
            padding-right: 35px;
            box-sizing: border-box;
        }
    }

    .icon-password{
        position: absolute;
        right: 10px;
        top: 50%;
        transform: translateY(-50%);
        border: none;
        background: none;
        cursor: pointer;
        padding: 0;
        display: flex;
        align-items: center;
    }

    & button{
        border: 1px solid #6e6d7c;
        height: 40px;
        border-radius: 25px;
        cursor: pointer;
        font-weight: bold;
        font-size: 16px;
        background-color: ${({theme}) => theme.button};
        color: ${({theme}) => theme.text};
    }
    & button:hover{
        opacity: 0.8;
    }

`

//Users.jsx

export const ContainerUsers = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0;
`

export const SearchBar = styled.div`
    display: flex;
    flex-direction: row;
    margin: 10px;
    gap: 5px;

    & img{
        width: 23px;
    }

    & input{
        border-radius: 10px;
        border-color: ${({theme}) => theme.border};
        background-color: ${({theme}) => theme.background};
        color: ${({theme}) => theme.text};
    }
`

export const Card = styled.div`
    display: flex;
    justify-content: space-between;
    width: 400px;
    border-radius: 10px;
    background-color: ${({theme}) => theme.card};
    align-items: center;
    max-width: 50%;
    margin: 5px;
    padding: 5px 10px;
    & p {
        font-weight: bold;
        
        & span{
            font-weight: normal;
        }
    }

    & button{
        background-color: transparent;
        border: none;
        cursor: pointer;

        & img{
            max-width: 30px;
        }
    }
    
    & button:hover{
        opacity: 0.5;
    }
`

export const BackButton = styled.button`
    background-color: transparent;
    border: none;
    cursor: pointer;
    font-size: 20px;
    color: ${({theme}) => theme.text};
    border: 1px solid #6e6d7c;
    margin: 25px;
    border-radius: 25px;
    height: 50px;
    width: 200px;

    &:hover{
        opacity: 0.8;
    }
`