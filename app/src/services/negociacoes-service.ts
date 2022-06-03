import { NegotiationsOfTheDay } from "../interfaces/negociacao-do-dia.js";
import { Negociacao } from "../models/negociacao.js";

export class NegotiationsService {
  public getNegotiationsOfTheDay(): Promise<Negociacao[]> {
    //API Fetch para buscar dados, processamento assíncrono
    return fetch("http://localhost:8080/dados")
      .then((response) => {
        return response.json();
      })
      .then((data: NegotiationsOfTheDay[]) => {
        return data.map((todayData) => {
          return new Negociacao(
            new Date(),
            todayData.vezes,
            todayData.montante
          );
        });
      });
  }
}
