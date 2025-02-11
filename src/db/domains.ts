import { PrismaClient, Prisma } from '@prisma/client';
import * as types from './db_types'

const prisma = new PrismaClient();

// Search for a domain in the database.
export async function getDomains(query: types.domainQuery = {}){
	try {
		let whereObject : types.domainQuery = {
			id: query.id,
			name: query.name,
			tags: query.tags,
			visibility: query.visibility,
			managers: query.managers,
			maturity: query.maturity,
			protocolVersion: query.protocolVersion,
		}

		let response = await prisma.domain.findMany({
			where: whereObject as Object,
		});

		return {success: true, response: response};
	} catch (e) {
		console.error('Error while searching for domains');
		return {success: false, error: e};
	}
}

// Create a new domain and insert them into the database
export async function postDomain(query: types.postDomain){
	try {
		let dataObject : types.postDomain = {
			name: query.name,
			description: query.description,
			tags: query.tags,
			visibility: query.visibility,
			address: query.address,
			port: query.port,
			protocolVersion: query.protocolVersion,

			owner: {
				connect: {
					id: query.owner
				}
			}
		}

		// TODO: Validate query
		// TODO: Permission checks
		// TODO: Fix typechecking
		await prisma.domain.create({ data: dataObject as any });
		return {success: true, domain: dataObject as object };

	} catch (e) {
		// TODO: Make this a separate file?
		if (e instanceof Prisma.PrismaClientKnownRequestError) {
			if (e.code === "P2002") {
				// Constraint failures
				// Typically this is when we try to create some flavor of a duplicate entry.
				return {success: false, error: "Domain already exists with that name."}
			}
			return {success: false, error: e.message};
		}

		return {success: false, error: "Unknown Error"};
	}
}

// Update a part of the domain in the database
export function patchDomain(){}

// Delete a domain from the database
export function deleteDomain(){}