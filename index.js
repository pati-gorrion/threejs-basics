import * as THREE from "three"

const canvas = document.querySelector(".webgl")

const scene = new THREE.Scene()

const aspect = window.innerWidth / window.innerHeight
const camera = new THREE.PerspectiveCamera(75, aspect, 0.1, 100)
camera.position.set(1, 1, 2)
camera.lookAt(0,0,0)
scene.add(camera)

const geometry = new THREE.BoxGeometry(1, 1, 1)
const material = new THREE.MeshStandardMaterial({ color: 0x781CE5 })
const mesh = new THREE.Mesh(geometry, material)
scene.add(mesh)

const ambient = new THREE.AmbientLight(0x404040, 5)
const point = new THREE.PointLight(0xE4FF00, 1, 10)
point.position.set(3, 3, 2)
scene.add(ambient)
scene.add(point)

const renderer = new THREE.WebGLRenderer({ canvas, antialias: true })
renderer.setClearColor(0x222222)
renderer.setSize(window.innerWidth, window.innerHeight)
renderer.setPixelRatio(window.devicePixelRatio)

function animate() {
    mesh.rotation.x += 0.003
    mesh.rotation.y += 0.004
    mesh.rotation.z += 0.005
    
    renderer.render(scene, camera)
    
    window.requestAnimationFrame(animate)
}
    
animate()
    
