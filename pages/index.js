import Link from 'next/link';
import Layout from '../component/Layout.js';

const Index = () => (

    <Layout title={"Home"}>
    <div>
        <Link href="/about">
            <a>Go to About </a>
        </Link>
    </div>
    </Layout>
);

export default Index;
