import {Stock} from '../repositories/stock';
import {StockData} from '../data/data';

describe('Stock', () => {
    const stock = new Stock(StockData);

    it('should return all stocks', () => {
        const stocks = stock.getStocks();
        expect(stocks).toEqual(StockData);
    });

    it('should return stock by date', () => {
        const stockByDate = stock.getstockByDate("2020-01-01");
        expect(stockByDate).toEqual(StockData[0]);
    });

    it('should throw an error if date is invalid', () => {
        expect(() => stock.getstockByDate("2020-01-32")).toThrowError("Invalid date format");
    });
});