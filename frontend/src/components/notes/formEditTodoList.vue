<template lang="">
    <div>
        
    </div>
</template>
<script>
export default {
    props: ['note'],
    data(){
        return {
            todo_list: JSON.parse(this.note.content)
        }
    },
    
}
</script>
<style lang="scss" scoped >
    
</style>