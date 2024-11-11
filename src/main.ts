import { Stock } from "./repositories/stock";
import { StockData } from "./data/data";
import { PortFolio } from "./services/Portfolio";

const stock = new Stock(StockData);
const portfolio = new PortFolio(stock);
const profit = portfolio.calculateProfit("2020-01-01", "2020-01-03");

console.log("El beneficio calculado en las fechas es de: ", profit);

const anualizedProfit = portfolio.getAnualizedProfit("2020-01-01", "2020-01-03");

console.log("El beneficio anualizado calculado en las fechas es de: ", anualizedProfit);