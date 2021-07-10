import bcrypt from 'bcryptjs';

const data = {
    users: [
        {
            name: 'Niki3',
            email: 'admin3@example',
            password: bcrypt.hashSync('1234',8),
            isAdmin: true,
        },
        {
            name: 'Niki2',
            email: 'admin2@example.com',
            password: bcrypt.hashSync('1234',8),
            isAdmin: true,
        },
        {
            name: 'Niki',
            email: 'admin@example.com',
            password: bcrypt.hashSync('1234', 8),
            isAdmin: true,
        },
        {
            name: 'Kiril',
            email: 'user@example.com',
            password: bcrypt.hashSync('1234', 8),
            isAdmin: false,
        },
    ],
    products: [
        
        {
            name: 'Vitamin A Now',
            category: 'Vitamins',
            image: '/images/vitamins/product1.jpg',
            pharmacy: 'Subra',
            price: 30,
            countInStock: 10,
            brand: 'Now',
            rating: 4.5,
            numReviews: 10,
            description: 'High quality vitamin A',

        },
        {
            name: 'Vitamin A Swanson',
            category: 'Vitamins',
            image: '/images/vitamins/product2.jpg',
            pharmacy: 'Medeq',
            price: 40,
            countInStock: 20,
            brand: 'Swanson',
            rating: 5.0,
            numReviews: 5,
            description: 'Extreme quality vitamin A',

        },
        {
            name: 'Vitamin A Solgar',
            category: 'Vitamins',
            image: '/images/vitamins/product3.jpg',
            pharmacy: 'Remedium',
            price: 250,
            countInStock: 0,
            brand: 'Solgar',
            rating: 4.0,
            numReviews: 6,
            description: 'Normal quality vitamin A',

        },
        {
            name: 'Black mas FaceMaskk',
            category: 'Mask',
            image: '/images/masks/mask1.jpg',
            pharmacy: 'Framar',
            price: 34,
            countInStock: 15,
            brand: 'FaceMask',
            rating: 3.5,
            numReviews: 15,
            description: 'High quality mask',

        },
        {
            name: 'White mask FaceMask',
            category: 'Mask',
            image: '/images/masks/mask2.jpg',
            pharmacy: 'Galen',
            price: 40,
            countInStock: 5,
            brand: 'FaceMask',
            rating: 5.0,
            numReviews: 3,
            description: 'Quality mask',

        },
        {
            name: 'White mask Organic',
            category: 'Mask',
            image: '/images/masks/mask3.jpg',
            pharmacy: 'Vitaniq',
            price: 35,
            countInStock: 12,
            brand: 'Organic',
            rating: 4.5,
            numReviews: 5,
            description: 'Quality mask',

        },
    ],
};

export default data;