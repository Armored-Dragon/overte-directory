// import { PrismaClient } from '@prisma/client'
import express from 'express';
import * as types from './db_types'

// const prisma = new PrismaClient();
const router = express.Router();

import * as users from './users';
import * as domains from './domains';

// export const getUsers = (query: types.userQuery) => users.getUsers;
export const getDomains = () => domains.getDomains;
export const postDomain = () => domains.postDomain;
export const patchDomain = () => domains.patchDomain;

// export function getPlaces(query: types.placeQuery = {}){}