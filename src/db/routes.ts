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
export const postPlace = () => places.postPlace;
export const patchPlace = () => places.patchPlace;
export const deletePlace = () => places.deletePlace;

export const getUser = () => users.getUser;
export const postUser = () => users.postUser;
export const patchUser = () => users.patchUser;
export const deleteUser = () => users.deleteUser;
