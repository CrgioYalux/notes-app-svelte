enum CHARS {
	ALPHA = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ',
	NUM = '0123456789',
}

export const CreateId = (length: number) => {
	let chars = CHARS.ALPHA + CHARS.NUM;
	let password = '';
	for (let i = 0; i < length; i++) {
		password += chars.charAt(Math.floor(Math.random() * chars.length));
	}
	return password;
};
