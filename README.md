### NASA IMAGES DOWNLOADER

#### Description

This Javascritp App accepts a rest request that contains a date. It then uses Nasa’s api to look for photos on that date. If that date contains any images it downloads all the images at the location returned and save them to a directory the date that they came from. 

The response to the rest request returns whether the api call to nasa was successful and how many images were downloaded and saved.

#### Lanuage Used

> Javascript

#### Technology Requirements

> NodeJs v10.16.3 or greater and 
> NPM v6.9.0 or greater


#### How to run the project

`git clone https://github.com/baronntambwe/nasa_api.git`

`cd ./nasa_api`

`npm install`

`npm start`

#### How to run the tests

`jasmine`



