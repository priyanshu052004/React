import React, { useState } from 'react'

export default function Product() 

{
    const [products,setdata]= useState(
    [
        {
        "id": 1,
        "name": "iPhone 14",
        "price": 79999,
        "category": "Mobile",
        "brand": "Apple",
        "image": "https://media-ik.croma.com/prod/https://media.tatacroma.com/Croma%20Assets/Communication/Mobiles/Images/310715_0_bjpqb7.png?tr=w-640",
        "description": "Apple iPhone 14 with A15 Bionic chip and advanced camera system.",
        "rating": 4.7,
        "stock": 20
        },
        {
        "id": 2,
        "name": "Samsung Galaxy S23",
        "price": 74999,
        "category": "Mobile",
        "brand": "Samsung",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5RmJQkNiH6k4SpSguRoTuXvCL0t6V_OlXHQ&s",
        "description": "Samsung flagship phone with Snapdragon processor and AMOLED display.",
        "rating": 4.6,
        "stock": 15
        },
        {
        "id": 3,
        "name": "MacBook Air M2",
        "price": 114999,
        "category": "Laptop",
        "brand": "Apple",
        "image": "https://images.unsplash.com/photo-1517336714731-489689fd1ca8",
        "description": "Apple MacBook Air with M2 chip and Retina display.",
        "rating": 4.8,
        "stock": 10
        },
        {
        "id": 4,
        "name": "Sony WH-1000XM5",
        "price": 29999,
        "category": "Headphones",
        "brand": "Sony",
        "image": "https://images.unsplash.com/photo-1583394838336-acd977736f90",
        "description": "Industry-leading noise cancelling wireless headphones.",
        "rating": 4.7,
        "stock": 25
        },
        {
        "id": 5,
        "name": "Apple Watch Series 8",
        "price": 45999,
        "category": "Smartwatch",
        "brand": "Apple",
        "image": "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/s11-case-unselect-gallery-1-202509_GEO_EMEA_FMT_WHH?wid=752&hei=720&fmt=p-jpg&qlt=80&.v=WldDSmZlQ1ladGVha0lMWUJJK2M4ZHlVRllKam5abHNZRGludXlMbytKNFo2cm95TEtVUGNBN3pWWWMxUmxKSFh2WnVKTjEySjVmY2ZteE1GdEFoNWM2c3NSYUM4YjA0RTQxLytvRzE4M0QrWGp4amFCSTJ1K1hKMXRsMkNUYlhaOWRBWGt2OWI4clNTdjYwdnkxK0RR",
        "description": "Advanced health monitoring smartwatch with GPS.",
        "rating": 4.6,
        "stock": 18
        },
        {
        "id": 6,
        "name": "Dell XPS 13",
        "price": 99999,
        "category": "Laptop",
        "brand": "Dell",
        "image": "https://images.unsplash.com/photo-1496181133206-80ce9b88a853",
        "description": "Premium ultrabook with Intel processor and InfinityEdge display.",
        "rating": 4.5,
        "stock": 12
        }
    ]
)
    return (
        <>

        {products.map((p)=>
        (
            <div key={p.id}>
                <h1>{p.name}</h1>
                <p>Price: ₹{p.price}</p>
                <li>{p.category}</li>
                <li>{p.brand}</li>
                <img src = {p.image} width="150" alt={p.name}/>
                <p>{p.description}</p>
                <li>{p.rating}</li>
                <li>{p.stock}</li>
                <hr></hr>
            </div>
            
        ))}

        </>
        )

}


