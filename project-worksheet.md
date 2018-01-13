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
* Destination currency selectable.
* Base currency set based on api.
* Result returns calculated amount * value of selected currency.


## POST MVP

Include the full list of features that you are considering for POST MVP

  **A map using google maps api which corresponds to the destination currency.**

## Wireframes

Include images of your wireframes.
http://ga.co/2APto2v

## App Components

  As part of MVP:

    One page user experience...

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
  **A user ought to be able to add most currencies not listed on the default list. **

### Deleting Items
  **A user ought to be able to remove a currency from those available. **

### Editing Items
  **A user ought to be able to edit currency detail such as name of country or change symbol detail from those available. **

### Getting Items
  **Selecting a currency will pull additional details from the database to enhance the DOM display. **

## Functional Components

Based on the initial logic defined in the previous game phases section try and breakdown the logic further into functional components, and by that we mean functions.  Does your logic indicate that code could be encapsulated for the purpose of reusablility.  Once a function has been defined it can then be incorporated into a class as a method.

Time frames are also key in the development cycle.  You have limited time to code all phases of the game.  Your estimates can then be used to evalute game possibilities based on time needed and the actual time you have before game must be submitted.

| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| The Initial Experience | H | 16hrs| 13hrs | - |
| Editable Data | H | 5hrs| 16hrs | - |
| Reworking/Polishing | H | 5hrs| 7hrs | - |
| FE/Layout and Maps | L | 3hrs| 1hr | - |


## Helper Functions
Helper functions should be generic enought that they can be reused in other applications. Use this section to document all helper functions that fall into this category.

| Function | Description |
| --- | :---: |  
| Pending | I can share some code snippet here |

## Additional Libraries
 jQuery may be used for some basic DOM functions.

## Code Snippet

  **This code is great for pulling data I embedded into object via data-id on a dropdown select menu.

  **.data('##') seen in the below code is interesting... this is how it selects the data-id attribute. It can be data-whateveryouwant then you would have to change the selector accordingly.

      $(document).ready( () => {

        getDataId = () => {
          var data = $('#idofelement').find(':selected').data('id'); //##

          return data;

        }

      })

## jQuery Discoveries
 Use this section to list some, but not all, of the jQuery methods and\or functionality discovered while working on this project.

 * selected items from dropdown menus are readable as a :pseudoclass


## Change Log
 Use this section to document what changes were made and the reasoning behind those changes.  

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

      No resolution yet.

      * {"name":"error","length":94,"severity":"ERROR","code":"22P02","position":"37","file":"int8.c","line":"99","routine":"scanint8"}

      Resolution: Don't put /:id above other directories in the app.get route orders because this is what blocks them and causes this kind of error.
