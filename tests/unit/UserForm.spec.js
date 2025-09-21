import { mount } from "@vue/test-utils";
import UserForm from "@/components/UserForm.vue";

describe("UserForm.vue", () => {
  it("renders name and email inputs", () => {
    const wrapper = mount(UserForm);

    expect(wrapper.find({ ref: "nameInput" }).exists()).toBe(true);
    expect(wrapper.find({ ref: "emailInput" }).exists()).toBe(true);
  });

  it("emits add-user event with form data on submit", async () => {
    const wrapper = mount(UserForm);
  
    await wrapper.find({ ref: "nameInput" }).setValue("Soumya");
    await wrapper.find({ ref: "emailInput" }).setValue("soumya@gmail.com");


    await wrapper.find("form").trigger("submit.prevent");

 
    expect(wrapper.emitted("add-user")).toBeTruthy();
    expect(wrapper.emitted("add-user").length).toBe(1);
    expect(wrapper.emitted("add-user")[0][0]).toEqual({
      name: "Soumya",
      email: "soumya@gmail.com"
    });
  });
});
