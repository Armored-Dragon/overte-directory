import { PrismaClient, Prisma } from '@prisma/client';
import * as types from './db_types'

const prisma = new PrismaClient();

// Search for a domain in the database.
export async function getDomain(query: types.domainQuery = {}){
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
		const response = await prisma.domain.create({ data: dataObject as any });
		return {success: true, domain: response as object };
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
export async function patchDomain(query : types.patchDomain){
	try {
		let dataObject : types.patchDomain = {
			id: query.id,
			name: query.name,
			description: query.description,
			tags: query.tags,
			visibility: query.visibility,
			address: query.address,
			port: query.port,
			managers: query.managers,
			maturity: query.maturity,
			protocolVersion: query.protocolVersion
		}

		// TODO: Validate query
		// TODO: Permission checks

		const response = await prisma.domain.update({ where: { id: dataObject.id }, data: { ...dataObject as object } });

		return {success: true, domain: response};
	} catch (e) {
		return {success: false, error: e};
	}
}

// Delete a domain from the database
export async function deleteDomain(query : types.deleteDomain){
	try {
		let dataObject : types.deleteDomain = {
			id: query.id
		}

		const response = await prisma.domain.delete({ where: { id: dataObject.id } });

		console.log(response);

		return { success: true };
	}
	catch (e) {
		// TODO: Make this a separate file?
		if (e instanceof Prisma.PrismaClientKnownRequestError) {
			if (e.code === "P2025") {
				// Not found error
				return {success: false, error: "Domain does not exist."}
			}
			return {success: false, error: e.message};
		}

		return {success: false, error: "Unknown Error"};
	}
}