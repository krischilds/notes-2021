import themeInterface from '../themesInterface';

// define a mixin object
export default {
    methods: {
        changeTheme(name) {
            if (!name) return;
            console.log("themesMixin:changeTheme:key:" + name);
            themeInterface.setThemeSelected(name);
            let theme = themeInterface.getThemeSelected();
            if (!theme) return;
            // let isDark = this.$store.getters.getThemeIsDark;
            this.$store.commit("setTheme", theme);
            console.log("themesMixin:changeTheme:theme:", theme);

            let colors = themeInterface.getThemeColors();
            for (let c in colors) {
                if (themeInterface.getIsDark()) {                
                    this.$vuetify.theme.themes.dark[c] = colors[c];
                } else {
                    this.$vuetify.theme.themes.light[c] = colors[c];
                }
            }
            console.log(this.$vuetify.theme.themes.dark);
            console.log(this.$vuetify.theme.themes.light);
            
        },
    },
    computed: {
        getStyle() {
            return themeInterface.getStyle();
        },
        themeColors() {
            return themeInterface.getThemeColors();
        },
        theme() {
            return themeInterface.getThemeSelected();
            /*
            let theme = this.$store.getters.getTheme;
            if (!theme) {
                theme = themes.find((t)=> {
                    return (t.name.toLowerCase() === 'default');
                });
                this.$store.commit("setTheme", theme);
            }

            return theme;
            */
            /*
            if (!this.theme) {
                this.theme = $vuetify.theme.isDark
                  ? $vuetify.theme.themes.dark
                  : $vuetify.theme.themes.light;
              }
              */
        },
        themeNames() {
            return themeInterface.getThemeNames();
        },
        themes() {
            return themeInterface.getThemes();
        }
    },
}
