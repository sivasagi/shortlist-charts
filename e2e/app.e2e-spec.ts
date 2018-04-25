import { ShortlistCccPage } from './app.po';

describe('shortlist-ccc App', () => {
  let page: ShortlistCccPage;

  beforeEach(() => {
    page = new ShortlistCccPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
