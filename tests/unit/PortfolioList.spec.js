import { mount } from "@vue/test-utils";
import PortfolioList from "@/components/PortfolioList.vue";

describe("PortfolioList.vue", () => {
  const users = [
    { id: 1, name: "Soumya" },
    { id: 2, name: "Behura" }
  ];
  const portfolios = [
    { id: 1, portfolioName: "Portfolio 1", clientId: 1, status: "Active" },
    { id: 2, portfolioName: "Portfolio 2", clientId: 2, status: "Closed" }
  ];

  it("renders all portfolios", () => {
    const wrapper = mount(PortfolioList, { props: { portfolios, users } });
    expect(wrapper.findAll(".portfolio-item").length).toBe(portfolios.length);
  });

  it("displays portfolio name and client name correctly", () => {
    const wrapper = mount(PortfolioList, { props: { portfolios, users } });
    const firstItem = wrapper.find(".portfolio-item").text();
    expect(firstItem).toContain("Portfolio 1");
    expect(firstItem).toContain("Soumya");
  });
});
