import { mount } from "@vue/test-utils";
import PortfolioForm from "@/components/PortfolioForm.vue";

const users = [
  { id: 1, name: "Soumya" },
  { id: 2, name: "Behura" },
];

describe("PortfolioForm.vue", () => {
  it("emits add-portfolio with payload", async () => {
    const wrapper = mount(PortfolioForm, { props: { users } });

    await wrapper.find("input").setValue("Growth Portfolio");
    await wrapper.find("select").setValue("1"); // clientId
    await wrapper.findAll("select")[1].setValue("ACTIVE"); // status
    await wrapper.find("form").trigger("submit.prevent");

    const emitted = wrapper.emitted("add-portfolio");
    expect(emitted).toBeTruthy();
    expect(emitted[0][0]).toMatchObject({
      portfolioName: "Growth Portfolio",
      clientId: 1,
      status: "ACTIVE",
    });
  });

  it("resets form after submission", async () => {
    const wrapper = mount(PortfolioForm, { props: { users } });

    await wrapper.find("input").setValue("Balanced Portfolio");
    await wrapper.find("select").setValue("2");
    await wrapper.findAll("select")[1].setValue("UPCOMING");
    await wrapper.find("form").trigger("submit.prevent");

    expect(wrapper.find("input").element.value).toBe("");
    expect(wrapper.find("select").element.value).toBe("");
  });
});
