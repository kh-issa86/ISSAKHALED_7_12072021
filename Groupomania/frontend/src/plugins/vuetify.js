import Vue from "vue";
import Vuetify from "vuetify/lib";
// import colors from 'vuetify/lib/util/colors';
Vue.use(Vuetify);

const MY_ICONS = {
  account: "mdi-account",
  pen: "mdi-pen-plus",
  delete: "mdi-delete-outline",
  update: "mdi-file-document-edit-outline",
  comment: "mdi-comment-text-outline",
  like: "mdi-heart-outline",
  link: "mdi-link",
  image: "mdi-file-image-outline",
  home: "mdi-home",
  mail: "mdi-email",
  back: "mdi-keyboard-backspace",
  accountEdit: "mdi-account-edit-outline",
  settings: "mdi-cog-outline",
  add: "mdi-tooltip-edit-outline",
};

export default new Vuetify({
  icons: {
    iconfont: "mdi",
    values: MY_ICONS,
  },
  theme: {
    dark: true,
    // themes: {
    //   light: {
    //     primary: colors.grey.darken2, // #424242
    //     secondary: colors.red.lighten4, // #FFCDD2
    //     accent: colors.gray.accent2, // #FF4081
    //     text: colors.grey.darken2,
    //     text2: colors.white         // #3F51B5
    //   },
    // },
  },
});
