import type {InferGetServerSidePropsType, GetServerSideProps} from "next"
import Image from "next/image"

import Layout from "../components/Layout"
import Section from "../components/Section"
import Table, {type TableData} from "../components/Table"
import Button from "../components/Button"
import Quantity from "../components/Quantity"
import styles from "../styles/product.module.scss"

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

    const specTable: TableData = [
        {id: "brand", key: "Brand", value: brand},
        {id: "weight", key: "Item weight (g)", value: weight},
        {id: "dimensions", key: "Dimensions (cm)", value: `${height} x ${width} x ${length}`},
        {id: "model", key: "Item Model number", value: model_code},
        {id: "colour", key: "Colour", value: colour},
    ]

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
                    <div className="container" style={{display: "flex", flexDirection: "column", gap: "1rem"}}>
                        <h1>{name}</h1>
                        <span className="color-purple-haze">
                            {power} // Packet of {quantity}
                        </span>
                        <div className={styles.priceRow}>
                            <span className={styles.price}>
                                {new Intl.NumberFormat("en-GB", {style: "currency", currency: "GBP"}).format(
                                    price / 100,
                                )}
                            </span>
                            <Quantity />
                        </div>
                        <Button fullWidth>Add to cart</Button>
                    </div>
                    <div className="bg-hemocyanin container">
                        <h2>Description</h2>
                        <p>{description}</p>
                    </div>
                    <div className="container">
                        <h3>Specifications</h3>
                        <Table data={specTable} />
                    </div>
                </div>
            </Section>
        </Layout>
    )
}
