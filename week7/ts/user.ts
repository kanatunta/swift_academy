export default class User {
	name: string;
	phone: string;
	constructor(name: string, phone: string) {
		this.name = name;
		this.phone = phone;
	}
	getName(): string {
		return this.name;
	}
}
