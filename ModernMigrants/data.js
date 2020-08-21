var data = [
    {
        "title":"Week 1",
        "period":["17-08-2020","21-08-2020"],
        "highlights":
                    [
                        "Setting up Github's repository of the Modern Migrants project.",
                        "Development of NGA data scraping functions.",
                        "Creation of my online diary to keep track of my developments."
                    ],
        "achievements":[
            {
                "title":"Modern Migrants Github's repository",
                "text":"I created the repository of the project on Github (you can visit it by clicking on the logo at the top left of the diary). \
                At the moment I have put mine as a reference email, however I can change it at any time.\
                 In the future we will have to decide under which license to release the content of the repository. In case I can prepare a small table with the pros and cons of each license.\
                  It would also be nice to have an official logo of the project, a sort of recognizable brand."
            },
            {
                "title":"NGA data scraping",
                "text":"The data scraping function of the NGA site is started. The first draft took almost 24 hours to generate the data, thanks to some tricks the current function takes \"only\" 1 hour.\
                Performance can be further improved as at this stage the function also takes data from works without provenance and works made after ww2 (total 3501 works). The function and the first realized dataset (in json format) are available in the folder \"NGA\" in the sub-repository \"Preliminary Data\"."    
            },
            {
                "title":"Development Diary",
                "text":"I made the small website where I will write my progress weekly. Unfortunately, being a static website I couldn't insert functions to write comments.\
                This site, although located on github, is not in the Modern Migrants repository, not being an official part of the project. Obviously I am available for any changes and additions to make my diary more usable by the team."
            }
        ],
        "brainstorming":[
            {
                "title":"Works with NO Provenance",
                "text":"At the moment, as a first approach, I have not filtered all those works that have no provenance (834 works). We may not consider them at all or keep them in the initial dataset for statistical purposes."
            },
            {
                "title":"Works after WW2",
                "text":"I'll have to exclude during data scraping all works dated after World War II. However, I wanted to discuss methodologically what we mean by \"after World War II\": \
                works dated after 1945 or even works that had no provenance events before 1945?\
                For example \"Abstraction\" by L&eacute;ger (1943) has the following provenance \"John U. and Evelyn Stefansson Nef, Washington, D.C.; bequest to NGA, 2010.\". I guess it is not useful for our analysis."
            }
        ],
        "future":[
            {
                "title":"Data Scraping Inprovement",
                "text":"Optimization of the structure and performance of the data scraping function. Adding functions to filter the data according to what we will decide about the considerations in the \"Brainstorming\" section."
            },
            {
                "title":"Data Extraction",
                "text":"Creation of the function for the data extraction from the provenance texts. Identification of patterns to divide provenance in single events. Study of the different possible strategies to extract data from single events."
            }
        ]
    },

    {
        "title":"",
        "period":["",""],
        "highlights":
                    [
                        "",
                        ""
                    ],
        "achievements":[
            {
                "title":"",
                "text":""
            }
        ],
        "brainstorming":[
            {
                "title":"",
                "text":""
            }
        ],
        "future":[
            {
                "title":"",
                "text":""
            }
        ]
    }



]