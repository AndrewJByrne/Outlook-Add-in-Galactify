# Outlook Add-in: Read your current email in a galactic, scrolling view

**Table of contents**

* [Summary](#summary)
* [Credits](#credit)
* [Required tools](#prereq)
* [How to install](#install)
* [How to run](#run)
* [Further Work](#more)
* [Troubleshooting](#troubleshooting)
* [Questions and comments](#questions)
* [Additional resources](#additional-resources)

<a name="summary"></a>
##Summary
**Galactify** is an Outlook add-in that spices up how you read email. It delivers a fun scrolling view of the current email, similar to the opening credits of your favorite epic space opera. The sample shows you how to extract From, Subject and Body of an email and, thanks to @CraigBuckler, demonstrates some awesome CSS3.

 
![](/readme-images/animated_screenshot.gif)

<a name="credits"></a>
##Credits
I created this add-in for fun, but the real power belongs to the CSS created by @CraigBuckler and shown in his 2012 article entitled [Star Wars 3D Scrolling Text in CSS3](http://www.sitepoint.com/css3-starwars-scrolling-text/).
Thanks Craig for making your work available and saving me tons of time! I'm glad browsers have caught up with these CSS3 effects. 

###May The Force be With You.


<a name="prereq"></a>
## Required tools

* [npm](https://www.npmjs.com/)
* [Bower](http://bower.io/)
* [Gulp](http://gulpjs.com/)

<a name="install"></a>
## How to install

1. Clone this repository.
2. Run `npm install` to install both npm and Bower dependencies.
3. Run `gulp serve-static` to start development server.
4. Go to [mail.office365.com](http://mail.office365.com) and sign in with your Office 365 account.
5. Click the gear icon on the upper right, then choose *Manage add-ins*.
6. Click the plus icon, then choose *Add from a file*.
7. Select  *manifest-galactify.xml* from this repo.
8. Complete the wizard (*Next*, *Install*, *OK*) to make the Add-in available on your Office 365 account.
9. Open the [app](https://localhost:8443/appread/index.html) in a browser and trust the certificate for `localhost:8443`. The add-in won't run if your computer doesn't trust it.

<a name="run"></a>
## How to run

1. After installing the add-in, go to [mail.office365.com](mail.office365.com). 
2. Open an email.
3. Click *Add-ins* at the top of the window to see available add-ins and choose **Galactify**.

<a name="more"></a>
## Further Work
Take a look at the [issues list](http://github.com/andrewjbyrne/Outlook-Add-in-Galactify/issues) of this repo for some enhancement ideas. Feel free to chime in with other suggestions. 

<a name="troubleshooting"></a>
## Troubleshooting

- If the add-in does not appear in the task pane, Choose **Insert > My Add-ins >  Galactify**.

<a name="questions"></a>
## Questions and comments

- If you have any trouble running this sample, please [log an issue](http://github.com/andrewjbyrne/Outlook-Add-in-Galactify/issues).
- Questions about Office add-ins development in general should be posted to [Stack Overflow](http://stackoverflow.com/questions/tagged/office-addins). Make sure that your questions or comments are tagged with [office-addins].
- You can find me on Twitter at [@AndrewJByrne](https://twitter.com/AndrewJByrne)


<a name="additional-resources"></a>
## Additional resources ##

- [Star Wars 3D Scrolling Text in CSS3](http://www.sitepoint.com/css3-starwars-scrolling-text/)
- [More Add-in samples](https://github.com/OfficeDev?utf8=%E2%9C%93&query=-Add-in)
- [Yeoman generator](https://github.com/OfficeDev/generator-office) - Yeoman generator for building Microsoft Office related projects (including Add-ins). This project was built using it.
- [dev.office.com](https://dev.office.com) - Find documentation, samples, and other helpful information relevant to Office development.


## Copyright
Copyright (c) 2015 Andrew J Byrne. All rights reserved.

