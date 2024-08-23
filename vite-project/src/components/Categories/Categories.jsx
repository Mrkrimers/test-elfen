import { useState } from "react"
import style from "../Categories/style.module.scss"
import Goods from "./Goods/Goods"

export default function Categories() {
    const [id, setId] = useState(null)

    const helper = [{ id: 0, style: "svgMirrors" },
    { id: 1, style: "svgLamps" },
    { id: 2, style: "svgArmchairs" },
    { id: 3, style: "svgTable" }]

    const handleDivClick = (index) => {
        if (id === index) {
            setId(null);
        } else {
            setId(index);
        }
    };


    return (
        <section className={style.sectionCategories}>
            <h1>категории</h1>

            <div className={style.flexContainer}>
                {helper.map((el) => (
                    <div
                        key={el.id}
                        // className={style[el.style]}
                        className={`${style[el.style]} ${id === el.id ? style.active : ''}`}
                        onClick={() => handleDivClick(el.id)}></div>
                ))}
            </div>

            {id !== null && <Goods id={id} />}

        </section >
    )
}
