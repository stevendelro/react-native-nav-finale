# Project 4: Manager: A React Native Navigation Primer

Built while following along: [The Complete React Native and Redux Course](https://www.udemy.com/the-complete-react-native-and-redux-course) by Stephen Grider. 

## What does it do?

The completed app is a *super simplified* employee schedule notifier. 

Theoretically, if this app was refined over a few more days, a manager of a small company would be able to create an account, add their employees, their phone numbers, and assign a day of the week each employee is assigned to come in. 

They would also be able to send a text to each employee in order to notify them of what day to come in.

### A walkthough of the app:

1. The user is presented with a login screen with **Email** and **Password** input boxes, along with a **Login** button.
  * If they don't have an account, that's fine, they would still use the same login screen to create an account.
  * If a mistake was made, an error will be presented to notify the user.
  * Once an account is made, that user's employee information would only be accessable *by that user and that user alone*.
  * A loading spinner will replace the Login button as the app communicates with Firebase.
    
2. The user is then routed to an **Employees** screen with a simple header and an **Add** button to the right of the header title.
  * The routing from the authentication screen to the employee list screen is one-way.
    
3. When the user taps the **Add** button, they're routed to an **Add Employee** screen.
  * The Add Employee header has a back button to the left of the header title that'll give the user the ability to go back to the Employee List screen at-will.
    
4. The **Add Employee** screen is a basic card with four card sections:
    1. A **Name** text input.
    2. A **Phone** text input.
    3. A **Shift Picker**, which is basically an iOS option dial with each of the seven the days of the week.
    4. An **Add** button.

5. The user will then fill out the card, hit **Add**, and then automatically routed back to the Employee List screen.
  * At this point, the **Add Employee** screen is wiped clean of the user input.
  * The **Employee List** screen will now have a list item present, containing the employee's name.
    
6. The user could either **Add** another employee and repeat the process, or they could tap on an employee's **Name**.
7. If the user taps an employee's name, they'll be routed to the **Edit Employee** screen, which looks similar to the **Add Employee** screen, *but with three different buttons below the Shift picker*:

  * **Save Changes**
    * This does exactly that, it will update that user's info in the firebase database.
    * Afterwards, the user will then be routed back to the employee list screen.
      
  * **Text Schedule**
    * This will take the user out of the app and into their phone's text message app with a hardcoded message that has the employees name and day of week they should come in.
    
  * **Fire Employee**
    * This will remove the employee from the firebase database, which will remove them from the **Employee List** screen.

8. If the **Fire Employee** button is tapped, a pop up will slide in, prompting the user to confirm their decision. 
  * The pop-up has two buttons, **Yes** and **No**.
    * Tapping **Yes** will remove the employee from the database and bring the user back to the **Employee List** screen.
    * Tapping **No** will allow the modal to slide out of the way, alowing the user access back to the **Edit Employee** screen.
    
That's about it!

## Here's a few notes that I've taken mid-project.

* I wish Grider had told us about the `arrow-body-style` ESLint rule exclusion during the first project of this course--that error was driving me *insane*.
* Creating the components in the first project and then subsequently using them throughout the course was something that I wasn’t expecting, yet I found it *really* rewarding. I felt like I literally made everything in this app, and to a certain extent, I kind of did. (Thanks Grider!)
* **react-native-router-flux** was awesome to learn about, except when I began to run into problems caused by the tutorial not being completely up to date.
* After some digging around, I found that the *current Router of choice* for React Native is **react-navigation**.
* It’s unfortunate to know this and to still have to drudge through the tutorial knowing that I’m learning how to use outdated tools.
* But, if coding has taught me anything, it’s that **if you learn the basic concepts of a tool for a language (like a Routing library) then it’ll be easier to pick up whatever comes along that does it better.**
* When I finish this tutorial, I *may* branch the project off at this point in order to mess around with react-navigation for fun.

#### Some frustrations and a little appreciation:

* All of the Firebase specific code was really new to me. Grider does a great job at explaining why he’s using the methods that he used, but I was hoping to see more footage of him looking over the documentation and emulating how a newbie would discover those same methods. Yeah, that may be asking too much, but these are the thoughts you have when you’re a student. 
* I went crazy spending 40 minutes trying to find out why my inputs weren’t getting anything into state. It turns out that I was using `onChange` instead of `onChangeText`--son of a mother, smh. That’s never happening again.
* Firebase has a  persistent `.on` method that works great with redux. 
* The first time it’s called, it’ll watch for any updates and automatically dispatch and update our employee list--extremely convienient.

#### In Lecture 147, things go from enjoyable *to confusing*.

* Grider introduces the React Native `ListView.DataSource` concept out of nowhere and assumes that we know how it works. 
* He says that we’ve done this before, but he’s mistaken. This was the very first time this concept was introduced in this tutorial. To top it off, the official docs note that `ListView` has been deprecated.
* It’s a shame that this happened. There was so much potential in learning, but instead he rushed through things. Anyway, enough crying. 
* Looks like Grider made up for that by showing us a really awesome object-to-array manipulation technique with `_.map` from the lodash library.
* Since the `ListView.DataSource` situation, Grider has expanded on this unfamiliar syntax to make it more robust. I’d be lying if I said that I was able to understand the reasoning behind every single line of code from that point onwards, but *I was finally* able to resolve some confusing and unfamiliar errors after a good nights sleep.
* Also, passing an additional prop to the addEmployee form with the react-native-router-flux navigation helper was pretty cool. That saves a ton of work of having to create extra logic within the FormReducer.

#### Learning from this:

* This is something that I should simply expect in my fore-coming professional life: I should expect to have bombs of unfamiliar syntax dropped on me, and having to be able to figure it all out with minimal help. 
* Touché Grider, touché.*

#### Big decisions:

* Grider takes us on a diagrammed decision making journey on whether or not to reuse code to separate the “Add New Employee” logic from the “Edit Employee” logic. 
* I found this extremely useful and candid, as these are the kind of decisions that developers *must make* on a daily basis. 
* Seeing his thought process about the situation, and then seeing the solution that he came up with was invaluable for me as a newb.
* Using `{…this.props}` as an attribute for a child component in order to pass the props through was really useful.

# Final thoughts: 

Awesome course, but it is a bit outdated and with it's own issues towards the latter half. Regardless, I learned a lot and I'm going to keep the momentum going with more and more projects. I'm a bit interested in the Flutter ecosystem, but I think I'll stick to mastering my Javascript Stack for now.

I checked out [Grider's website](https://https://www.rallycoding.com/) and he's got a few interesting learning paths for the courses he's made. In no way am I affiliated with him, but for the sake of having a consistent teacher, with consistent course structure and teaching style, I plan to continue doing his courses. 

I'm kind of banking my entire life on getting really good and landing a developer job before I run out of money. With the momentum that I've built with this course, I'll demolish the next few courses as I slowly ramp up my coding to 10+ hour days. 

This is no longer about aptitude, because I have that in spades. This is about developing an incredible work ethic and drive for the craft.

### Next up: 

[The Complete Developer's Guide for MongoDB](https://www.udemy.com/the-complete-developers-guide-to-mongodb/?couponCode=4MORE1234)

#### Queue (in order):

1. [Advanced React and Redux](https://www.udemy.com/react-redux-tutorial/?couponCode=4MORE1234)
2. [Node with React: Fullstack Web Development](https://www.udemy.com/node-with-react-fullstack-web-development/?couponCode=RCODING)
3. [GraphQL with React: The Complete Developers Guide](https://www.udemy.com/graphql-with-react-course/?couponCode=4MORE1234)
4. [Server Side Rendering with React and Redux](https://www.udemy.com/server-side-rendering-with-react-and-redux/?couponCode=RCODING)
5. [The Coding Interview Bootcamp: Algorithms + Data Structures](https://www.udemy.com/coding-interview-bootcamp-algorithms-and-data-structure/?couponCode=4more1234)
6. [Node JS: Advanced Concepts](https://www.udemy.com/advanced-node-for-developers/?couponCode=RCODING)
