<template>
  <div id="ctx">
    <div class="svg-container" id="relationship" ref="relationship">
      <!-- d3 relation graph render -->
    </div>
  </div>
</template>

<script>
import createRelationship from '@/utils/graph/relationship/create'

export default {
  data() {
    return {
      graph: null,
      style: {
        color: '',
        strokeColor: '#29B5FF',
        width: 100,
        svgWidth: 960,
        svgHeight: 600
      }
    }
  },
  mounted() {
    createRelationship(this.$refs.relationship)
  }
}
</script>

<style>
body {
  width: 100%;
  height: 100%;
  font-family: monospace;
}

.controls {
  position: fixed;
  top: 16px;
  left: 16px;
  background: #f8f8f8;
  padding: 0.5rem;
  display: flex;
  flex-direction: column;
}

.svg-container {
  display: table;
  width:80%;
  border: 1px solid #f8f8f8;
  box-shadow: 1px 2px 4px rgba(0, 0, 0, 0.5);
  margin: 0 auto
}

.controls > * + * {
  margin-top: 1rem;
}

.links line {
  stroke: #999;
  stroke-opacity: 0.6;
}

.nodes circle {
  stroke: #fff;
  stroke-width: 1.5px;
}
</style>
