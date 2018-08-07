<template>
    <div id="app">
        <meu-header></meu-header>
        <main>
            <router-view></router-view>
        </main>
    </div>
</template>

<script>
import Header from './components/Header.vue'

export default {
    components: {
        'meu-header' : Header
    }
}
</script>

<style scoped>
	#app {
		min-height: 800px;
		padding-bottom: 40px;
	}
</style>
