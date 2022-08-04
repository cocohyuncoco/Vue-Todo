
const storage = {
    // 원격 API를 간편하게 호출할수 있도록 브라우저에서 제공하는 함수
    fetch() {
        const arr = [];
        if (localStorage.length > 0) {
            for (let i = 0; i < localStorage.length; i++) {
                if (localStorage.key(i) !== 'loglevel:webpack-dev-server') {
                    arr.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
                }
            }
        }
        return arr;
    },
}

const state = {
    todoItems: storage.fetch()
};

const getters = {
    storedTodoItems(state){
        return state.todoItems;
    }
};

const mutations = {
     addOneItem(state, todoItem){
        var obj = { completed: false, item: todoItem };
        localStorage.setItem(todoItem, JSON.stringify(obj));
        state.todoItems.push(obj);
    },
    remobvOneItem(state, payload){
        localStorage.removeItem(payload.todoItem.item);
        state.todoItems.splice(payload.index, 1); //idx 데이터 하나 삭제
    },  
    toggleOneItem(state, payload){
        state.todoItems[payload.index].completed = !state.todoItems[payload.index].completed;

        // 로컬 스토리지 데이터를 갱신
        localStorage.removeItem(payload.todoItem.item); //아이템 지우기
        localStorage.setItem(payload.todoItem.item, JSON.stringify(payload.todoItem)); //아이템 다시 세팅
    },  
    clearAllItem (state){
        localStorage.clear();
        state.todoItems = [];
    }
};


export default{
    state,
    getters,
    mutations
}