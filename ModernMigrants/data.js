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
        "title":"WEEK 3",
        "period":["31-08-2020","04-09-2020"],
        "highlights":
                    [
                        "Failure of the fully automated approach.",
                        "New Proposals.",
                        "Demo of the most ambitious proposal."
                    ],
        "achievements":[
            {
                "title":"Failure of the fully automated approach.",
                "text":"The fully automatic approach, using the Spacy library, did not give acceptable results. The point is that Spacy's NER is trained on very generic corpus.\
                For this reason the proposed NLP model doesn't fit at all the peculiarity of the provenance texts. All that remains is to explore new possibilities."
            },
            {
                "title":"Ambitious Idea: Machine Learning approach",
                "text":"Since Spicy's NER is not able to give hoped-for results because of its training corpus I thought we could create a new NER model through machine learning on a noted corpus dedicated exclusively to provenance.\
                <p>This idea was even hypothesized by the authors of Art Tracks:<\p>\
                    \"Our first attempts to extract the semantic content within the provenance text were done using existing Natural Language Processing (NLP) software, specifically the Stanford Natural Language Toolkit (Manning, 2014). This software allows for entity extraction and the automated tagging of text. However, our experiments show they are not currently designed to work well with cultural heritage data: they require training on data sets, and most of the training to date has been done using vernacular data sets like the New York Times. The extremely terse syntax of provenance records, as well as the historic and somewhat unusual names that appear throughout provenance, means that the existing training corpuses are insufficient to accurately tag and parse provenance records. There is room for additional research in this area, and once a sufficient volume of tagged data exists it should be possible for researchers to create a cultural heritage corpus for use in training and automated extraction. At the current time, however, automated NLP solutions were deemed inadequate for the project.\" \
                    <p><small>\"Art Tracks: Visualizing the stories and lifespan of an artwork.\" MW2015: Museums and the Web 2015. Published January 15, 2015. Consulted September 4, 2020.\
                https://mw2015.museumsandtheweb.com/paper/art-tracks-visualizing-the-stories-and-lifespan-of-an-artwork/</small></p>\
                    "
            },
            {
                "title":"Provenance NER DEMO",
                "text":"So I tried to do some small tests to see if the idea could be successful.\
                First of all I created an online annotation platform using the Open Source project <a href='https://github.com/doccano/doccano' target='_blank'>Doccano</a>, \
                visit here: <a href='https://modern-migrants-tag.herokuapp.com/projects' target='_blank'>https://modern-migrants-tag.herokuapp.com</a>.\
                <p> The platform is interesting because it supports multiple users and therefore allows collaborative annotation work. There would also be the <a href='https://prodi.gy/' target='_blank'>Prodigy</a> platform,\
                 for a fee, very similar but supporting automatic learning (the \"machine\" learns at the same time as the annotation). Prodigy is by the same authors as Spicy.\
                Not having access to Prodigy, once I tagged a small portion of corpus with Doccano, I trained a machine on my own (Doccano has no built-in machine learning). \
                The results, available <a href='https://github.com/ModernMigrants/PreliminaryData/blob/master/NGA/NER/demo_data.txt' target='_blank'>here<\a>, are not perfect (being a tiny corpus) but they are encouraging.\
                </p>"
            }
        ],
        "brainstorming":[
            {
                "title":"What kind of annotation?",
                "text":"Excluding the possibility to extract information automatically in the current state of the art, there are two possibilities.\
                <ul>\
                <li>\
                A manual annotation with Prodigy or Doccano that could give us the opportunity to also propose an AI trained with our data that extracts Provenance data.\
                </li>\
                <li>\
                A manual transcription in a form very similar to what was done with Elysa Tool that would give us the opportunity to reinterpret the data.\
                </li>\
                </ul>\
                "
            }
        ],
        "future":[
            {
                "title":"Analyze options and discuss them",
                "text":"It will be necessary to take into consideration the implications that this decision may have on\
                 the development of the project (including timing) before continuing and laying the technical and methodological foundations on which to work."
            }
        ]
    },


    
    {
        "title":"WEEK 4",
        "period":["07-09-2020","11-09-2020"],
        "highlights":
                    [
                        "Begin of the development of the platform to process provenance data."
                    ],
        "achievements":[
            {
                "title":"Provenance Data Platform",
                "text":"<p>Following the brainstorming at the beginning of the week, in which the hypothesis of using an AI was rejected, the entire weekly work was dedicated to the realization of the online platform.</p>\
                <p>The design of the app is inspired by the interfaces of Prodigy (and therefore Doccano) and Art Tracks.\
                The mechanism is very simple: the user can create projects by uploading CSV files to the online platform, without any need of installation or computer skills. The CSV format has been chosen as the easiest to manage. In fact a CSV file, being a simple table, can also be created using classic programs such as Excel or Google Sheet.\
                Once the file is loaded, the user accesses the interface where, one work at a time, reading the text of the provenance, he or she can fill in the appropriate form. The form reflects the data required by the Linked Art data model.</p>\
                At the moment I have completed the basic logic of the application:\
                <ul>\
                <li>Login interface via credentials. Since the application is not yet aimed at the public, access is strictly reserved for our team.</li>\
                <li>Project creation interface. Through this interface we can create new projects by loading CSV files (following a precise table structure) and added the possibility to remove projects (with a confirmation request to avoid accidents).</li>\
                <li>Interface Form. It has been started the realization of the working interface where there will be the form to fill in. I tried to meet the needs of users to make the interface as comfortable as possible.</li>\
                </ul>"
            }
        ],
        "brainstorming":[
            {
                "title":"Exibitions",
                "text":"For the moment I have not included the Exhibitions among the data under analysis and not even the platform provides for the management of the data of the Exhibitions. Basically I have not included them in order not to overload the work of manual annotation of the data. But obviously we can discuss it!"
            }
        ],
        "future":[
            {
                "title":"Form",
                "text":"Next week will be dedicated to the creation of the form template that will be available for the annotation of the provenances. Obviously it will be necessary a careful analysis of the Linked Data Model first."
            }
        ]
    },



    {
        "title":"WEEK 5",
        "period":["14-08-2020","18-08-2020"],
        "highlights":
                    [
                        "Form template creation",
                        "Provenance Data Platform save system",
                        "NGA data scraping improvements"
                    ],
        "achievements":[
            {
                "title":"Provenance Data Platform save system",
                "text":"Much of the week was dedicated to improving the platform. Of particular technical interest and the data storage system implemented. This system acts in real time after any modification and saves data even in crucial situations such as closing the window or changing pages. In this way you are sure not to lose the work done without the thought of having to save it."
            },
            {
                "title":"Form template creation",
                "text":"The form to be filled in to analyze Provenance's data has been completed. The form fully reflects the provisions of the Linked Art Data Model. In particular it is possible to add a number of Parties involved in the event and places where these Parties have lived. It is important to note the eventcentrism of the Linked Art Data Model."
            },
            {
                "title":"NGA data scraping improvements",
                "text":"The data scraping script of the NGA website has been improved. In particular, functions have been added to include bibliography data, engravings and exibitions. In addition, the urls of the images of the paintings are saved."
            }
        ],
        "brainstorming":[
            {
                "title":"Exibitions",
                "text":"Given the event-centric nature of the Linked Art Data Model it could be possible to insert the exibitions among the provenance activities (obviously expressing that they are exibitions) in this way you could reduce the workload by inserting only those exibitons that have had a noteworthy role in the provenance of the object.\
                <p><b>It is important to clarify well the fact that it is an event centric model.</b></p>"
            }
        ],
        "future":[
            {
                "title":"Saving System Complete and new Data",
                "text":"Next week will be dedicated to the refinement of the saving system and new data will be inserted in the metadata display interface (e.g. exibitions and images). I am also thinking of creating a method to select a Party or Event already described (e.g. Exibitions) so that I don't have to rewrite the data every time."
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