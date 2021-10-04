import styled, { css } from "styled-components";

const CardOfProductsStyled = styled.div`
    position: relative;
    width: 100%;
    transition: 1.3s;
    transform: translate(0%, 0px);
    ${({x}) => !x && css`
        z-index: 1;
    `}
    ${({x}) => x && css`
        z-index: 2;
    `}
    ${({x}) => x && css`
        z-index: 2;
        opacity: 0.8;
        ${
            (window.innerWidth > 767) ?
            (window.innerWidth / 2 < x) ? 
                `transform: translate(-50%, ${document.body.offsetHeight}px); 
                animation: width 0.5s ease-in-out;
                animation: display 1s ease-in-out;`
            : `transform: translate(70%, ${document.body.offsetHeight}px); 
                animation: width 0.5s ease-in-out;
                animation: display 1s ease-in-out;`
            : null
        }
    `}
    
    @keyframes width{
        from {width: 100%;}
        to {width: 20%;}
    }
    @keyframes display{
        0% {opacity: 0.8;}
        100% {display: none;}
    }
    
    .main {
        position: relative;
        &__img {
            border-bottom-left-radius: 10px;
            border-bottom-right-radius: 10px;
            overflow: hidden;
            position: relative;
            max-height: 303px;
            height: 100vh;
            background-image: url(${({desktopLightImg}) => desktopLightImg});
            background-repeat: no-repeat;
            background-position: center;
            background-size: cover;
            &__viewNow {
                width: 100%;
                height: 100%;
                background: rgba(0,0,0,.6);
                border-radius: 50%;
                opacity: 0;
                transition: 1s;
                position: absolute;
                bottom: -100%;
                left: 0;
                display: flex;
                justify-content: center;
                align-items: flex-start;
                flex-direction: column;
                padding-left: 15%;
                &__container {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    flex-direction: column;
                    &__name {
                        color: #d1d1d1;
                        font-size: 20px;
                        font-weight: 600;
                    }
                    &__button {
                        background: #333;
                        margin-top: 15px;
                        border-radius: .30rem;
                        color: #ffffffce;
                        display: inline-block;
                        font-size: 1rem;
                        font-weight: 500;
                        line-height: 1.5;
                        padding: .375rem .75rem;
                        text-align: center;
                        transition: 0.15s ease-in-out;
                        width: 250px;
                        &:hover {
                            background: #444;
                            color: #fff;
                        }
                    }
                }
            }
        }
        &__mobil {
            width: 30%;
            height: 323px;
            border-radius: 10px;
            box-shadow: 1px 1px 5px #adadad;
            overflow: hidden;
            position: absolute;
            bottom: -15px;
            right: -15px;
            transition: .5s;
            &__notification {
                height: 20px;
                width: 100%;
                display: flex;
                align-items: center;
                justify-content: space-between;
                background: #333;
                border-top-left-radius: 10px;
                border-top-right-radius: 10px;
                padding: 5px 10px;
                color:#8E8E92;
                &__clock {
                    font-size: 13px;
                    font-weight: 500;
                }
                &__imgs {
                    display: flex;
                    align-items: center;
                    div {
                        width: 20px;
                        height: 20px;
                        background-repeat: no-repeat;
                        background-size: 25px;
                    }
                    &__signal {
                        background-image: url(${({signal}) => signal});
                        background-position: 3px 4px;
                    }
                    &__wifi {
                        background-image: url(${({wifi}) => wifi});
                        background-position: 3px 4.5px;
                    }
                    &__battery {
                        background-image: url(${({battery}) => battery});
                        background-position: 3px 7px;
                    }
                }
            }
            &__img {
                width: 100%;
                height: 100%;
                background-repeat: no-repeat;
                background-position: 0 0;
                background-size: 100% 120%;
                background-image: url(${({mobilLightImg}) => mobilLightImg});
            }
        }
        &:hover {
            .main__img__viewNow {
                opacity: 1;
                bottom: 0;
                border-radius: 0%;
            }
            .main__img {
                background-image: url(${({desktopLightImg, desktopDarkImg}) => desktopDarkImg ? desktopDarkImg : desktopLightImg});
            }
            .main__mobil {
                bottom: 0px;
                right: 0px;
                &__img {
                    background-image: url(${({mobilLightImg, mobilDarkImg}) => mobilDarkImg ? mobilDarkImg : mobilLightImg});
                }
            }
        }
    }
    &.maximize {
        z-index: 2;
        width: calc(100vw - 15px);
        height: calc(100vh - 50px);
        /* margin-top: -33px; */
        position: absolute;
        left: 0px;
        top: -9px;
        .main {
            &__img {
                max-height: 100%;
            }
            &__mobil {
                opacity: 0;
                height: calc(100% + 20px);
            }
            &:hover {
                .main__img__viewNow {
                    opacity: 1;
                    bottom: -100%;
                    border-radius: 0%;
                }
            }
        }
    }
`;
export {
    CardOfProductsStyled
}