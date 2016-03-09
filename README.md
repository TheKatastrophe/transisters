# transisters

This is meant to be a simple, updatable list of trans women & transfeminine/AMAB nonbinary people who have influenced technology and science, as well as those who have influenced art, music and other fields through the use of technology and science.

The project was prompted by [this tweet](https://twitter.com/MDisraeli/status/707525888942993409) and [this resulting conversation](https://twitter.com/MDisraeli/status/707538468906385408).

## How can I contribute?

Submit a pull request to add anyone you think belongs on this list! I’d like to keep it up to date, and encourage everyone to help out. I’m hesitant to write on people who invented or discovered things I don’t understand, and I don’t have the most time in the world to do the research myself - so the list is woefully inadequate to start with as this is mainly the result of me procrastinating doing “real” work.

## What should my pull request look like?

The idea is pretty simple. Whoever you want to add - add their details to `data/list.json`.

Parameters:

- name: A string that will be displayed as the person’s name.
- id: This needs to be unique, because it’s used as an ID within the JS. It’s never printed on the page, so it doesn’t necessarily have to make sense - but it probably should. My convention is to replace spaces in the name with dashes (-) and ensure it’s unique.
- links: This is an array, which I’ll discuss below.
description: A description of what the person did! Detail is good, but also be brief.
- image: A link to an image of the person. It should fit nicely into a 200x200 circle. (yes I know that doesn’t really make sense.) If you want to upload an image, add it to images/ and submit it with the pull request.
- image_credit: This is a string that represents the image credit, if necessary. Please try to credit images and don’t use images that are copyrighted/we aren’t allowed to use. This is displayed as the hover text on the image.

On the links array; Each link in the array is an array with the following parameters:

- title: This is a string that represents what the link is. Examples would be “Website”, “Twitter”, “Wikipedia” etc. It will be displayed on hovering over the link icon.
- link: This is the URL for the link.
- icon: This is an icon from [Font Awesome](http://fontawesome.io/icons/) used to represent the link. Try to keep them similar to the other ones already in use on the page.

## Other stuff

I’m also open to other enhancements to the page/JS itself. Like I said, I made this very quickly while procrastinating, so it’s just something quick and dirty that I’m *hoping* to turn into a useful resource.

## Thank you! :D