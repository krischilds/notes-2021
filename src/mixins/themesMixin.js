// define a mixin object
export default {
    mounted: function () {
        console.log("themesMixin:mounted");
        this.theme = this.$store.getters.getTheme;
        console.log("themesMixin:mounted:theme", this.theme);
        /*
            this.$vuetify.theme.themes.dark.primary = "purple";
            this.$vuetify.theme.themes.dark.secondary = "orange";
            this.$vuetify.theme.themes.light.primary.base = "purple";
            this.$vuetify.theme.themes.light.secondary.base = "orange";
            console.log(this.$vuetify?.theme?.themes?.light);
            console.log(this.$vuetify?.theme?.themes?.dark);
            console.log(this.getStyle);
        */
    },
    watch: {        
        '$store.getters.getTheme': function (newVal, oldVal) {
            console.log("themesMixin:watch:$store.getters.getTheme");
            this.theme = newVal;
        }
    },
    created: function () {
        console.log("themesMixin:create");
    },
    methods: {
        changeTheme(key) {
            console.log("themesMixin:changeTheme:"+key);
            const themes = this.$store.getters.getThemes;
            console.log(themes);
            let theme = themes[key];
            if (!theme) return;
            this.$store.commit("setTheme", theme);
            //this.backgroundColor=theme.backgroundColor;
            //this.color=theme.color; // TODO: this is overwriting a prop.  change it
          },
    },
    computed: {
        getStyle: function () {
            if (!this.theme) return {};
          return {
            backgroundColor: this.theme.backgroundColor,
            color: this.theme.color
          };
        },
    },        
    data() {
        return {
           theme: null,
        }
    }
}
