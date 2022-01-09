<template>
  <div>
      <h3>Help Page</h3>
      <pre>{{theme}}</pre>
  </div>
</template>

<script>
import {Theme} from '../themes';
export default {
    name: 'help-view',
    data() {
        return {
            theme: null,
        }
    },
    mounted() {
        this.theme = new Theme('pesticides:bega');
        console.log(this.theme);

    }
}
</script>

<style lang="scss" scoped>

</style>
