export const CHANGE_NAME = 'CHANE_NAME';
export const CHANGE_DEPART = 'CHANGE_DEPART';
export const CHANGE_ARRIVE = 'CHANGE_ARRIVE';

export function changeName(value) {
    return {
        type: CHANGE_NAME,
        place: value
    }
}

export function changeDepart(value) {
    return {
        type: CHANGE_DEPART,
        depart: value
    }
}

export function changeArrive(value) {
    return {
        type: CHANGE_ARRIVE,
        arrive: value
    }
}