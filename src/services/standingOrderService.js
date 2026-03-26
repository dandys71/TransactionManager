import { StandingOrder } from '../models/standingOrder.js';

//export = zpřístupníš proměnnou/funkci z jednoho souboru pro použití v jiném.
//Normální funkce vrací hodnotu hned.
//Async funkce vrací Promise (slib), protože dělá něco „na pozadí“ (čeká na síť/DB/časovač).
//Pokud chceme počkat na výsledek, musíme tam, kde funkci voláme použít před konkrétní funkcí klíčové slovo await
export async function getStandingOrderById(standingOrderId) {
    return StandingOrder.get(standingOrderId);

}
export async function updateStandingOrder(standingOrder) {
    return StandingOrder.update(standingOrder);
}
export async function deleteStandingOrder(standingOrderId) {
    return StandingOrder.delete(standingOrderId);
}

export async function createStandingOrder(standingOrder) {
    return StandingOrder.create(standingOrder);

}

