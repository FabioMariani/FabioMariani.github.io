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
        "title":"Week 2",
        "period":["24-08-2020","28-08-2020"],
        "highlights":
                    [
                        "Improvement of data scraping function",
                        "Development of the function that splits the individual events of the provenance",
                        "Planning of different approaches to knowledge extraction and first simple experiments"
                    ],
        "achievements":[
            {
                "title":"NGA data scraping",
                "text":"By better analyzing the NGA data I realized that I had left out an important factor that excessively increased the number of works of art analyzed: the <b>category</b>. \
                Excluding from the scraping process all the works that do not belong to the category \"Paintings\" drastically reduces the number of works and you get a significant improvement in performance."
            },
            {
                "title":"Events Splitting",
                "text":"The function that splits the events of a provenance is conceptually very simple: given a text the function must divide it for each \";\" and \".\" outside the brackets. \
                The real big problem in doing this depends on the abbreviations accompanied by \".\" in the text. After several attempts, the best solution was to create an auxiliary algorithm that would identify \
                all the abbreviations (words ending with \".\" whose length does not exceed 4 characters) and generate a list of them. However, since there are no strict rules to distinguish abbreviations from\
                 short words (e.g. \"York.\" and \"Capt.\"), a small human intervention is needed to remove some words from the list (4 words in total).\
                  Also take into account \"NGA.\" which is in fact an abbreviation, but we consider it to be a word."
            },
            {
                "title":"Knowledge Extraction",
                "text":"I have reached the crucial point of the pipeline. Having started working with the provenance data in these 2 weeks I got a better idea of how they are structured \
                 (or rather, unstructured). For the moment I have thought of 2 action plans. The first plan, the one I would like to realize, involves the fully automatic (or at most semi-automatic)\
                  extraction of information. For the moment I have minimized the problem to the extraction from an event of people, transaction method, place and date.\
                <p>The second plan, if the first one is not feasible, is the manual annotation of the data. Obviously a longer process that requires careful planning.\
                 I consider this the most extreme solution.</p>\
                <p>This week I have already started to \"play\" with some NLP methods. In particular with the technique of Part of Speech Tagging (POS tagging) of which a test file is already available.\
                 This technique tracks for each token (word) its grammatical role (e.g. noun, proper noun, verb, adjective...). \
                 This technique, although it needs improvements, is not enough to extract useful information but it could be useful in combination with other techniques that I will deepen in the next days.</p>"
            }
        ],
        "brainstorming":[
            {
                "title":"No particular issues this week",
                "text":""
            }
        ],
        "future":[
            {
                "title":"Named Entity Recognition",
                "text":"Next week I will focus on improving POS tagging and introducing new techniques, in particular Named Entity Recongition (NER).\
                 This technique identifies within a structured text entities with proper names (e.g. people, organizations or places) but can also be used to extract temporal information. "
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