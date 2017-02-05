import { JianghuGardenPage } from './app.po';

describe('jianghu-garden App', function() {
  let page: JianghuGardenPage;

  beforeEach(() => {
    page = new JianghuGardenPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
