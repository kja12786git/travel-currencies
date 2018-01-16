# Project Overview

## Project Schedule

This schedule will be used to keep track of your progress throughout the week and align with our expectations.  

You are **responsible** for scheduling time with your squad to seek approval for each deliverable by the end of the corresponding day, excluding `Saturday` and `Sunday`.

|  Day | Deliverable | Approval From Squad Lead
|---|---| ---|
|Day 1: Fri| Game Idea, Wireframes and Priority Matrix|
|Day 2: Mon| Pseudocode\Actual code\Basic Clickable Model|
|Day 3: Tue| Working Prototype |
|Day 4: Wed| App Completed / Slides |
|Day 5: Thur| Project Presentations |

## Project Description

Use this section to describe your final project and perhaps any links to relevant sites that help convey the concept and\or functionality.

## Priority Matrix

Include a full list of features that have been prioritized based on the `Time and Importance` Matrix.
http://ga.co/2mka885


## MVP

Include the full list of features that will be part of your MVP

  **An input form which user can insert amount of base currency then they receive a result based on the selected destination currency.**

* Form for user input amount and pulls data on user change.
* Destination currencies selectable and labeled with relative data such as country.
* Base currency set based on api.
* Results return calculated amount * value at least for one major currency.

## POST MVP

Include the full list of features that you are considering for POST MVP

  * A map using google maps api which corresponds to the destination currency.

  * Result returns calculated amount * value at least for all currencies listed or added to be available.

## Wireframes

* Include images of your wireframes.http://ga.co/2APto2v

## App Components

* Utilizes currencylayer api to pull AJAX on the front-end and ability manipulate the data in real time loading once on each unique page load & only upon user changing input for efficiency due to usage limits.

* Custom made table for postgresql including default dropdown options for user to pick Currency and currency related details including symbol, country name, country code and currency relevant glyphs.

* As a second table source, a modified copy of geomap data from U02-D05 database which was relevant enough to use which is pulling. This has much more information than just currencies, but language data was manually stripped due to errors as well as non-need for this usage.

**As part of MVP:**

**Initial page as a one page user experience...**

* Form for user input amount and pulls data on user change.
* Base currency set based on api.
* Destination currency selectable.
* Result returns calculated amount * value of selected currency.

Editable Data (beyond the initial experience)
* User can add destination currencies not listed to use in form.
* User can remove or edit details of existing destination currency such as name of country associated with symbol.

Additional  
* Layout design.
* Google maps page using google maps api corresponds to destination currency.

### Creating Items
  * A user ought to be able to add most currencies not listed on the default list.

### Deleting Items
  * A user ought to be able to remove a currency from those available.

### Editing Items
  * A user ought to be able to edit currency detail such as name of country or change symbol detail from those available.

### Getting Items
  * Selecting a currency will pull additional details from the database to enhance the DOM display.

## Functional Components

Based on the initial logic defined in the previous game phases section try and breakdown the logic further into functional components, and by that we mean functions.  Does your logic indicate that code could be encapsulated for the purpose of reusablility.  Once a function has been defined it can then be incorporated into a class as a method.

Time frames are also key in the development cycle.  You have limited time to code all phases of the game.  Your estimates can then be used to evalute game possibilities based on time needed and the actual time you have before game must be submitted.

| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| The Initial Experience | H | 16hrs| 13hrs | 13hrs |
| Editable Data | H | 5hrs| 21hrs | 21hrs |
| Reworking/Polishing | H | 5hrs| 10hrs | 10hrs |
| FE/Layout and Maps | L | 3hrs| 2hrs | 2hrs |


## Helper Functions
Helper functions should be generic enought that they can be reused in other applications. Use this section to document all helper functions that fall into this category.

| Function | Description |
| --- | :---: |  
| Array Cleaner | If no longer needs a multitude of items stored in a set array, this simple loop will clear it out and then you can use index[0] to push and pull something current. This may be good to control performance hit of large arrays, also. : |

        named() => { while (arr.length > 0) } {arr.pop();};

## Additional Libraries
 jQuery may be used for some basic DOM functions.

## Code Snippet

  * **This code is great for pulling data I embedded into object via data-id on a dropdown select menu.**

  * **.data('##')** seen in the below code is interesting... this is how it selects the **data-id** attribute. It can be **data-whateveryouwant** then you would have to change the selector accordingly.

        $(document).ready( () => {

          getDataId = () => {
            var data = $('#idofelement').find(':selected').data('id'); //**##**

            return data;

          }

        })

## jQuery Discoveries
 Use this section to list some, but not all, of the jQuery methods and\or functionality discovered while working on this project.

 * selected items from dropdown menus are readable as a :pseudoclass as in my code snippet above.


## Change Log
 Use this section to document what changes were made and the reasoning behind those changes.
 * I changed the maps to be post MVP because the crud was more important for this assignment.

 * Results for the default currency can be achieved accurately. However, the user being able to select every available currency was added to post MVP because I discovered that I cannot use a created variable of two elements and/or from an array index to concatenate the key selector of the required object. **Corrected this issue, selecting key via the active variable took a long while to find.**

 * I was initially going to add the country names somewhere visible on the DOM but I added them inside the dropdown selections instead which can be better in a way because it does leave the page cleaner. The good thing is it can still be duplicated from that element to be displayed if wanted.

## Issues and Resolutions
 Use this section to list of all major issues encountered and their resolution.

#### SAMPLE.....
**ERROR**: app.js:34 Uncaught SyntaxError: Unexpected identifier                                
**RESOLUTION**: Missing comma after first object in sources {} object

      * EST [12176] ERROR:  invalid input syntax for integer: "edit14" at character 37
      2018-01-12 16:40:21.822 EST [12176] STATEMENT:  SELECT * FROM currencies WHERE id = 'edit14'
      2018-01-12 16:48:20.149 EST [13528] ERROR:  syntax error at or near "RETURN" at character 96
      2018-01-12 16:48:20.149 EST [13528] STATEMENT:
                    INSERT INTO currencies
                    (symbol, country, gfxcode)
                    VALUES (null, null, null) RETURN *

      **The culprit was missing name attribute from the DOM element which this would feed from the user input to the database.**

      * {"name":"error","length":94,"severity":"ERROR","code":"22P02","position":"37","file":"int8.c","line":"99","routine":"scanint8"}

      **Resolution: Don't put /:id above other directories in the app.get route orders because this is what blocks them and caused this of error.**
