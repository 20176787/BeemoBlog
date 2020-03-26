import {NavigationActions} from 'react-navigation';

let _navigator;

function setTopLevelNavigator(navigatorRef) {
    _navigator = navigatorRef;
}

function navigate(routeName, params, key) {
    _navigator.dispatch(
        NavigationActions.navigate({
            routeName,
            params,
            key
        })
    );
}

function setParams(params, key) {
    _navigator.dispatch(
        NavigationActions.setParams({
            params,
            key
        })
    )
}

function back(key) {
    _navigator.dispatch(
        NavigationActions.back({
            key,
        })
    )
}

// add other navigation functions that you need and export them

export default {
    navigate,
    setTopLevelNavigator,
    setParams,
    back,
};
