import "vuetify/styles";
import { createVuetify } from "vuetify";
import { aliases, mdi } from "vuetify/iconsets/mdi-svg";
import * as labsComponents from "vuetify/labs/components";
import theme from "./theme";

const vuetify = createVuetify({
  components: labsComponents,
  theme,
  icons: {
    defaultSet: "mdi",
    aliases,
    sets: {
      mdi,
    },
  },
});

export default vuetify;
