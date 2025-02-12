import { PrismaClient, Prisma } from '@prisma/client';
import express from 'express';
import * as types from './db_types'

const prisma = new PrismaClient();

// Search for a user in the database.
export async function getUser(query: types.getUser = {}){
	try {
		let whereObject : types.getUser = {
			id: query.id,
			username: query.username,
			email: query.email,
			availability: query.availability,
			roles: query.roles,
		};

		let response = await prisma.user.findMany({
			where: whereObject as Object,
		});

		return {success: true, response: response};
	} catch (e) {
		console.error(e);
		return {success: false, error: e};
	}
}


// Create a new user and insert them into the database
export async function postUser(query: types.postUser){
	try {
		let dataObject : types.postUser = {
			username: query.username,
			email: query.email,
			roles: query.roles,
			password: query.password
		};

		// TODO: Hash password

		const response = await prisma.user.create({ data: dataObject as any });
		return {success: true, response: response};
	} catch (e) {
		console.error(e);
		return {success: false, error: e};
	}
}

// Update a part of the user in the database
export async function patchUser(query: types.patchUser){
	try {
		let dataObject : types.patchUser = {
			id: query.id,
			username: query.username,
			email: query.email,
			password: query.password,
			availability: query.availability,
			roles: query.roles,
			// connections: query.connections
		};

		// FIXME: Connections
		// Connections can be added or removed, special handling is required.

		// TODO: Validate query
		// TODO: Permission checks
		// TODO: Fix typechecking
		const response = await prisma.user.update({ where: { id: dataObject.id }, data: dataObject as object });

		return {success: true, user: response as object };
	} catch (e) {
		console.error(e);
		return {success: false, error: e};
	}
}

// Delete a user from the database
export async function deleteUser(query: types.deleteUser){
	try {
		let dataObject : types.deleteUser = {
			id: query.id
		};

		// TODO: Permission checks
		// TODO: Fix typechecking
		const response = await prisma.user.delete({ where: dataObject });
		return {success: true, user: response as object };
	} catch (e) {
		console.error(e);
		return {success: false, error: e};
	}
}