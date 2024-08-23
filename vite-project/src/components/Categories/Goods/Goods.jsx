import style from "../Goods/style.module.scss"
import lampAubrey from "./assets/lamps/Aubrey.png"
import lampArtemide from "./assets/lamps/Artemide_lamp.png"
import lampCoppelia from "./assets/lamps/Coppelia_lamp.png"
import lampDarrell from "./assets/lamps/Darrell.png"
import lampLeslie from "./assets/lamps/Leslie.png"

import mirrorArlene from "./assets/mirrors/Arlene.png"
import mirrorArtemide from "./assets/mirrors/Artemide.png"
import mirrorColleen from "./assets/mirrors/Colleen.png"
import mirrorCoppelia from "./assets/mirrors/Coppelia.png"
import mirrorKristin from "./assets/mirrors/Kristin.png"

import chairsDarlene from "./assets/chairs/Darlene.png"
import chairsJane from "./assets/chairs/Jane.png"
import chairsJudith from "./assets/chairs/Judith.png"
import chairsKathryn from "./assets/chairs/Kathryn.png"
import chairsWendy from "./assets/chairs/Wendy.png"

import tablesDarlene from "./assets/tables/Darlene_table.png"
import tablesJane from "./assets/tables/Jane_table.png"
import tablesJudith from "./assets/tables/Judith_table.png"
import tablesKathryn from "./assets/tables/Kathryn_table.png"
import tablesWendy from "./assets/tables/Wendt_table.png"

// eslint-disable-next-line react/prop-types
export default function Goods({ id }) {

    const helper = [
        {
            id: 0,
            goods: [{ id: 0, name: "Arlene", img: mirrorArlene, price: "150 000" },
            { id: 1, name: "Artemide", img: mirrorArtemide, price: "160 000" },
            { id: 2, name: "Colleen", img: mirrorColleen, price: "170 000" },
            { id: 3, name: "Coppelia", img: mirrorCoppelia, price: "180 000" },
            { id: 4, name: "Kristin", img: mirrorKristin, price: "190 000" },
            ]
        }, {
            id: 1,
            goods: [{ id: 0, name: "Aubrey", img: lampAubrey, price: "150 000" },
            { id: 1, name: "Artemide", img: lampArtemide, price: "160 000" },
            { id: 2, name: "Coppelia", img: lampCoppelia, price: "170 000" },
            { id: 3, name: "Darrell", img: lampDarrell, price: "180 000" },
            { id: 4, name: "Leslie", img: lampLeslie, price: "190 000" },
            ]
        }, {
            id: 2,
            goods: [{ id: 0, name: "Darlene", img: chairsDarlene, price: "150 000" },
            { id: 1, name: "Jane", img: chairsJane, price: "160 000" },
            { id: 2, name: "Judith", img: chairsJudith, price: "170 000" },
            { id: 3, name: "Kathryn", img: chairsKathryn, price: "180 000" },
            { id: 4, name: "Wendy", img: chairsWendy, price: "190 000" },
            ]
        }, {
            id: 3,
            goods: [{ id: 0, name: "Darlene", img: tablesDarlene, price: "150 000" },
            { id: 1, name: "Jane", img: tablesJane, price: "160 000" },
            { id: 2, name: "Judith", img: tablesJudith, price: "170 000" },
            { id: 3, name: "Kathryn", img: tablesKathryn, price: "180 000" },
            { id: 4, name: "Wendy", img: tablesWendy, price: "190 000" },
            ]
        }]

    const filteredGoods = helper
        .filter((el) => el.id == id)
        .map((el) => el.goods)
        .flat();

    return (
        <div className={style.goodsSection}>
            <div className={style.title}>
                <div className={style.svgWrapper}>
                    <div className={style.svg}></div>
                    <p>фильтры</p>
                </div>

                <p>20 позиций в категории</p>
            </div>

            <div className={style.allGoods}>
                {filteredGoods.map((el) => (

                    <div key={el.id} className={style.goodsContainer}>
                        <div className={style.imgWrapper}>
                            <img src={el.img} alt={el.name} />
                        </div>

                        <h3>{el.name}</h3>
                        <p>Зеркало напольное</p>
                        <div className={style.line}></div>

                        <div className={style.priceFlex}>
                            <div className={style.price}>
                                <h4>{el.price}</h4>
                                <div className={style.svgRub}></div>
                            </div>

                            <div className={style.btnBuy}>
                                <div className={style.svgShoping}></div>
                                <p>Купить</p>
                            </div>
                        </div>
                    </div>

                ))}

            </div>

            <div className={style.btnLoading}>
                <p>Загрузить еще</p>
                <div className={style.svgArrow}></div>
            </div>
        </div>
    )
}
