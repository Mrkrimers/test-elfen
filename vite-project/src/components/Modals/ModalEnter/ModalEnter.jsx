import style from "../ModalEnter/style.module.scss";


// eslint-disable-next-line react/prop-types
export default function ModalEnter({ setOpenModalEnter, setOpenModalReg }) {

    const transitionHandleClick = () => {
        setOpenModalEnter(false)
        setOpenModalReg(true)
    }

    return (
        <>
            <div className={style.modal}>
                <div className={style.titleAndClose}>
                    <h2>Вход</h2>

                    <button className={style.closeBtn} onClick={() => setOpenModalEnter(false)}>&times;</button>
                </div>

                <div className={style.inputsContainer}>
                    <div className={style.inputWrapper}>
                        <label><input type="text" placeholder="e-mail" /></label>
                        <label><input type="password" placeholder="пароль" /></label>
                    </div>

                    <div className={style.btnEnter}>
                        <p>Войти</p>
                    </div>
                </div>

                <div className={style.transition} onClick={transitionHandleClick}>
                    <p>нет аккаунта?</p>
                    <p>Регистрация</p>
                    <div className={style.svgArrow}></div>
                </div>

            </div>
        </>
    )
}