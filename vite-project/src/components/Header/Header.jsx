import { useState } from "react";
import style from "../Header/style.module.scss";
import ModalBasket from "../Modals/ModalBasket/ModalBasket";
import ModalFavorites from "../Modals/ModalFavorites/ModalFavorites";
import ModalEnter from "../Modals/ModalEnter/ModalEnter";
import ModalReg from "../Modals/ModalReg/ModalReg";

export default function Header() {
    const [openModalBasket, setOpenModalBasket] = useState(false)
    const [openModalFavorites, setOpenModalFavorites] = useState(false)
    const [openModalEnter, setOpenModalEnter] = useState(false)
    const [openModalReg, setOpenModalReg] = useState(false)

    const modalBasketHandleClick = () => {
        if (openModalFavorites || openModalEnter || openModalReg) {
            setOpenModalFavorites(false)
            setOpenModalEnter(false)
            setOpenModalReg(false)
            setOpenModalBasket(true)
        } else {
            setOpenModalBasket(true)
        }
    }
    const modalFavoritesHandleClick = () => {
        if (openModalBasket || openModalEnter || openModalReg) {
            setOpenModalBasket(false)
            setOpenModalEnter(false)
            setOpenModalReg(false)
            setOpenModalFavorites(true)
        } else {
            setOpenModalFavorites(true)
        }
    }
    const modalEnterHandleClick = () => {
        if (openModalBasket || openModalFavorites || openModalReg) {
            setOpenModalBasket(false)
            setOpenModalFavorites(false)
            setOpenModalReg(false)
            setOpenModalEnter(true)
        } else {
            setOpenModalEnter(true)
        }
    }

    return (
        <header>

            {
                openModalBasket && <ModalBasket openModalBasket={openModalBasket} setOpenModalBasket={setOpenModalBasket} />
            }
            {
                openModalFavorites && <ModalFavorites openModalFavorites={openModalFavorites} setOpenModalFavorites={setOpenModalFavorites} />
            }
            {
                openModalEnter && <ModalEnter openModalEnter={openModalEnter} setOpenModalEnter={setOpenModalEnter} setOpenModalReg={setOpenModalReg} />
            }
            {
                openModalReg && <ModalReg openModalReg={openModalReg} setOpenModalReg={setOpenModalReg} setOpenModalEnter={setOpenModalEnter} />
            }

            <div className={style.headerWrapper}>

                <div className={style.logoContainer}>
                    <h1>Elfen lied</h1>
                </div>

                <div className={style.catalogContainer}>
                    <div className={style.dots}></div>
                    <p>Каталог</p>
                </div>

                <nav className={style.navContainer}>
                    <p>Блог</p>
                    <p>Контакты</p>
                </nav>

                <div className={style.searchContainer}>
                    <div className={style.svgSearch}></div>
                    <p>Поиск</p>
                </div>

                <div className={style.iconsContainer}>
                    <div className={style.svgHeart} onClick={modalFavoritesHandleClick}></div>
                    <div className={style.svgMan} onClick={modalEnterHandleClick}></div>
                    <div className={style.svgBasket} onClick={modalBasketHandleClick}></div>
                </div>

            </div>


        </header>
    )
}
