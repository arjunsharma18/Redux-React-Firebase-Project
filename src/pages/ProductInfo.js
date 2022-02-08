import React, { useEffect, useState } from 'react';
import Layout from '../components/Layout';
import { getDoc, doc } from "firebase/firestore";
import fireDB from '../fireConfig';
import { useParams } from 'react-router-dom';



function ProductInfo() {
    const [product, setProduct] = useState();
    const params = useParams()
    useEffect(() => {
        getdata();
    }, []);

    async function getdata() {
        try {
            const productTemp = await getDoc(doc(fireDB, "products", params.productid));


            setProduct(productTemp.data());
        } catch (error) {
            console.log(error);
        }

    }


    return (
        <Layout>
            <h1>ProductInfo</h1>
            {product && (< h1 > {product.name}</h1>)}
        </Layout>
    )
}

export default ProductInfo;
