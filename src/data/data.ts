export interface IStock {
    name: string;
    price: number;
    date: string;
}

export const StockData: IStock[] = [
    {
        "name": "stock1",
        "price": 100,
        "date": "2020-01-01"
    },
    {
        "name": "stock2",
        "price": 200,
        "date": "2020-01-02"
    },
    {
        "name": "stock3",
        "price": 300,
        "date": "2020-01-03"
    }
];
