
---
title: "Advanced Applications of GIS - Final Project"
excerpt: "An exploratory analysis of EPA TRI sites and stream health in Maryland<br/><img src='/images/tri_kde_2010.JPG'>"
collection: portfolio
---

<h2>Project Overview</h2>
<br>
For this analysis, I was curious about how chemical waste being released into the environment in different ways might affect the health of our waterways. In Maryland, the Department of Natural Resources (DNR) started a volunteer program called Stream Waders that trains citizens on how to estimate stream health using an index of biological integrity (IBI) Basically, you get to go adventuring in your local streams, draw pictures of the site, and play catch-and-release with aquatic animals. There's alot more science to it, but this process allows ecologist to categorize the health of the site, which is important information necessary for making informed decisions about how to manage environmental habitats. In addtion, these indexes can be used to detect changes in the environment caused by humans! A big one is water contamination.

Water contamination can happen a number of different ways, but the main two ways are called poin-source and non-point source pollution. Point-source pollution is pollution that comes from a single point of origin that is known, like a stormdrain or a chemical facility... Whereas, non-point source pollution is harder to trace. Examples of non-point source pollution are acid rain, surface-water runoff, and or groundwater contamination from landfils. For the purpose of this project, I just looked at potential point-sources of stream pollution. 

Chemical release data is publically available from the Environmental Protection Agency's (EPA), Toxic Release Inventory (TRI). A TRI site is any large industrial facility “involved in manufacturing, metal mining, electric power generation, chemical manufacturing and hazardous waste treatment,” according to the EPA TRI website. It should be noted that depending on the size of the operation, industral facilities may or may not be required to submit toxic release data to the EPA. The TRI datasets are extensive and alot can be done with them, but I decided to keep things simple for now and just worked with the total number of releases per facility. 

I first did a statistical analysis using planar point patterns and the Kolomogrov-Smirnov test to check the distrbution of the data. This involved alot of changing the format of the data. To map the relationship, I created density estimates of the total number of chemical waste releases by creating release counts per county area. Then, I plotted stream health data taken at designated sample sites on top of the densities. I used Maryland as my sample area, but data stream health and TRI site data are available for all states. In addition to my interest in the relationship between stream health and the presense of industrial facilities, I was also curious about these patterns over time, so I repeated the whole process three times for three different years of data (2000, 2010, 2017).

What I found was that stream health may have a relationship with TRI site releases, however the years that I chose to work with don't necessarily visually tell this story very well. 

Below is an example of a interactive map I made in RStudio using the tmap package. When you hover over an county, the county ID pops up and you can click on the popup to see the total number of releases from TRI sites in that county. You can also select stream survey sites and see the exact CBI (combined biotic index). A CBI = 1 indicates poor stream health and a CBI = 5 indicates excellent stream health.


![stream health and TRI sites map](/images/interactive_map.JPG "stream health and TRI sites map") 


