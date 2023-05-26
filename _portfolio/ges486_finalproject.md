---
title: "Advanced Applications of GIS - Final Project"
excerpt: "An exploratory analysis of EPA TRI sites and stream health in Maryland<br/><a href='https://klmoy.github.io/portfolio/ges486_finalproject/'><img src='/images/tri_kde_2010.JPG'></a>"
collection: portfolio
---

<h2>Project Overview</h2>
<p>This project was created for the my Advanced Applications of GIS course at UMBC. The goal of the project was to work with datasets from multiple sources and discover how the data are related.</p> 
<br>
<h2>Background</h2>
<p>For this analysis, I was curious about how chemical waste being released into the environment in different ways might affect the health of our waterways. In Maryland, the Department of Natural Resources (DNR) started a volunteer program called <a href='https://dnr.maryland.gov/streams/pages/streamwaders.aspx' target='_blank'>Stream Waders</a> that trains citizens on how to estimate stream health using an <a href='https://www.cbr.washington.edu/salmonweb/bibi/biomonitor.html' target='_blank'>index of biological integrity</a> (IBI) Basically, you get to go adventuring in your local streams, draw pictures of the site, and play catch-and-release with aquatic animals. There's alot more science to it, but this process allows ecologist to categorize the health of the site, which is important information necessary for making informed decisions about how to manage environmental habitats. In addtion, these indexes can be used to detect changes in the environment caused by humans! A big one is water contamination.</p>

<p>Water contamination can happen a number of different ways, but the main two ways are called poin-source and non-point source pollution. <a href='https://oceanservice.noaa.gov/education/tutorial_pollution/03pointsource.html' target='_blank'>Point-source pollution</a> is pollution that comes from a single point of origin that is known, like a stormdrain or a chemical facility... Whereas, <a href='https://19january2017snapshot.epa.gov/nps/what-nonpoint-source_.html](https://oceanservice.noaa.gov/education/tutorial_pollution/04nonpointsource.html' target='_blank'>non-point source pollution</a> is harder to trace. Examples of non-point source pollution are acid rain, surface-water runoff, and or groundwater contamination from landfils. For the purpose of this project, I just looked at potential point-sources of stream pollution.</p> 

<p>Chemical release data is publically available <a href='https://www.epa.gov/toxics-release-inventory-tri-program/tri-basic-data-files-calendar-years-1987-present' target='_blank'>here</a> from the Environmental Protection Agency's (EPA), <a href='https://youtu.be/Fqjh6t6Hx6s' target='_blank'>Toxic Release Inventory (TRI)</a>. A TRI site is any large industrial facility “involved in manufacturing, metal mining, electric power generation, chemical manufacturing and hazardous waste treatment,” according to the EPA TRI website. It should be noted that depending on the size of the operation, industral facilities may or may not be required to submit toxic release data to the EPA. The TRI datasets are extensive and alot can be done with them; to learn more about how to use TRI data, <a href='https://www.epa.gov/toxics-release-inventory-tri-program/tri-data-action' target='_blank'>click here</a>! I decided to keep things simple for now and just worked with the total number of releases per facility, which are available in the basic TRI data files. The EPA also publishes manuals about their data, which helps alot in undertanding what all 119 reported attribute fields mean. Here is a link to the documentation for <a href='https://www.epa.gov/system/files/documents/2022-10/TRI_Basic_Data_File_Documentation_RY2021_102522.pdf' target='_blank'>TRI Basic Data Files</a>.</p>
<br>
<h2>Analysis</h2>
<p>Before doing a statistical analysis I plotted the point data from the TRI and Stream Waders. Below, you can see an example of this step.</p>
<br>
![Maryland TRI sites in 2010](/portfolio/images/TRI_points_2010_500px.jpg "Maryland TRI sites in 2010") ![Maryland Stream Survey Sites in 2010](/portfolio/images/CBI_2010_500px.jpg "Maryland Stream Survey Sites in 2010")
<br>
<p>From quick comparison between these two plots, the relationship between stream health and number of chemical releases is not obvious. However, there are some overlaps between the locations that TRI sites and stream survey sites, which means that it is possible to do an analysis at the intersections of these datasets.</p>
<br>
<h2>Quantifying Statistical Significance</h2>  
<p>In order to tell how much the chemical releases effect stream health, first I performed a statistical analysis on the TRI site data the test whether these sites were random, or if they were arranged in space in a particular pattern.</p>

<p>So, I looked at the point patterns of the TRI sites and used the <a href='https://en.wikipedia.org/wiki/Kolmogorov%E2%80%93Smirnov_test' target='_blank'>Kolomogrov-Smirnov (KS) test</a> to check for randomness. The KS test told me that the arrangement of TRI points was <i>not</i> random, but it didn't tell me <i>how</i> the points are arranged. So, to determine if the TRI sites were evenly dispersed or clustered in groups, I performed an <a href='https://en.wikipedia.org/wiki/G-test' target='_blank'>G-test</a>. The results from the G-test told me that TRI sites were arranged in clusters around the state of Maryland. Below you can see some of the different styles of plots I used to visualize the density of TRI site clusters around the state.</p>
<br>
![TRI site points on quadrat grid](/portfolio/images/TRI_density_2010.JPG "TRI site points on quadrat grid") ![TRI sites smoothed kernel density estimation](/portfolio/images/tri_kde_2010.JPG "TRI sites smoothed kernel density estimation")
<br>
<p>After concluding that the TRI sites in Maryland were in a spatially clustered pattern, I repeated my statistical analysis but this time, I included stream health as a covariate (or variable contributing to the distribution). Thinking about this now, I realize that because my research question was if chemical releases affect stream health, stream health should have been my dependent variable and chemical releases should have been my independent variable. In short, I did my statistical analysis backwards. Oops, this is how you learn.</p>

<p>To map the relationship, I created density estimates of the total number of chemical waste releases by creating release counts per county area. Then, I plotted stream health data taken at designated sample sites on top of the densities. In addition to my interest in the relationship between stream health and the presense of industrial facilities, I was also curious about these patterns over time, so I repeated the whole process three times for three different years of data (2000, 2010, 2017).</p>
<br> 
<h2>Final Thoughts</h2>
<p>What I found was that stream health may have a relationship with TRI site releases, however the years that I chose to work with don't necessarily visually tell this story very well. Perhaps aggregating TRI site locations using smaller geographies, like census tracts, or even block groups would show this relationship better.In addition, I need to redo my analysis.</p> 

<p>Below is an example of a interactive map I made in RStudio using the tmap package. When you hover over an county, the county ID pops up and you can click on the popup to see the total number of releases from TRI sites in that county. You can also select stream survey sites and see the exact CBI (combined biotic index). A CBI = 1 indicates poor stream health and a CBI = 5 indicates excellent stream health.</p>
<br>
![stream health and TRI sites map](/images/interactive_map.JPG "stream health and TRI sites map")


