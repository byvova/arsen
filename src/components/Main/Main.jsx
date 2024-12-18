import css from './Main.module.css'
import standingArsen from '../../image/photo_2024-12-19_00-40-03.jpg'


export const Main = (() => {
    return (
        <div className={css.container}> 
            <div className={css.card}>
                <h3>Жоска фотка Арсена</h3>
                <img className={css.image} src={standingArsen} alt="" />
            </div>
        </div>
    )
}
)