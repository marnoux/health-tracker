# Health Tracker

#### Built with:
- node version 14.18.1
- npm version 6.14.15

#### To run the project, enter the following commands in your terminal / command line
{Project Directory} = The directory in which you saved the project 
<br>

```` 
cd {Project Directory}
npm install
npm start
````

## Some information about the project

### **Timeboxing**
I completed the bulk of the required functionality in about 6 hours.  After that, I spent about 2 hours refactoring the project and writing documentation. I understand this is not in line with the suggested timeboxing, but I truly had fun with this project and you don't get a 2nd chance at a 1st impression.

### **Architecture Choices & Tradeoffs**
### *Component Structuring*
I structured my components hierarchically and by decomposing functionality into smaller component blocks that form part of a larger component tree. The basic tree structure is as follows: 
* App --> Page --> Main Functional Component Element --> Sub Functional Component Elements

### *Don't Repeat Yourself (DRY) & Single Responsibility Principles* 
I focused on applying the DRY principle, the tradeoff here was that I did not create a single component for displaying data, even though most of the data was of a similar structure.  The reason for this is is to have one base component class per function, closing it down for alteration and opening it up for extension. 

### *Use of 3rd party css libraries*
I decided not to use css libraries just for the reason that I wanted to demonstrate my knowledge off CSS and not rely on pre-built classes. 

### *Data seeding*
I did add dummy data to the project, just to save the reviewer some time by not having them populate an entire dataset to preview the application: 
![dataSeeding](https://i.imgur.com/IU3eL1R.png)

### *Responsiveness*
Even though it was not a requirement, the app is fully responsive and can be testing on any screen size:
![largeScreen](https://i.imgur.com/uTYjM4s.png)

![smallScreen](https://i.imgur.com/7KLMd3O.png)

### *Validation*
There is no input validation on the fields other than basic built in HTML type validation

### *Usage of TypeScript*
I decided not to use TypeScript due to the small size of the project  

If you have any questions that require an explanation, please feel free to contact me [here](mailto:marnouxmanser@gmail.com).

# Thank you 
## Thank you for taking the time to review my project
