import { useEffect, useState } from 'react'
import DataTable from 'react-data-table-component'
import { db } from '../../../firebase'


export const ReactDatatable = () => {
    const [datafb, setDatafb] = useState([])

    const columns = [
        { name: 'id', selector: row => row.id, sortable: true },
        // { name: 'Día', selector: row => row.A, sortable: true },
        // { name: 'Hora', selector: row => row.B, sortable: true },
        { name: 'Válvula on/off', selector: row => row.C, sortable: true },
        { name: 'T° Ambiente', selector: row => row.D, sortable: true },
        { name: 'H Ambiente ', selector: row => row.E, sortable: true },
        { name: 'H Suelo', selector: row => row.F, sortable: true },
        { name: 'T° Suelo', selector: row => row.G, sortable: true },
        { name: 'Luminosidad Ambiente', selector: row => row.H, sortable: true },
    ]

    const handleSubmitData = async () => {
        const { getDatabase, ref, set } = db
        const data = {
            '_zasd34': { P: 'U12.35U85', S: 'U4745' },
            '_zasd2334': { P: 'U12.35U285', S: 'U42745' }
        }
        set(ref(getDatabase(), 'db-agrobime'), data)
            .then(() => console.log('Data enviada'))
            .catch((e) => console.error(e))

    }

    const handleGetData = async () => {
        const { getDatabase, ref, child, get } = db
        const dbRef = ref(getDatabase())
        const datax = await get(child(dbRef, 'D'))
            .then((snapshot) => {
                if (snapshot.exists()) {
                    const data = Object.values(snapshot.val())
                    const datax = data.map((elem) => {
                        return {
                            id: data.indexOf(elem),
                            // A: elem.P.split('U')[0],
                            // B: elem.P.split('U')[1],
                            C: elem.P.split('U')[2],
                            D: elem.S.split('U')[0],
                            E: elem.S.split('U')[1],
                            F: elem.S.split('U')[2],
                            G: elem.S.split('U')[3],
                            H: elem.S.split('U')[4],
                        }
                    }) //.map((e) => e.split('U')))
                    setDatafb(...datafb, datax)
                    return data
                } else { console.error('Data NO DISPONIBLE') }
            })
            .catch((e) => { console.error(e) })
        return datax
    }

    // const dataMemoFb = useMemo(() => handleGetData(), [])

    useEffect(() => {
        handleGetData()
    }, [])


    return (
        <>
            {datafb.length > 0 ? <DataTable columns={columns} data={datafb} pagination/> : <p> Cargando... </p>}
            {/* <button className='btn btn-info fw-semibold me-2' onClick={handleSubmitData}>Enviar Data</button> */}
            {/* <button className='btn btn-success fw-semibold me-2' onClick={handleGetData}>Obtener Data</button> */}
        </>
    )
}
