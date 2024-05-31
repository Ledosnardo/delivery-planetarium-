import styles from './styles.module.css';

function EarthMode ({ register, errors }) {

    return(
        <form className={styles.content}>
            <div className={styles.boxInput}>
                <label>País</label>
                <input
                    style={errors?.country && { border: "1px solid red" }}
                    type="text" 
                    { ...register("country", { required: true }) } 
                />
                {errors?.country?.type === "required" && <p className={styles.error}>required</p>}
            </div>
            <div className={styles.boxInput}>
                <label>Estado</label>
                <input 
                    type="text" 
                    { ...register("state", { required: true }) }
                    style={errors?.state && { border: "1px solid red" }}
                />
                {errors?.state?.type === "required" && <p className={styles.error}>required</p>}
            </div>
            <div className={styles.boxInput}>
                <label>Cidade</label>
                <input 
                    type="text" 
                    { ...register("city", { required: true,  }) }
                    style={errors?.city && { border: "1px solid red" }}
                />
                {errors?.city?.type === "required" && <p className={styles.error}>required</p>}
            </div>
        </form>
    )
}


export default EarthMode