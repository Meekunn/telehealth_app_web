interface ImportedImages {
  [key: string]: string;
}

export function importImages(): ImportedImages {
  const images: ImportedImages = {};
  const imageModules = import.meta.glob('@/assets/*.(png|jpe?g|svg|jpg)', { eager: true });

  Object.entries(imageModules).forEach(([path, module]) => {
    const fileName = path.split('/').pop() || '';
    images[fileName] = (module as { default: string }).default;
  });

  return images;
}

export const images = importImages();