import { PrismaClient, Prisma } from '@prisma/client';
import * as types from './db_types'

const prisma = new PrismaClient();

// Search for a domain in the database.
export async function getPlace(query: types.getPlace = {}){
	try {
		let whereObject : types.getDomain = {
			id: query.id,
			name: query.name,
			tags: query.tags,
			visibility: query.visibility,
			managers: query.managers,
			maturity: query.maturity,
		}

		let response = await prisma.place.findMany({
			where: whereObject as Object,
		});

		return {success: true, response: response};
	} catch (e) {
		console.error('Error while searching for domains');
		return {success: false, error: e};
	}
}
