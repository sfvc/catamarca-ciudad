import { useEffect, useState } from "react"
import { catamarcaApi } from "../../../api/catamarcaApi"

const CategoriasTramites = ({ id }) => {

    const [tramites, setTramites] = useState(null)

    const cargarTramites = async (idCategoria) => {
        const response = await catamarcaApi.get(`items/tramites?filter[categorias_tramites][_eq]=${idCategoria}`)
        setTramites(response.data.data)

    }
    useEffect(() => {
        cargarTramites(id)
    }, [id])

    console.log(tramites)
    return (
        <>

        </>
    )
}
export default CategoriasTramites