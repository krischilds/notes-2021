import { themes } from '../themes';

export default {
    data() {
        return {
            themes: null,
            theme: null,   
            themeName: 'default',         
        }
    },
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
            this.themeName = name;           
            
            // update Vuex
            this.$store.commit("setTheme", this.theme);

            // update Vuetify         
            this.updateVuetifyTheme();
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
            return this.themes.map((theme) => {
                return theme.name;
            });
        },
    
        getStyle() {
            const theme = this.themeColors;
            if (!theme) return null;
            return {
                background: this.theme.primary,
                color: this.theme.text,
            }
        },
    
        primaryColor() {
            return this.theme.primary;          
        },
            
        secondaryColor() {
            return this.theme.secondary;          
        },
    
        textColor() {
           return this.theme.text;   
        },
    
        themeColors() {
            const colors = this.isDark ? this.theme.dark : this.theme.light;
            return colors;
        },
        
    },
    
    created() {
        this.themes = [...themes];
        this.themeName = this.$store.getters.getThemeName || 'default';        
        this.theme = this.getThemeByName(this.themeName);
    }
}
