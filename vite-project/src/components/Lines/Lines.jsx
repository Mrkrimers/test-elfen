import style from "../Lines/style.module.scss";

export default function Lines() {

    return (
        <>
            <div className={style.linesWrapper}>

                <div className={style.firstLine}>
                    <p>creating a great art</p>
                    <div className={style.svgStar}></div>
                    <p>creating a great art</p>
                    <div className={style.svgStar}></div>
                    <p>creating a great art</p>
                    <div className={style.svgStar}></div>
                    <p>creating a great art</p>
                    <div className={style.svgStar}></div>
                    <p>creating a great art</p>
                </div>

                <div className={style.secondLine}>
                    <p>creating a great art</p>
                    <div className={style.svgStar}></div>
                    <p>creating a great art</p>
                    <div className={style.svgStar}></div>
                    <p>creating a great art</p>
                    <div className={style.svgStar}></div>
                    <p>creating a great art</p>
                    <div className={style.svgStar}></div>
                    <p>creating a great art</p>
                </div>

            </div>
        </>
    )
}
