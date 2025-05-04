// Adicione no constructor:
this.renderer = new THREE.WebGLRenderer({ antialias: true });
this.renderer.xr.enabled = true; // Habilita VR
this.renderer.setPixelRatio(window.devicePixelRatio);

// Modifique o método animate():
animate() {
    this.gazeController.update(this.clock.getDelta());
    this.uiManager.update(this.clock.getDelta());
    this.renderer.render(this.scene, this.camera);
}