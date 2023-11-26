import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";
import DashboardView from "../DashboardView.vue";
import setupVuetifyTesting from "@/plugins/vuetify/setup-testing";

setupVuetifyTesting();

describe("DashboardView", () => {
  it("shows feedback when the button is clicked", async () => {
    // Setup
    const wrapper = mount(DashboardView);

    // Interact
    const text = "hello, world";
    const myFeedback = wrapper.get("[data-test='my-feedback']");
    expect(myFeedback.text()).not.toContain(text);
    await wrapper.get("[data-test='my-btn']").trigger("click");

    // Verify
    expect(myFeedback.text()).toContain(text);
  });
});
