#!/home/ece-student/anaconda3/bin/python
#chmod 755 splitargs
# -*- coding: utf-8 -*-


# Created by: Pat Rick Ntwari
# In support of final project 

# Intend is to pull data out of a csv and transform it into a json for use in react native


# imports
import csv
import json

#**************************actual code***************************
# initialize output list
allData = []

# open csv for reading
with open('bostonclients.csv','r', encoding='utf-8-sig') as file:
  data = csv.DictReader(file,delimiter=",")
  for row in data:
    #initialize listsand dictionaries used within for so they reset with each loop
    labels = []
    row_dict = {}
    # create the dictionary - each row is a dictionary
    # location is itself a dictionary within the row dictionary
    row_dict[row["Company"]] = row["Company Name"]
    row_dict[row["ID"]] = row["ID Key"]
    row_dict[row["Used"]] = row["Used State"]
    
    item = row_dict.get(row["Location"],dict())
    item[row["Address"]] = row["Full Address"]
    item[row["City"]] = row["City Name"]
    item[row["Latitude"]] = float(row["Latitude Value"])
    item[row["Longitude"]] = float(row["Longitude Value"])
    row_dict[row["Location"]] = item

    # plug in the created rows
    labels.append(row["Label 1"])
    labels.append(row["Label 2"])
    labels.append(row["Label 3"])
    labels.append(row["Label 4"])
    row_dict[row["Labels"]] = labels

    row_dict[row["Coupon"]] = row["Coupon String"]
    allData.append(row_dict)

# dump all data into json file for use in react-native
with open('bostonclients.json','w') as fwrite:
  json.dump(allData,fwrite,indent=2)

print(allData)