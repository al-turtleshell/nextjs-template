import prisma from "../../prisma/client";

beforeAll(async () => {
    await prisma.verificationToken.create({
        data: {
            identifier: 'test@test.fr',
            token: 'this is a token',
            expires: new Date(),
        }
    });
})   

afterAll(async () => {
    await prisma.verificationToken.deleteMany();
    await prisma.$disconnect();
});

describe('Integration test', () => {
    it('should return true', async () => {
        
        const token = await prisma.verificationToken.findFirst({ where: { identifier: 'test@test.fr' } });
        expect(token?.token).toBe('this is a token');
    });
});
