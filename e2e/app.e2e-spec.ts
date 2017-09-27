import { AeTestTaskPage } from './app.po';

describe('ae-test-task App', () => {
  let page: AeTestTaskPage;

  beforeEach(() => {
    page = new AeTestTaskPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
