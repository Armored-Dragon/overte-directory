const { Prisma, PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const crypto = require("crypto");

main()
async function main() {
  await clearDatabase();
  await createUsers();
  await createDomains();
  await createPlaces();
}

async function clearDatabase() {
  await prisma.place.deleteMany();
  await prisma.domain.deleteMany();
  await prisma.user.deleteMany();
}

async function createUsers() {
  for (let amount = 0; 5 > amount; amount++) {
    await prisma.user.create({ data: generateRandomUser() });
  }
  return;
}

async function createDomains() {
	for (let amountOfDomains = 0; 5 > amountOfDomains; amountOfDomains++) {

		let domainInfo = generateRandomDomain();

		// Get Random user
		const userCount = await prisma.user.count();
		const randomIndex = Math.floor(Math.random() * userCount);
		const user = await prisma.user.findMany({
			skip: randomIndex,
			take: 1,
		});

		await prisma.domain.create({ data: {...domainInfo, owner: { connect: { id: user[0].id } } } });
	}
	return;
}

async function createPlaces() {
	for (let amountOfPlaces = 0; 50 > amountOfPlaces; amountOfPlaces++) {

		let placeInfo = generateRandomPlace();

		// Get Random domain
		const domainCount = await prisma.domain.count();
		const randomIndex = Math.floor(Math.random() * domainCount);
		const domain = await prisma.domain.findMany({
			skip: randomIndex,
			take: 1,
		});

		await prisma.place.create({ data: {...placeInfo, domain: { connect: { id: domain[0].id } } } });
	}
	return;
}

function generateRandomUser() {
  let user = {
    username: randomString(),
	password: randomString(),
  };

  return user;
}

function generateRandomDomain(){
	const domain = {
		name: randomString(),
		description: randomString(1000, 400),
		address: "localhost",
		port: "40100",
		protocolVersion: "3894729375=="
		// iceAddress: "localhost"
	}
	return domain;
}

function generateRandomPlace(){
	const domain = {
		name: randomString(),
		description: randomString(1000, 400),
		capacity: 10
	}
	return domain;
}

const randomString = (length = 20, minimum = 5) => {
  return crypto.randomBytes(Math.floor(Math.random() * length) + minimum).toString("hex");
};