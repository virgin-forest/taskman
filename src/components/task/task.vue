<template>
	<div>
		<div v-for="fs in f" >{{ fs }}</div>
	</div>
</template>

<script>
export default {

  name: 'task',

  data () {
    return {
    	t: 'fuck',
    	f: {
    		f: ['1', true],
    		x: ['2', false]
    	}
    }
  },

  methods: {

  },

  props: []
}
</script>

<style lang="css" scoped>
</style>