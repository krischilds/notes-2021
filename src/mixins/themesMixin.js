// define a mixin object
export const theme = {
    mounted: function () {
        console.log("themesMixin:mounted");
    },
    created: function () {
        console.log("themesMixin:create");
    },
    computed: {
        getStyle: function () {
            // this.$props["backgroundColor"]
            // this.$props["color"]

            // TODO: make this return this.theme
            return {
                backgroundColor : this.backgroundColor,
                color: this.color
            }
        },
        // TODO: Add helpers on top of vuex
    },
    props: {
        "backgroundColor": {
            type: String,
            default: "red"
        },
        "color": {
            type: String,
            default: "white"
        },
    },
    data() {
        return {
           // themeSelected: "",
           // theme: {}
        }
    }
}
