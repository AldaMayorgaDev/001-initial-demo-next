
import Link from 'next/link';
import { MainLayout } from '../components/layouts/MainLayout';


export default function Home() {
  return (

    <MainLayout>
      <h1 className={'title'}>
        Ir a <Link href="about">About</Link>
      </h1>

      <p className={'description'}>
        Usted esta aqui 🗺 [Home Page]
        <code className={'code'}>Home /</code>
      </p>

    </MainLayout>
  )
}
