import { MainLayout } from '../../components/layouts/MainLayout';
import Link from 'next/link';

const pricingPage = () => {
    return (
        <MainLayout>
            <h1 className={'title'}>
                Ir a <Link href="/">Home</Link>
            </h1>

            <p className={'description'}>
                Usted esta aqui 🗺 [Pricing Page]
                <code className={'code'}>Pricing /</code>
            </p>
        </MainLayout>

    )
}
export default pricingPage;