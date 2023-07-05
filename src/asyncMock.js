const products = [
    {
        id: '1',
        name: 'Mouse Logitech',
        price: 20000,
        category: 'mouse',
        img: 'https://app.contabilium.com/files/explorer/7026/Productos-Servicios/concepto-5241694.jpg',
        stock: 10,
        description: 'Mouse Logitech'
    },
    {
        id: '2',
        name: 'Teclado Logitech',
        price: 30000,
        category: 'teclado',
        img: 'https://mexx-img-2019.s3.amazonaws.com/40072_5.jpeg?v905?v730',
        stock: 5,
        description: 'Teclado Logitech'
    },
    {
        id: '3',
        name: 'Auriculares Logitech',
        price: 90000,
        category: 'auriculares',
        img: 'https://http2.mlstatic.com/D_NQ_NP_760857-MLA44771394445_022021-O.webp',
        stock: 2,
        description: 'Auriculares Logitech'
    },
    {
        id: '4',
        name: 'Camara Web Logitech',
        price: 70000,
        category: 'camara web',
        img: 'https://http2.mlstatic.com/D_NQ_NP_724922-MLA52224249632_102022-O.webp',
        stock: 8,
        description: 'Camara Web Logitech'
    }
]
export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 500)
    })
}

export const getProductById = (productId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === productId))
        }, 500)
    })
}

export const getProductsByCategory = (category) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.category === category))
        }, 500)
    })
}



