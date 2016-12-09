import { EMERSONPage } from './app.po';

describe('emerson App', function() {
  let page: EMERSONPage;

  beforeEach(() => {
    page = new EMERSONPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
