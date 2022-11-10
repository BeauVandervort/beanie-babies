# Week 02 From Scratch: Beanie Babies

## Goal

Build a beanie babies search page that uses a dropdown option to search beanie babies by astrological sign.

## Project Planning

### HTML

on page load we will see:
header
form with a label, select (dropdown), button
beanie babies (stored in a dynamic ul)
State (changes we're tracking)
beanie babies array
astrological array

### Events

page load
display all beanie babies
display all astrological signs in select dropdown
form submit button
use form data to filter astrological signs

### Functions

-   displayBeanies()
-   displayAstroOptions()
-   fetch-utils.js: getBeanies, getAstroSigns
-   render-utils.js: renderBeanie, renderAstroSign

## Workflow

-   [x] Project planning
-   [x] Build HTML (with hardcoded ul)
-   [x] Create fetch-utils.js and paste code from beanie babies README
-   [x] Connect to Supabase with script
-   [] Start "Display list of 100 Beanies on page load"
    -   get DOM elements

## Rubric

-   [] Display list of 100 Beanies on page load 7
-   [] Populate astroSign or Theme dropdown from supabase data 7
-   [] Search Beanies by an attribute shows filtered list 6
