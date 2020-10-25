import styled from 'styled-components';


export const HeaderArea = styled.div`
  background-color: #FFF;
  height: 60px;
  border-bottom: 1px solid #CCC;


  .container{ /* Colocando a responsividade*/
    max-width: 1000px;
    margin: auto;
    display: flex;
  }

  a{
    text-decoration: none;
  }

  .logo{
    flex: 1;
    display: flex;
    align-items: center;
    height: 60px;

    .logo-1, .logo-2, .logo-3{
        font-size: 30px;
        font-weight: bold;
    }

    .logo-1{
        
        color: #FF0000;
    }
    .logo-2{
        color: #00FF00;
    }
    .logo-3{
        color: #0000FF;
    }

  }

  nav{ 
    padding-top: 10px;
    padding-bottom: 10px;

    ul, li{
        margin: 0;
        padding: 0;
        list-style: none;
    }

    ul{
        display: flex;
        align-items: center;
        height: 40px;
    }

    li{
        margin-left: 20px;
        margin-right: 20px;
        /* Mesmo usando um components criado com styled-components, podemos usar no css a tag 'a' */
        a{  
            color: #000000;
            font-size: 14px;
            text-decoration: none;

            &:hover{
                color: #999;
            }

            &.button{
              background-color: #FF8100;
              border-radius: 4px;
              color: #FFF;
              padding: 5px 10px;
            }

            &.button:hover{
              background-color: #E57706;
            }

        }
    }
  }

`;