import { CarsAppPage } from './app.po';

describe('cars-app App', () => {
  let page: CarsAppPage;

  beforeEach(() => {
    page = new CarsAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
