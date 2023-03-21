import axios from "axios";

class CardService {
    getCardsByUsername(username) {
        return axios.get(`http://localhost:8080/ccms/cards/${username}`);
    }
    
    createNewCard(creditCard) {
        return axios.post("http://localhost:8080/ccms/new-card", creditCard);
    }

    getCardInfoByCardNumber(cardNumber) {
        return axios.get(`http://localhost:8080/ccms/card-info/${cardNumber}`);
    }
}
export default new CardService();