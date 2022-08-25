const server = require('../server.js');
const supertest = require('supertest');
const requestWithSupertest = supertest(server);

describe('Get home', () => {

    it('GET / muestra la pagina home', async () => {
      const res = await requestWithSupertest.get('/');
        expect(res.status).toEqual(200);
        //expect(res.type).toEqual(expect.stringContaining('Hello'));
        
    });
  
  });