import { mount } from "@vue/test-utils";
import UserForm from "@/components/UserForm.vue";

describe("UserForm.vue", () => {
  it("emits add-user event with correct payload", async () => {
    const wrapper = mount(UserForm);

    await wrapper.find("input[type='text']").setValue("Soumya");
    await wrapper.find("input[type='email']").setValue("soumyab@example.com");
    await wrapper.find("form").trigger("submit.prevent");

    const emitted = wrapper.emitted("add-user");
    expect(emitted).toBeTruthy();
    expect(emitted[0][0]).toMatchObject({
      name: "Soumya",
      email: "soumyab@example.com",
    });
  });

  it("clears input fields after submit", async () => {
    const wrapper = mount(UserForm);

    await wrapper.find("input[type='text']").setValue("Soumya");
    await wrapper.find("input[type='email']").setValue("soumyab@example.com");
    await wrapper.find("form").trigger("submit.prevent");

    expect(wrapper.find("input[type='text']").element.value).toBe("");
    expect(wrapper.find("input[type='email']").element.value).toBe("");
  });
});
