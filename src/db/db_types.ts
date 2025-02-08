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
	admin = "admin",
	moderator = "moderator",
	user = "user",
	banned = "banned"
}

enum DomainRole {
	admin = "admin",
	builder = "builder",
	moderator = "moderator",
	user = "user",
}

enum DomainVisibility {
	open = "open",
	friends = "friends",
	connections = "connections",
	private = "private"
}

enum Maturity {
	adult = "adult",
	mature = "mature",
	teen = "teen",
	everyone = "everyone",
	unrated = "unrated"
}

enum UserAvailability {
	friends = "friends",
	connections = "connections",
	all = "all"
}

type UserConnection = {
	userId: string,
	isFriend: boolean,
	connectionTime: Date
}