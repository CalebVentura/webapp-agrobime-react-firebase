import { Footer } from '../components/Footer'
import { Header } from '../components/Header'

import { ReactDatatable } from '../components/widgets/ReactDatatable'

export const Dashboard = () => {

  return (
    <>
      <Header />

      <hr className="my-5"></hr>
      
      <section className='mt-4'>
        <div className='container-lg'>
          <div className='card px-2 pt-5 my-3 text-center'>
            <h2> Lectura de parámetros en tiempo real </h2>
            <div className='card-body'>
              <ReactDatatable />
            </div>
          </div>
        </div>
      </section>

      <hr className="my-5"></hr>

      <Footer/>

    </>
  )
}
