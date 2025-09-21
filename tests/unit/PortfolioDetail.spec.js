import { mount } from '@vue/test-utils';
import PortfolioDetail from '@/components/PortfolioDetail.vue';

describe('PortfolioDetail.vue', () => {
  const users = [{ id: 1, name: 'Soumya' }];
  const portfolio = {
    id: 1,
    name: 'My Portfolio',
    clientId: 1,
    status: 'Active',
    createdAt: '2025-05-05T00:00:00Z'
  };

  it('renders portfolio details when portfolio is provided', () => {
    const wrapper = mount(PortfolioDetail, { props: { portfolio, users } });

    expect(wrapper.text()).toContain('My Portfolio');
    expect(wrapper.text()).toContain('Client: Soumya');
    expect(wrapper.text()).toContain('Status: Active');
    expect(wrapper.text()).toContain(new Date(portfolio.createdAt).toLocaleDateString());
  });

  it('renders empty message when portfolio is null', () => {
    const wrapper = mount(PortfolioDetail, { props: { portfolio: null } });

    expect(wrapper.text()).toContain('No portfolio selected');
  });
});
