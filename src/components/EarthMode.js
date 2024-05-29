function EarthMode ({ register, errors }) {

    return(
        <form>
            <div>
                <label>País</label>
                <input type="text" { ...register("pais", { required: true }) }/>
                {errors?.pais?.type === "required" ? <p>Erro</p> : ''}
            </div>
            <div>
                <label>Estado</label>
                <input type="text" { ...register("estado", { required: true }) }/>
            </div>
            <div>
                <label>Cidade</label>
                <input type="text" { ...register("cidade", { required: true }) }/>
            </div>
        </form>
    )
}


export default EarthMode