const coverImage = 'https://images-na.ssl-images-amazon.com/images/I/51aqYc1QyrL._SX379_BO1,204,203,200_.jpg';

export default class BookstoreService {
    data = [
        { id: 1, title: 'Production-Ready Microservices', author: 'Susan J. Flower', price: 32, coverImage },
        { id: 2, title: 'Pleasure', author: 'Michale T. Nygard', price: 45, coverImage },
    ];

    getBooks() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (Math.random() > 0.75) {
                    reject(new Error('Something bad happend'))
                }
                resolve(this.data);
            }, 700);

        });
    }
}