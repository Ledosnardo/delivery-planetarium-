import styles from './styles.module.css'

function MarteMode ({ register, errors }) {
    return(
        <form className={styles.content}>
            <div className={styles.boxInput}>
                <label>Seu lote</label>
                <input 
                    type="number"
                    { ...register("loteMarte", { 
                        required: true,
                        minLength: 4,
                        maxLength: 4
                    }) }
                    style={errors?.loteMarte && { border: "1px solid red" }}
                />
                {errors?.loteMarte?.type === "required" && <p className={styles.error}>required</p>}
                {errors?.loteMarte?.type === "minLength" && <p className={styles.error}>digite 4 números</p>}
                {errors?.loteMarte?.type === "maxLength" && <p className={styles.error}>digite apenas 4 números</p>}
            </div>
        </form>
    )
}

export default MarteMode