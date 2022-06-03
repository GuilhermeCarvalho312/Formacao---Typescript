import { Negociacao } from "../models/negociacao.js";
export class NegotiationsService {
    getNegotiationsOfTheDay() {
        return fetch("http://localhost:8080/dados")
            .then((response) => {
            return response.json();
        })
            .then((data) => {
            return data.map((todayData) => {
                return new Negociacao(new Date(), todayData.vezes, todayData.montante);
            });
        });
    }
}
