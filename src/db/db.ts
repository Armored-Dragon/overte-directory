// import { PrismaClient } from '@prisma/client'
import express from 'express';
import * as types from './db_types'

// const prisma = new PrismaClient();
const router = express.Router();

import * as users from './users';

export const getUsers = (query: types.userQuery) => users.getUsers;

// export function getDomains(query: types.domainQuery = {}){}

// export function getPlaces(query: types.placeQuery = {}){}