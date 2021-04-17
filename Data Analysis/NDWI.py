import numpy as np
import rasterio
import matplotlib.pyplot as plt

# Inputs/Parameters
p = 0.7 # Threshold for being identified as water
tifData = ['data1.tif', 'data3.tif', 'data5.tif', 'data7.tif'] # TIFF input files

# Loop over each input file
for i, tif in enumerate(tifData):
    # Convert tif file into np.array
    tifOpen = rasterio.open(tif)
    x = tifOpen.read()

    # Access relevant bands and identify water through NDWI
    x_green = x[2,:,:]
    x_NIV = x[7,:,:]
    x_NDWI = np.divide((x_green - x_NIV),(x_green + x_NIV))
    x_water = (x_NDWI >= p)

    # Display the results
    plt.imshow(x_water)
    plt.show()

    # Save the results
    plt.savefig('data'+str(i)+'.png')
    np.savetxt('data'+str(i)+'.csv', x_water)