import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import 'normalize.css/normalize.css'; // css reset
import './styles/styles.scss'; // used to import CSS
import 'react-dates/lib/css/_datepicker.css';

import AppRouter, { history }  from './routers/AppRouter'

import configureStore from './store/configureStore';
import './firebase/firebase';
import { firebase } from './firebase/firebase'
import { login, logout } from './actions/auth';
import LoadingPage from './components/LoadingPage';

const store = configureStore();

const unsubscribe = store.subscribe(() =>{ 
    const state = store.getState();
})


const jsx = (
    <Provider store={store}>{AppRouter}</Provider> 
);

ReactDOM.render(<LoadingPage />, document.getElementById('app'))

let hasRendered = false;

const renderApp = () =>{
    if(!hasRendered){
        ReactDOM.render(jsx, document.getElementById('app'));
        hasRendered = true;
    }
};

firebase.auth().onAuthStateChanged((user)=>{
    if(user){
        store.dispatch(login(user.uid));
            renderApp();
            if(history.location.pathname === '/'){
                history.push('/dashboard');
        }
    } else{
        renderApp();
        store.dispatch(logout())
        history.push('/');
    };
});





