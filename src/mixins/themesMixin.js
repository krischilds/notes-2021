import { themes } from '../themes';

export default {
    data() {
        return {
            themes: null,
            theme: null, 
            color: null,    
        }
    },
    // watch: {
    //     /*
    //     theme['background']: function (val) {
    //       root.style.setProperty(`--bc-background`,val);
    //     },
    //     theme['primary']: function (val) {
    //         root.style.setProperty(`--bc-background`,val);
    //       },
    //     */
 
    //     themeColors: function (val, oldVal) {
    //         console.log(val);
    //         let root = document.documentElement;

    //         for (let c in val) {
    //             root.style.setProperty(`--bc-${c}`,val[c]);
    //         }
            
    //     }
    //   },
    methods:
     {
        getThemeByName(name) {
            return this.themes.find(t => {
                return (t.name === name);
            });
        },

        setIsDark(value) {            
            this.$vuetify.theme.dark = value;
            this.updateVuetifyTheme();
        },
    
        changeTheme(name) {
            if (!name) return;
            console.log(`themesMixin:changeTheme:${name}`);
            
            const t = this.getThemeByName(name);
            if (!t) return null;

            this.theme = t;   
            
            // update Vuex
            this.$store.commit("setTheme", this.theme);
            //console.log(this.theme);
            //console.log(this.themeColors);
            //this.$store.commit("setThemeName", name);

            
            if (this.$vuetify) {
                // update Vuetify
                // this.updateVuetifyTheme();
            } 
        },

        updateVuetifyTheme() {        
            const colors = this.themeColors;
            if (this.$vuetify && colors) {
                for (let c in colors) {                                 
                    if (this.isDark) {
                        this.$vuetify.theme.themes.dark[c] = colors[c];
                    } else {
                        this.$vuetify.theme.themes.light[c] = colors[c];
                    }
                }
            }
        } 
    },
    computed: {
        isDark() {
            return this.$vuetify.theme.dark;
        },

        themeNames() {
            if (!this.themes) return null;
            return this.themes.map((theme) => {
                return theme.name;
            });
        },
    
        getStyle() {
            if (!this.theme) return null;
            const theme = this.themeColors;
            if (!theme) return null;
            return {
                background: this.theme.primary,
                color: this.theme.text,
            }
        },
    

        themeColors() {
            if (!this.theme) return null;
            const colors = this.isDark ? this.theme.dark : this.theme.light;
            return colors;
        },

        themeName() {
            return this.$store.getters.getThemeName || 'default'; 
        }
    },
    
    created() {
        if (!this.themes)
            this.themes = [...themes];
        
        // if (!this.theme)
        //     this.theme = this.themes[0];
    },
    /*
    watch: {
        '$store.getters.setTheme': function (nv, ov) {
            console.log('theme changed - setTheme', nv, ov)
        },
        '$store.getters.getTheme': function(nv, ov) {
            console.log("theme changed - getTheme", nv, ov);

        },
    }
    */
}
