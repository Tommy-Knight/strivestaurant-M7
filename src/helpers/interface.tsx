export interface shopTitle {
	title: string;
}

export interface pasta {
	id: number;
	name: string;
	image: string;
	category: string;
	label: string;
	price: string;
	description: string;
	comments: pastaComment[];
}

export interface pastaComment {
	id: number;
	rating: number;
	comment: string;
	author: string;
	date: string;
}

export interface reservations {
	_id?: string;
	name: string;
	phone: string;
	numberOfPersons: number;
	smoking: boolean;
	dateTime: string;
	specialRequests: string;
}

export interface selectedPasta {
	selectedPasta?: null;
}

export interface comment {
	id: number;
	comment: string;
}
