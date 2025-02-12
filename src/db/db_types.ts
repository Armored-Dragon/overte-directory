


export type getDomain = {
	id?: string,
	name?: string,
	tags?: string[],
	visibility?: DomainVisibility[],
	managers?: string[],
	maturity?: Maturity[],
	protocolVersion?: string,
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
export type deleteDomain = {
	id: string,
}

export type getPlace = {
	id?: string,
	name?: string,
	tags?: string[],
	visibility?: DomainVisibility[],
	managers?: string[],
	maturity?: Maturity[],
}
export type postPlace = {
	name: string,
	description?: string,
	tags?: string[],
	visibility?: DomainVisibility[],
	managers?: string[],
	maturity?: Maturity[],
	domain: any,
	media?: string[],
	thumbnail?: string,
	capacity: number
}
export type patchPlace = {
	id: string,
	name?: string,
	description?: string,
	tags?: string[],
	visibility?: DomainVisibility[],
	managers?: string[],
	maturity?: Maturity[],
	media?: string[],
	thumbnail?: string,
	capacity?: number
}
export type deletePlace = {
	id: string
}

export type getUser = {
	id?: string, 
	username?: string, 
	email?: string,
	availability?: string[],
	roles?: DirectoryRole[]
}
export type postUser = {
	username: string, 
	email: string,
	password: string,
	roles?: DirectoryRole[]
}
export type patchUser = {
	id: string,
	username?: string, 
	email?: string,
	password?: string,
	availability?: UserAvailability,
	roles?: DirectoryRole[],
	connections?: UserConnection[],
}
export type deleteUser = {
	id: string
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