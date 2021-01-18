# notes-2021
vue notes web app.

Themes should be aware of these params:

#append-icon	
string
Appends an icon to the component, uses the same syntax as v-icon

#background-color	
string
Changes the background-color of the input

#color	
string
Applies specified color to the control - it can be the name of material color (for example success or purple) or css color (#033 or rgba(255, 0, 0, 0.5)). You can find list of built in classes on the colors page.

#dark	
boolean
false
Applies the dark theme variant to the component. This will default the components color to white unless you’ve configured your application theme to dark or if you are using the color prop on the component. You can find more information on the Material Design documentation for dark themes.

There are multiple considerations to be aware of when theming an app.  
1. Theme standalone component: come up with common theme interface for all owned components, i.e. 
    {
        background-color: "",
        color: ""
    }

    OR

    theme = {
        background-color: "",        
        text-color: "",
        accent-color: "",              
    }

    OR 

    {
        primary: "",
        secondary: "",
        accent: "",
    }

2. Theme component that wraps Bootstrap: use common theme interface but apply those colors to Bootstrap theme
3. Theme component that wraps Vuetify: use common theme interface but apply those colors to Vuetify theme.  Note most Vuetify components take color params so those can be passed along.

