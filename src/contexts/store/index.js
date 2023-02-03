import { makeAutoObservable } from "mobx";

export default class Store {
	isAuth = false;

	constructor() {
		makeAutoObservable(this);
	}

	setAuth(isAuth) {
		this.isAuth = isAuth;
	}
}