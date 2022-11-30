import { db } from '../../../firebase'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { useEffect, useState } from 'react';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top',
        },
        title: {
            display: false,
            text: 'Chart.js Line Chart',
        },
    },
};

export const LineChart = () => {
    // const [datafb, setDatafb] = useState([])

    const [dataTable, setDataTable] = useState({})

    const handleGetData = async () => {
        const { getDatabase, ref, child, get } = db
        const dbRef = ref(getDatabase())
        const datax = await get(child(dbRef, 'D'))
            .then((snapshot) => {
                if (snapshot.exists()) {
                    const data = Object.values(snapshot.val())
                    const dataxx = data.map((elem) => {
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
                    })
                    return dataxx
                } else { console.error('Data NO DISPONIBLE') }
            }).catch((e) => { console.error(e) })



        // await setDataTable(data)

        return datax
    }

    useEffect(() => {
        const executeGetData = async () => {
            const dataFb = await handleGetData()

            const data = {
                labels: dataFb.map((dfb) => dfb.id).slice(21, 75),
                datasets: [
                    {
                        label: 'Humedad Suelo',
                        data: dataFb.map((dfb) => dfb.D).slice(21, 75),
                        borderColor: 'rgb(255, 99, 132)',
                        backgroundColor: 'rgba(255, 99, 132, 0.5)',
                    },
                    {
                        label: 'Humedad Ambiente',
                        data: dataFb.map((dfb) => dfb.G).slice(21, 75),
                        borderColor: 'rgb(53, 162, 235)',
                        backgroundColor: 'rgba(53, 162, 235, 0.5)',
                    },
                ],
            };
            setDataTable(data)
        }
        executeGetData()
    }, [])

    return (
        <>
            {typeof dataTable.labels !== 'undefined' ? <Line options={options} data={dataTable} /> : <div className='text-center'> <span className='text-primary'>Cargando...</span> </div>}
        </>
    )
}
