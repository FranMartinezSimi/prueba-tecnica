import { IStock } from "../data/data";

export interface IStockRepository {
    getStocks(): IStock[];
    getstockByDate(date: String): IStock | undefined;
}
