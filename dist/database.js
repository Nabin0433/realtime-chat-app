"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const dbConnect = async () => {
    await prisma.$connect();
};
dbConnect().then(async () => {
    await prisma.$disconnect();
    console.log('db coonected');
}).catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
});
exports.default = prisma;
