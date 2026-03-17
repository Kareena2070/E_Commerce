import PaymentClient from './PaymentClient'
import { Suspense } from 'react'

function Page() {
    return (<Suspense fallback={
        <div className='text-center'
        >Loading payment...</div>
    } >
        <PaymentClient />
    </Suspense>)
}

export default Page