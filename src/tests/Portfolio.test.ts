import { PortFolio } from '../services/Portfolio';
import { Stock } from '../repositories/stock';
import { StockData } from '../data/data';


describe('Portfolio', () => {
    const stock = new Stock(StockData);
    const portfolio = new PortFolio(stock);

    it('should calculate the profit', () => {
        const profit = portfolio.calculateProfit("2020-01-01", "2020-01-03");
        expect(profit).toBe(200);
    });

    it('should calculate the anualized profit', () => {
        const anualizedProfit = portfolio.getAnualizedProfit("2020-01-01", "2020-01-03");
        expect(anualizedProfit).toBe(365);
    });
});