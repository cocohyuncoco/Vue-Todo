export { addOneItem, remobvOneItem, toggleOneItem, clearAllItem }

// 객체 안이 아니라 각각의 속성이됐다.

const addOneItem = (state, todoItem) => {
    var obj = { completed: false, item: todoItem };
    localStorage.setItem(todoItem, JSON.stringify(obj));
    state.todoItems.push(obj);
}

const remobvOneItem = (state, payload) => {
    localStorage.removeItem(payload.todoItem.item);
    state.todoItems.splice(payload.index, 1); //idx 데이터 하나 삭제
}

const toggleOneItem = (state, payload) => {
    state.todoItems[payload.index].completed = !state.todoItems[payload.index].completed;

    // 로컬 스토리지 데이터를 갱신
    localStorage.removeItem(payload.todoItem.item); //아이템 지우기
    localStorage.setItem(payload.todoItem.item, JSON.stringify(payload.todoItem)); //아이템 다시 세팅
}

const clearAllItem = (state) => {
    localStorage.clear();
    state.todoItems = [];
}



