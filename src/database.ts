import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const dbConnect = async () => {
    await prisma.$connect()
}

dbConnect().then(async () => {
    await prisma.$disconnect()
    console.log('db coonected');
}).catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
})

export default prisma;