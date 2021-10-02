import styled from "styled-components";

const NavbarStyled = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: #333;
    box-shadow: 0 1px 5px #000;
    padding: 3px 15px;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 3;
    ul {
        display: flex;
        align-items: center;
        li {
            margin-right: 15px;
            a {
                color: #e4e4e4;
                font-weight: 700;
                transition: 0.3s;
                div {
                    transition: 0.3s;
                }
                &:hover {
                    color: #fff;
                    div {
                        background-color: #fff;
                    }
                }
            }
        }
    }
    .notificationArea {
        display: flex;
        &__battery {
            transition: 0.3s;
            &:hover {
                background-color: #fff;
            }
        }
        &__clock {
            color: #e4e4e4;
            margin-left: 8px;
        }
    }
`;

export {
    NavbarStyled
}