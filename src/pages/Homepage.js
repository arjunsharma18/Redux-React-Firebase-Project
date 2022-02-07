import React from 'react';
import Layout from '../components/Layout';
import { collection, addDoc, getDocs } from "firebase/firestore";
import fireDB from '../fireConfig';


function Homepage() {

    async function adddata() {
        try {
            await addDoc(collection(fireDB, "users"), { name: 'vikas', age: 18 })
        } catch (error) {
            console.log(error);
        }

    }
    async function getdata() {
        try {
            const users = await getDocs(collection(fireDB, "users"), { name: 'hemant', age: 40 })
            users.forEach((doc) => {
                // doc.data() is never undefined for query doc snapshots
                console.log(doc.id, " => ", doc.data());
            });

        } catch (error) {
            console.log(error);
        }

    }
    return <Layout>
        <h1>Homepage</h1>
        <button onClick={adddata}>add data to firebase</button>
        <button onClick={getdata}>get data to firebase</button>
    </Layout>;
}

export default Homepage;
