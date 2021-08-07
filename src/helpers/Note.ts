import { CreateId } from '../helpers/CreateId';

export type Note = {
	title: string;
	content: string;
	date: string;
	author: string;
	id: string;
};

export class Notes {
	initialNotes: Note[];

	constructor(initialNotes: Note[] = []) {
		this.initialNotes = initialNotes;
	}

	add({
		title,
		content,
		author,
	}: {
		title: string;
		content: string;
		author: string;
	}): void {
		this.initialNotes = [
			...this.initialNotes,
			{
				title,
				content,
				author,
				id: CreateId(10),
				date: new Date().toDateString(),
			},
		];
	}
	delete(deleteNote: Note): void {
		this.initialNotes = this.initialNotes.filter((note) => note !== deleteNote);
	}
	update(updateNote: Note): void {
		this.initialNotes = this.initialNotes.map((note) =>
			note.id === updateNote.id ? updateNote : note,
		);
	}
	getAll(): Note[] {
		return this.initialNotes;
	}
	getOne(id: string): Note {
		return this.initialNotes.find((note) => note.id === id);
	}
}
