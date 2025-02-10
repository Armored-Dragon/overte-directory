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

// TODO: Existing roles in Overte?
enum DirectoryRole {
	ADMIN = "ADMIN",
	MODERATOR = "MODERATOR",
	USER = "USER",
	BANNED = "BANNED"
}

enum DomainRole {
	ADMIN = "ADMIN",
	BUILDER = "BUILDER",
	MODERATOR = "MODERATOR",
	USER = "USER",
}

enum DomainVisibility {
	OPEN = "OPEN",
	FRIENDS = "FRIENDS",
	CONNECTIONS = "CONNECTIONS",
	PRIVATE = "PRIVATE"
}

enum Maturity {
	ADULT = "ADULT",
	MATURE = "MATURE",
	TEEN = "TEEN",
	EVERYONE = "EVERYONE",
	UNRATED = "UNRATED"
}

enum UserAvailability {
	FRIENDS = "FRIENDS",
	CONNECTIONS = "CONNECTIONS",
	ALL = "ALL"
}

type UserConnection = {
	userId: string,
	isFriend: boolean,
	connectionTime: Date
}