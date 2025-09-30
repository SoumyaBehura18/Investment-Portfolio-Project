import { mount } from "@vue/test-utils";
import PortfolioDetail from "@/components/PortfolioDetail.vue";

const users = [
  { id: 1, name: "Soumya" },
  { id: 2, name: "Behura" },
];

const portfolio = {
  id: 1,
  portfolioName: "Growth",
  clientId: 1,
  status: "ACTIVE",
  createdAt: new Date().toISOString(),
};

describe("PortfolioDetail.vue", () => {
  it("renders portfolio details", () => {
    const wrapper = mount(PortfolioDetail, { props: { portfolio, users } });
    expect(wrapper.text()).toContain("Growth");
    expect(wrapper.text()).toContain("Soumya");
    expect(wrapper.text()).toContain("ACTIVE");
  });

  it("renders empty card when no portfolio", () => {
    const wrapper = mount(PortfolioDetail, { props: { portfolio: null, users } });
    expect(wrapper.text()).toContain("Select a portfolio to view details");
  });
});
