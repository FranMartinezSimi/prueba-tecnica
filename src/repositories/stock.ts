import { IStock} from "../data/data";
import { IStockRepository } from "../interfaces/ISTockRepository";

export class Stock implements IStockRepository {
    private stockData: IStock[];

    constructor(stockData: IStock[]) {
        this.stockData = stockData;
    }

    getStocks(): IStock[] {
        return this.stockData;
    }

    getstockByDate(dateCalled: string): IStock | undefined {
        try {
            const newDate = new Date(dateCalled);
            return this.stockData.find(stock => stock.date === newDate.toISOString().split('T')[0]);

        } catch (error) {
            throw new Error("Invalid date format");
        }
    }
}
