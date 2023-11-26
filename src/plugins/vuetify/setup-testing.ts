import { config } from "@vue/test-utils";
import ResizeObserver from "resize-observer-polyfill";
import { vi } from "vitest";
import vuetify from "../vuetify";

export default function setupTesting() {
  vi.stubGlobal("ResizeObserver", ResizeObserver);
  config.global.plugins.push(vuetify);
}
