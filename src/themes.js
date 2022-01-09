import {keys, find, forEach, entries} from "lodash";

export const themes = [
    {
        name: "default",
        dark: {
            primary: "#FF0000",
            accent: "#AF4081",
            secondary: "#A049C1",
            success: "#ACAF50",
            info: "#A196F3",
            warning: "#AB8C00",
            error: "#AF5252",
            text: "white",
            background: "#000000"
        },
        light: {
            primary: "#00FF00",
            accent: "#AF4081",
            secondary: "#A049A1",
            success: "#AC8F50",
            info: "#A196F3",
            warning: "#AB8C00",
            error: "#AF5252",
            text: "black",
            background: "#FFFFFF"
        }
    },
    {
        name: "vetdrugs",
        dark: {
            primary: "#BF4081",
            accent: "#FF4081",
            secondary: "#0049C1",
            success: "#4CAF50",
            info: "#2196F3",
            warning: "#FB8C00",
            error: "#FF5252",
            text: "white",
            background: "#000000"
        },
        light: {
            primary: "#FF4081",
            accent: "#AF4081",
            secondary: "#0049A1",
            success: "#4C8F50",
            info: "#2196F3",
            warning: "#AB8C00",
            error: "#AF5252",
            text: "black",
            background: "#FFFFFF"
        }
    },
    {
        name: "pesticides",
        dark: {
            primary: "#8976F2",
            accent: "#FFAeE3",
            secondary: "#0844f1",
            success: "#4CFF50",
            info: "#91C6F3",
            warning: "#FB8C00",
            error: "#FF5252",
            text: "white",
            background: "#000000"
        },
        light: {
            primary: "#1976D2",
            accent: "#e91e63",
            secondary: "#084481",
            success: "#4CAF50",
            info: "#2196F3",
            warning: "#FB8C00",
            error: "#FF5252",
            text: "black",
            background: "#FFFFFF"
        }
    },
    {
        name: "pesticides:bega",
        dark: {
            primary: "#A976A2",
            accent: "#FF1e73",
            secondary: "#0844f1",
            success: "#4CFF50",
            info: "#91C6F3",
            warning: "#FB8C00",
            error: "#FF5252",
            text: "white",
            background: "#000000"
        },
        light: {
            primary: "#1976D2",
            accent: "#e91e63",
            secondary: "#084481",
            success: "#4CAF50",
            info: "#2196F3",
            warning: "#FB8C00",
            error: "#FF5252",
            text: "black",
            background: "#FFFFFF"
        }
    },
    {
        name: "vetdrugs:bega",
        dark: {
            primary: "#FF0000",
            accent: "#FF4081",
            secondary: "#0049C1",
            success: "#4CAF50",
            info: "#2196F3",
            warning: "#FB8C00",
            error: "#FF5252",
            text: "white",
            background: "#000000"
        },
        light: {
            primary: "#F2A7CF",
            accent: "#AF4081",
            secondary: "#0049A1",
            success: "#4C8F50",
            info: "#2196F3",
            warning: "#AB8C00",
            error: "#AF5252",
            text: "black",
            background: "#FFFFFF"
        }
    }
];

class ColorScheme {
    constructor() {
        this.primary = null;
        this.accent = null;
        this.secondary = null;
        this.success = null;
        this.info = null;
        this.warning = null;
        this.error = null;
        this.text = null;
        this.background = null;
    }

    setColor(key, val) {
        this[key] = val;
    }

    getColor(key) {
        return this[key];
    }
}

export class Theme {
    constructor(name) {
        this.name = name;
        this.dark = new ColorScheme();
        this.light = new ColorScheme();
        this.setTheme(name);        
    }

    setTheme(name) {
        const t = find(themes, {name});        

        // dark: {
        //     primary: "#8976F2",
        //     accent: "#FFAeE3",
        //     secondary: "#0844f1",
        //     success: "#4CFF50",
        //     info: "#91C6F3",
        //     warning: "#FB8C00",
        //     error: "#FF5252",
        //     text: "white",
        //     background: "#000000"
        // }
        if (t) {
            for (const [key, value] of entries(t.dark)) {
                console.log(`dark: ${key}: ${value}`);
                this.dark[key] = value;
            }
            for (const [key, value] of entries(t.light)) {
                console.log(`light: ${key}: ${value}`);
                this.light[key] = value;
            }            
        }
    }

    getColors(isDark) {
        return isDark ? this.dark : this.light;
    }
}
