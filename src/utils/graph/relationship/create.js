import * as d3 from 'd3'
import root from '@/assets/graph/relationship'

const create = $dom => {
  let data = { ...root }
  let simulation, svg, links, nodes, nodeEnter, defs, node

  // d3.json('/graph/relationship.json', json => {})
  simulation = d3
    .forceSimulation(data.nodes)
    .force(
      'link',
      d3
        .forceLink(data.links)
        .distance(180)
        .strength(0.1)
    )
    .force('charge', d3.forceManyBody())
    .force('center', d3.forceCenter(960 / 2, 600 / 2))

  svg = d3
    .select($dom)
    .append('svg')
    .attr('id', 'svg')
    .attr('pointer-events', 'all')
    .attr('viewBox', '0 0 960 600')
    .attr('preserveAspectRatio', 'xMinYMin meet')

  links = svg
    .append('g')
    .attr('class', 'links')
    .selectAll('line')
    .data(data.links)
    .enter()
    .append('line')
    .attr('stroke-width', d => Math.sqrt(d.value) || 1)

  nodes = svg
    .append('g')
    .attr('class', 'nodes')
    .selectAll('g.node')
    .data(data.nodes)

  nodeEnter = nodes
    .enter()
    .append('g')
    .attr('class', 'node')

  defs = nodeEnter
    .append('defs')
    .append('pattern')
    .attr('id', d => `image${d.id}`)
    .attr('width', 1)
    .attr('height', 1)
    .append('svg:image')
    .attr('xlink:href', d => d.img)
    .attr('width', 100)
    .attr('height', 150)

  node = nodeEnter
    .append('svg:circle')
    .attr('fill', d => `url(#image${d.id})`)
    .attr('r', 60)
    .call(
      d3
        .drag()
        .on('start', d => {
          if (!d3.event.active) simulation.alphaTarget(0.3)
          // d.fx = d.x
          // d.fy = d.y
        })
        .on('drag', d => {
          d.fx = d3.event.x
          d.fy = d3.event.y
        })
        .on('end', d => {
          if (!d3.event.active) simulation.alphaTarget(0)
          // d.fx = null
          // d.fy = null
        })
    )

  simulation.nodes(data.nodes).on('tick', () => {
    links
      .attr('x1', d => d.source.x)
      .attr('y1', d => d.source.y)
      .attr('x2', d => d.target.x)
      .attr('y2', d => d.target.y)
    node.attr('cx', d => d.x).attr('cy', d => d.y)
  })
}

export default create
