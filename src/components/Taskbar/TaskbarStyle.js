import styled, { css } from 'styled-components'

const TaskbarStyled = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 3;
    .taskbar {
        background: rgba(51,51,51, 0.75);
        border-top-left-radius: 15px;
        border-top-right-radius: 15px;
        max-height: 50px;
        transform: translateY(60px);
        transition: 0.5s;
        padding: 5px;
        display: inline-flex;
        &__item {
            height: 45px;
            padding: 5px 0px;
            margin: 0 5px;
            transition: 0.5s;
            img {
                height: 100%;
                transition: 0.5s;
                cursor: pointer;
                border-radius: 5px;
                box-shadow: 0 0 10px rgb(0 0 0 / 50%);
                &:hover {
                    transform: translateY(-10px) scale(1.2);
                }
            }
        }
        &__recycleBin {
            &__button {
                cursor: pointer;
                max-width: 40px;
                transition: 0.5s;
                img {
                    width: 100%;
                }
                &:hover {
                    transform: translateY(-10px) scale(1.2);
                }
            }
            &__body {
                max-width: 360px;
                width: 100px;
                background: rgba(255,255,255, 0.9);
                border-radius: 10px;
                min-height: 200px;
                position: absolute;
                /* bottom: -500%; */
                bottom: calc(100% - 500px);
                transition: 0.5s;
                clip-path: polygon(0% 0% , 100% 0%, 50% 100%, 50% 100%);
                ${({recycle}) => recycle && css`
                    bottom: 500%;
                    clip-path: polygon(0% 0% , 100% 0%, 100% 100%, 0% 100%);
                    width: 100%;
                `}
                ${({maxRecycle}) => maxRecycle && css`
                    max-width: 100%;
                    min-height: calc(100vh - 30px);
                    bottom: 0;
                `}
                &__emptyTrash {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    padding: 5px;
                    font-size: 14px;
                    background: rgba(225,225,225, 0.5);
                    div {
                        cursor: pointer;
                        border-radius: 5px;
                        border: 1px solid gray;
                        padding: 0 5px;
                    }
                }
                &__container {
                    padding: 15px;
                    display: flex;
                    justify-content: space-between;
                    flex-wrap: wrap;
                    ${({maxRecycle}) => maxRecycle && css`
                        justify-content: flex-start;
                    `}
                    &__empty {
                        margin: 15% auto 0;
                        font-size: 20px;
                        font-weight: 700;
                    }
                    &__item {
                        width: 100px;
                        margin: 15px 5px 5px;
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        position: relative;
                        &.active {
                            transition: 0.3s;
                            opacity: 0;
                        }
                        &::after {
                            content: 'Restore it';
                            width: 100%;
                            background: rgba(0,0,0,0.7);
                            position: absolute;
                            top: -24px;
                            text-align: center;
                            color: #fff;
                            border-radius: 5px;
                            padding: 2px 0;
                            opacity: 0;
                        }
                        &::before {
                            content: '';
                            position: absolute;
                            top: -2px;
                            border-top: 5px solid rgba(0,0,0,0.7);
                            border-left: 5px solid transparent;
                            border-right: 5px solid transparent;
                            border-bottom: 5px solid transparent;
                            opacity: 0;
                        }
                        img {
                            border: 1px solid rgba(0,0,0,0.2);
                            border-radius: 5px;
                            width: 100%;
                            border-radius: 5px;
                            transition: 0.3s;
                            cursor: pointer;
                            &:hover {
                                border: 1px solid rgba(0,0,0,0.4);
                                .taskbar__recycleBin__body__container__item {
                                    &::after {
                                        opacity: 1;
                                    }
                                }
                            }
                        }
                        div {
                            margin: 5px 0 0;
                            font-size: 14px;
                        }
                    }
                }
            }
        }
    }
    &.active {
        .taskbar {
            transform: translateY(0px);
        }
    }
    &:hover {
        .taskbar {
            transform: translateY(0px);
        }
    }
`;
export {
    TaskbarStyled
}