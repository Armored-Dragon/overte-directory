import { PrismaClient } from '@prisma/client';
import * as types from './db_types'

const prisma = new PrismaClient();

// Search for a domain in the database.
export async function getDomains(query: types.domainQuery = {}){
	try {
		let response = await prisma.domain.findMany({
			where: {
				name: query.name,
			},
		});

		return {success: true, response: response};
	} catch (e) {
		console.error('Error while searching for domains');
		return {success: false, error: e};
	}
}

// Create a new domain and insert them into the database
export function postDomain(){}

// Update a part of the domain in the database
export function patchDomain(){}

// Delete a domain from the database
export function deleteDomain(){}