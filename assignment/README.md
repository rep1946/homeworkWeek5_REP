### Description 

The team from Relaxr is back...again! They want their page to be more interactive and asked you to add JavaScript to their source code. You've been given the HTML and CSS but will need to create a JavaScript file and add a few different pieces of interactivity:  Users should be able to click a link and have the remainder of the blog's content slide down and appear on the page, both on the main content column and the side bar; users should also be able hide the content when they are finished reading. See a detailed technical explanation below.


## Real-World Applications

- Practice programmatic thinking to plan before writing code
- Use basic JavaScript to create an interactive page based on a user action
- Link an external JavaScript file from HTML

## Technical Requirements 

- Use the ```$.ready()``` handler to delay your code from executing until all DOM assets have been loaded
- Select the appropriate DOM elements with CSS selectors upon a user's click using the ```$.click()``` handler
- If a user clicks "Read More" on the primary column:

  - have the text in the ```<p>``` tag slide down along with a "Read Less" link in the blog post using  ```$.slideDown()``` and ```$.show()```
  - hide the "Read More" link using ```$.hide()```

- If a user clicks "Read Less" on the primary column:

  - have the ```<p>``` slide up and hide the "Read Less" link using  ```$.slideUp()``` and ```$.hide()```
  - show the "Read More" link using ```$.show()```

- Using the same functions as above, if a user clicks the "Learn More" link in the sidebar, have the ```<span>``` inside that ```<p>``` slide down and hide the "Learn More" link using ```$.slideDown()``` and ```$.hide()```



<br>

---

### Resources

- [Starter Code](starter_code)
- [Cheat-sheet of jQuery selectors, methods, and events](http://oscarotero.com/jquery/)
- [Get more practice with jQuery DOM selectors](jquery_dom_selector_practice)


<br>

---

# Evaluation / Submission: Due Monday!


- Use the same folder and GitHub repository as the previous project ("homework-landingpage"). You will keep working on that code, modifying it using the `starter-code` if necessary.
- Open an issue ticket on _this repository_
- Wins, losses, comfort, completion... you know the drill

# REMINDER: Final Project Milestone 1

On Monday, we will be having 1:1 meetings to review your final project proposals. Please have a description of the site you plan to make as well as wireframes!
