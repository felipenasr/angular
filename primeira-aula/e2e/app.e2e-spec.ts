import { PrimeiraAulaPage } from './app.po';

describe('primeira-aula App', () => {
  let page: PrimeiraAulaPage;

  beforeEach(() => {
    page = new PrimeiraAulaPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
