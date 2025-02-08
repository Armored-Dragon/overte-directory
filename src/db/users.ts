import { PrismaClient } from '@prisma/client';
import express from 'express';
import * as types from './db_types'

// Search for a user in the database.
export function getUsers(query: types.userQuery = {}){}

// Create a new user and insert them into the database
export function postUser(){}

// Update a part of the user in the database
export function patchUser(){}

// Delete a user from the database
export function deleteUser(){}