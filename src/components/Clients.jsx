import React from 'react'
import { clients } from '../constants'
import styles from '../style'

const Clients = () => {
  return (
    <section id='clients' className={`${styles.flexCenter}my-4`}>
      <div className={`${styles.flexCenter}  flex flex-wrap w-full justify-between`}>
        {clients.map((client) => (
          <div key={client.id} className={`flex-1 sm:min-w-[192px] w-[120px] ${styles.flexCenter}`}>
            <img src={client.logo} alt="client" className=' animate-bounce sm:w-[192px] w-[100px] object-contain' />
          </div>

        ))}
      </div>
    </section>
  )
}

export default Clients;