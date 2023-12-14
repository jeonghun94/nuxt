import { defineStore } from "pinia";

const useTabMenuStore = defineStore("tabMenu", {
  state: () => ({
    tabMenu: [],
  }),
  actions: {
    addTab(title, subTitle) {
      if (
        this.tabMenu.length < 10 &&
        !this.tabMenu.some((item) => item.title === title)
      ) {
        this.tabMenu.push({
          idx: this.tabMenu.length + 1,
          title,
          subTitle,
        });
      }
    },

    removeTab(title) {
      this.tabMenu = this.tabMenu.filter((item) => item.title !== title);
    },
  },
  getters: {
    getTabMenu: (state) => state.tabMenu,
  },
  // persist: {
  //   enabled: true,
  // },
});

export default useTabMenuStore;
