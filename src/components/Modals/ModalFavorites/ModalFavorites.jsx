import style from "../ModalFavorites/style.module.scss";
import Coppelia from "./assets/imgs/Coppelia_modal.png";
import Facchetta from "./assets/imgs/Facchetta_modal.png";
import Jane from "./assets/imgs/Jane_modal.png";

// eslint-disable-next-line react/prop-types
export default function ModalFavorites({ setOpenModalFavorites }) {

    return (
        <>
            <div className={style.modal}>
                <div className={style.titleAndClose}>
                    <h2>Втовары в избранном</h2>

                    <button className={style.closeBtn} onClick={() => setOpenModalFavorites(false)}>&times;</button>
                </div>

                <div className={style.goodsContainer}>

                    <div className={style.itemContainer}>
                        <div className={style.imgWrapper}>
                            <img src={Coppelia} alt="Coppelia" />
                        </div>

                        <div className={style.goodsDescription}>
                            <div className={style.borderForLike}>
                                <div className={style.btnLike}></div>
                            </div>

                            <h2>coppelia</h2>
                            <p>Лампа настольная</p>
                            <div className={style.line}></div>

                            <div className={style.priceAndCount}>
                                <h3>150 000 ₽</h3>
                            </div>

                        </div>
                    </div>

                    <div className={style.itemContainer}>
                        <div className={style.imgWrapper}>
                            <img src={Facchetta} alt="Facchetta" />
                        </div>

                        <div className={style.goodsDescription}>
                            <div className={style.borderForLike}>
                                <div className={style.btnLike}></div>
                            </div>

                            <h2>Facchetta</h2>
                            <p>Лампа настольная</p>
                            <div className={style.line}></div>

                            <div className={style.priceAndCount}>
                                <h3>150 000 ₽</h3>
                            </div>

                        </div>
                    </div>

                    <div className={style.itemContainer}>
                        <div className={style.imgWrapper}>
                            <img src={Jane} alt="Jane" />
                        </div>

                        <div className={style.goodsDescription}>
                            <div className={style.borderForLike}>
                                <div className={style.btnLike}></div>
                            </div>

                            <h2>Jane</h2>
                            <p>Лампа настольная</p>
                            <div className={style.line}></div>

                            <div className={style.priceAndCount}>
                                <h3>150 000 ₽</h3>
                            </div>

                        </div>
                    </div>

                </div>

            </div>
        </>
    )
}