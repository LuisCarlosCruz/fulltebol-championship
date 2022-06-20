import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../app';
import Teams from '../database/models/teams';

import { Response } from 'superagent';

import teamsMock from './mocks/teamsMock';

chai.use(chaiHttp);

const { expect } = chai;

describe('Teams:', () => {
  let chaiHttpResponse: Response;

  before(async () => {
    sinon
      .stub(Teams, "findAll")
      .resolves(teamsMock as Teams[]);
  });

  after(()=>{
    (Teams.findAll as sinon.SinonStub).restore();
  })

  it('get all teams:', async () => {
    chaiHttpResponse = await chai
       .request(app)
       .get('/teams');

    const resposta = chaiHttpResponse.body;

    expect(chaiHttpResponse.status).to.be.equal(200);
    expect(typeof resposta).to.have.equal('object');
    resposta.forEach((item: any) => {
      expect(item).to.have.property('id');
      expect(item).to.have.property('teamName');
    });
  });
});


describe('Team by Id - Sucess', () => {
  let chaiHttpResponse: Response;

  before(async () => {
    sinon
      .stub(Teams, "findOne")
      .resolves({
        'id': 9,
	      'teamName': 'Internacional'
        } as Teams);
  });

  after(() => {
    (Teams.findOne as sinon.SinonStub).restore();
  })

  it('Get team by id with sucess', async () => {
    chaiHttpResponse = await chai
       .request(app)
       .get('/teams/9');

    expect(chaiHttpResponse.status).to.be.equal(200);
    expect(chaiHttpResponse.body).to.have.property('id');
    expect(chaiHttpResponse.body).to.have.property('teamName');
  });
});

describe('Team by Id - Fail', () => {
  let chaiHttpResponse: Response;

  before(async () => {
    sinon
      .stub(Teams, "findOne")
      .resolves(undefined as any);
  });

  after(() => {
    (Teams.findOne as sinon.SinonStub).restore();
  })

  it('Fail to get team by id', async () => {
    chaiHttpResponse = await chai
       .request(app)
       .get('/teams/99');

    expect(chaiHttpResponse.status).to.be.equal(404);
  });
});
