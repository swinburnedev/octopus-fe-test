import type {InferGetServerSidePropsType, GetServerSideProps} from "next"
import Image from "next/image"

import Layout from "../components/Layout"
import Section from "../components/Section"

type Product = {
    id: number
    name: string
    power: string
    description: string
    price: number
    quantity: number
    brand: string
    weight: number
    height: number
    width: number
    length: number
    model_code: string
    colour: string
    img_url: string
}

export const getServerSideProps = (async () => {
    // TODO dyanmic id and API url
    const res = await fetch("http://localhost:3001/graphql", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            query: `{
              Product(id: 1) {
                id,
                name,
                power,
                description,
                price,
                quantity,
                brand,
                weight,
                height,
                width,
                length,
                model_code,
                colour,
                img_url,
              }
            }`,
        }),
    })

    const data = await res.json()
    const product = data.data.Product
    // TODO add not found handling
    return {props: {product}}
}) as GetServerSideProps<{product: Product}>

export default function Product({product}: InferGetServerSidePropsType<typeof getServerSideProps>) {
    const {
        id,
        name,
        power,
        description,
        price,
        quantity,
        brand,
        weight,
        height,
        width,
        length,
        model_code,
        colour,
        img_url,
    } = product || {}
    return (
        <Layout title={name} description={description}>
            <Section aria-label="Product details">
                <div style={{marginBottom: "1rem"}}>
                    <Image
                        height={540}
                        width={540}
                        src={img_url}
                        alt={`${brand} ${name}`}
                        style={{borderRadius: "2rem"}}
                    />
                </div>
                <div>
                    <h1>{name}</h1>
                    <span>
                        {power} // Packet of {quantity}
                    </span>
                    <h2>Description</h2>
                    <p>{description}</p>
                    <h3>Specifications</h3>
                </div>
            </Section>
        </Layout>
    )
}
