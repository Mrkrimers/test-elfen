import style from "../Preview/style.module.scss";
import lamp from "./assets/inactive/lamp.png";
import armchair from "./assets/inactive/armchair.png";
import table from "./assets/inactive/table.png";
import lampActive from "./assets/active/lamp_active.png";
import armchairActive from "./assets/active/armchair_active.png";
import tableActive from "./assets/active/table_active.png";

export default function Preview() {

    const helper = [{
        id: 0,
        h1: "Benjamin Moore",
        img: lamp,
        img_active: lampActive,
        alt: "lamp",
        h3: "Светильник",
        p: "Функциональная дизайнерская лампа для создания максимально комфортного освещения",
        h4: "150 000"
    }, {
        id: 1,
        h1: "Paint Here Glory",
        img: armchair,
        img_active: armchairActive,
        alt: "armchair",
        h3: "кресло",
        p: "Функциональная дизайнерское кресло для создания максимально уюта в помещении",
        h4: "120 000"
    }, {
        id: 2,
        h1: "Benjamin Moore",
        img: table,
        img_active: tableActive,
        alt: "table",
        h3: "высокий стол",
        p: "Функциональный дизайнерский стол для создания максимально комфорта",
        h4: "235 000"
    }
    ]

    return (
        <section className={style.sectionPreview}>

            {
                helper.map((el) => (
                    <div key={el.id} className={style.box}>
                        <div className={style.titleWrapper}>
                            <h1>{el.h1}</h1>
                        </div>

                        <div className={style.imgWrapper}>
                            <div className={style.imgInactive}>
                                <img src={el.img} alt={el.alt} />
                            </div>

                            <div className={style.imgActive}>
                                <img src={el.img_active} alt={el.alt} />
                            </div>
                        </div>

                        <div className={style.descriptionContainer}>
                            <div className={style.nameAndPrise}>
                                <h3>{el.h3}</h3>
                                <p>{el.p}</p>
                                <div className={style.line}></div>

                                <div className={style.wrapperPrice}>
                                    <h4>{el.h4}</h4>
                                    <div className={style.svgRub}></div>
                                </div>
                            </div>

                            <div className={style.btn}>
                                <div className={style.border}>

                                    <div className={style.flexContainer}>
                                        <div className={style.svgShoping}></div>
                                        <p>Купить</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                ))
            }






        </section>
    )
}
