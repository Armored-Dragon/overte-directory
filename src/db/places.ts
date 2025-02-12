import { PrismaClient, Prisma } from '@prisma/client';
import * as types from './db_types'

const prisma = new PrismaClient();

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

export async function postPlace(query: types.postPlace){
	try {
		let dataObject : types.postPlace = {
			name: query.name,
			description: query.description,
			tags: query.tags,
			visibility: query.visibility,
			managers: query.managers,
			maturity: query.maturity,
			media: query.media,
			thumbnail: query.thumbnail,
			capacity: query.capacity,

			domain: {
				connect: {
					id: query.domain
				}
			}
		}

		// TODO: Validate query
		// TODO: Permission checks
		// TODO: Fix typechecking
		const response = await prisma.place.create({ data: {...dataObject as any } });

		return {success: true, place: response as object };
	} catch (e) {
		console.error(e);
		// TODO: Make this a separate file?
		if (e instanceof Prisma.PrismaClientKnownRequestError) {
			console.log(e.code);
			if (e.code === "P2002") {
				// Constraint failures
				// Typically this is when we try to create some flavor of a duplicate entry.
				return {success: false, error: "Place already exists with that name in the domain."}
			}
			return {success: false, error: e.message};
		}

		return {success: false, error: "Unknown Error"};
	}
}

export async function patchPlace(query: types.patchPlace){
	try {
		let dataObject : types.patchPlace = {
			id: query.id,
			name: query.name,
			description: query.description,
			tags: query.tags,
			visibility: query.visibility,
			managers: query.managers,
			maturity: query.maturity,
			media: query.media,
			thumbnail: query.thumbnail,
			capacity: query.capacity,
		}

		// TODO: Validate query
		// TODO: Permission checks
		// TODO: Fix typechecking
		const response = await prisma.place.update({ where: { id: dataObject.id }, data: { ...dataObject as object } });

		return {success: true, place: response as object };
	} catch (e) {
		console.error(e);
		// TODO: Make this a separate file?
		if (e instanceof Prisma.PrismaClientKnownRequestError) {
			console.log(e.code);
			if (e.code === "P2002") {
				// Constraint failures
				// Typically this is when we try to create some flavor of a duplicate entry.
				return {success: false, error: "Place already exists with that name in the domain."}
			}
			return {success: false, error: e.message};
		}

		return {success: false, error: "Unknown Error"};
	}
}

export async function deletePlace(query: types.deletePlace){
	try {
		let dataObject : types.deletePlace = {
			id: query.id
		}

		// TODO: Validate query
		// TODO: Permission checks
		// TODO: Fix typechecking
		const response = await prisma.place.delete({ where: dataObject });

		return {success: true, place: response as object };
	} catch (e) {
		console.error(e);
		// TODO: Make this a separate file?
		if (e instanceof Prisma.PrismaClientKnownRequestError) {
			if (e.code === "P2025") {
				// Not found error
				return {success: false, error: "Place does not exist."}
			}
			return {success: false, error: e.message};
		}

		return {success: false, error: "Unknown Error"};
	}
}