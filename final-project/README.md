final-project/Appendix.pdf
# **FP4 \- Final Project Writeup**

Feel free to refer to this [Markdown Cheat Sheet](https://www.markdownguide.org/cheat-sheet/) to make your writeup more organized, and you can preview your markdown file in VSCode [Markdown editing with Visual Studio Code](https://code.visualstudio.com/docs/languages/markdown#_markdown-preview). 

## WAVE Testing PDF & Appendix 
[Access PDF](final-project/Appendix.pdf)

## Part 1: Website Description

Describe your website (300 words).

* What is the purpose of your website?
	- The primary purpose of my website is to give users a brief glimpse into my work and skills as an emerging professional in the HCI space. Beyond that, I want to use this platform to showcase the journey that led me to UX research, specifically what makes me so passionate about the assistive technology space. 
* Who is the target audience?    	
  - The user group is not limited to recruiters and hiring managers, but also includes peers and individuals who are exploring HCI as a career pathway. For recruiters, the site serves as a high-level “About Me” website that outlines some of my technical and research skills, while for HCI explorers, it offers a transparent look into the process of breaking into the field. 
* What information do you convey with your website?   
  - The goal is for every user to walk away with a clear understanding of my passion for inclusive design and the depth of my research-driven, creative approach to problem-solving in the assistive technology space. By incorporating the impact of volunteer experiences like Angels on Stage, I hope to illustrate that my journey to HCI was intentional and that I have had a clear trajectory towards UXR, even when I did not know it. 
* How is it interesting and engaging?
	- To make my website interesting and engaging, I leveraged a visual storytelling format which gives the site a polished feel that aligns with modern web design trends. The site is also unique in that it tells a story while guiding attention to pertinent information by only presenting bits and pieces at a time. In order to move on to the next section of the story, users need to scroll through the whole section. To give the site some movement, I incorporated a bouncing arrow on the landing page that allows users to jump to the next section but also holds semantic information to communicate that they need to scroll down for more information. I also added parallax styling to the swirl elements so that they move as the user scrolls. This reduced fatigue for me as I read through a NY Times article, which is where I pulled inspiration from. Finally, I think I succeeded at bringing a personal touch to the site that gives users insight into my personal style and work ethic. 

## Part 2: User Interaction

How a user would interact with your website? For each step, briefly but clearly state the interaction type & how we should reproduce it.

1. User arrives on the landing page
2. Users can either scroll down to view the next panel in the story or click a bouncing arrow that directs them to the next section. This provides an option for guided navigation while also encouraging exploration.
3. Users continue to scroll through the site to experience a seamless, continuous narrative. As they progress, they encounter each integral part of my journey, presented in a way that encourages engagement and maintains interest. 

## Part 3: External Tool

Describe what important external tool you used (JavaScript library, Web API, animations, or other). Following the bulleted list format below, reply to each of the prompts.

1. Font API
  * Why did you choose to use it over other alternatives? 
    - I chose to incorporate this font API because it provided a broad range of options that supported the site’s storytelling aesthetic better than a built-in font. I also wanted the final product to match the Figma design prototype as closely as possible. 
  * How you used it? 
    - I imported the web font from Google Fonts into the webpage by adding it as I would a CSS file in the HTML. I leveraged the font to make the headers stand out more and the text match the Figma prototype. 
  * What does it add to your website? 
    - The font enhances the visual appeal of the site and establishes a clear typographic hierarchy. This makes the site look and feel more modern as well as makes the content more readable. 
2. Keyframes arrow animation
  * Why did you choose to use it over other alternatives? 
    - The arrow animation was simple to implement and simple for users to interact with. It provides a universally understood visual cue for navigation, which many users I tested with greatly appreciated. 
  * How you used it? 
    - I used CSS keyframes to animate the arrow with a subtle bounce effect that persists while the arrow is in the users’ field of view. I also leveraged JS to make it clickable so that users may use it to navigate to the next section.  
  * What does it add to your website? 
    - The arrow animation draws attention to the interactive elements of the site which creates an intuitive guide for users to know which actions to take. It also provides movement on an otherwise static site. 
3. P5 js
  * Why did you choose to use it over other alternatives? 
    - P5.js provided an easy way to create the parallax style I was interested in programming. It would have been harder to do this using regular JS and CSS. 
  * How you used it? 
    - I used P5.js to animate the parallax effect shown in the swirls in the Angels on Stage section. The swirls are intended to move up and down based on the user’s scroll behavior. 
  * What does it add to your website? 
    - I believe the parallax scrolling introduces an element of creativity in a website that is pretty polished and minimal. It elevates the user experience by making the storytelling more immersive. 

## Part 4: Design Iteration

Describe how you iterated on your prototypes, if at all, including any changes you made to your original design while you were implementing your website and the rationale for the changes. (4-8 sentences max)

  The design and concept of my website changed at least 3 times: it started as re-designing a website for Angels on Stage, changed into a visual story about Angels on Stage and what the program is all about, and finally morphed into a personal portfolio piece (see the shift from prototype 1 and 2 in FP2 to the updated design in FP2). After receiving valuable feedback from my peers, I decided to focus on making the design a continuous scroll as opposed to multiple pages because I felt it suited the visual storytelling style better. As I shifted towards making a portfolio piece, I thought about how to showcase my journey to HCI and UXR, which I eventually segmented into 8 unique sections: 1. Hook (quote) 2. Intro to the story (An Unspoken Love Story) 3. What inspired me to pursue UXR (Why UXR) 4. About Angels on Stage 5. What inspired me to pursue HCI (My Journey to HCI) 6. My undergraduate research (My Love for Research) 7. My data analytics background (The Numbers) and 8. My mission and career aspirations. I wanted the imagery to be powerful, so I utilized the continuous scroll format with images that took up the whole viewport height to maintain attention on one segment of the story at a time. I also leveraged large serif titles and sans-serif body text to build a clear hierarchy that visually broke up the story segments. Ultimately, these design decisions culminated in a powerful visual story about my journey into UXR and assistive technology. 

## Part 5: Implementation Challenge

What challenges did you experience in implementing your website? (2-4 sentences max)
	The most challenging part of implementing this website was by far the JS functions to animate the arrow and create the parallax effect on the swirls. I did use GenAI to assist in these areas, which I will outline in the next section, but it was extremely eye-opening for me to learn how to accomplish something like this. Another extremely challenging part of this project was leveraging flexbox styling and z-indices to organize elements. 

## Part 6: Generative AI Use and Reflection

Describe how you used Generative AI tools to create this final project (fill in the following information, write \~500 words in total).

Document your use of all GenAI tools — ChatGPT, Copilot, Claude, Cursor, etc. using the template below. Add/Delete rows or bullet points if needed, and replace Tool1/Tool2 with the name of the tool.

### Usage Experiences by Project Aspects

Feel free to edit the column \_ (other?) or add more columns if there's any other aspect in your project you've used the GenAI tools for.

For the following aspects of your project, edit the corresponding table cell to answer:
- *Usage*: Whether you used / did not use this tool for the aspect. Enter [Yes/No]
- *Productivity*: Give a rating on whether this tool makes your productivity for X aspect [1-Much Reduced, 2-Reduced, 3-Slightly Reduced, 4-Not Reduced nor Improved, 5-Slightly Improved, 6-Improved, 7-Much Improved].

| Tool Name | Ratings | design | plan | write code | debug |
| :---- | :---- | :---- | :---- | :---- | :---- |
| Perplexity | Usage | No | No | Yes | Yes |
| Perplexity | Productivity | N/A | N/A | 5 | 7 |

PLEASE NOTE: For this project, I *exclusively* used Perplexity and no other AI tools. I chose to use this platform because it is one of the only GenAI platforms whose premium version is available free of charge to us as students.   


### Usage Reflection

> Impact on your design and plan 
* 	It matched my expectations and plan in FP2 in that I was able to use it for assistance on my JS for the parallax animations (P5.js). Those functions were extremely hard to wrap my head around so I tried my best at it and had Perplexity help me with the rest. This format actually encouraged me to learn because I was having more successes rather than failures, which is what would happen when I tried to do it without assistance.
* It did not match my expectations and plan in FP2 in that I was expecting that Perplexity would be able to understand my use cases better. For example, I tried to explain what I wanted the code to do visually, but in the first few iterations, the system was unable to execute on the prompt. It actually animated a third swirl to parallax up instead of parallaxing the existing swirl up. 
* Perplexity did not influence my final design at all because I spent a large proportion of time on this project in Figma doing the legwork. For example, I had three concepts which each built off one another and, at each step, I refined the content, iterated on the designs, and thought intentionally about information architecture. In terms of the implementation plan, I think there were times at which the use of GenAI sped up processes that I anticipated would take me longer, like the parallax animations. However, this time averaged out with the time I spent refining queries without GenAI, which kept my timeline on the implementation plan pretty static.   


> Use patterns
* I accepted the generations that the system gave me only after I fully understood each line of code independently and how it would fit within my existing code. For example, Perplexity suggested that I set the width of an image in a media query to be 40% because I had asked it to help me style for mobile. I evaluated this suggestion by pasting the suggested line of code into my CSS file. I then modified it because I realized that style did not match what I expected from the mobile version. Eventually, I chose to use the CSS width property along with the percentage because I realized that was a clever way to style for responsiveness, but I did adjust the percentage to 100% based on my style preferences. There were other similar use cases where I had to modify or simply reject suggestions from Perplexity but, each time, I took the same approach. I made sure to understand what each line does, evaluate the effectiveness, and only use if it fits the expectations that I have of my code.


> Pros and cons of using GenAI tools
* Pros
  1. It was great at rapid problem solving for specific technical questions, like syntax errors or how to isolate specific elements when styling.
  2. Useful for targeted fixes based on error messages, especially when writing JS functions 
  3. Quick explanations for complex technical concepts. Often, Googling or going on Stack Overflow can be tedious and takes more time than simply asking GenAI.
  4. Suggestions for optimization for accessibility or changing your code to be more accessible.
  5. Sometimes the system will tell you what its sources were for generating the code, which you can click directly into. This is really helpful because you can actually read through that documentation to solve your issue.

* Cons
  1. Sometimes it is just wrong and you are left to debug the code it suggested to you.  
  2. Takes previous chat history and works it into what you are asking for now even when they are new chats. For example, it gives you the wrong information or does not do what you ask.
  3. Sometimes it takes longer to type the prompt that it does to just code it yourself. 
  4. In the case of Perplexity, the system shows you exactly what it is doing (e.g., surfing the web for x, y, z, generating code, etc.) which can be sensory overload if you are not interested in knowing how the system got to your answer. 


### Usage Log

Document the usage logs (prompts and chat history links) for the GenAI tools you used. Some tools may not have an easy way to share usage logs, just try your best! Some instructions for different tools:

1. Debugging on-hover code (e.g., realizing I did not use a comma to change styling of a specific element inside a div) [Link](https://www.perplexity.ai/search/fix-this-selector-to-have-the-Yc0RbVZjRQqOP9FdFUBSUg)
2. Figuring out how to hide the scroll bar at the bottom of the page [Link](https://www.perplexity.ai/search/specifying-body-style-backgrou-O1AqEMtLQHWUJBc3CJMCog)
3. Instead of specifying a specific pixel height, Perplexity suggested I use vh and I set this to 100 so that it makes the element exactly as tall as the viewport. This was a great suggestion because it allows the height of a section to be dynamic for any device, which is central to my design (maintaining attention in a specific location to complete reading that part of the story).  
4. I used rem instead of px for accessibility purposes and researched on Perplexity what aspect of accessibility that addresses. [Link](https://www.perplexity.ai/search/what-does-using-rem-instead-of-vsbUNXmBTQe1oAfBEfwepg) 
5. Fixing images being warped [Link](https://www.perplexity.ai/search/why-is-this-image-squished-sty-tZ7UVo9jT3iswOgIs09Trg) 
6. Adding overlay to image [Link](https://www.perplexity.ai/search/add-an-overlay-to-the-dashboar-KgobVLR2TaWWxryvtyulSg) 
7. I attempted to write the parallax scroll function a few times over the course of a week or so but I was not able to get it, so Perplexity helped me implement it. 
8. I asked for Perplexity Adjust for media queries (making it responsive to iPad). It gave me a baseline to work with and I tested to see whether it worked but there were some bugs, so I adjusted the queries as needed [Link](https://www.perplexity.ai/search/adjust-my-code-to-make-it-comp-Cfbg7JlIQK25038G5j7s0g). There were some images that were not showing on iPad, so I debugged with GenAI. [Link](https://www.perplexity.ai/search/the-arrow-and-aos-logo-are-not-98T_N81_Rgas047j3Ho5lQ)

## Part 7: External Resources 
I added this section to note any external references I used (not comprehensive):
- Learning how to use keyframes: [Link](https://developer.mozilla.org/en-US/docs/Web/CSS/@keyframes)
- Learning how to position images [Link](https://www.digitalocean.com/community/tutorials/css-cropping-images-object-fit) 
- Learning how to position specific elements [Link](https://www.w3schools.com/css/css_positioning.asp)
- Flexbox style references [Link](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
- References to targeting nested elements in CSS styling [Link](https://stackoverflow.com/questions/10644778/targeting-nested-elements-with-css)
- Parallax scrolling in P5.js [Link](https://editor.p5js.org/clt381/sketches/S1sZkQfOG)
- Horizontal parallax scrolling tutorial [Link](https://www.youtube.com/watch?v=4Ud3oX-cKxc) 
- Inspecting the inspiration website [Link](https://www.nytimes.com/interactive/2022/01/21/opinion/roe-v-wade-abortion-history.html)
- Arrow animation [Link](https://www.geeksforgeeks.org/how-to-make-smooth-bounce-animation-using-css/)
- CSS bounce animation [Link](https://www.tutorialspoint.com/css/css_animation_bounce.htm)

---

# **FP3 \- Final Project Check-in**

Document the changes and progress of your project. How have you followed or changed your implementation & GenAI use plan and why? Remember to commit your code to save your progress.

## Implementation Plan Updates

- [X]I used the following websites for inspiration on the changes I wanted to make based on feedback from my usability test.  
  - [Visual storytelling article inspiration](https://ig.ft.com/generative-ai/)
  - [Parallax scrolling inspiration](https://www.nytimes.com/interactive/2022/01/21/opinion/roe-v-wade-abortion-history.html) 

## Generative AI Use Plan Updates

- [X] I used Perplexity to make suggestions on how to make the website more accessible (it suggested to me to use rem instead of px for screen size, add semantic section labels like h2, etc.)
- [X] I was not sure how to import the font I used when I was designing in Figma, so I used Perplexity to tell me how to import the same font.

---

# **FP2 \- Evaluation of the Final project**

## Project Description

The basic idea is to create a website that will support and showcase Angels on Stage, a performing arts program designed for children with disabilities. I would like this website to be very visually eye-catching and driven by storytelling so that it would be more impactful. Ideally, it will showcase images and quotes from the Angels (the participants) that will come together to tell a full story. Additionally, it should fit the vision and mission of the program so that the staff who manage the company’s website could find a place for it in their current design. 

## High-Fi Prototypes

### *Prototype 1*
![Home Page](images/FP2/Prot1_A.png)
![Navigation Menu](images/FP2/Prot1_B.png)

This prototype depicts my vision of the home page and navigation menu. I wanted the hero image to be powerful and impactful, so I opted for a hamburger menu so as to not detract from the image. The feedback I got from classmates was that a hamburger menu may be too many clicks for the user to be able to access what they are looking for, especially in the case when they come to the website looking for something specific. They shared that I could opt for a regular navigation menu where each menu item lives on the home page. They suggested I make the text on the redesigned navigation bar a light gray instead of white so that it does not detract from the hero image as much. 

### *Prototype 2*
![About Us Starting](images/FP2/Prot2_A.png)
![About Us Scroll View 1](images/FP2/Prot2_B.png)
![About Us Scroll View 2](images/FP2/Prot2_C.png)

This prototype is of the About Me section of the website. The purpose is to walk users through the vision and mission of Angels on Stage as well as share a bit about its origins. It is intended to be in a parallax scrolling style and I was actually able to accomplish this using Figma SmartAnimate (although I was not able to attach a video to the README file). The feedback from users was that I should consider not overlapping the text with the image on the second screenshot because it does not look intentional. Additionally, users shared that I should align all the text (either right or left) so that it looks consistent while users are scrolling. 

## Usability Test
I created prototype 1 and 2 for the FP2 and conducted my usability test with a classmate on those two designs. I will discuss the findings here and then discuss invaluable feedback I got during the lab session which actually inspired me to take an entirely different approach to the website. 

Since I conducted a usability test with a think-aloud procedure, I got to hear the user’s perspectives on some elements of the design. During the usability test on prototype 1, I found that the user was able to access the hamburger menu without issues. She did say that the hero image was perfect for the landing page and that it had an emotional draw for her. This is the reason I decided to keep this as my main image in my final design. She shared that the hamburger menu was too many clicks to get to where she needed to be and that it could be helpful to have a traditional navigation menu so that users can jump around while they are in other pages, like the About Us page. I had planned to incorporate this feedback by changing the hamburger menu to a traditional navigation bar but, given that I am modifying the idea a bit, I will not have to include tab navigation at all. When I asked her to scroll through the About Me page, she did not initially catch that the scroll needed to be done via the scroll bar on the right and kept trying to scroll with two fingers. I anticipate that this was due to the fact that it was a Figma prototype. I do not anticipate having these issues when the website is built out. 

During class, I spoke with a classmate about the project and she mentioned that it may be worthwhile to consider a visual story format that does not follow the typical structure of a website (i.e., having various tabs like About Us, Programs, etc). This inspired a brand new design concept that is depicted and described in the following section.  

## Updated Designs
![Landing Page](images/FP2/Post_A.png)
![Scroll 1](images/FP2/Post_B.png)
![Scroll 2](images/FP2/Post_C.png)
![Scroll 3](images/FP2/Post_D.png)
As mentioned above, I chose to move in a different direction after the usability test and user feedback from class. This design depicts what I imagine will be a visual story about Angels on Stage and the impact it has had on the community. I have incorporated high contrast color choices and powerful imagery to grab the attention of the user and play on the emotional side of this issue. I plan to add elements, like the swirl, that will parallax, along with the images and text, as the user scrolls through the website. This will give the site a polished but fun feel, which compliments the goal I have for this website, which is to draw users in and dispel stereotypes about disability. 

## Feedback Summary

I presented prototype 1 and 2 in lab on Monday and got a variety of feedback. I chose not to incorporate much of this feedback because it pertained to my old design when I was considering a traditional website with tabs/pages. Now that I have shifted towards a visual story, this feedback does not directly apply. 

Angela echoed the sentiments from the initial usability test that I conducted with another classmate when she shared that the hamburger menu was not the right design choice for this website. She suggested I change it to a traditional nav bar. I did share with her that my concerns were that the navigation would detract from the hero image, she suggested that I make the text color a light gray which would not detract as much from the design. She also brought up a good point to ask whether the home page would be scrollable and, if it was, I should have a scroll icon of some sort to indicate this. This made me think about the information architecture and how I would like to organize it.  

Seun mentioned that I should consider making the website a continuous scroll that indicates a progress bar along the left or right that would allow users to jump to and from various points on the website. I chose to incorporate this feedback in the structure of my visual story (my final design) by making it have no tabs and rather be a continuous scroll. Evolone gave me inspiration to look at Juliard’s website and other art websites to get some design inspiration because this program is for musical theater. I will be incorporating inspiration from these websites because I think it could be creative to make the design feel “artsy”.

The best feedback came from Niki, who suggested I change the idea slightly to make it less of an informational website but rather an inspiring visual story. She mentioned I could incorporate those powerful visuals I already have from the director of the program to make it emotionally appealing. We brainstormed a bit together about how I could also ask for quotes and testimonials that I could write about, like a journalist would. I chose to follow this direction and created the post-feedback prototypes you see in the updated designs section. 

## Milestones

Week 9 (Oct 28 - Nov 1) was focused on basics. I was ideating, finalizing the project proposal, figuring out how this website would fit with Angels on Stage’s existing values and mission, and understanding how to translate that into code. I also gathered high-quality images sourced from the program itself and researched libraries like Textillate, D3, Pixi, p5, and jQuery. I finalized the design I will be building out. 

Week 10 (Nov 4 - Nov 8) I will continue to build out the high-fidelity prototype on Figma, thinking about which visuals I would like to incorporate and how the information architecture will be organized. I will also use this time to begin building the website structure, coding the basic layout for parallax scrolling, and thinking about where I want to incorporate animation. By the end of this week, I will have a running project with a functional skeleton to show to my classmates in order to get feedback from them for the next phase of this project 

Week 11 (Nov 11 - Nov 15) I will focus on refining the layout and enhancing visual effects. I will integrate images, finalize text placeholders, and fine-tune animations to create a cohesive user experience. The goal for this week is to make sure the website is both visually appealing and functional.

Week 12 (Nov 18 - Nov 22) I will prioritize accessibility and optimization. I will use this time to make sure the website is accessible, responsive, and optimized for different devices (e.g., screen readers, etc). After testing for high contrast and proper navigation, I will refine the design for any elements I missed.

Week 13 (Nov 25 - Nov 29): I will use this week for final adjustments, incorporating feedback, and polishing the design.  

Week 14 (Dec 2 - Dec 6): This week will be for completing the final project documentation and any other associated materials. 

### *Implementation Plan*

- [ ] Week 9 Oct 28 \- Nov 1:
  - [X] Finalize project proposal and goals
  - [X] Gather high-quality images from volunteer coordinators
  - [X] Research JavaScript libraries (Textillate, D3, Pixi, p5, jQuery) for visual storytelling elements
  - [X] FP1 due
  - [X] Build hi-fidelity prototypes
  - [X] Test hi-fidelity prototypes

- [ ] Week 10 Nov 4 \- Nov 8:   
  - [X] FP2 due
  - [X] Finalize design
  - [X] Start experimenting with JavaScript libraries and coding basic functionality
  - [X] Begin implementing simple parallax animations and text effects for testing

- [X] Week 11 Nov 11 \- Nov 15:
  - [X] Refine website layout and incorporate images
  - [X] Finalize text placeholders and animations
  - [X] Ensure the website is visually appealing and functional

- [X] Week 12 Nov 18 \- Nov 22:   
  - [X] Prioritize accessibility features (e.g., contrast, ARIA labels, navigation)
  - [X] Ensure the website is responsive and optimized for various devices
  - [X] Refine design for ease of use and test functionality
 
- [X] Week 13 Nov 25 \- Nov 29:  
  - [X] Incorporate feedback and finalize any remaining design changes
  - [X] Conduct final optimization and debugging
  - [X] Thanksgiving  
 
- [X] Week 14 Dec 2 \- Dec 6:  
  - [X] Complete final project documentation and associated materials
  - [X] FP4 due

### *Libraries and Other Components*

1. jQuery: create simple parallax scrolling effects  
2. Textillate.js: animate text, which would add a storytelling element 

## Generative AI Use Plan

I plan to use GenAI as a resource for this project to help me with more tedious, repetitive tasks that will free up my creative energy to use towards generating new ideas and code. I could use it for learning and understanding code concepts. For example, if I was researching documentation for parallax scrolling online and came across a chunk of code I did not understand, I could use ChatGPT to explain it to me. This will help me understand the syntax and logic better rather than just copying it line for line. GenAI could also assist with troubleshooting and debugging. I can paste errors I receive into the system to find where there are issues in my code. Additionally, I can use GenAI to get feedback on my code’s efficiency. There may be lines of code that are repetitive and AI could suggest how to optimize the structure so that it runs better and quicker. Finally, I could use AI to catch and suggest accessibility features that I may have missed, like making sure colors have high contrast or adding appropriate ARIA labels. Since this website is meant to celebrate disability and dispel stereotypes about it, it only makes sense for the website to be accessible to anyone who has a disability. 

I do not plan to use AI for creating core functionality in my website. I believe that the creative portion of this website should be driven by my original thoughts and using an AI to accomplish this would not be as effective. 

### *Tool Use*

* Figma: design prototyping
  * GenAI for tutorials on how to achieve certain designs because I am new to Figma 
* NY Times: parallax scrolling inspiration (https://www.nytimes.com/interactive/2022/01/21/opinion/roe-v-wade-abortion-history.html)
* Github: version control 
* JS libraries: enable easy development of parallax scrolling and animations
  * GenAI for debugging code 
* Canva: creating visual components, swirls, aesthetics, etc 
* Pinterest: mood board and design inspiration 

* ChatGPT  
  * I will use it for debugging code and researching because it can help me be more efficient to maximize the time I am spending on coding and minimize the time I am spending on tedious tasks.   
  * I won’t use it for creative decision-making because it might miss the deeper goals of the Angels on Stage project, like breaking down stereotypes about disabilities. AI can suggest design ideas, but it probably doesn’t have the context or empathy to fully capture the program’s mission. 
* GitHub Copilot  
  * As a new JavaScript developer, I can use GitHub Copilot to help me learn by showing me how to use unfamiliar functions or methods. If I’m unsure how to implement a feature like the parallax scroll or text animations, Copilot can provide me with examples of how those features are typically written.

### *Responsible Use*

I will use GenAI responsibly by maintaining transparency and giving acknowledgement to how and when I use it, including for debugging. I would also like to be cognizant about the possible biases and stereotypes that could be present in responses, especially because my subject matter is around individuals with disabilities. 

---

# **FP1 \- Proposal for Critique**

## Idea Sketches

### *Idea 1 - Personal Portfolio*

![Portfolio home page](images/portfolio-home-page.png)
![Portfolio project page](images/portfolio-project-page.png)

The basic idea is to create a competitive research portfolio that showcases my previous research experience and makes me stand out to employers.  

* I plan to make the design interactive by having buttons that are clickable which allow the user to navigate to the individual project pages
* The accessibility piece of this design will come in the form of tab navigation, color contrast, and large, readable text
* I would like to convey to employers that I have professional work experience in the user experience research field and that I will be a dedicated, hardworking employee

### *Idea 2 - The Ramayana*
![Ramayana home page](images/ramayana.png)
![Ram](images/ram.jpg)
![Sita](images/sita.jpg)
![Lakshman](images/lakshman.jpg)
![Hanuman](images/hanuman.jpg)

The basic idea is to create an interactive learning experience for users to understand the history of Diwali by outlining the story of the Ramayana.  

* I plan to make the design interactive by allowing users to hover over each character card to learn more about them, create an interactive timeline which users can click on to be taken to a portion of the storyline.
* The accessibility piece of this design will come in the form of tab navigation, color contrast, and large, readable text.
* I would like to convey to users the importance of the story of the Ramayana. I want this platform to educate users about the origins and significance of Diwali, including how it is celebrated in the Hindu culture.  

### *Idea 3 - Angels on Stage*
![Angels on Stage home page](images/aos.png)

The basic idea is to create a website that will support and showcase, Angels on Stage, a performing arts program designed for children with disabilities.  

* I plan to make the design interactive by allowing users to visit each page on the website through the site navigation menu. They can click into each page which will have a variety of informational content (e.g., videos, photos, text, etc). 
* The accessibility piece of this design will come in the form of tab navigation, color contrast, and large, readable text.
* I would like to convey to users that disability is not something that limits individuals but rather something to celebrate. I would also like to use this platform to dispel common stereotypes.

## Feedback Summary

### *Idea 1 - Personal Portfolio*
I quickly shared this idea with a classmate during a speed dating critique session but opted not to get feedback since I decided early on to go in a different direction. My focus is shifting toward user experience research within the assistive technology space and I don’t feel that a JavaScript portfolio would best showcase my skills. Additionally, I would not be able to maintain it over time. Instead, I want to use a site like SquareSpace or Wix to visually demonstrate my abilities, with an emphasis on design over code.

### *Idea 2 - The Ramayana*
I got a range of feedback from my peers which was extremely helpful in determining which direction to go in. Brenna helped me consider a different visual style for the Ramayana website. Instead of an interactive timeline to show the story progression, she suggested I use parallax scrolling style to create a visual story. In this format, the story would be told vertically with various strong visual components. We also discussed making the website look and feel like a book with page flipping animations, a play on the idea that this is a Hindu epic which was historically depicted in a physical book. Seun suggested I compliment the parallax style by incorporating a progression bar so users don’t get frustrated with the continuous scrolling motion. She also added that I could include interactive anchor points on the progression bar so that users can skip ahead or backward. Finally, Niki mentioned that visuals will be hard to find for this project due to the fact that this story is an ancient religious text. She mentioned that I could use the p5 library to generate some artwork to complement the sparse visuals I could find. She said I could also supplement the visual component by animating my character cards. 

### *Idea 3 - Angels on Stage*
I also got great feedback on my Angels on Stage project proposal and this feedback ultimately led me to deciding on this idea. Lucy mentioned that thinking of the users before designing the interactive components was a great starting point and the right way to go about it. She did mention that an informal user test could be helpful to get an idea of users’ mental model of disability in order to effectively dispel their stereotypes about the topic. Evolone mentioned that I should consider which data I would like to pull in using an API. She suggested I think about data visualization through a pre-packaged library or software that would report on statistics around disability because this could emotionally hook users. Finally, Seun told me to strongly focus on the accessibility features of the website since this would be tailored to individuals with disabilities and their families. 

## Feedback Digestion
I made the decision to develop the Angels on Stage (AoS) website because I believe it aligns the most with my values and career aspirations. As I think about what the website design would look like, I believe it would serve me well to take components of feedback from both projects. Brenna’s feedback about using the parallax scrolling style to tell a visual story could be extremely powerful for the AoS website. It would help make the website visually engaging, creating an immersive experience that matches the dynamic storytelling aspect of this organization. Since visuals are key in this style, I reached out to my former volunteer coordinators for access to a collection of high-quality images that would enhance this parallax style and make the site feel cohesive. 

I also plan to incorporate Seun’s progression bar suggestion that would help users anchor to various points in the website. This would dispel frustration and create more of a story with the ability to jump forward and backwards. 

Finally, I plan to incorporate Lucy’s suggestion to perform an informal user test to understand the mental model of disability and learn about common stereotypes around disability. This would guide my language and interactive components to effectively convey the message. 

Once the design is completed, I plan to send it out to the AoS team so that they may consider using the design if it aligns with their vision. Of course, there will be no obligation to do so, but I would like to welcome their feedback throughout the process and would love it if my design could impact their community in a positive way. 

