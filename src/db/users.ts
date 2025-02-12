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
export function postUser(){
	try {
		
	} catch (e) {
		
	}
}

// Update a part of the user in the database
export function patchUser(){
	try {
		
	} catch (e) {
		
	}
}

// Delete a user from the database
export function deleteUser(){
	try {
		
	} catch (e) {
		
	}
}