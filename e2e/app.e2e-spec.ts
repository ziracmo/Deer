import { DeerPage } from './app.po';

describe('deer App', function() {
  let page: DeerPage;

  beforeEach(() => {
    page = new DeerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
