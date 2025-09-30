import { mount } from "@vue/test-utils";
import UserList from "@/components/UserList.vue";

const users = [
  { id: 1, name: "Soumya", email: "soumyab@example.com" },
  { id: 2, name: "Behura", email: "behura@example.com" },
];

describe("UserList.vue", () => {
  it("renders user list", () => {
    const wrapper = mount(UserList, { props: { users } });
    expect(wrapper.text()).toContain("Soumya");
    expect(wrapper.text()).toContain("behura@example.com");
  });

  it("renders empty state when no users", () => {
    const wrapper = mount(UserList, { props: { users: [] } });
    expect(wrapper.text()).toContain("Users");
  });
});
