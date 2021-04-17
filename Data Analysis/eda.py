import rasterio
from rasterio.merge import merge
import os
import glob
import seaborn as sns
import matplotlib.pyplot as plt 

PLOT = True
MAXHEIGHT = 3
dirpath = "Data/lds-bay-of-plenty-lidar-1m-dsm-2018-2019-GTiff/"
out_fp = "Data/processed/DEM_edgecombe.tif"
fns = os.path.join(dirpath,"*.tif")

fps = glob.glob(fns)

data_files= []
for fp in fps:
    data = rasterio.open(fp)
    data_files.append(data)
    #dems = rasterio.open(fps)

mosaic, out_trans = merge(data_files)
out_meta = data.meta.copy()

# Update the metadata
out_meta.update({"driver": "GTiff",
                     "height": mosaic.shape[1],
                     "width": mosaic.shape[2],
                     "transform": out_trans,
                     }
                    )
with rasterio.open(out_fp, "w", **out_meta) as dest:
    dest.write(mosaic)

if PLOT:
    mask = mosaic[0,:,:] > MAXHEIGHT
    mosaic[0,mask] = MAXHEIGHT
    sns.heatmap(mosaic[0,:,:], center=0)
    plt.show()

