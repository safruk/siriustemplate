#sirius-template

#trendy black gold chic color theme
#multiple color schemes for you to try out
#ease of customization 
#perfectly responsive
#mobile first
#tested for lightning fast page load

#How to run locally

#Install a code editor preferably vscode.
download and install nodejs

#Check if node and npm is installed by typing the following commands in the terminal: 
node -v
npm -v

#Unzip the siriustemplate folder and switch to the siriustemplate folder on the terminal/command line 
for eg:
cd C:/desktop/siriustemplate

#run following command
npm install

#then run following command
npm start

#to change the logo,images add your images in the src/images folder.
change the name of your website,logo, all of the text,images in the index.html in the src folder

#to change the form details add your call links in index.html and email links in both index.html form section and src/js/script.js in the form handlers handleSubmit() function.
 
#to change the background images in about and form sections:
#go to src/sass/pages/home.scss
change the background: url() in the .about class
#go to src/sass/components/form.scss
change the background: url() in the .form class

#to change the theme color of the website go to src/sass/abstracts/variables.scss 
comment out the --color-primary-1,--color-primary-2,--color-neutral-1,--color-neutral-2 and 
uncomment out the other color pallete to select colors of your preference

#you  can also change the font if you wish
to change the font go to index.html and change the href attribute in the link tag
also change the font in src/base/typography.scss for the effect to take place

#tip: you can change the svg icons colors. simply change the fill attribute in the .svg file to follow the current theme. 4 extra svgs are present in the src/images for your convenience. eg: fill=#000000 currently can change it to fill=#238181

finally run the build command
npm run build

#note that the build is stored in the dist folder created after running the build command which is what is shipped to the browser
the website is now ready to be deployed!

