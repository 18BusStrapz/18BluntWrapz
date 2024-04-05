import { expect } from 'chai';
import { AzureDevOpsPatSession } from '../src/authProvider';

describe('AzureDevOpsPatSession', () => {
  it('should have the correct account information', () => {
    const session = new AzureDevOpsPatSession('myAccessToken');
    expect(session.account.id).to.equal('AzureDevOpsAuthenticationProvider.id');
    expect(session.account.label).to.equal('Personal Access Token');
  });

  it('should have the correct session id', () => {
    const session = new AzureDevOpsPatSession('myAccessToken');
    expect(session.id).to.equal('AzureDevOpsAuthenticationProvider.id');
  });

  it('should have an empty scopes array', () => {
    const session = new AzureDevOpsPatSession('myAccessToken');
    expect(session.scopes).to.be.an('array').that.is.empty;
  });

  it('should have the correct access token', () => {
    const accessToken = 'myAccessToken';
    const session = new AzureDevOpsPatSession(accessToken);
    expect(session.accessToken).to.equal(accessToken);
  });
});import { expect } from 'chai';
import { AzureDevOpsPatSession } from '../src/authProvider';

describe('AzureDevOpsPatSession', () => {
  it('should have the correct account information', () => {
    const session = new AzureDevOpsPatSession('myAccessToken');
    expect(session.account.id).to.equal('AzureDevOpsAuthenticationProvider.id');
    expect(session.account.label).to.equal('Personal Access Token');
  });

  it('should have the correct session id', () => {
    const session = new AzureDevOpsPatSession('myAccessToken');
    expect(session.id).to.equal('AzureDevOpsAuthenticationProvider.id');
  });

  it('should have an empty scopes array', () => {
    const session = new AzureDevOpsPatSession('myAccessToken');
    expect(session.scopes).to.be.an('array').that.is.empty;
  });

  it('should have the correct access token', () => {
    const accessToken = 'myAccessToken';
    const session = new AzureDevOpsPatSession(accessToken);
    expect(session.accessToken).to.equal(accessToken);
  });

  it('should have the correct account information when using a different access token', () => {
    const session = new AzureDevOpsPatSession('anotherAccessToken');
    expect(session.account.id).to.equal('AzureDevOpsAuthenticationProvider.id');
    expect(session.account.label).to.equal('Personal Access Token');
  });

  it('should have the correct session id when using a different access token', () => {
    const session = new AzureDevOpsPatSession('anotherAccessToken');
    expect(session.id).to.equal('AzureDevOpsAuthenticationProvider.id');
  });

  it('should have an empty scopes array when using a different access token', () => {
    const session = new AzureDevOpsPatSession('anotherAccessToken');
    expect(session.scopes).to.be.an('array').that.is.empty;
  });

  it('should have the correct access token when using a different access token', () => {
    const accessToken = 'anotherAccessToken';
    const session = new AzureDevOpsPatSession(accessToken);
    expect(session.accessToken).to.equal(accessToken);
  });
});