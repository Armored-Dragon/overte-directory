// import { PrismaClient } from '@prisma/client'
import express from 'express';
import * as types from './db_types'

// const prisma = new PrismaClient();
const router = express.Router();

import * as users from './users';
import * as domains from './domains';

// export const getUsers = (query: types.userQuery) => users.getUsers;
export const getDomains = (query: types.domainQuery) => domains.getDomains;
export const postDomain = (query: types.domainQuery) => domains.postDomain;


// export function getPlaces(query: types.placeQuery = {}){}