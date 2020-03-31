import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout.js';
import Title from '../components/title.js';

export default() => (
    <Layout>
        <Title text='About me'/>
        <div>
            <Link to="/">Home</Link> | <Link to="/about">About</Link>
        </div>
    </Layout>
)