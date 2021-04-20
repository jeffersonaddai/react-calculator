import { EXPRESSION_UPDATE_ACTION, NEW_EXPRESSION_KEY } from '../expression';

export const TOGGLE_MEMORY_ACTION = 'TOGGLE_MEMORY_ACTION';
export const ADD_MEMORY_ACTION = 'ADD_MEMORY_ACTION';
export const SUB_MEMORY_ACTION = 'SUB_MEMORY_ACTION';
export const CLEAR_MEMORY_ACTION = 'CLEAR_MEMORY_ACTION';
export const MEMORY_ITEM_KEY = 'MEMORY_ITEM_KEY';

export const toggleMemory = () => ({ type: TOGGLE_MEMORY_ACTION });

export const addMemory = newExp => ({
    type: ADD_MEMORY_ACTION,
    payload: { [MEMORY_ITEM_KEY]: newExp }
});
export const subMemory = newExp => ({
    type: SUB_MEMORY_ACTION,
    payload: { [MEMORY_ITEM_KEY]: newExp }
});
export const clearMemory = newExp => ({
    type: CLEAR_MEMORY_ACTION,
    payload: { [MEMORY_ITEM_KEY]: newExp }
});

export const showMemoryReducer = (state = false, { type }) => {
    switch (type) {
        case TOGGLE_MEMORY_ACTION:
            return !state;
        default:
            return state;
    }
};

export const addToMemoryItem = (item, memory) => {
    if (memory !== null) {
        return parseFloat(memory) + parseFloat(item);
    }
    return item;
};

export const subFromMemoryItem = (item, memory) => {
    if (memory !== null) {
        return parseFloat(memory) - parseFloat(item);
    }
    return item;
};

export const clearMemoryItem = (item, memory) => {
    if (memory !== null) {
        return 0;
    }
    return item;
};

export const memoryReducer = (memory = 0, { type, payload }) => {
    switch (type) {
        case ADD_MEMORY_ACTION:
            return addToMemoryItem(payload[MEMORY_ITEM_KEY], memory);
        case SUB_MEMORY_ACTION:
            return subFromMemoryItem(payload[MEMORY_ITEM_KEY], memory);
        case CLEAR_MEMORY_ACTION:
            return clearMemoryItem(payload[MEMORY_ITEM_KEY], memory);
        default:
            return memory;
    }
}
