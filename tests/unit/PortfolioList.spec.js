import { mount } from "@vue/test-utils";
import PortfolioList from "@/components/PortfolioList.vue";

const users = [
  { id: 1, name: "Soumya" },
  { id: 2, name: "Behura" },
];

const portfolios = [
  { id: 1, portfolioName: "Growth", clientId: 1, status: "ACTIVE" },
  { id: 2, portfolioName: "Balanced", clientId: 2, status: "UPCOMING" },
];

describe("PortfolioList.vue", () => {
  it("renders portfolio items", () => {
    const wrapper = mount(PortfolioList, { props: { portfolios, users } });
    expect(wrapper.text()).toContain("Growth – Soumya ACTIVE");
    expect(wrapper.text()).toContain("Balanced – Behura UPCOMING");
  });

  it("shows client names correctly", () => {
    const wrapper = mount(PortfolioList, { props: { portfolios, users } });
    expect(wrapper.text()).toContain("Soumya");
    expect(wrapper.text()).toContain("Behura");
  });
});
