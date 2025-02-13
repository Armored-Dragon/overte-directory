import * as crypto from "crypto";

const sensitiveKeys = [ "apiKey", "email"];

export function hashText(password: string) {
    const salt = crypto.randomBytes(16).toString('hex'); 	// Generate a random salt
    const iterations = 100000; 								// Number of iterations
    const keyLength = 64; 									// Length of the derived key
    const digest = 'sha512'; 								// Hashing algorithm

    const hash = crypto.pbkdf2Sync(password, salt, iterations, keyLength, digest).toString('hex');

	return `${salt}:${hash}`
}

export function compareHashWithPlainText(passwordHash: string, passwordSalt: string, password: string) {
    const hash = crypto.pbkdf2Sync(password, passwordSalt, 100000, 64, 'sha512').toString('hex');
    return hash === passwordHash;
}

export function removeSensitive(obj: any, keep: string[] = []) {

	// Remove array
	if (Array.isArray(obj)) {
		let sanitizedArray : any[] = [];

		for (let i = 0; obj.length > i; i++) {
			sanitizedArray.push(removeSingle(obj[i]));
		}

		return sanitizedArray;
	}

	// Remove single
	if (typeof obj === "object") {
		return removeSingle(obj);
	}

	// Error
	// This should never happen, if it does, fix the error.
	console.error("Error sanitizing packet. Returning nothing.");
	return null;

	function removeSingle(obj: object) {
		let sanitizedObject : any = {...obj}; 			// New work object
		let keys = Object.keys(sanitizedObject); 		// All keys for the object;
	
		for (let i = 0; keys.length > i; i++) {
			let key = keys[i];
			if (sensitiveKeys.includes(key) && !keep.includes(key)) {
				delete sanitizedObject[key];
			}
		}
		return sanitizedObject;
	}
}