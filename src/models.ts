export interface IProduct {
    id?: number,
    title: string,
    price: number,
    description: string,
    category: string,
    image: string,
    rating:{
            rate: number,
            count: number
        }
}

export interface IPosts {
    postId: number,
    id: number,
    name: string,
    email: string,
    body: string
}