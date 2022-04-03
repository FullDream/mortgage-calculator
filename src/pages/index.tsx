import type { NextPage } from 'next'
import { HomePage } from 'components'
import { wrapper } from 'store'
import {  getOffersList, getRunningOperationPromises } from 'store/api/offersApi'

const Home: NextPage = ({}) => <HomePage/>



export default Home


export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async (context) => {
    
    await store.dispatch(getOffersList.initiate({offset: 10}))

    await Promise.all(getRunningOperationPromises())

    return {
      props: {}
    }
  }
)