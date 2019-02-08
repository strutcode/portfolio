import {
  Engine, Scene, Color4, TargetCamera, Vector3, DirectionalLight,
  Mesh, Color3, StandardMaterial, MeshBuilder, HemisphericLight,
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

    // const light: DirectionalLight = new DirectionalLight('sun', new Vector3(-0.5, -0.4, -0.25), scene)
    const light: HemisphericLight = new HemisphericLight('sun', Vector3.Up(), scene)
    light.intensity = 0.05

    const mat: StandardMaterial = new StandardMaterial('cubes', scene)
    const cubes: Mesh[] = []

    mat.ambientColor = new Color3(1, 1, 1)
    mat.specularPower = 5
    // mat.pointsCloud = true
    // mat.pointSize = 10

    // const mesh = MeshBuilder.CreatePolyhedron('oct', { type: 2, size: 4 }, scene)
    // const mesh = MeshBuilder.CreateIcoSphere('ico', { radius: 5, subdivisions: 6 }, scene)
    // const mesh = MeshBuilder.CreateSphere('uv', { segments: 16, diameter: 10 }, scene)
    // mesh.position.x = -5
    // mesh.position.y = -2.5
    // mesh.material = mat
    // mesh.convertToFlatShadedMesh()
    // mesh.enableEdgesRendering(0.999, true)
    // mesh.edgesWidth = 2
    // mesh.edgesColor = new Color4(0.95, 0.95, 0.95, 1)

    for (let i = 0; i < 10; i++) {
      const cube = Mesh.CreateBox(`cube${i}`, 5, scene)
      const rand = () => Math.random() * 2 - 1
      cube.position = new Vector3(rand() * 20, rand() * 20, Math.random() * 50 + 5)
      cube.material = mat
      cube.enableEdgesRendering(0.999, true)
      cube.edgesWidth = cube.position.z ** 0.8
      cube.edgesColor = new Color4(0.95, 0.95, 0.95, 1)
      cube.rotation.x = rand() * Math.PI
      cube.rotation.z = rand() * Math.PI

      cubes.push(cube)
    }

    engine.runRenderLoop(() => {
      scene.render()
    })

    setInterval(() => {
      cubes.forEach((cube) => {
        cube.rotation.y += 0.001
      })

      // mesh.rotation.y += 0.001
      // mesh.rotation.z += 0.0005
      // mesh.rotation.z = 0.6
    }, 1000 / 30)

    window.addEventListener('resize', () => engine.resize())
  }
}
