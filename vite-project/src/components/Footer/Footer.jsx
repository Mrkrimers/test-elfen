import style from './style.module.scss'

export default function Footer() {

    return (
        <footer>
            <div className={style.wrapper}>
                <p>@2023</p>
                <div className={style.logo}></div>
                <p>Все права защищены</p>
            </div>
        </footer>
    )
}