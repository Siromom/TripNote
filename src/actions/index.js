export const CHANGE_NAME = 'CHANE_NAME';
export const CHANGE_DEPART = 'CHANGE_DEPART';
export const CHANGE_ARRIVE = 'CHANGE_ARRIVE';

export const TOTAL = 'TOTAL';
export const TOTAL_MINUS = 'TOTAL_MINUS';
export const USED_TOTAL = 'USED_TOTAL';

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

export function addBuget(value) {
    return {
        type: TOTAL,
        item: value
    }
}

export function delBuget(value) {
    return {
        type: TOTAL_MINUS,
        item: value
    }
}

export function addUsed(value) { 
    return {
        type: USED_TOTAL,
        item: value
    }
}
