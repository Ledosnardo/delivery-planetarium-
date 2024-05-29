function MarteMode ({ register, errors }) {
    return(
        <div>
            <div>
                <label>Seu lote</label>
                <input type="text" maxLength="4" pattern="([^0-9]{4})" 
                    { ...register("loteMarte", { required: true, min: 4 }) }
                />
                {errors?.loteMarte?.type === "required" ? <p>Erro</p> : ''}
            </div>
        </div>
    )
}

export default MarteMode