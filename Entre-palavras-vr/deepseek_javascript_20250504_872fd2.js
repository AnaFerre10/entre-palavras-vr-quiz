// No método createGazeIndicator():
createGazeIndicator() {
    const geometry = new THREE.RingGeometry(0.02, 0.03, 32); // Maior para melhor visibilidade
    const material = new THREE.MeshBasicMaterial({ 
        color: 0x00ff00, 
        transparent: true, 
        opacity: 0.8 
    });
    const ring = new THREE.Mesh(geometry, material);
    ring.position.z = -0.5;
    return ring;
}

// No método createTextMesh():
size = 0.15; // Aumente o tamanho do texto para VR