import numpy as np
import rasterio as rio
import matplotlib.pyplot as plt
import os
import glob
import csv
import json
import pandas as pd


# Inputs/Parameters
p = 0.2 # Threshold for being identified as water
tifData = ['croppedFloodBand3.tif', 'croppedFloodBand8.tif', 'DEM_edgecombe_longlat.tif'] # TIFF input files

# Open tif data
band3Open = rio.open(tifData[0])
band3 = band3Open.read()
band8Open = rio.open(tifData[1])
band8 = band8Open.read()

# Identify regions of water through NDWI
NDWI = np.divide((band3 - band8),(band3 + band8))
water = (NDWI >= p)
water = water[0]

NoWater = np.sum(water)

# # Display the results
# plt.imshow(water)
# plt.show()


# Elevation code

xelevation = rio.open(tifData[2])
elevation = xelevation.read()[0]
# mask = elevation < -100
# elevation[mask] = None
#water = np.genfromtext(water, delimiter = ',')

# Check elevation and water have the same dimensions

rows = range(np.size(water, 0))
ncolumns = np.size(water, 1)
columns = range(ncolumns)

elevationW = 1

waterDepth = np.empty([NoWater,3])

i = 0
for row in rows:
    boundaryColumn = 0 

    print(str(row))
    for column in columns:

        if elevation[row,column] > -10:
            x,y = xelevation.xy(row,column)

            if column == 0 and water[row,column] == 1:
                while water[row,boundaryColumn] != 0 and boundaryColumn < ncolumns:
                    boundaryColumn += 1
                elevationW = elevation[row,boundaryColumn]

            if column == 0:
                continue

            elif water[row,column-1] < 1e-9 and water[row,column] > 0.99: 
                elevationW = elevation[row,column]
            
            if water[row,column] > 0.99:
                depth = elevationW - elevation[row,column]
                waterDepth[i] = np.array([y,x,depth])
                i += 1

df = pd.DataFrame(waterDepth,columns = ['Latitude','Longitude','Depth'])

<<<<<<< HEAD
dfStandardCar = df.loc[df['Depth'] <= .20]
dfHighCar = df.loc[(df['Depth'] > .20) & (df['Depth'] <= .40)]
dfBoat = df.loc[(df['Depth'] > .40)]
=======
df = df.loc[(df['Longitude'] > 0)]

dfStandardCar = df.loc[(df['Depth'] > 0.20)]
dfHighCar = df.loc[(df['Depth'] > 0.40)]
dfBoat = df.loc[(df['Depth'] > 1.0) & (df['Depth'] <= 9)]
>>>>>>> 78878a00a2b8436aa85b0771467af1e84999a45d

df.to_csv('all.csv')
dfStandardCar.to_csv('standardCar.csv')
dfHighCar.to_csv('highCar.csv')
dfBoat.to_csv('boat.csv')



<<<<<<< HEAD
print('hello world')
=======
print('hello world')
>>>>>>> 78878a00a2b8436aa85b0771467af1e84999a45d
