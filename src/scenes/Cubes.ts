import {
  Engine, Scene, Color4, TargetCamera, Vector3, DirectionalLight,
  Mesh, Color3, StandardMaterial, MeshBuilder, HemisphericLight, Space,
} from 'babylonjs'

export default class Cubes {
  static instance: Cubes

  static init(): Cubes {
    if (!Cubes.instance) {
      const canvas = document.createElement('canvas')
      Cubes.instance = new Cubes(canvas)
    }

    return Cubes.instance
  }

  engine: Engine

  constructor(canvas: HTMLCanvasElement) {
    const engine: Engine = this.engine = new Engine(canvas)
    const scene: Scene = new Scene(engine)
    scene.clearColor = new Color4(1, 1, 1, 1)
    scene.ambientColor = new Color3(0.95, 0.95, 0.95)

    const camera: TargetCamera = new TargetCamera('view', new Vector3(0, 0, -10), scene)
    camera.setTarget(Vector3.Zero())

    const light: HemisphericLight = new HemisphericLight('sun', Vector3.Up(), scene)
    light.intensity = 0.05

    const white: StandardMaterial = new StandardMaterial('cubes', scene)
    const cubes: Mesh[] = []

    white.ambientColor = new Color3(1, 1, 1)
    white.specularPower = 5

    for (let i = 0; i < 15; i++) {
      const cube = Mesh.CreateBox(`cube${i}`, 5, scene)
      const rand = () => Math.random() * 2 - 1

      cube.position = new Vector3(rand() * 20, rand() * 20, Math.random() * 50 + 5)
      cube.material = white
      cube.enableEdgesRendering(0.999, true)
      cube.edgesWidth = cube.position.z ** 0.8
      cube.edgesColor = new Color4(0.95, 0.95, 0.95, 1)
      cube.rotation.x = rand() * Math.PI
      cube.rotation.z = rand() * Math.PI

      cubes.push(cube)
    }

    engine.runRenderLoop(() => {
      cubes.forEach((cube) => {
        cube.rotate(Vector3.Up(), 0.0003, Space.LOCAL)
      })

      scene.render()
    })

    window.addEventListener('resize', () => engine.resize())
  }
}
