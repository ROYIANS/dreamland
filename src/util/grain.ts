export const grain = (canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D | null, size: number, name: string, color: string | CanvasGradient | CanvasPattern) => {
  canvas.width = size;
  canvas.height = size;
  if (ctx === null) {
    return
  }

  ctx.fillStyle = color;

  for (let x = 0; x < size; x++) {
    for (let y = 0; y < size; y++) {
      if (Math.random() > 0.5) {
        ctx.fillRect(x, y, 1, 1);
      }
    }
  }

  canvas.toBlob((blob) => {
    if (blob === null) {
      return
    }
    const url = URL.createObjectURL(blob);

    document.documentElement.style.setProperty(name, `url(${url})`);
  });
}
