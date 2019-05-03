import Link from 'next/link';
import Layout from '../component/Layout.js';

const About = () => (
    <Layout title={"About"}>
        <Link href={"www.gacebook.com"}>
            <a>Fackbook</a>
        </Link>
        <p>Software Engineering University of Kelaniya</p>
        <img src="/static/download.png" alt=""/>
    </Layout>
);

export default About;
