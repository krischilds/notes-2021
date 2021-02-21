import { themes } from './themes';

class Theme {
    constructor(themes) {
        this._themes = [...themes];
        this._themeSelected = null;
        this._themeName = null;
        this._isDark = false;
    }

    getThemeNames() {
        return this._themes.map((theme) => {
            return theme.name;
        });
    }

    getThemes() {
        return this._themes;
    }

    getThemeByName(name) {
        return this._themes.find(t => {
            return (t.name === name);
        })
    }

    getThemeSelected() {
        return this._themeSelected;
    }

    setThemeSelected(name) {
        this._themeSelected = this.getThemeByName(name);
        if (this._themeSelected) {
            this._themeName = name;
        } else {
            this._themeName = null;
            this._themeSelected = null;
        }
    }

    getStyle() {
        let _theme = this.getThemeColors();
        if (!_theme) return null;
        return {
            background: _theme.background,
            color: _theme.primary,
        }
    }

    getBackgroundColor() {
        let s = this.getStyle();
        if (!s) return;
        return s.background;
    }

    getColor() {
        let s = this.getStyle();
        if (!s) return;
        return s.color;
    }

    getIsDark() {
        return this._isDark;
    }

    setIsDark(value) {
        this._isDark = value;
    }

    getThemeColors() {
        if (!this._themeSelected || 
            !this._themeSelected.dark ||
            !this._themeSelected.light) {
            return null;
        }
        let theme = this._isDark ? this._themeSelected.dark : this._themeSelected.light;
        return theme;
    }
}

const instance = new Theme(themes);
instance.setThemeSelected('default');
// Object.freeze(instance);

export default instance;