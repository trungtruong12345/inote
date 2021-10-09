<template lang="">
    <div>
        <input type='text' />
        <div class='turn-off' @click='toggleFormSearch'>X</div>
    </div>
</template>
<script>
import { mapActions } from 'vuex';

export default {
    methods: {
        ...mapActions('headerDefault', ['toggleFormSearch'])
    }
}
</script>
<style lang="css" scoped>
    .turn-off {
        cursor: pointer;
    }
</style>