// import { PrismaClient } from '@prisma/client'
import express from 'express';
import * as types from './db_types'

// const prisma = new PrismaClient();
const router = express.Router();

import * as users from './users';
import * as domains from './domains';
import * as places from './places'

export const getDomains = () => domains.getDomain;
export const postDomain = () => domains.postDomain;
export const patchDomain = () => domains.patchDomain;
export const deleteDomain = () => domains.deleteDomain;

export const getPlace = () => places.getPlace;
// export const postPlace = () => places.post;
// export const patchPlace = () => places.patch;
// export const deletePlace = () => places.delete;

// export const getUsers = () => users.get;
// export const postUser = () => users.post;
// export const patchUser = () => users.patch;
// export const deleteUser = () => users.delete;

// export const getUsers = (query: types.userQuery) => users.getUsers;
// export function getPlaces(query: types.placeQuery = {}){}