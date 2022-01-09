import { themes } from '../themes';

export default {
    // data() {
    //     return {
    //         themes: null,
    //     }
    // },
    watch: {
        /*
        theme['background']: function (val) {
          root.style.setProperty(`--bc-background`,val);
        },
        theme['primary']: function (val) {
            root.style.setProperty(`--bc-background`,val);
          },
        */
 
        themeColors: function (val, oldVal) {
            console.log(val);
            let root = document.documentElement;

            for (let c in val) {
                root.style.setProperty(`--bc-${c}`,val[c]);
            }
            
        }
      },
    methods:
     {
        getThemeByName(name) {
            return this.themes.find(t => {
                return (t.name === name);
            });
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
        },
    },
    computed: {
        
        // getStyle() {
        //     if (!this.theme) return null;
        //     const theme = this.themeColors;
        //     if (!theme) return null;
        //     return {
        //         background: this.theme.primary,
        //         color: this.theme.text,
        //     }
        // },
    
        themeColors() {
            if (!this.theme) return null;
            const colors = this.isDark ? this.theme.dark : this.theme.light;
            return colors;
        },

        theme() {
            return this.$store.getters.getTheme; 
        },

        themes() {
            return [...themes];
        }
    },
    
    created() {
        // if (!this.themes)
        //     this.themes = [...themes];
        
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
