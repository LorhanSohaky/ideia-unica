import Link from 'next/link';

function Home() {
    return (<div>
        <h1>Home</h1>
        <Link href="/tempo">
            <a>Acessar página Tempo</a>
        </Link>
        <br/>
        <Link href="/sobre">
            <a>Acessar página Sobre</a>
        </Link>
    </div>)
}

export default Home
