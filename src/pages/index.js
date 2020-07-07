import React from 'react';
import { Link } from 'gatsby'
import Layout from '../components/layout';
import Title from '../components/title';

export default() => (
    <Layout>
        <Title text="Welcome"/>
        <div>
            <Link to="/">Home</Link> | <Link to="/about">About</Link>
        </div>
        <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
        </p>
    </Layout>
)
