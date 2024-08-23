import style from "../ModalReg/style.module.scss";


// eslint-disable-next-line react/prop-types
export default function ModalReg({ setOpenModalReg, setOpenModalEnter }) {

    const transitionHandleClick = () => {
        setOpenModalEnter(true)
        setOpenModalReg(false)
    }

    return (
        <>
            <div className={style.modal}>
                <div className={style.titleAndClose}>
                    <h2>Регистрация</h2>

                    <button className={style.closeBtn} onClick={() => setOpenModalReg(false)}>&times;</button>
                </div>

                <div className={style.inputsContainer}>
                    <div className={style.inputWrapper}>
                        <label><input type="text" placeholder="e-mail" /></label>
                        <label><input type="password" placeholder="пароль" /></label>
                        <label><input type="password" placeholder="повторите пароль" /></label>
                    </div>

                    <div className={style.btnReg}>
                        <p>Регистрация</p>
                    </div>
                </div>

                <div className={style.transition} onClick={transitionHandleClick}>
                    <div className={style.svgArrow}></div>
                    <p>Вход</p>
                </div>

            </div>
        </>
    )
}