import { Game } from './game.js';
import { VRButton } from 'https://unpkg.com/three@0.171.0/examples/jsm/webxr/VRButton.js';

// Inicialização
const renderDiv = document.getElementById('renderDiv');
const game = new Game(renderDiv);

// Configuração WebXR/VR
game.renderer.xr.enabled = true;
renderDiv.appendChild(VRButton.createButton(game.renderer));

// Loop de animação compatível com VR
game.renderer.setAnimationLoop(() => {
    game.animate();
});