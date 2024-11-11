import { IStockRepository } from "../interfaces/ISTockRepository";

export class PortFolio {
    private stockRepository: IStockRepository;

    constructor(stock: IStockRepository) {
        this.stockRepository = stock;
    }

    calculateProfit(startDate: string, endDate: string): number {
        const stocks = this.stockRepository.getStocks();

        const startValue = stocks.filter(stock => stock.date === startDate).reduce((acc, stock) => acc + stock.price, 0);
        const endValue = stocks.filter(stock => stock.date === endDate).reduce((acc, stock) => acc + stock.price, 0);

        return endValue - startValue;
    }

    //TODO: Bonus track

    getAnualizedProfit(startDate: string, endDate: string): number {
        const profit = this.calculateProfit(startDate, endDate);
        const stocks = this.stockRepository.getStocks();
        const startValue = stocks.filter(stock => stock.date === startDate).reduce((acc, stock) => acc + stock.price, 0);

        const start = new Date(startDate);
        const end = new Date(endDate);

        const days = (end.getTime() - start.getTime()) / (1000 * 3600 * 24);

        return (profit / startValue) / (days / 365);
        
    }
}