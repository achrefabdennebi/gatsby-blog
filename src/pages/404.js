import React from 'react';
import styles from './404.module.scss'
import Layout from '../components/layout'
import { Link } from 'gatsby'
export default() => (
    <Layout>
        <div className={styles.content}>
            <h1 className={styles.header}>404 page</h1> 
            <p className={styles.errorMessage}>Details of 404 page</p> 
            <Link to='/'>Home</Link>
        </div>
    </Layout>
)