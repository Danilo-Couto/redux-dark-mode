// ato I - inicializando o estado
const INITIAL_STATE = { theme: 'light' };

// Definir quais as mudancas do estado
// ACTION CREATOR {type: 'CHANGE_THEME'}
function changeTheme(){
    return {type: 'CHANGE_THEME'}
};

// Definir o que as ações vão mudar no estado
// REDUCER
function reducer(state = INITIAL_STATE, action){ //state=initial_state em caso de default
    switch(action.type){
        case 'CHANGE_THEME': 
            return {
            ...state, // neste caso, não precisa
            theme: state.theme === 'light' ? 'dark' : 'light'
            }
        default: 
            return state
    }
};

// ter em maos o gerenciador do estado, para lidar com as mudancas dele, ou seja o STORE
const Redux = require('redux');
const store = Redux.createStore(reducer);

// Definir o que irá mudar na aplicacao de acordo com as mudanca do estado: a classe deve mudar
// SUBSCRIBE
store.subscribe(() => {
    const state = store.getState();
    const wrapper = document.getElementById('wrapper');
    wrapper.className = state.theme;
});

// Disperar as acoes que mudarao o estado
// DISPATCH
const button = document.getElementById('light-switch');
button.addEventListener('click', () =>{
    store.dispatch(changeTheme());
});