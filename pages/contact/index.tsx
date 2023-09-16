

import { MainLayout } from '../../components/layouts/MainLayout';
import Link from 'next/link';

const contactPage = () => {
    return (
        <MainLayout>
            <h1 className={'title'}>
                Ir a <Link href="/">Home</Link>
            </h1>

            <p className={'description'}>
                Usted esta aqui 🗺 [Contact Page]
                <code className={'code'}>Contact /</code>
            </p>
        </MainLayout>

    )
}
export default contactPage;