<template>
  <div class="home page">
    <canvas ref="background" />
    <div class="container content">
      <div class="hero">
        <h1>Expertise to turn ideas into elegant code.</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>

      <button class="cta">
        <h3>LEARN MORE</h3>
      </button>

      <!-- <Cube /> -->
    </div>
  </div>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator'
  import Cube from '@/components/Cube.vue'
  import {
    Engine, Scene, Color4, TargetCamera, Vector3, DirectionalLight,
    Mesh, Color3, StandardMaterial, MeshBuilder,
  } from 'babylonjs'

  interface CubeReference {
    delta: number[],
    mesh: Mesh,
  }

  @Component({
    components: { Cube },
  })
  export default class Home extends Vue {
    mounted() {
      const engine: Engine = new Engine(this.$refs.background as HTMLCanvasElement)
      const scene: Scene = new Scene(engine)
      scene.clearColor = new Color4(1, 1, 1, 1)
      scene.ambientColor = new Color3(0.9, 0.9, 0.9)

      const camera: TargetCamera = new TargetCamera('view', new Vector3(0, 0, -10), scene)
      camera.setTarget(Vector3.Zero())

      const light: DirectionalLight = new DirectionalLight('sun', new Vector3(-0.5, -0.4, -0.25), scene)
      light.intensity = 0.08

      const mat: StandardMaterial = new StandardMaterial('cubes', scene)
      const cubes: CubeReference[] = []

      mat.ambientColor = new Color3(1, 1, 1)
      mat.specularPower = 0

      const mesh = MeshBuilder.CreateIcoSphere('oct', { radius: 5, subdivisions: 6 }, scene)
      mesh.position.x = -5
      mesh.position.y = -2.5
      mesh.material = mat
      mesh.convertToFlatShadedMesh()
      mesh.enableEdgesRendering()
      mesh.edgesWidth = 1
      mesh.edgesColor = new Color4(0, 0, 0, 0.1)

      // for (let i = 0; i < 100; i++) {
      //   const cube = Mesh.CreateBox(`cube${i}`, Math.random() * 5 + 1, scene)
      //   const rand = () => Math.random() * 2 - 1
      //   cube.position = new Vector3(rand() * 40, rand() * 40, Math.random() * 100)
      //   cube.material = mat
      //   cubes.push({
      //     delta: [rand() * 180, rand(), rand() * 180],
      //     mesh: cube,
      //   })
      // }

      const t: number = 10
      engine.runRenderLoop(() => {
        // cubes.forEach((cube) => {
        //   cube.mesh.rotation = new Vector3(cube.delta[0], t, cube.delta[2])
        // })

        // t += 0.001
        scene.render()
      })

      setInterval(() => {
        mesh.rotation.y += 0.001
        mesh.rotation.z += 0.0005
      }, 1000 / 30)

      window.addEventListener('resize', () => engine.resize())
    }
  }
</script>

<style lang="sass" scoped>
  .hero
    @apply absolute pin-l
    bottom: 60%

  canvas
    @apply absolute pin w-full h-full

  .cta
    @apply transform-center px-8 py-3

    &:before, &:after
      content: ''
      @apply transform-center w-full h-full
      @apply border border-grey-darker
      transition: all 120ms ease-out

    &:hover
      &:before, &:after
        width: 100%
        height: 100%

    &:before
      width: 120%

    &:after
      height: 140%
</style>
