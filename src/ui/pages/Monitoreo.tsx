import React from 'react'
import { Header } from '../components/Header'
import { LineChart } from '../components/widgets/LineChart'

export const Monitoreo = () => {
  return (
    <>
      <Header />

      {/* Logos */}
      <section>
        <div className="container-fluid px-3">
          <div className="text-center mb-4">
            <h3 className="fw-bold"> Humedad de suelo vs Humedad del Ambiente</h3>
          </div>
          <LineChart />
        </div>
      </section>
    </>
  )
}
