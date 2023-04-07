function createCube() {
    const rotationX = document.getElementById('rotationX');
    for (let i = 0; i < 6; i++) {
      const wall = document.createElement('div');
      wall.classList.add('wall');
      for (let j = 0; j < 9; j++) {
        const cube = document.createElement('div');
        wall.appendChild(cube);
      }
      rotationX.appendChild(wall);
    }
}
createCube();