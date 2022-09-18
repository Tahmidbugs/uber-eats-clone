
This is the clone of Uber Eats App I built over the summer

**Technologies used: React Native, GooglePlacesAPI, YardAPI, Firebase and Redux**

## Welcome Page:

Intro Slide created using AppIntroSlider from ["react-native-app-intro-slider"](https://www.npmjs.com/package/react-native-app-intro-slider)

Preview:
<br>
![enter image description here](https://media.giphy.com/media/AZGTQKt81Z7qohITz9/giphy.gif)


## Registration/Login Pages
<div style="display: flex; flex-direction: row">
<img src="https://i.imgur.com/wznQSj1.jpg"  width="200" height="420" style="margin-right:150px"/>
<img src="https://i.imgur.com/80MYNtQ.jpg"  width="200" height="420"/>
</div>

*Under the hood:* The user is authenticated using firebase authentication

## HOME PAGE

Preview:
<br>
![enter image description here](https://media.giphy.com/media/5eKS3dgQcKrd1r7CWY/giphy.gif)

*Under the hood:* GooglePlacesAPI is used to search for cities around the US and Yard API generates a list of restaurant businesses in the selected city. The toggle Pickup and delivery finds for businesses that use the respective terms in their bio.

## ORDERING FOOD

Preview:
<br>
![enter image description here](https://media.giphy.com/media/Q14KooK9x7yXODuYsk/giphy.gif)

*Under the hood:* Redux State management is integrated for the add-to-cart feature. The order details are then uploaded to firebase firestore order collection.




# HOW TO RUN

Download Expo Go App on your phone
On your terminal run: npm start
This will generate a barcode, scan it with your phone camera and the application will begin running on the Expo Go Application.

