const request = require('supertest')   //faz o mesmo papel do listen express
const app = require('./server/index')




describe("Express app", () => {
    it("should get main router", async () => {
        const result = await request(app).get('/');
        expect(result.statusCode).toEqual(200);
        expect(result.body).toHaveProperty('msg');
    })
});


describe("Express app", () => {
    it("should post main router", async () => {

        const data = {
            usr: 'renato',
            pass : 'b7e94be513e96e8c45cd23d'
        }

        const result = await request(app).post('/login').send(data);

        //console.log(result.body.msg.usr)
        expect(result.statusCode).toEqual(200);
        expect(result.body).toHaveProperty('msg.pass');
    })
});