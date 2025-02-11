// GET request query types for returning data from the database
export type userQuery = {
	id?: string, 
	username?: string, 
	email?: string,
	availability?: string[],
	roles?: DirectoryRole[]				// This is a directory level list of roles that a user has. Do not confuse this for domain level roles.
}

export type domainQuery = {
	id?: string,
	name?: string,
	tags?: string[],
	visibility?: DomainVisibility[],
	managers?: string[],
	maturity?: Maturity[],
	protocolVersion?: string,
}

export type placeQuery = {
	id?: string,
	name?: string,
	tags?: string[],
	visibility?: DomainVisibility[],
	managers?: string[],
	maturity?: Maturity[],
}

// POST request for creating data for the database
export type postUser = {
	username: string, 
	email: string,
	password: string,
}

// PATCH request for updating data for the database
export type patchUser = {
	username?: string, 
	email?: string,
	password?: string,
	availability?: UserAvailability,
	roles?: DirectoryRole[],
	connections?: UserConnection[],
}

export type postDomain = {
	name: string, 
	description?: string,
	tags?: string[],
	visibility?: DomainVisibility[],
	address: string,
	port: string,
	managers?: string[],
	maturity?: Maturity[],
	owner: any,
	protocolVersion: string,
}
export type patchDomain = {
	id: string,
	name?: string, 
	description?: string,
	tags?: string[],
	visibility?: DomainVisibility[],
	address?: string,
	port?: string,
	managers?: string[],
	maturity?: Maturity[],
	protocolVersion?: string,
}

// TODO: Existing roles in Overte?
const enum DirectoryRole {
	ADMIN = "ADMIN",
	MODERATOR = "MODERATOR",
	USER = "USER",
	BANNED = "BANNED"
}

const enum DomainRole {
	ADMIN = "ADMIN",
	BUILDER = "BUILDER",
	MODERATOR = "MODERATOR",
	USER = "USER",
}

const enum DomainVisibility {
	OPEN = "OPEN",
	FRIENDS = "FRIENDS",
	CONNECTIONS = "CONNECTIONS",
	PRIVATE = "PRIVATE"
}

const enum Maturity {
	ADULT = "ADULT",
	MATURE = "MATURE",
	TEEN = "TEEN",
	EVERYONE = "EVERYONE",
	UNRATED = "UNRATED"
}

const enum UserAvailability {
	FRIENDS = "FRIENDS",
	CONNECTIONS = "CONNECTIONS",
	ALL = "ALL"
}

type UserConnection = {
	userId: string,
	isFriend: boolean,
	connectionTime: Date
}