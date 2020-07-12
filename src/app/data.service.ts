import {Injectable} from '@angular/core';

export interface HomeTab {
    title: string
};

export interface NotificationsCard {
    image: string,
    title: string,
    time: number
}

export interface Notification {
    all: Array<NotificationsCard>,
    deals: Array<NotificationsCard>,
    orders: Array<NotificationsCard>,
    others: Array<NotificationsCard>
}

export interface Product {
    name: string,
    image: Array<string>,
    size: string,
    color: string,
    cost_price: number,
    discount: number,
    offer: boolean,
    stock: number,
    description: string,
    currency: string,
    bought: number,
    shipping: number,
    rating: number,
    rating_count: number,
    store_rate: number,
    store_rating: number,
    store_rating_count: number,
    sold_by: string,
    specs: string,
    reviews: Array<Review>,
    store_reviews: Array<Review>,
    sizing: {
        small: number,
        okay: number,
        large: number
    },
    buyer_guarantee: string,
    sponsored: Array<Product>
}

export interface Review {
    image: string,
    name: string,
    comment: string,
    rating: number,
    images: Array<string>
}

export interface Cart {
    product: Product,
    quantity: number
}

export interface User {
    fname: string,
    lname: string,
    email: string,
    address: Array<Address>,
    billing: Array<any>,
    uid: string,
    did: string,
    aid: string
}

export interface Address {
    first_name: string,
    last_name: string,
    address_line_1: string,
    address_line_2: string,
    country: string,
    state: string,
    city: string,
    zipcode: number,
    phone_number: number
}

export interface Orders {
    product: Product,
    order_date: Date,
    id: string,
    amount: number,
    delivery_date: Date,
    status: string,
    billing_address: Address,
    shipping_address: Address,
    tax: number
}

@Injectable({
    providedIn: 'root'
})

export class DataService {

    constructor() {
    }

    terms_of_use = 'El acuerdo de Términos y Condiciones puede actuar como un contrato legal entre usted, ' +
        'el propietario o desarrollador de la aplicación móvil y los usuarios de su aplicación. Al igual que los ' +
        'Términos y condiciones de un sitio web, este acuerdo para una aplicación móvil establecería ' +
        'las reglas y los términos que los usuarios deben seguir para usar su aplicación';
    privacy_policy = 'Necesitará el acuerdo de política de privacidad incluso si no recopila datos personales ' +
        'usted mismo a través de la aplicación ' +
        'móvil que está creando, sino que utiliza herramientas de terceros como: Google Analytics ';

    card: NotificationsCard = {
        image: 'assets/images/products/1.jpg',
        title: 'Kya aapne kabhi online hotel book kia hai???\nHotel? Sastago',
        time: 9
    };

    notifications: Notification = {
        all: [this.card, this.card, this.card, this.card, this.card, this.card, this.card],
        deals: [this.card, this.card, this.card, this.card, this.card, this.card, this.card],
        orders: [],
        others: [this.card, this.card, this.card, this.card, this.card, this.card, this.card],
    };

    trending = [
        'jacket',
        'drone',
        'shoes for men',
        'car accessories',
        'blazer for men',
        'watches men',
        'sports shoes for men',
        'earphone bluetooth',
        'jackets for men',
        'memory card'
    ];

    tabs: Array<HomeTab> = [{title: 'Populares'},
        {title: 'Más Visitados'},
        {title: 'Prendas de Vestir'},
        {title: 'Nuevos'},
        {title: 'Zapatos'}
    ];

    item_tab: Array<HomeTab> = [{title: 'Características'},
        {title: 'Relacionados'},
        {title: 'Vendedores'}];

    notifications_tab: Array<HomeTab> = [{title: 'All'},
        {title: 'Deals'},
        {title: 'Your Orders'},
        {title: 'Other'}];

    rewards_tab: Array<HomeTab> = [{title: 'Dashboard'},
        {title: 'Redeem'},
        {title: 'Information'}];

    rewards = {
        points: 100,
        since: new Date(),
        available: [{discount: 5, code: 'ABCDEF', expire: new Date(), expired: false}],
        used: [{discount: 10, code: 'XEFGSD', expire: new Date(), expired: true}],
        redeem: [{discount: 5, points: 200}, {discount: 10, points: 600}, {discount: 15, points: 1000}]
    };

    sponsored: Array<Product> = [
        {
            name: 'Bianca Top',
            cost_price: 128,
            discount: 80,
            offer: true,
            stock: 69,
            description: 'Ejemplo data',
            image: ['assets/images/products/1.jpg', 'assets/images/products/1_1.jpg', 'assets/images/products/1_2.jpg'],
            rating_count: 11,
            store_rating_count: 11,
            currency: '$',
            bought: 1200,
            size: 'M',
            color: 'Black',
            shipping: 250,
            rating: 4,
            store_rating: 18090,
            store_rate: 3,
            sold_by: 'Vendedor',
            specs: 'Este es un ejemplo, datos del producto',
            reviews: [{
                image: 'assets/images/products/1.jpg',
                name: 'Ejemplo',
                comment: 'Este es un vestido increíble y totalmente chevre. Necesito vender el riñón que me queda para comprar este, ya que el otro riñón lo vendí para comprar mi iphone ... jajaja',
                rating: 5,
                images: ['assets/images/products/1.jpg', 'assets/images/products/1_1.jpg']
            }, {
                image: 'assets/images/products/1_2.jpg',
                name: 'Ejemplo',
                comment: 'Este es un vestido increíble y totalmente chevre. Necesito vender el riñón que me queda para comprar este, ya que el otro riñón lo vendí para comprar mi iphone ... jajaja',
                rating: 5,
                images: ['assets/images/products/1.jpg']
            }],
            store_reviews: [{
                image: 'assets/images/products/1.jpg',
                name: 'Ejemplo',
                comment: 'Este es un vestido increíble y totalmente chevre. Necesito vender el riñón que me queda para comprar este, ya que el otro riñón lo vendí para comprar mi iphone ... jajaja',
                rating: 5,
                images: ['assets/images/products/1.jpg', 'assets/images/products/1_1.jpg']
            }, {
                image: 'assets/images/products/1_2.jpg',
                name: 'Ejemplo',
                comment: 'Este es un vestido increíble y totalmente chevre. Necesito vender el riñón que me queda para comprar este, ya que el otro riñón lo vendí para comprar mi iphone ... jajaja',
                rating: 5,
                images: ['assets/images/products/1.jpg']
            }],
            sizing: {small: 10, okay: 80, large: 5},
            buyer_guarantee: 'La devolución de productos se debe realizar en un tiempo máximo de 30 días',
            sponsored: []
        },
        {
            name: 'Scarpetta Dress',
            cost_price: 198,
            discount: 80,
            offer: false,
            stock: 69,
            description: 'Ejemplo data',
            image: ['assets/images/products/2.jpg', 'assets/images/products/2_1.jpg', 'assets/images/products/2_2.jpg'],
            rating_count: 11,
            store_rating_count: 11,
            currency: '$',
            bought: 400,
            size: 'M',
            color: 'Black',
            shipping: 250,
            rating: 4,
            store_rating: 18090,
            store_rate: 3,
            sold_by: 'Vendedor',
            specs: 'Este es un ejemplo, datos del producto',
            reviews: [{
                image: 'assets/images/products/2.jpg',
                name: 'Ejemplo',
                comment: 'Este es un vestido increíble y totalmente chevre. Necesito vender el riñón que me queda para comprar este, ya que el otro riñón lo vendí para comprar mi iphone ... jajaja',
                rating: 5,
                images: ['assets/images/products/2.jpg']
            }],
            store_reviews: [{
                image: 'assets/images/products/2_1.jpg',
                name: 'Ejemplo',
                comment: 'Este es un vestido increíble y totalmente chevre. Necesito vender el riñón que me queda para comprar este, ya que el otro riñón lo vendí para comprar mi iphone ... jajaja',
                rating: 5,
                images: ['assets/images/products/2.jpg', 'assets/images/products/2_1.jpg']
            }, {
                image: 'assets/images/products/2.jpg',
                name: 'Ejemplo',
                comment: 'Este es un vestido increíble y totalmente chevre. Necesito vender el riñón que me queda para comprar este, ya que el otro riñón lo vendí para comprar mi iphone ... jajaja',
                rating: 5,
                images: ['assets/images/products/2.jpg']
            }],
            sizing: {small: 10, okay: 80, large: 5},
            buyer_guarantee: 'La devolución de productos se debe realizar en un tiempo máximo de 30 días',
            sponsored: []
        },
        {
            name: 'Misty Dress',
            cost_price: 218,
            discount: 80,
            offer: false,
            stock: 69,
            description: 'Ejemplo data',
            image: ['assets/images/products/3.jpg', 'assets/images/products/3_1.jpg', 'assets/images/products/3_2.jpg'],
            rating_count: 11,
            store_rating_count: 11,
            currency: '$',
            bought: 365,
            size: 'M',
            color: 'Black',
            shipping: 250,
            rating: 4,
            store_rating: 18090,
            store_rate: 3,
            sold_by: 'Vendedor',
            specs: 'Este es un ejemplo, datos del producto',
            reviews: [{
                image: 'assets/images/products/3.jpg',
                name: 'Ejemplo',
                comment: 'Este es un vestido increíble y totalmente chevre. Necesito vender el riñón que me queda para comprar este, ya que el otro riñón lo vendí para comprar mi iphone ... jajaja',
                rating: 5,
                images: ['assets/images/products/3.jpg']
            }],
            store_reviews: [{
                image: 'assets/images/products/3_1.jpg',
                name: 'Ejemplo',
                comment: 'Este es un vestido increíble y totalmente chevre. Necesito vender el riñón que me queda para comprar este, ya que el otro riñón lo vendí para comprar mi iphone ... jajaja',
                rating: 5,
                images: ['assets/images/products/3.jpg', 'assets/images/products/3_1.jpg']
            }, {
                image: 'assets/images/products/3.jpg',
                name: 'Ejemplo',
                comment: 'Este es un vestido increíble y totalmente chevre. Necesito vender el riñón que me queda para comprar este, ya que el otro riñón lo vendí para comprar mi iphone ... jajaja',
                rating: 5,
                images: ['assets/images/products/3.jpg']
            }],
            sizing: {small: 10, okay: 80, large: 5},
            buyer_guarantee: 'La devolución de productos se debe realizar en un tiempo máximo de 30 días',
            sponsored: []
        },
        {
            name: 'Blanch Dress',
            cost_price: 248,
            discount: 20,
            offer: true,
            stock: 69,
            description: 'Ejemplo data',
            image: ['assets/images/products/4.jpg', 'assets/images/products/4_1.jpg', 'assets/images/products/4_2.jpg'],
            rating_count: 11,
            store_rating_count: 11,
            currency: '$',
            bought: 1200,
            size: 'M',
            color: 'Black',
            shipping: 250,
            rating: 4,
            store_rating: 18090,
            store_rate: 3,
            sold_by: 'Vendedor',
            specs: 'Este es un ejemplo, datos del producto',
            reviews: [{
                image: 'assets/images/products/4.jpg',
                name: 'Ejemplo',
                comment: 'Este es un vestido increíble y totalmente chevre. Necesito vender el riñón que me queda para comprar este, ya que el otro riñón lo vendí para comprar mi iphone ... jajaja',
                rating: 5,
                images: ['assets/images/products/4.jpg']
            }],
            store_reviews: [{
                image: 'assets/images/products/4_1.jpg',
                name: 'Ejemplo',
                comment: 'Este es un vestido increíble y totalmente chevre. Necesito vender el riñón que me queda para comprar este, ya que el otro riñón lo vendí para comprar mi iphone ... jajaja',
                rating: 5,
                images: ['assets/images/products/4.jpg', 'assets/images/products/4_1.jpg']
            }, {
                image: 'assets/images/products/4.jpg',
                name: 'Ejemplo',
                comment: 'Este es un vestido increíble y totalmente chevre. Necesito vender el riñón que me queda para comprar este, ya que el otro riñón lo vendí para comprar mi iphone ... jajaja',
                rating: 5,
                images: ['assets/images/products/4.jpg']
            }],
            sizing: {small: 10, okay: 80, large: 5},
            buyer_guarantee: 'La devolución de productos se debe realizar en un tiempo máximo de 30 días',
            sponsored: []
        },
        {
            name: 'Scarlett Dress',
            cost_price: 218,
            discount: 80,
            offer: false,
            stock: 69,
            description: 'Ejemplo data',
            image: ['assets/images/products/5.jpg', 'assets/images/products/5_1.jpg', 'assets/images/products/5_2.jpg'],
            rating_count: 11,
            store_rating_count: 11,
            currency: '$',
            bought: 234,
            size: 'M',
            color: 'Black',
            shipping: 250,
            rating: 4,
            store_rating: 18090,
            store_rate: 3,
            sold_by: 'Vendedor',
            specs: 'Este es un ejemplo, datos del producto',
            reviews: [{
                image: 'assets/images/products/5.jpg',
                name: 'Ejemplo',
                comment: 'Este es un vestido increíble y totalmente chevre. Necesito vender el riñón que me queda para comprar este, ya que el otro riñón lo vendí para comprar mi iphone ... jajaja',
                rating: 5,
                images: ['assets/images/products/5.jpg']
            }],
            store_reviews: [{
                image: 'assets/images/products/5_1.jpg',
                name: 'Ejemplo',
                comment: 'Este es un vestido increíble y totalmente chevre. Necesito vender el riñón que me queda para comprar este, ya que el otro riñón lo vendí para comprar mi iphone ... jajaja',
                rating: 5,
                images: ['assets/images/products/5.jpg', 'assets/images/products/5_1.jpg']
            }, {
                image: 'assets/images/products/5.jpg',
                name: 'Ejemplo',
                comment: 'Este es un vestido increíble y totalmente chevre. Necesito vender el riñón que me queda para comprar este, ya que el otro riñón lo vendí para comprar mi iphone ... jajaja',
                rating: 5,
                images: ['assets/images/products/5.jpg']
            }],
            sizing: {small: 10, okay: 80, large: 5},
            buyer_guarantee: 'La devolución de productos se debe realizar en un tiempo máximo de 30 días',
            sponsored: []
        },
        {
            name: 'Morrisson Dress',
            cost_price: 128,
            discount: 80,
            offer: false,
            stock: 69,
            description: 'Ejemplo data',
            image: ['assets/images/products/6.jpg', 'assets/images/products/6_1.jpg', 'assets/images/products/6_2.jpg'],
            rating_count: 11,
            store_rating_count: 11,
            currency: '$',
            bought: 567,
            size: 'M',
            color: 'Black',
            shipping: 250,
            rating: 4,
            store_rating: 18090,
            store_rate: 3,
            sold_by: 'Vendedor',
            specs: 'Este es un ejemplo, datos del producto',
            reviews: [{
                image: 'assets/images/products/6.jpg',
                name: 'Ejemplo',
                comment: 'Este es un vestido increíble y totalmente chevre. Necesito vender el riñón que me queda para comprar este, ya que el otro riñón lo vendí para comprar mi iphone ... jajaja',
                rating: 5,
                images: ['assets/images/products/6.jpg']
            }],
            store_reviews: [{
                image: 'assets/images/products/6_1.jpg',
                name: 'Ejemplo',
                comment: 'Este es un vestido increíble y totalmente chevre. Necesito vender el riñón que me queda para comprar este, ya que el otro riñón lo vendí para comprar mi iphone ... jajaja',
                rating: 5,
                images: ['assets/images/products/6.jpg', 'assets/images/products/6_1.jpg']
            }, {
                image: 'assets/images/products/6.jpg',
                name: 'Ejemplo',
                comment: 'Este es un vestido increíble y totalmente chevre. Necesito vender el riñón que me queda para comprar este, ya que el otro riñón lo vendí para comprar mi iphone ... jajaja',
                rating: 5,
                images: ['assets/images/products/6.jpg']
            }],
            sizing: {small: 10, okay: 80, large: 5},
            buyer_guarantee: 'La devolución de productos se debe realizar en un tiempo máximo de 30 días',
            sponsored: []
        },
        {
            name: 'Morrisson Dress',
            cost_price: 128,
            discount: 80,
            offer: true,
            stock: 69,
            description: 'Ejemplo data',
            image: ['assets/images/products/7.jpg', 'assets/images/products/7_1.jpg', 'assets/images/products/7_2.jpg'],
            rating_count: 11,
            store_rating_count: 11,
            currency: '$',
            bought: 137,
            size: 'M',
            color: 'Black',
            shipping: 250,
            rating: 4,
            store_rating: 18090,
            store_rate: 3,
            sold_by: 'Vendedor',
            specs: 'Este es un ejemplo, datos del producto',
            reviews: [{
                image: 'assets/images/products/7.jpg',
                name: 'Ejemplo',
                comment: 'Este es un vestido increíble y totalmente chevre. Necesito vender el riñón que me queda para comprar este, ya que el otro riñón lo vendí para comprar mi iphone ... jajaja',
                rating: 5,
                images: ['assets/images/products/7.jpg']
            }],
            store_reviews: [{
                image: 'assets/images/products/7_1.jpg',
                name: 'Ejemplo',
                comment: 'Este es un vestido increíble y totalmente chevre. Necesito vender el riñón que me queda para comprar este, ya que el otro riñón lo vendí para comprar mi iphone ... jajaja',
                rating: 5,
                images: ['assets/images/products/7.jpg', 'assets/images/products/7_1.jpg']
            }, {
                image: 'assets/images/products/7.jpg',
                name: 'Ejemplo',
                comment: 'Este es un vestido increíble y totalmente chevre. Necesito vender el riñón que me queda para comprar este, ya que el otro riñón lo vendí para comprar mi iphone ... jajaja',
                rating: 5,
                images: ['assets/images/products/7.jpg']
            }],
            sizing: {small: 10, okay: 80, large: 5},
            buyer_guarantee: 'La devolución de productos se debe realizar en un tiempo máximo de 30 días',
            sponsored: []
        },
        {
            name: 'Smith Dress',
            cost_price: 98,
            discount: 80,
            offer: false,
            stock: 69,
            description: 'Ejemplo data',
            image: ['assets/images/products/8.jpg', 'assets/images/products/8_1.jpg', 'assets/images/products/8_2.jpg'],
            rating_count: 11,
            store_rating_count: 11,
            currency: '$',
            bought: 236,
            size: 'M',
            color: 'Black',
            shipping: 250,
            rating: 4,
            store_rating: 18090,
            store_rate: 3,
            sold_by: 'Vendedor',
            specs: 'Este es un ejemplo, datos del producto',
            reviews: [{
                image: 'assets/images/products/8.jpg',
                name: 'Ejemplo',
                comment: 'Ejemplo es un vestido increíble y totalmente chevre. Necesito vender el riñón que me queda para comprar este, ya que el otro riñón lo vendí para comprar mi iphone ... jajaja',
                rating: 5,
                images: ['assets/images/products/8.jpg']
            }],
            store_reviews: [{
                image: 'assets/images/products/8.jpg',
                name: 'Ejemplo',
                comment: 'Este es un vestido increíble y totalmente chevre. Necesito vender el riñón que me queda para comprar este, ya que el otro riñón lo vendí para comprar mi iphone ... jajaja',
                rating: 5,
                images: ['assets/images/products/8.jpg', 'assets/images/products/8_1.jpg']
            }, {
                image: 'assets/images/products/8.jpg',
                name: 'Ejemplo',
                comment: 'Este es un vestido increíble y totalmente chevre. Necesito vender el riñón que me queda para comprar este, ya que el otro riñón lo vendí para comprar mi iphone ... jajaja',
                rating: 5,
                images: ['assets/images/products/8.jpg']
            }],
            sizing: {small: 10, okay: 80, large: 5},
            buyer_guarantee: 'La devolución de productos se debe realizar en un tiempo máximo de 30 días',
            sponsored: []
        },
        {
            name: 'Nicola Dress',
            cost_price: 278,
            discount: 80,
            offer: false,
            stock: 69,
            description: 'Ejemplo data',
            image: ['assets/images/products/9.jpg', 'assets/images/products/9_1.jpg', 'assets/images/products/9_2.jpg'],
            rating_count: 11,
            store_rating_count: 11,
            currency: '$',
            bought: 982,
            size: 'M',
            color: 'Black',
            shipping: 250,
            rating: 4,
            store_rating: 18090,
            store_rate: 3,
            sold_by: 'Vendedor',
            specs: 'Este es un ejemplo, datos del producto',
            reviews: [{
                image: 'assets/images/products/9.jpg',
                name: 'Ejemplo',
                comment: 'Este es un vestido increíble y totalmente chevre. Necesito vender el riñón que me queda para comprar este, ya que el otro riñón lo vendí para comprar mi iphone ... jajaja',
                rating: 5,
                images: ['assets/images/products/9.jpg']
            }],
            store_reviews: [{
                image: 'assets/images/products/9_2.jpg',
                name: 'Ejemplo',
                comment: 'Este es un vestido increíble y totalmente chevre. Necesito vender el riñón que me queda para comprar este, ya que el otro riñón lo vendí para comprar mi iphone ... jajaja',
                rating: 5,
                images: ['assets/images/products/9.jpg', 'assets/images/products/9_1.jpg']
            }, {
                image: 'assets/images/products/9.jpg',
                name: 'Ejemplo',
                comment: 'Este es un vestido increíble y totalmente chevre. Necesito vender el riñón que me queda para comprar este, ya que el otro riñón lo vendí para comprar mi iphone ... jajaja',
                rating: 5,
                images: ['assets/images/products/9.jpg']
            }],
            sizing: {small: 10, okay: 80, large: 5},
            buyer_guarantee: 'La devolución de productos se debe realizar en un tiempo máximo de 30 días',
            sponsored: []
        },
        {
            name: 'Smith Dress',
            cost_price: 98,
            discount: 80,
            offer: true,
            stock: 69,
            description: 'Ejemplo data',
            image: ['assets/images/products/10.jpg', 'assets/images/products/10_1.jpg', 'assets/images/products/10_2.jpg'],
            rating_count: 11,
            store_rating_count: 11,
            currency: '$',
            bought: 214,
            size: 'M',
            color: 'Black',
            shipping: 250,
            rating: 4,
            store_rating: 18090,
            store_rate: 3,
            sold_by: 'Vendedor',
            specs: 'Este es un ejemplo, datos del producto',
            reviews: [{
                image: 'assets/images/products/10.jpg',
                name: 'Ejemplo',
                comment: 'Este es un vestido increíble y totalmente chevre. Necesito vender el riñón que me queda para comprar este, ya que el otro riñón lo vendí para comprar mi iphone ... jajaja',
                rating: 5,
                images: ['assets/images/products/10.jpg']
            }],
            store_reviews: [{
                image: 'assets/images/products/10_1.jpg',
                name: 'Ejemplo',
                comment: 'Este es un vestido increíble y totalmente chevre. Necesito vender el riñón que me queda para comprar este, ya que el otro riñón lo vendí para comprar mi iphone ... jajaja',
                rating: 5,
                images: ['assets/images/products/10.jpg', 'assets/images/products/10_1.jpg']
            }, {
                image: 'assets/images/products/10.jpg',
                name: 'Ejemplo',
                comment: 'Este es un vestido increíble y totalmente chevre. Necesito vender el riñón que me queda para comprar este, ya que el otro riñón lo vendí para comprar mi iphone ... jajaja',
                rating: 5,
                images: ['assets/images/products/10.jpg']
            }],
            sizing: {small: 10, okay: 80, large: 5},
            buyer_guarantee: 'La devolución de productos se debe realizar en un tiempo máximo de 30 días',
            sponsored: []
        },
        {
            name: 'Kinsley Dress',
            cost_price: 198,
            discount: 80,
            offer: false,
            stock: 69,
            description: 'Ejemplo data',
            image: ['assets/images/products/11.jpg', 'assets/images/products/11_1.jpg', 'assets/images/products/11_2.jpg', 'assets/images/products/11_3.jpg', 'assets/images/products/11_4.jpg', 'assets/images/products/11_5.jpg'],
            rating_count: 11,
            store_rating_count: 11,
            currency: '$',
            bought: 434,
            size: 'M',
            color: 'Black',
            shipping: 250,
            rating: 4,
            store_rating: 18090,
            store_rate: 3,
            sold_by: 'Vendedor',
            specs: 'Este es un ejemplo, datos del producto',
            reviews: [{
                image: 'assets/images/products/11.jpg',
                name: 'Ejemplo',
                comment: 'Este es un vestido increíble y totalmente chevre. Necesito vender el riñón que me queda para comprar este, ya que el otro riñón lo vendí para comprar mi iphone ... jajaja',
                rating: 5,
                images: ['assets/images/products/11.jpg']
            }],
            store_reviews: [{
                image: 'assets/images/products/1.jpg',
                name: 'Ejemplo',
                comment: 'Este es un vestido increíble y totalmente chevre. Necesito vender el riñón que me queda para comprar este, ya que el otro riñón lo vendí para comprar mi iphone ... jajaja',
                rating: 5,
                images: ['assets/images/products/11.jpg', 'assets/images/products/11_1.jpg']
            }, {
                image: 'assets/images/products/11_2.jpg',
                name: 'Ejemplo',
                comment: 'Este es un vestido increíble y totalmente chevre. Necesito vender el riñón que me queda para comprar este, ya que el otro riñón lo vendí para comprar mi iphone ... jajaja',
                rating: 5,
                images: ['assets/images/products/1.jpg']
            }],
            sizing: {small: 10, okay: 80, large: 5},
            buyer_guarantee: 'La devolución de productos se debe realizar en un tiempo máximo de 30 días',
            sponsored: []
        }
    ];

    products_1: Array<Product> = [
        {
            name: 'Bianca Top',
            cost_price: 128,
            discount: 80,
            offer: true,
            stock: 69,
            description: 'Ejemplo data',
            image: ['assets/images/products/1.jpg', 'assets/images/products/1_1.jpg', 'assets/images/products/1_2.jpg'],
            rating_count: 11,
            store_rating_count: 11,
            currency: '$',
            bought: 1200,
            size: 'M',
            color: 'Black',
            shipping: 250,
            rating: 4,
            store_rating: 18090,
            store_rate: 3,
            sold_by: 'Vendedor',
            specs: 'Este es un ejemplo, datos del producto',
            reviews: [{
                image: 'assets/images/products/1.jpg',
                name: 'Ejemplo',
                comment: 'Este es un vestido increíble y totalmente chevre. Necesito vender el riñón que me queda para comprar este, ya que el otro riñón lo vendí para comprar mi iphone ... jajaja',
                rating: 5,
                images: ['assets/images/products/1.jpg', 'assets/images/products/1_1.jpg']
            }, {
                image: 'assets/images/products/1_2.jpg',
                name: 'Ejemplo',
                comment: 'Este es un vestido increíble y totalmente chevre. Necesito vender el riñón que me queda para comprar este, ya que el otro riñón lo vendí para comprar mi iphone ... jajaja',
                rating: 5,
                images: ['assets/images/products/1.jpg']
            }],
            store_reviews: [{
                image: 'assets/images/products/1.jpg',
                name: 'Ejemplo',
                comment: 'Este es un vestido increíble y totalmente chevre. Necesito vender el riñón que me queda para comprar este, ya que el otro riñón lo vendí para comprar mi iphone ... jajaja',
                rating: 5,
                images: ['assets/images/products/1.jpg', 'assets/images/products/1_1.jpg']
            }, {
                image: 'assets/images/products/1_2.jpg',
                name: 'Ejemplo',
                comment: 'Este es un vestido increíble y totalmente chevre. Necesito vender el riñón que me queda para comprar este, ya que el otro riñón lo vendí para comprar mi iphone ... jajaja',
                rating: 5,
                images: ['assets/images/products/1.jpg']
            }],
            sizing: {small: 10, okay: 80, large: 5},
            buyer_guarantee: 'La devolución de productos se debe realizar en un tiempo máximo de 30 días',
            sponsored: []
        },
        {
            name: 'Scarpetta Dress',
            cost_price: 198,
            discount: 80,
            offer: false,
            stock: 69,
            description: 'Ejemplo data',
            image: ['assets/images/products/2.jpg', 'assets/images/products/2_1.jpg', 'assets/images/products/2_2.jpg'],
            rating_count: 11,
            store_rating_count: 11,
            currency: '$',
            bought: 400,
            size: 'M',
            color: 'Black',
            shipping: 250,
            rating: 4,
            store_rating: 18090,
            store_rate: 3,
            sold_by: 'Vendedor',
            specs: 'Este es un ejemplo, datos del producto',
            reviews: [{
                image: 'assets/images/products/2.jpg',
                name: 'Ejemplo',
                comment: 'Este es un vestido increíble y totalmente chevre. Necesito vender el riñón que me queda para comprar este, ya que el otro riñón lo vendí para comprar mi iphone ... jajaja',
                rating: 5,
                images: ['assets/images/products/2.jpg']
            }],
            store_reviews: [{
                image: 'assets/images/products/2_1.jpg',
                name: 'Ejemplo',
                comment: 'Este es un vestido increíble y totalmente chevre. Necesito vender el riñón que me queda para comprar este, ya que el otro riñón lo vendí para comprar mi iphone ... jajaja',
                rating: 5,
                images: ['assets/images/products/2.jpg', 'assets/images/products/2_1.jpg']
            }, {
                image: 'assets/images/products/2.jpg',
                name: 'Ejemplo',
                comment: 'Este es un vestido increíble y totalmente chevre. Necesito vender el riñón que me queda para comprar este, ya que el otro riñón lo vendí para comprar mi iphone ... jajaja',
                rating: 5,
                images: ['assets/images/products/2.jpg']
            }],
            sizing: {small: 10, okay: 80, large: 5},
            buyer_guarantee: 'La devolución de productos se debe realizar en un tiempo máximo de 30 días',
            sponsored: []
        },
        {
            name: 'Misty Dress',
            cost_price: 218,
            discount: 80,
            offer: false,
            stock: 69,
            description: 'Ejemplo data',
            image: ['assets/images/products/3.jpg', 'assets/images/products/3_1.jpg', 'assets/images/products/3_2.jpg'],
            rating_count: 11,
            store_rating_count: 11,
            currency: '$',
            bought: 365,
            size: 'M',
            color: 'Black',
            shipping: 250,
            rating: 4,
            store_rating: 18090,
            store_rate: 3,
            sold_by: 'Vendedor',
            specs: 'Este es un ejemplo, datos del producto',
            reviews: [{
                image: 'assets/images/products/3.jpg',
                name: 'Ejemplo',
                comment: 'Este es un vestido increíble y totalmente chevre. Necesito vender el riñón que me queda para comprar este, ya que el otro riñón lo vendí para comprar mi iphone ... jajaja',
                rating: 5,
                images: ['assets/images/products/3.jpg']
            }],
            store_reviews: [{
                image: 'assets/images/products/3_1.jpg',
                name: 'Ejemplo',
                comment: 'Este es un vestido increíble y totalmente chevre. Necesito vender el riñón que me queda para comprar este, ya que el otro riñón lo vendí para comprar mi iphone ... jajaja',
                rating: 5,
                images: ['assets/images/products/3.jpg', 'assets/images/products/3_1.jpg']
            }, {
                image: 'assets/images/products/3.jpg',
                name: 'Ejemplo',
                comment: 'Este es un vestido increíble y totalmente chevre. Necesito vender el riñón que me queda para comprar este, ya que el otro riñón lo vendí para comprar mi iphone ... jajaja',
                rating: 5,
                images: ['assets/images/products/3.jpg']
            }],
            sizing: {small: 10, okay: 80, large: 5},
            buyer_guarantee: 'La devolución de productos se debe realizar en un tiempo máximo de 30 días',
            sponsored: []
        },
        {
            name: 'Blanch Dress',
            cost_price: 248,
            discount: 20,
            offer: true,
            stock: 69,
            description: 'Ejemplo data',
            image: ['assets/images/products/4.jpg', 'assets/images/products/4_1.jpg', 'assets/images/products/4_2.jpg'],
            rating_count: 11,
            store_rating_count: 11,
            currency: '$',
            bought: 1200,
            size: 'M',
            color: 'Black',
            shipping: 250,
            rating: 4,
            store_rating: 18090,
            store_rate: 3,
            sold_by: 'Vendedor',
            specs: 'Este es un ejemplo, datos del producto',
            reviews: [{
                image: 'assets/images/products/4.jpg',
                name: 'Ejemplo',
                comment: 'Este es un vestido increíble y totalmente chevre. Necesito vender el riñón que me queda para comprar este, ya que el otro riñón lo vendí para comprar mi iphone ... jajaja',
                rating: 5,
                images: ['assets/images/products/4.jpg']
            }],
            store_reviews: [{
                image: 'assets/images/products/4_1.jpg',
                name: 'Ejemplo',
                comment: 'Este es un vestido increíble y totalmente chevre. Necesito vender el riñón que me queda para comprar este, ya que el otro riñón lo vendí para comprar mi iphone ... jajaja',
                rating: 5,
                images: ['assets/images/products/4.jpg', 'assets/images/products/4_1.jpg']
            }, {
                image: 'assets/images/products/4.jpg',
                name: 'Ejemplo',
                comment: 'Este es un vestido increíble y totalmente chevre. Necesito vender el riñón que me queda para comprar este, ya que el otro riñón lo vendí para comprar mi iphone ... jajaja',
                rating: 5,
                images: ['assets/images/products/4.jpg']
            }],
            sizing: {small: 10, okay: 80, large: 5},
            buyer_guarantee: 'La devolución de productos se debe realizar en un tiempo máximo de 30 días',
            sponsored: []
        },
        {
            name: 'Scarlett Dress',
            cost_price: 218,
            discount: 80,
            offer: false,
            stock: 69,
            description: 'Ejemplo data',
            image: ['assets/images/products/5.jpg', 'assets/images/products/5_1.jpg', 'assets/images/products/5_2.jpg'],
            rating_count: 11,
            store_rating_count: 11,
            currency: '$',
            bought: 234,
            size: 'M',
            color: 'Black',
            shipping: 250,
            rating: 4,
            store_rating: 18090,
            store_rate: 3,
            sold_by: 'Vendedor',
            specs: 'Este es un ejemplo, datos del producto',
            reviews: [{
                image: 'assets/images/products/5.jpg',
                name: 'Ejemplo',
                comment: 'Este es un vestido increíble y totalmente chevre. Necesito vender el riñón que me queda para comprar este, ya que el otro riñón lo vendí para comprar mi iphone ... jajaja',
                rating: 5,
                images: ['assets/images/products/5.jpg']
            }],
            store_reviews: [{
                image: 'assets/images/products/5_1.jpg',
                name: 'Ejemplo',
                comment: 'Este es un vestido increíble y totalmente chevre. Necesito vender el riñón que me queda para comprar este, ya que el otro riñón lo vendí para comprar mi iphone ... jajaja',
                rating: 5,
                images: ['assets/images/products/5.jpg', 'assets/images/products/5_1.jpg']
            }, {
                image: 'assets/images/products/5.jpg',
                name: 'Ejemplo',
                comment: 'Este es un vestido increíble y totalmente chevre. Necesito vender el riñón que me queda para comprar este, ya que el otro riñón lo vendí para comprar mi iphone ... jajaja',
                rating: 5,
                images: ['assets/images/products/5.jpg']
            }],
            sizing: {small: 10, okay: 80, large: 5},
            buyer_guarantee: 'La devolución de productos se debe realizar en un tiempo máximo de 30 días',
            sponsored: []
        },
    ];
    products_2: Array<Product> = [{
        name: 'Morrisson Dress',
        cost_price: 128,
        discount: 80,
        offer: false,
        stock: 69,
        description: 'Ejemplo data',
        image: ['assets/images/products/6.jpg', 'assets/images/products/6_1.jpg', 'assets/images/products/6_2.jpg'],
        rating_count: 11,
        store_rating_count: 11,
        currency: '$',
        bought: 567,
        size: 'M',
        color: 'Black',
        shipping: 250,
        rating: 4,
        store_rating: 18090,
        store_rate: 3,
        sold_by: 'Vendedor',
        specs: 'Este es un ejemplo, datos del producto',
        reviews: [{
            image: 'assets/images/products/6.jpg',
            name: 'Ejemplo',
            comment: 'Este es un vestido increíble y totalmente chevre. Necesito vender el riñón que me queda para comprar este, ya que el otro riñón lo vendí para comprar mi iphone ... jajaja',
            rating: 5,
            images: ['assets/images/products/6.jpg']
        }],
        store_reviews: [{
            image: 'assets/images/products/6_1.jpg',
            name: 'Ejemplo',
            comment: 'Este es un vestido increíble y totalmente chevre. Necesito vender el riñón que me queda para comprar este, ya que el otro riñón lo vendí para comprar mi iphone ... jajaja',
            rating: 5,
            images: ['assets/images/products/6.jpg', 'assets/images/products/6_1.jpg']
        }, {
            image: 'assets/images/products/6.jpg',
            name: 'Ejemplo',
            comment: 'Este es un vestido increíble y totalmente chevre. Necesito vender el riñón que me queda para comprar este, ya que el otro riñón lo vendí para comprar mi iphone ... jajaja',
            rating: 5,
            images: ['assets/images/products/6.jpg']
        }],
        sizing: {small: 10, okay: 80, large: 5},
        buyer_guarantee: 'La devolución de productos se debe realizar en un tiempo máximo de 30 días',
        sponsored: []
    },
        {
            name: 'Morrisson Dress',
            cost_price: 128,
            discount: 80,
            offer: true,
            stock: 69,
            description: 'Ejemplo data',
            image: ['assets/images/products/7.jpg', 'assets/images/products/7_1.jpg', 'assets/images/products/7_2.jpg'],
            rating_count: 11,
            store_rating_count: 11,
            currency: '$',
            bought: 137,
            size: 'M',
            color: 'Black',
            shipping: 250,
            rating: 4,
            store_rating: 18090,
            store_rate: 3,
            sold_by: 'Vendedor',
            specs: 'Este es un ejemplo, datos del producto',
            reviews: [{
                image: 'assets/images/products/7.jpg',
                name: 'Ejemplo',
                comment: 'Este es un vestido increíble y totalmente chevre. Necesito vender el riñón que me queda para comprar este, ya que el otro riñón lo vendí para comprar mi iphone ... jajaja',
                rating: 5,
                images: ['assets/images/products/7.jpg']
            }],
            store_reviews: [{
                image: 'assets/images/products/7_1.jpg',
                name: 'Ejemplo',
                comment: 'Este es un vestido increíble y totalmente chevre. Necesito vender el riñón que me queda para comprar este, ya que el otro riñón lo vendí para comprar mi iphone ... jajaja',
                rating: 5,
                images: ['assets/images/products/7.jpg', 'assets/images/products/7_1.jpg']
            }, {
                image: 'assets/images/products/7.jpg',
                name: 'Ejemplo',
                comment: 'Este es un vestido increíble y totalmente chevre. Necesito vender el riñón que me queda para comprar este, ya que el otro riñón lo vendí para comprar mi iphone ... jajaja',
                rating: 5,
                images: ['assets/images/products/7.jpg']
            }],
            sizing: {small: 10, okay: 80, large: 5},
            buyer_guarantee: 'La devolución de productos se debe realizar en un tiempo máximo de 30 días',
            sponsored: []
        },
        {
            name: 'Smith Dress',
            cost_price: 98,
            discount: 80,
            offer: false,
            stock: 69,
            description: 'Ejemplo data',
            image: ['assets/images/products/8.jpg', 'assets/images/products/8_1.jpg', 'assets/images/products/8_2.jpg'],
            rating_count: 11,
            store_rating_count: 11,
            currency: '$',
            bought: 236,
            size: 'M',
            color: 'Black',
            shipping: 250,
            rating: 4,
            store_rating: 18090,
            store_rate: 3,
            sold_by: 'Vendedor',
            specs: 'Este es un ejemplo, datos del producto',
            reviews: [{
                image: 'assets/images/products/8.jpg',
                name: 'Ejemplo',
                comment: 'Este es un vestido increíble y totalmente chevre. Necesito vender el riñón que me queda para comprar este, ya que el otro riñón lo vendí para comprar mi iphone ... jajaja',
                rating: 5,
                images: ['assets/images/products/8.jpg']
            }],
            store_reviews: [{
                image: 'assets/images/products/8.jpg',
                name: 'Ejemplo',
                comment: 'Este es un vestido increíble y totalmente chevre. Necesito vender el riñón que me queda para comprar este, ya que el otro riñón lo vendí para comprar mi iphone ... jajaja',
                rating: 5,
                images: ['assets/images/products/8.jpg', 'assets/images/products/8_1.jpg']
            }, {
                image: 'assets/images/products/8.jpg',
                name: 'Ejemplo',
                comment: 'Este es un vestido increíble y totalmente chevre. Necesito vender el riñón que me queda para comprar este, ya que el otro riñón lo vendí para comprar mi iphone ... jajaja',
                rating: 5,
                images: ['assets/images/products/8.jpg']
            }],
            sizing: {small: 10, okay: 80, large: 5},
            buyer_guarantee: 'La devolución de productos se debe realizar en un tiempo máximo de 30 días',
            sponsored: []
        },
        {
            name: 'Nicola Dress',
            cost_price: 278,
            discount: 80,
            offer: false,
            stock: 69,
            description: 'Ejemplo data',
            image: ['assets/images/products/9.jpg', 'assets/images/products/9_1.jpg', 'assets/images/products/9_2.jpg'],
            rating_count: 11,
            store_rating_count: 11,
            currency: '$',
            bought: 982,
            size: 'M',
            color: 'Black',
            shipping: 250,
            rating: 4,
            store_rating: 18090,
            store_rate: 3,
            sold_by: 'Vendedor',
            specs: 'Este es un ejemplo, datos del producto',
            reviews: [{
                image: 'assets/images/products/9.jpg',
                name: 'Ejemplo',
                comment: 'Este es un vestido increíble y totalmente chevre. Necesito vender el riñón que me queda para comprar este, ya que el otro riñón lo vendí para comprar mi iphone ... jajaja',
                rating: 5,
                images: ['assets/images/products/9.jpg']
            }],
            store_reviews: [{
                image: 'assets/images/products/9_2.jpg',
                name: 'Ejemplo',
                comment: 'Este es un vestido increíble y totalmente chevre. Necesito vender el riñón que me queda para comprar este, ya que el otro riñón lo vendí para comprar mi iphone ... jajaja',
                rating: 5,
                images: ['assets/images/products/9.jpg', 'assets/images/products/9_1.jpg']
            }, {
                image: 'assets/images/products/9.jpg',
                name: 'Ejemplo',
                comment: 'Este es un vestido increíble y totalmente chevre. Necesito vender el riñón que me queda para comprar este, ya que el otro riñón lo vendí para comprar mi iphone ... jajaja',
                rating: 5,
                images: ['assets/images/products/9.jpg']
            }],
            sizing: {small: 10, okay: 80, large: 5},
            buyer_guarantee: 'La devolución de productos se debe realizar en un tiempo máximo de 30 días',
            sponsored: []
        },
        {
            name: 'Smith Dress',
            cost_price: 98,
            discount: 80,
            offer: true,
            stock: 69,
            description: 'Ejemplo data',
            image: ['assets/images/products/10.jpg', 'assets/images/products/10_1.jpg', 'assets/images/products/10_2.jpg'],
            rating_count: 11,
            store_rating_count: 11,
            currency: '$',
            bought: 214,
            size: 'M',
            color: 'Black',
            shipping: 250,
            rating: 4,
            store_rating: 18090,
            store_rate: 3,
            sold_by: 'Vendedor',
            specs: 'Este es un ejemplo, datos del producto',
            reviews: [{
                image: 'assets/images/products/10.jpg',
                name: 'Ejemplo',
                comment: 'Este es un vestido increíble y totalmente chevre. Necesito vender el riñón que me queda para comprar este, ya que el otro riñón lo vendí para comprar mi iphone ... jajaja',
                rating: 5,
                images: ['assets/images/products/10.jpg']
            }],
            store_reviews: [{
                image: 'assets/images/products/10_1.jpg',
                name: 'Ejemplo',
                comment: 'Este es un vestido increíble y totalmente chevre. Necesito vender el riñón que me queda para comprar este, ya que el otro riñón lo vendí para comprar mi iphone ... jajaja',
                rating: 5,
                images: ['assets/images/products/10.jpg', 'assets/images/products/10_1.jpg']
            }, {
                image: 'assets/images/products/10.jpg',
                name: 'Ejemplo',
                comment: 'Este es un vestido increíble y totalmente chevre. Necesito vender el riñón que me queda para comprar este, ya que el otro riñón lo vendí para comprar mi iphone ... jajaja',
                rating: 5,
                images: ['assets/images/products/10.jpg']
            }],
            sizing: {small: 10, okay: 80, large: 5},
            buyer_guarantee: 'La devolución de productos se debe realizar en un tiempo máximo de 30 días',
            sponsored: []
        },
    ];
    products_3: Array<Product> = [{
        name: 'Blanch Dress',
        cost_price: 248,
        discount: 20,
        offer: true,
        stock: 69,
        description: 'Ejemplo data',
        image: ['assets/images/products/4.jpg', 'assets/images/products/4_1.jpg', 'assets/images/products/4_2.jpg'],
        rating_count: 11,
        store_rating_count: 11,
        currency: '$',
        bought: 1200,
        size: 'M',
        color: 'Black',
        shipping: 250,
        rating: 4,
        store_rating: 18090,
        store_rate: 3,
        sold_by: 'Vendedor',
        specs: 'Este es un ejemplo, datos del producto',
        reviews: [{
            image: 'assets/images/products/4.jpg',
            name: 'Ejemplo',
            comment: 'Este es un vestido increíble y totalmente chevre. Necesito vender el riñón que me queda para comprar este, ya que el otro riñón lo vendí para comprar mi iphone ... jajaja',
            rating: 5,
            images: ['assets/images/products/4.jpg']
        }],
        store_reviews: [{
            image: 'assets/images/products/4_1.jpg',
            name: 'Ejemplo',
            comment: 'Este es un vestido increíble y totalmente chevre. Necesito vender el riñón que me queda para comprar este, ya que el otro riñón lo vendí para comprar mi iphone ... jajaja',
            rating: 5,
            images: ['assets/images/products/4.jpg', 'assets/images/products/4_1.jpg']
        }, {
            image: 'assets/images/products/4.jpg',
            name: 'Ejemplo',
            comment: 'Este es un vestido increíble y totalmente chevre. Necesito vender el riñón que me queda para comprar este, ya que el otro riñón lo vendí para comprar mi iphone ... jajaja',
            rating: 5,
            images: ['assets/images/products/4.jpg']
        }],
        sizing: {small: 10, okay: 80, large: 5},
        buyer_guarantee: 'La devolución de productos se debe realizar en un tiempo máximo de 30 días',
        sponsored: []
    },
        {
            name: 'Scarlett Dress',
            cost_price: 218,
            discount: 80,
            offer: false,
            stock: 69,
            description: 'Ejemplo data',
            image: ['assets/images/products/5.jpg', 'assets/images/products/5_1.jpg', 'assets/images/products/5_2.jpg'],
            rating_count: 11,
            store_rating_count: 11,
            currency: '$',
            bought: 234,
            size: 'M',
            color: 'Black',
            shipping: 250,
            rating: 4,
            store_rating: 18090,
            store_rate: 3,
            sold_by: 'Vendedor',
            specs: 'Este es un ejemplo, datos del producto',
            reviews: [{
                image: 'assets/images/products/5.jpg',
                name: 'Ejemplo',
                comment: 'Este es un vestido increíble y totalmente chevre. Necesito vender el riñón que me queda para comprar este, ya que el otro riñón lo vendí para comprar mi iphone ... jajaja',
                rating: 5,
                images: ['assets/images/products/5.jpg']
            }],
            store_reviews: [{
                image: 'assets/images/products/5_1.jpg',
                name: 'Ejemplo',
                comment: 'Este es un vestido increíble y totalmente chevre. Necesito vender el riñón que me queda para comprar este, ya que el otro riñón lo vendí para comprar mi iphone ... jajaja',
                rating: 5,
                images: ['assets/images/products/5.jpg', 'assets/images/products/5_1.jpg']
            }, {
                image: 'assets/images/products/5.jpg',
                name: 'Ejemplo',
                comment: 'Este es un vestido increíble y totalmente chevre. Necesito vender el riñón que me queda para comprar este, ya que el otro riñón lo vendí para comprar mi iphone ... jajaja',
                rating: 5,
                images: ['assets/images/products/5.jpg']
            }],
            sizing: {small: 10, okay: 80, large: 5},
            buyer_guarantee: 'La devolución de productos se debe realizar en un tiempo máximo de 30 días',
            sponsored: []
        },
        {
            name: 'Morrisson Dress',
            cost_price: 128,
            discount: 80,
            offer: false,
            stock: 69,
            description: 'Ejemplo data',
            image: ['assets/images/products/6.jpg', 'assets/images/products/6_1.jpg', 'assets/images/products/6_2.jpg'],
            rating_count: 11,
            store_rating_count: 11,
            currency: '$',
            bought: 567,
            size: 'M',
            color: 'Black',
            shipping: 250,
            rating: 4,
            store_rating: 18090,
            store_rate: 3,
            sold_by: 'Vendedor',
            specs: 'Este es un ejemplo, datos del producto',
            reviews: [{
                image: 'assets/images/products/6.jpg',
                name: 'Ejemplo',
                comment: 'Este es un vestido increíble y totalmente chevre. Necesito vender el riñón que me queda para comprar este, ya que el otro riñón lo vendí para comprar mi iphone ... jajaja',
                rating: 5,
                images: ['assets/images/products/6.jpg']
            }],
            store_reviews: [{
                image: 'assets/images/products/6_1.jpg',
                name: 'Ejemplo',
                comment: 'Este es un vestido increíble y totalmente chevre. Necesito vender el riñón que me queda para comprar este, ya que el otro riñón lo vendí para comprar mi iphone ... jajaja',
                rating: 5,
                images: ['assets/images/products/6.jpg', 'assets/images/products/6_1.jpg']
            }, {
                image: 'assets/images/products/6.jpg',
                name: 'Ejemplo',
                comment: 'Este es un vestido increíble y totalmente chevre. Necesito vender el riñón que me queda para comprar este, ya que el otro riñón lo vendí para comprar mi iphone ... jajaja',
                rating: 5,
                images: ['assets/images/products/6.jpg']
            }],
            sizing: {small: 10, okay: 80, large: 5},
            buyer_guarantee: 'La devolución de productos se debe realizar en un tiempo máximo de 30 días',
            sponsored: []
        },
        {
            name: 'Morrisson Dress',
            cost_price: 128,
            discount: 80,
            offer: true,
            stock: 69,
            description: 'Ejemplo data',
            image: ['assets/images/products/7.jpg', 'assets/images/products/7_1.jpg', 'assets/images/products/7_2.jpg'],
            rating_count: 11,
            store_rating_count: 11,
            currency: '$',
            bought: 137,
            size: 'M',
            color: 'Black',
            shipping: 250,
            rating: 4,
            store_rating: 18090,
            store_rate: 3,
            sold_by: 'Vendedor',
            specs: 'Este es un ejemplo, datos del producto',
            reviews: [{
                image: 'assets/images/products/7.jpg',
                name: 'Ejemplo',
                comment: 'Este es un vestido increíble y totalmente chevre. Necesito vender el riñón que me queda para comprar este, ya que el otro riñón lo vendí para comprar mi iphone ... jajaja',
                rating: 5,
                images: ['assets/images/products/7.jpg']
            }],
            store_reviews: [{
                image: 'assets/images/products/7_1.jpg',
                name: 'Ejemplo',
                comment: 'Este es un vestido increíble y totalmente chevre. Necesito vender el riñón que me queda para comprar este, ya que el otro riñón lo vendí para comprar mi iphone ... jajaja',
                rating: 5,
                images: ['assets/images/products/7.jpg', 'assets/images/products/7_1.jpg']
            }, {
                image: 'assets/images/products/7.jpg',
                name: 'Ejemplo',
                comment: 'Este es un vestido increíble y totalmente chevre. Necesito vender el riñón que me queda para comprar este, ya que el otro riñón lo vendí para comprar mi iphone ... jajaja',
                rating: 5,
                images: ['assets/images/products/7.jpg']
            }],
            sizing: {small: 10, okay: 80, large: 5},
            buyer_guarantee: 'La devolución de productos se debe realizar en un tiempo máximo de 30 días',
            sponsored: []
        },
        {
            name: 'Smith Dress',
            cost_price: 98,
            discount: 80,
            offer: false,
            stock: 69,
            description: 'Ejemplo data',
            image: ['assets/images/products/8.jpg', 'assets/images/products/8_1.jpg', 'assets/images/products/8_2.jpg'],
            rating_count: 11,
            store_rating_count: 11,
            currency: '$',
            bought: 236,
            size: 'M',
            color: 'Black',
            shipping: 250,
            rating: 4,
            store_rating: 18090,
            store_rate: 3,
            sold_by: 'Vendedor',
            specs: 'Este es un ejemplo, datos del producto',
            reviews: [{
                image: 'assets/images/products/8.jpg',
                name: 'Ejemplo',
                comment: 'Este es un vestido increíble y totalmente chevre. Necesito vender el riñón que me queda para comprar este, ya que el otro riñón lo vendí para comprar mi iphone ... jajaja',
                rating: 5,
                images: ['assets/images/products/8.jpg']
            }],
            store_reviews: [{
                image: 'assets/images/products/8.jpg',
                name: 'Ejemplo',
                comment: 'Este es un vestido increíble y totalmente chevre. Necesito vender el riñón que me queda para comprar este, ya que el otro riñón lo vendí para comprar mi iphone ... jajaja',
                rating: 5,
                images: ['assets/images/products/8.jpg', 'assets/images/products/8_1.jpg']
            }, {
                image: 'assets/images/products/8.jpg',
                name: 'Ejemplo',
                comment: 'Este es un vestido increíble y totalmente chevre. Necesito vender el riñón que me queda para comprar este, ya que el otro riñón lo vendí para comprar mi iphone ... jajaja',
                rating: 5,
                images: ['assets/images/products/8.jpg']
            }],
            sizing: {small: 10, okay: 80, large: 5},
            buyer_guarantee: 'La devolución de productos se debe realizar en un tiempo máximo de 30 días',
            sponsored: []
        },
    ];
    products_4: Array<Product> = [{
        name: 'Misty Dress',
        cost_price: 218,
        discount: 80,
        offer: false,
        stock: 69,
        description: 'Ejemplo data',
        image: ['assets/images/products/3.jpg', 'assets/images/products/3_1.jpg', 'assets/images/products/3_2.jpg'],
        rating_count: 11,
        store_rating_count: 11,
        currency: '$',
        bought: 365,
        size: 'M',
        color: 'Black',
        shipping: 250,
        rating: 4,
        store_rating: 18090,
        store_rate: 3,
        sold_by: 'Vendedor',
        specs: 'Este es un ejemplo, datos del producto',
        reviews: [{
            image: 'assets/images/products/3.jpg',
            name: 'Ejemplo',
            comment: 'Este es un vestido increíble y totalmente chevre. Necesito vender el riñón que me queda para comprar este, ya que el otro riñón lo vendí para comprar mi iphone ... jajaja',
            rating: 5,
            images: ['assets/images/products/3.jpg']
        }],
        store_reviews: [{
            image: 'assets/images/products/3_1.jpg',
            name: 'Ejemplo',
            comment: 'Este es un vestido increíble y totalmente chevre. Necesito vender el riñón que me queda para comprar este, ya que el otro riñón lo vendí para comprar mi iphone ... jajaja',
            rating: 5,
            images: ['assets/images/products/3.jpg', 'assets/images/products/3_1.jpg']
        }, {
            image: 'assets/images/products/3.jpg',
            name: 'Ejemplo',
            comment: 'Este es un vestido increíble y totalmente chevre. Necesito vender el riñón que me queda para comprar este, ya que el otro riñón lo vendí para comprar mi iphone ... jajaja',
            rating: 5,
            images: ['assets/images/products/3.jpg']
        }],
        sizing: {small: 10, okay: 80, large: 5},
        buyer_guarantee: 'La devolución de productos se debe realizar en un tiempo máximo de 30 días',
        sponsored: []
    },
        {
            name: 'Blanch Dress',
            cost_price: 248,
            discount: 20,
            offer: true,
            stock: 69,
            description: 'Ejemplo data',
            image: ['assets/images/products/4.jpg', 'assets/images/products/4_1.jpg', 'assets/images/products/4_2.jpg'],
            rating_count: 11,
            store_rating_count: 11,
            currency: '$',
            bought: 1200,
            size: 'M',
            color: 'Black',
            shipping: 250,
            rating: 4,
            store_rating: 18090,
            store_rate: 3,
            sold_by: 'Vendedor',
            specs: 'Este es un ejemplo, datos del producto',
            reviews: [{
                image: 'assets/images/products/4.jpg',
                name: 'Ejemplo',
                comment: 'Este es un vestido increíble y totalmente chevre. Necesito vender el riñón que me queda para comprar este, ya que el otro riñón lo vendí para comprar mi iphone ... jajaja',
                rating: 5,
                images: ['assets/images/products/4.jpg']
            }],
            store_reviews: [{
                image: 'assets/images/products/4_1.jpg',
                name: 'Ejemplo',
                comment: 'Este es un vestido increíble y totalmente chevre. Necesito vender el riñón que me queda para comprar este, ya que el otro riñón lo vendí para comprar mi iphone ... jajaja',
                rating: 5,
                images: ['assets/images/products/4.jpg', 'assets/images/products/4_1.jpg']
            }, {
                image: 'assets/images/products/4.jpg',
                name: 'Ejemplo',
                comment: 'Este es un vestido increíble y totalmente chevre. Necesito vender el riñón que me queda para comprar este, ya que el otro riñón lo vendí para comprar mi iphone ... jajaja',
                rating: 5,
                images: ['assets/images/products/4.jpg']
            }],
            sizing: {small: 10, okay: 80, large: 5},
            buyer_guarantee: 'La devolución de productos se debe realizar en un tiempo máximo de 30 días',
            sponsored: []
        },
        {
            name: 'Scarlett Dress',
            cost_price: 218,
            discount: 80,
            offer: false,
            stock: 69,
            description: 'Ejemplo data',
            image: ['assets/images/products/5.jpg', 'assets/images/products/5_1.jpg', 'assets/images/products/5_2.jpg'],
            rating_count: 11,
            store_rating_count: 11,
            currency: '$',
            bought: 234,
            size: 'M',
            color: 'Black',
            shipping: 250,
            rating: 4,
            store_rating: 18090,
            store_rate: 3,
            sold_by: 'Vendedor',
            specs: 'Este es un ejemplo, datos del producto',
            reviews: [{
                image: 'assets/images/products/5.jpg',
                name: 'Ejemplo',
                comment: 'Este es un vestido increíble y totalmente chevre. Necesito vender el riñón que me queda para comprar este, ya que el otro riñón lo vendí para comprar mi iphone ... jajaja',
                rating: 5,
                images: ['assets/images/products/5.jpg']
            }],
            store_reviews: [{
                image: 'assets/images/products/5_1.jpg',
                name: 'Ejemplo',
                comment: 'Este es un vestido increíble y totalmente chevre. Necesito vender el riñón que me queda para comprar este, ya que el otro riñón lo vendí para comprar mi iphone ... jajaja',
                rating: 5,
                images: ['assets/images/products/5.jpg', 'assets/images/products/5_1.jpg']
            }, {
                image: 'assets/images/products/5.jpg',
                name: 'Ejemplo',
                comment: 'Este es un vestido increíble y totalmente chevre. Necesito vender el riñón que me queda para comprar este, ya que el otro riñón lo vendí para comprar mi iphone ... jajaja',
                rating: 5,
                images: ['assets/images/products/5.jpg']
            }],
            sizing: {small: 10, okay: 80, large: 5},
            buyer_guarantee: 'La devolución de productos se debe realizar en un tiempo máximo de 30 días',
            sponsored: []
        },
        {
            name: 'Morrisson Dress',
            cost_price: 128,
            discount: 80,
            offer: false,
            stock: 69,
            description: 'Ejemplo data',
            image: ['assets/images/products/6.jpg', 'assets/images/products/6_1.jpg', 'assets/images/products/6_2.jpg'],
            rating_count: 11,
            store_rating_count: 11,
            currency: '$',
            bought: 567,
            size: 'M',
            color: 'Black',
            shipping: 250,
            rating: 4,
            store_rating: 18090,
            store_rate: 3,
            sold_by: 'Vendedor',
            specs: 'Este es un ejemplo, datos del producto',
            reviews: [{
                image: 'assets/images/products/6.jpg',
                name: 'Ejemplo',
                comment: 'Este es un vestido increíble y totalmente chevre. Necesito vender el riñón que me queda para comprar este, ya que el otro riñón lo vendí para comprar mi iphone ... jajaja',
                rating: 5,
                images: ['assets/images/products/6.jpg']
            }],
            store_reviews: [{
                image: 'assets/images/products/6_1.jpg',
                name: 'Ejemplo',
                comment: 'Este es un vestido increíble y totalmente chevre. Necesito vender el riñón que me queda para comprar este, ya que el otro riñón lo vendí para comprar mi iphone ... jajaja',
                rating: 5,
                images: ['assets/images/products/6.jpg', 'assets/images/products/6_1.jpg']
            }, {
                image: 'assets/images/products/6.jpg',
                name: 'Ejemplo',
                comment: 'Este es un vestido increíble y totalmente chevre. Necesito vender el riñón que me queda para comprar este, ya que el otro riñón lo vendí para comprar mi iphone ... jajaja',
                rating: 5,
                images: ['assets/images/products/6.jpg']
            }],
            sizing: {small: 10, okay: 80, large: 5},
            buyer_guarantee: 'La devolución de productos se debe realizar en un tiempo máximo de 30 días',
            sponsored: []
        },
        {
            name: 'Morrisson Dress',
            cost_price: 128,
            discount: 80,
            offer: true,
            stock: 69,
            description: 'Ejemplo data',
            image: ['assets/images/products/7.jpg', 'assets/images/products/7_1.jpg', 'assets/images/products/7_2.jpg'],
            rating_count: 11,
            store_rating_count: 11,
            currency: '$',
            bought: 137,
            size: 'M',
            color: 'Black',
            shipping: 250,
            rating: 4,
            store_rating: 18090,
            store_rate: 3,
            sold_by: 'Vendedor',
            specs: 'Este es un ejemplo, datos del producto',
            reviews: [{
                image: 'assets/images/products/7.jpg',
                name: 'Ejemplo',
                comment: 'Este es un vestido increíble y totalmente chevre. Necesito vender el riñón que me queda para comprar este, ya que el otro riñón lo vendí para comprar mi iphone ... jajaja',
                rating: 5,
                images: ['assets/images/products/7.jpg']
            }],
            store_reviews: [{
                image: 'assets/images/products/7_1.jpg',
                name: 'Ejemplo',
                comment: 'Este es un vestido increíble y totalmente chevre. Necesito vender el riñón que me queda para comprar este, ya que el otro riñón lo vendí para comprar mi iphone ... jajaja',
                rating: 5,
                images: ['assets/images/products/7.jpg', 'assets/images/products/7_1.jpg']
            }, {
                image: 'assets/images/products/7.jpg',
                name: 'Ejemplo',
                comment: 'Este es un vestido increíble y totalmente chevre. Necesito vender el riñón que me queda para comprar este, ya que el otro riñón lo vendí para comprar mi iphone ... jajaja',
                rating: 5,
                images: ['assets/images/products/7.jpg']
            }],
            sizing: {small: 10, okay: 80, large: 5},
            buyer_guarantee: 'La devolución de productos se debe realizar en un tiempo máximo de 30 días',
            sponsored: []
        },
        {
            name: 'Smith Dress',
            cost_price: 98,
            discount: 80,
            offer: false,
            stock: 69,
            description: 'Ejemplo data',
            image: ['assets/images/products/8.jpg', 'assets/images/products/8_1.jpg', 'assets/images/products/8_2.jpg'],
            rating_count: 11,
            store_rating_count: 11,
            currency: '$',
            bought: 236,
            size: 'M',
            color: 'Black',
            shipping: 250,
            rating: 4,
            store_rating: 18090,
            store_rate: 3,
            sold_by: 'Vendedor',
            specs: 'Este es un ejemplo, datos del producto',
            reviews: [{
                image: 'assets/images/products/8.jpg',
                name: 'Ejemplo',
                comment: 'Este es un vestido increíble y totalmente chevre. Necesito vender el riñón que me queda para comprar este, ya que el otro riñón lo vendí para comprar mi iphone ... jajaja',
                rating: 5,
                images: ['assets/images/products/8.jpg']
            }],
            store_reviews: [{
                image: 'assets/images/products/8.jpg',
                name: 'Ejemplo',
                comment: 'Este es un vestido increíble y totalmente chevre. Necesito vender el riñón que me queda para comprar este, ya que el otro riñón lo vendí para comprar mi iphone ... jajaja',
                rating: 5,
                images: ['assets/images/products/8.jpg', 'assets/images/products/8_1.jpg']
            }, {
                image: 'assets/images/products/8.jpg',
                name: 'Ejemplo',
                comment: 'Este es un vestido increíble y totalmente chevre. Necesito vender el riñón que me queda para comprar este, ya que el otro riñón lo vendí para comprar mi iphone ... jajaja',
                rating: 5,
                images: ['assets/images/products/8.jpg']
            }],
            sizing: {small: 10, okay: 80, large: 5},
            buyer_guarantee: 'La devolución de productos se debe realizar en un tiempo máximo de 30 días',
            sponsored: []
        },
    ];
    products_5: Array<Product> = [{
        name: 'Scarpetta Dress',
        cost_price: 198,
        discount: 80,
        offer: false,
        stock: 69,
        description: 'Ejemplo data',
        image: ['assets/images/products/2.jpg', 'assets/images/products/2_1.jpg', 'assets/images/products/2_2.jpg'],
        rating_count: 11,
        store_rating_count: 11,
        currency: '$',
        bought: 400,
        size: 'M',
        color: 'Black',
        shipping: 250,
        rating: 4,
        store_rating: 18090,
        store_rate: 3,
        sold_by: 'Vendedor',
        specs: 'Este es un ejemplo, datos del producto',
        reviews: [{
            image: 'assets/images/products/2.jpg',
            name: 'Ejemplo',
            comment: 'Este es un vestido increíble y totalmente chevre. Necesito vender el riñón que me queda para comprar este, ya que el otro riñón lo vendí para comprar mi iphone ... jajaja',
            rating: 5,
            images: ['assets/images/products/2.jpg']
        }],
        store_reviews: [{
            image: 'assets/images/products/2_1.jpg',
            name: 'Ejemplo',
            comment: 'Este es un vestido increíble y totalmente chevre. Necesito vender el riñón que me queda para comprar este, ya que el otro riñón lo vendí para comprar mi iphone ... jajaja',
            rating: 5,
            images: ['assets/images/products/2.jpg', 'assets/images/products/2_1.jpg']
        }, {
            image: 'assets/images/products/2.jpg',
            name: 'Ejemplo',
            comment: 'Este es un vestido increíble y totalmente chevre. Necesito vender el riñón que me queda para comprar este, ya que el otro riñón lo vendí para comprar mi iphone ... jajaja',
            rating: 5,
            images: ['assets/images/products/2.jpg']
        }],
        sizing: {small: 10, okay: 80, large: 5},
        buyer_guarantee: 'La devolución de productos se debe realizar en un tiempo máximo de 30 días',
        sponsored: []
    },
        {
            name: 'Misty Dress',
            cost_price: 218,
            discount: 80,
            offer: false,
            stock: 69,
            description: 'Ejemplo data',
            image: ['assets/images/products/3.jpg', 'assets/images/products/3_1.jpg', 'assets/images/products/3_2.jpg'],
            rating_count: 11,
            store_rating_count: 11,
            currency: '$',
            bought: 365,
            size: 'M',
            color: 'Black',
            shipping: 250,
            rating: 4,
            store_rating: 18090,
            store_rate: 3,
            sold_by: 'Vendedor',
            specs: 'Este es un ejemplo, datos del producto',
            reviews: [{
                image: 'assets/images/products/3.jpg',
                name: 'Ejemplo',
                comment: 'Este es un vestido increíble y totalmente chevre. Necesito vender el riñón que me queda para comprar este, ya que el otro riñón lo vendí para comprar mi iphone ... jajaja',
                rating: 5,
                images: ['assets/images/products/3.jpg']
            }],
            store_reviews: [{
                image: 'assets/images/products/3_1.jpg',
                name: 'Ejemplo',
                comment: 'Este es un vestido increíble y totalmente chevre. Necesito vender el riñón que me queda para comprar este, ya que el otro riñón lo vendí para comprar mi iphone ... jajaja',
                rating: 5,
                images: ['assets/images/products/3.jpg', 'assets/images/products/3_1.jpg']
            }, {
                image: 'assets/images/products/3.jpg',
                name: 'Ejemplo',
                comment: 'Este es un vestido increíble y totalmente chevre. Necesito vender el riñón que me queda para comprar este, ya que el otro riñón lo vendí para comprar mi iphone ... jajaja',
                rating: 5,
                images: ['assets/images/products/3.jpg']
            }],
            sizing: {small: 10, okay: 80, large: 5},
            buyer_guarantee: 'La devolución de productos se debe realizar en un tiempo máximo de 30 días',
            sponsored: []
        },
        {
            name: 'Blanch Dress',
            cost_price: 248,
            discount: 20,
            offer: true,
            stock: 69,
            description: 'Ejemplo data',
            image: ['assets/images/products/4.jpg', 'assets/images/products/4_1.jpg', 'assets/images/products/4_2.jpg'],
            rating_count: 11,
            store_rating_count: 11,
            currency: '$',
            bought: 1200,
            size: 'M',
            color: 'Black',
            shipping: 250,
            rating: 4,
            store_rating: 18090,
            store_rate: 3,
            sold_by: 'Vendedor',
            specs: 'Este es un ejemplo, datos del producto',
            reviews: [{
                image: 'assets/images/products/4.jpg',
                name: 'Ejemplo',
                comment: 'Este es un vestido increíble y totalmente chevre. Necesito vender el riñón que me queda para comprar este, ya que el otro riñón lo vendí para comprar mi iphone ... jajaja',
                rating: 5,
                images: ['assets/images/products/4.jpg']
            }],
            store_reviews: [{
                image: 'assets/images/products/4_1.jpg',
                name: 'Ejemplo',
                comment: 'Este es un vestido increíble y totalmente chevre. Necesito vender el riñón que me queda para comprar este, ya que el otro riñón lo vendí para comprar mi iphone ... jajaja',
                rating: 5,
                images: ['assets/images/products/4.jpg', 'assets/images/products/4_1.jpg']
            }, {
                image: 'assets/images/products/4.jpg',
                name: 'Ejemplo',
                comment: 'Este es un vestido increíble y totalmente chevre. Necesito vender el riñón que me queda para comprar este, ya que el otro riñón lo vendí para comprar mi iphone ... jajaja',
                rating: 5,
                images: ['assets/images/products/4.jpg']
            }],
            sizing: {small: 10, okay: 80, large: 5},
            buyer_guarantee: 'La devolución de productos se debe realizar en un tiempo máximo de 30 días',
            sponsored: []
        },
        {
            name: 'Scarlett Dress',
            cost_price: 218,
            discount: 80,
            offer: false,
            stock: 69,
            description: 'Ejemplo data',
            image: ['assets/images/products/5.jpg', 'assets/images/products/5_1.jpg', 'assets/images/products/5_2.jpg'],
            rating_count: 11,
            store_rating_count: 11,
            currency: '$',
            bought: 234,
            size: 'M',
            color: 'Black',
            shipping: 250,
            rating: 4,
            store_rating: 18090,
            store_rate: 3,
            sold_by: 'Vendedor',
            specs: 'Este es un ejemplo, datos del producto',
            reviews: [{
                image: 'assets/images/products/5.jpg',
                name: 'Ejemplo',
                comment: 'Este es un vestido increíble y totalmente chevre. Necesito vender el riñón que me queda para comprar este, ya que el otro riñón lo vendí para comprar mi iphone ... jajaja',
                rating: 5,
                images: ['assets/images/products/5.jpg']
            }],
            store_reviews: [{
                image: 'assets/images/products/5_1.jpg',
                name: 'Ejemplo',
                comment: 'Este es un vestido increíble y totalmente chevre. Necesito vender el riñón que me queda para comprar este, ya que el otro riñón lo vendí para comprar mi iphone ... jajaja',
                rating: 5,
                images: ['assets/images/products/5.jpg', 'assets/images/products/5_1.jpg']
            }, {
                image: 'assets/images/products/5.jpg',
                name: 'Ejemplo',
                comment: 'Este es un vestido increíble y totalmente chevre. Necesito vender el riñón que me queda para comprar este, ya que el otro riñón lo vendí para comprar mi iphone ... jajaja',
                rating: 5,
                images: ['assets/images/products/5.jpg']
            }],
            sizing: {small: 10, okay: 80, large: 5},
            buyer_guarantee: 'La devolución de productos se debe realizar en un tiempo máximo de 30 días',
            sponsored: []
        },
        {
            name: 'Morrisson Dress',
            cost_price: 128,
            discount: 80,
            offer: false,
            stock: 69,
            description: 'Ejemplo data',
            image: ['assets/images/products/6.jpg', 'assets/images/products/6_1.jpg', 'assets/images/products/6_2.jpg'],
            rating_count: 11,
            store_rating_count: 11,
            currency: '$',
            bought: 567,
            size: 'M',
            color: 'Black',
            shipping: 250,
            rating: 4,
            store_rating: 18090,
            store_rate: 3,
            sold_by: 'Vendedor',
            specs: 'Este es un ejemplo, datos del producto',
            reviews: [{
                image: 'assets/images/products/6.jpg',
                name: 'Ejemplo',
                comment: 'Este es un vestido increíble y totalmente chevre. Necesito vender el riñón que me queda para comprar este, ya que el otro riñón lo vendí para comprar mi iphone ... jajaja',
                rating: 5,
                images: ['assets/images/products/6.jpg']
            }],
            store_reviews: [{
                image: 'assets/images/products/6_1.jpg',
                name: 'Ejemplo',
                comment: 'Este es un vestido increíble y totalmente chevre. Necesito vender el riñón que me queda para comprar este, ya que el otro riñón lo vendí para comprar mi iphone ... jajaja',
                rating: 5,
                images: ['assets/images/products/6.jpg', 'assets/images/products/6_1.jpg']
            }, {
                image: 'assets/images/products/6.jpg',
                name: 'Ejemplo',
                comment: 'Este es un vestido increíble y totalmente chevre. Necesito vender el riñón que me queda para comprar este, ya que el otro riñón lo vendí para comprar mi iphone ... jajaja',
                rating: 5,
                images: ['assets/images/products/6.jpg']
            }],
            sizing: {small: 10, okay: 80, large: 5},
            buyer_guarantee: 'La devolución de productos se debe realizar en un tiempo máximo de 30 días',
            sponsored: []
        },
        {
            name: 'Morrisson Dress',
            cost_price: 128,
            discount: 80,
            offer: true,
            stock: 69,
            description: 'Ejemplo data',
            image: ['assets/images/products/7.jpg', 'assets/images/products/7_1.jpg', 'assets/images/products/7_2.jpg'],
            rating_count: 11,
            store_rating_count: 11,
            currency: '$',
            bought: 137,
            size: 'M',
            color: 'Black',
            shipping: 250,
            rating: 4,
            store_rating: 18090,
            store_rate: 3,
            sold_by: 'Vendedor',
            specs: 'Este es un ejemplo, datos del producto',
            reviews: [{
                image: 'assets/images/products/7.jpg',
                name: 'Ejemplo',
                comment: 'Este es un vestido increíble y totalmente chevre. Necesito vender el riñón que me queda para comprar este, ya que el otro riñón lo vendí para comprar mi iphone ... jajaja',
                rating: 5,
                images: ['assets/images/products/7.jpg']
            }],
            store_reviews: [{
                image: 'assets/images/products/7_1.jpg',
                name: 'Ejemplo',
                comment: 'Este es un vestido increíble y totalmente chevre. Necesito vender el riñón que me queda para comprar este, ya que el otro riñón lo vendí para comprar mi iphone ... jajaja',
                rating: 5,
                images: ['assets/images/products/7.jpg', 'assets/images/products/7_1.jpg']
            }, {
                image: 'assets/images/products/7.jpg',
                name: 'Ejemplo',
                comment: 'Este es un vestido increíble y totalmente chevre. Necesito vender el riñón que me queda para comprar este, ya que el otro riñón lo vendí para comprar mi iphone ... jajaja',
                rating: 5,
                images: ['assets/images/products/7.jpg']
            }],
            sizing: {small: 10, okay: 80, large: 5},
            buyer_guarantee: 'La devolución de productos se debe realizar en un tiempo máximo de 30 días',
            sponsored: []
        },
        {
            name: 'Smith Dress',
            cost_price: 98,
            discount: 80,
            offer: false,
            stock: 69,
            description: 'Ejemplo data',
            image: ['assets/images/products/8.jpg', 'assets/images/products/8_1.jpg', 'assets/images/products/8_2.jpg'],
            rating_count: 11,
            store_rating_count: 11,
            currency: '$',
            bought: 236,
            size: 'M',
            color: 'Black',
            shipping: 250,
            rating: 4,
            store_rating: 18090,
            store_rate: 3,
            sold_by: 'Vendedor',
            specs: 'Este es un ejemplo, datos del producto',
            reviews: [{
                image: 'assets/images/products/8.jpg',
                name: 'Ejemplo',
                comment: 'Este es un vestido increíble y totalmente chevre. Necesito vender el riñón que me queda para comprar este, ya que el otro riñón lo vendí para comprar mi iphone ... jajaja',
                rating: 5,
                images: ['assets/images/products/8.jpg']
            }],
            store_reviews: [{
                image: 'assets/images/products/8.jpg',
                name: 'Ejemplo',
                comment: 'Este es un vestido increíble y totalmente chevre. Necesito vender el riñón que me queda para comprar este, ya que el otro riñón lo vendí para comprar mi iphone ... jajaja',
                rating: 5,
                images: ['assets/images/products/8.jpg', 'assets/images/products/8_1.jpg']
            }, {
                image: 'assets/images/products/8.jpg',
                name: 'Ejemplo',
                comment: 'Este es un vestido increíble y totalmente chevre. Necesito vender el riñón que me queda para comprar este, ya que el otro riñón lo vendí para comprar mi iphone ... jajaja',
                rating: 5,
                images: ['assets/images/products/8.jpg']
            }],
            sizing: {small: 10, okay: 80, large: 5},
            buyer_guarantee: 'La devolución de productos se debe realizar en un tiempo máximo de 30 días',
            sponsored: []
        },
    ];

    cart: Array<Cart> = [{product: this.products_1[0], quantity: 1}];

    recent = this.products_1;

    current_product: Product = this.products_1[0];

    current_user: User = {
        fname: 'Tanay',
        uid: 'ALSIOCSIIUAISUC',
        did: 'JIOU-ASBB-C871-0345',
        aid: 'ASBB-ASBB-C871-0345',
        lname: 'Toshniwal',
        email: 'byronsantiago@gmail.com',
        billing: [{card_number: '3124', expiry_date: '12/22'}, {card_number: '4564', expiry_date: '03/25'}],
        address: [{
            address_line_1: 'Urb. la Perla',
            address_line_2: 'Avenida Narcisa de Jesús',
            city: 'Guayaquil',
            last_name: 'Casa',
            phone_number: 999999999,
            zipcode: 12345,
            country: 'Ecuador',
            first_name: 'Segovia',
            state: 'Guayas'
        },
            {
                address_line_1: 'Urb. la Perla',
                address_line_2: 'Avenida Narcisa de Jesús',
                city: 'Guayaquil',
                last_name: 'Casa',
                phone_number: 999999999,
                zipcode: 12345,
                country: 'Ecuador',
                first_name: 'Segovia',
                state: 'Guayas'
            }]
    };

    wish_cash = {
        currency: '$',
        amount: 0.00,
        history: [{amount: 10}, {amount: 20}]
    };

    orders: Array<Orders> = [{
        product: this.products_1[0],
        amount: 123,
        billing_address: {
            address_line_1: 'ghar',
            address_line_2: 'ghar',
            city: 'jaipur',
            last_name: 'bond',
            phone_number: 1125532553,
            zipcode: 12345,
            country: 'India',
            first_name: 'James',
            state: 'Rajasthan'
        },
        shipping_address: {
            address_line_1: 'ghar',
            address_line_2: 'ghar',
            city: 'jaipur',
            last_name: 'bond',
            phone_number: 1125532553,
            zipcode: 12345,
            country: 'India',
            first_name: 'James',
            state: 'Rajasthan'
        },
        delivery_date: new Date(),
        id: 'B102013526',
        order_date: new Date(),
        status: 'Delivered',
        tax: 40
    }, {
        product: this.products_2[0],
        amount: 123,
        billing_address: {
            address_line_1: 'ghar',
            address_line_2: 'ghar',
            city: 'jaipur',
            last_name: 'bond',
            phone_number: 1125532553,
            zipcode: 12345,
            country: 'India',
            first_name: 'James',
            state: 'Rajasthan'
        },
        shipping_address: {
            address_line_1: 'ghar',
            address_line_2: 'ghar',
            city: 'jaipur',
            last_name: 'bond',
            phone_number: 1125532553,
            zipcode: 12345,
            country: 'India',
            first_name: 'James',
            state: 'Rajasthan'
        },
        delivery_date: new Date(),
        id: 'B102013526',
        order_date: new Date(),
        status: 'Delivered',
        tax: 40
    }];

    faqs = {
        'Shipping and Delivery': [
            {'How log does shipping take?': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse hendrerit sed lacus non condimentum. Sed sapien augue, ornare non eros eu, bibendum pulvinar purus. Aenean eu blandit elit, quis tincidunt turpis.'},
            {'How can I track my order?': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse hendrerit sed lacus non condimentum. Sed sapien augue, ornare non eros eu, bibendum pulvinar purus. Aenean eu blandit elit, quis tincidunt turpis.'},
            {'How much does shipping cost?': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse hendrerit sed lacus non condimentum. Sed sapien augue, ornare non eros eu, bibendum pulvinar purus. Aenean eu blandit elit, quis tincidunt turpis.'},
            {'Where does my order ship from?': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse hendrerit sed lacus non condimentum. Sed sapien augue, ornare non eros eu, bibendum pulvinar purus. Aenean eu blandit elit, quis tincidunt turpis.'},
            {'How do I change my shipping address?': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse hendrerit sed lacus non condimentum. Sed sapien augue, ornare non eros eu, bibendum pulvinar purus. Aenean eu blandit elit, quis tincidunt turpis.'}
        ],
        'Returns and Refunds': [
            {'How do I return a product?': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse hendrerit sed lacus non condimentum. Sed sapien augue, ornare non eros eu, bibendum pulvinar purus. Aenean eu blandit elit, quis tincidunt turpis.'},
            {'Can I exchange an item?': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse hendrerit sed lacus non condimentum. Sed sapien augue, ornare non eros eu, bibendum pulvinar purus. Aenean eu blandit elit, quis tincidunt turpis.'},
            {'How do I cancel my order?': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse hendrerit sed lacus non condimentum. Sed sapien augue, ornare non eros eu, bibendum pulvinar purus. Aenean eu blandit elit, quis tincidunt turpis.'},
            {'What\'s the status of my refund?': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse hendrerit sed lacus non condimentum. Sed sapien augue, ornare non eros eu, bibendum pulvinar purus. Aenean eu blandit elit, quis tincidunt turpis.'},
            {'Can you issue my refund to a different card if my card is canceled, lost, expired, or stolen?': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse hendrerit sed lacus non condimentum. Sed sapien augue, ornare non eros eu, bibendum pulvinar purus. Aenean eu blandit elit, quis tincidunt turpis.'},
            {'I cancelled my order. How will I receive my refund?': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse hendrerit sed lacus non condimentum. Sed sapien augue, ornare non eros eu, bibendum pulvinar purus. Aenean eu blandit elit, quis tincidunt turpis.'}
        ],
        'Payment, Pricing & Promotions': [
            {'How do I return a product?': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse hendrerit sed lacus non condimentum. Sed sapien augue, ornare non eros eu, bibendum pulvinar purus. Aenean eu blandit elit, quis tincidunt turpis.'},
            {'Can I exchange an item?': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse hendrerit sed lacus non condimentum. Sed sapien augue, ornare non eros eu, bibendum pulvinar purus. Aenean eu blandit elit, quis tincidunt turpis.'},
            {'How do I cancel my order?': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse hendrerit sed lacus non condimentum. Sed sapien augue, ornare non eros eu, bibendum pulvinar purus. Aenean eu blandit elit, quis tincidunt turpis.'},
            {'What\'s the status of my refund?': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse hendrerit sed lacus non condimentum. Sed sapien augue, ornare non eros eu, bibendum pulvinar purus. Aenean eu blandit elit, quis tincidunt turpis.'},
            {'Can you issue my refund to a different card if my card is canceled, lost, expired, or stolen?': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse hendrerit sed lacus non condimentum. Sed sapien augue, ornare non eros eu, bibendum pulvinar purus. Aenean eu blandit elit, quis tincidunt turpis.'},
            {'I cancelled my order. How will I receive my refund?': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse hendrerit sed lacus non condimentum. Sed sapien augue, ornare non eros eu, bibendum pulvinar purus. Aenean eu blandit elit, quis tincidunt turpis.'},
            {'What\'s the status of my refund?': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse hendrerit sed lacus non condimentum. Sed sapien augue, ornare non eros eu, bibendum pulvinar purus. Aenean eu blandit elit, quis tincidunt turpis.'},
            {'Can you issue my refund to a different card if my card is canceled, lost, expired, or stolen?': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse hendrerit sed lacus non condimentum. Sed sapien augue, ornare non eros eu, bibendum pulvinar purus. Aenean eu blandit elit, quis tincidunt turpis.'},
            {'I cancelled my order. How will I receive my refund?': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse hendrerit sed lacus non condimentum. Sed sapien augue, ornare non eros eu, bibendum pulvinar purus. Aenean eu blandit elit, quis tincidunt turpis.'}
        ],
        'Orders': [
            {'What\'s the status of my refund?': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse hendrerit sed lacus non condimentum. Sed sapien augue, ornare non eros eu, bibendum pulvinar purus. Aenean eu blandit elit, quis tincidunt turpis.'},
            {'Can you issue my refund to a different card if my card is canceled, lost, expired, or stolen?': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse hendrerit sed lacus non condimentum. Sed sapien augue, ornare non eros eu, bibendum pulvinar purus. Aenean eu blandit elit, quis tincidunt turpis.'},
            {'I cancelled my order. How will I receive my refund?': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse hendrerit sed lacus non condimentum. Sed sapien augue, ornare non eros eu, bibendum pulvinar purus. Aenean eu blandit elit, quis tincidunt turpis.'},
            {'What\'s the status of my refund?': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse hendrerit sed lacus non condimentum. Sed sapien augue, ornare non eros eu, bibendum pulvinar purus. Aenean eu blandit elit, quis tincidunt turpis.'},
            {'Can you issue my refund to a different card if my card is canceled, lost, expired, or stolen?': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse hendrerit sed lacus non condimentum. Sed sapien augue, ornare non eros eu, bibendum pulvinar purus. Aenean eu blandit elit, quis tincidunt turpis.'},
            {'I cancelled my order. How will I receive my refund?': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse hendrerit sed lacus non condimentum. Sed sapien augue, ornare non eros eu, bibendum pulvinar purus. Aenean eu blandit elit, quis tincidunt turpis.'}
        ],
        'Managing Your Account': [
            {'How do I return a product?': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse hendrerit sed lacus non condimentum. Sed sapien augue, ornare non eros eu, bibendum pulvinar purus. Aenean eu blandit elit, quis tincidunt turpis.'},
            {'Can I exchange an item?': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse hendrerit sed lacus non condimentum. Sed sapien augue, ornare non eros eu, bibendum pulvinar purus. Aenean eu blandit elit, quis tincidunt turpis.'},
            {'How do I cancel my order?': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse hendrerit sed lacus non condimentum. Sed sapien augue, ornare non eros eu, bibendum pulvinar purus. Aenean eu blandit elit, quis tincidunt turpis.'},
            {'What\'s the status of my refund?': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse hendrerit sed lacus non condimentum. Sed sapien augue, ornare non eros eu, bibendum pulvinar purus. Aenean eu blandit elit, quis tincidunt turpis.'},
            {'Can you issue my refund to a different card if my card is canceled, lost, expired, or stolen?': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse hendrerit sed lacus non condimentum. Sed sapien augue, ornare non eros eu, bibendum pulvinar purus. Aenean eu blandit elit, quis tincidunt turpis.'},
            {'I cancelled my order. How will I receive my refund?': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse hendrerit sed lacus non condimentum. Sed sapien augue, ornare non eros eu, bibendum pulvinar purus. Aenean eu blandit elit, quis tincidunt turpis.'}
        ],
        'User Feedback': [
            {'How do I return a product?': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse hendrerit sed lacus non condimentum. Sed sapien augue, ornare non eros eu, bibendum pulvinar purus. Aenean eu blandit elit, quis tincidunt turpis.'},
            {'Can I exchange an item?': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse hendrerit sed lacus non condimentum. Sed sapien augue, ornare non eros eu, bibendum pulvinar purus. Aenean eu blandit elit, quis tincidunt turpis.'},
            {'How do I cancel my order?': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse hendrerit sed lacus non condimentum. Sed sapien augue, ornare non eros eu, bibendum pulvinar purus. Aenean eu blandit elit, quis tincidunt turpis.'},
            {'What\'s the status of my refund?': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse hendrerit sed lacus non condimentum. Sed sapien augue, ornare non eros eu, bibendum pulvinar purus. Aenean eu blandit elit, quis tincidunt turpis.'},
            {'Can you issue my refund to a different card if my card is canceled, lost, expired, or stolen?': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse hendrerit sed lacus non condimentum. Sed sapien augue, ornare non eros eu, bibendum pulvinar purus. Aenean eu blandit elit, quis tincidunt turpis.'},
            {'I cancelled my order. How will I receive my refund?': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse hendrerit sed lacus non condimentum. Sed sapien augue, ornare non eros eu, bibendum pulvinar purus. Aenean eu blandit elit, quis tincidunt turpis.'}
        ],
        'Customer Support': [
            {'How do I return a product?': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse hendrerit sed lacus non condimentum. Sed sapien augue, ornare non eros eu, bibendum pulvinar purus. Aenean eu blandit elit, quis tincidunt turpis.'},
            {'Can I exchange an item?': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse hendrerit sed lacus non condimentum. Sed sapien augue, ornare non eros eu, bibendum pulvinar purus. Aenean eu blandit elit, quis tincidunt turpis.'},
            {'How do I cancel my order?': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse hendrerit sed lacus non condimentum. Sed sapien augue, ornare non eros eu, bibendum pulvinar purus. Aenean eu blandit elit, quis tincidunt turpis.'},
            {'What\'s the status of my refund?': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse hendrerit sed lacus non condimentum. Sed sapien augue, ornare non eros eu, bibendum pulvinar purus. Aenean eu blandit elit, quis tincidunt turpis.'},
            {'Can you issue my refund to a different card if my card is canceled, lost, expired, or stolen?': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse hendrerit sed lacus non condimentum. Sed sapien augue, ornare non eros eu, bibendum pulvinar purus. Aenean eu blandit elit, quis tincidunt turpis.'},
            {'I cancelled my order. How will I receive my refund?': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse hendrerit sed lacus non condimentum. Sed sapien augue, ornare non eros eu, bibendum pulvinar purus. Aenean eu blandit elit, quis tincidunt turpis.'}
        ]
    };
}
