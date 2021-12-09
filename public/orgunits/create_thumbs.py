import os
from PIL import Image
import PIL
from pathlib import Path


directory_files = os.listdir()
multiple_images = [file for file in directory_files if file.endswith(('.jpg','.png','jpeg'))]
for image in multiple_images:
    print(os.path.join(Path('.').resolve(),image))
    img = Image.open(os.path.join(Path('.').resolve(),image))
    width_percent = (360 / float(img.size[0]))
    hsize = int((float(img.size[1]) * float(width_percent)))
    img = img.resize((360, hsize), PIL.Image.ANTIALIAS)
    img.save(os.path.join(os.path.join(Path('.').resolve(),'thumbnails',image)))