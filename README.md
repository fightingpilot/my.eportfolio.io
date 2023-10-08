<html lang="en">
    <style>
        .grid-container2 {
            display: grid;
            grid-template-columns: auto auto;
        }
        .grid-container3 {
            display: grid;
            grid-template-columns: 300px 300px 300px; 
        }
        .grid-item {
            text-align: center;
        }
    </style>
    <body>
        <h1 style="text-align: center;">About me</h1>
        <div class="grid-container2">
            <div class="grid-item">
                <img src="https://github.com/fightingpilot/my.eportfolio.io/blob/main/img/_MG_3513_cut_color.jpg?raw=true" width="80%">
            </div>
            <div class="grid-item">
                <p>This ePortfolio gives an insight of my results I achieved during the M.Sc. Applied Geoinformatics program at Salzburg University as well as achievements at the Reykjavik University during my Erasmus. Feel free to contact me here:
                    <br><br>
                    <a href="https://www.linkedin.com/in/eike-blomeier-224362200/" target="_blank">
                        <img src="https://github.com/fightingpilot/my.eportfolio.io/blob/main/img/linkedin.png?raw=true" width="40" height="40">
                    </a>
                    <a href="mailto:eike.blomeier@live.de" target="_blank">
                        <img src="https://github.com/fightingpilot/my.eportfolio.io/blob/main/img/email_3686989.png?raw=true" width="40" height="40">
                    </a>
                </p>
            </div>
        </div>
        <br>
        <h1 style="text-align: center;">
            <strong>Master thesis</strong><br>The       information flood: How to stay afloat<br>
            A Comparative Evaluation of Machine Learning Models for Relevance Classification of Flood-Related Tweets</h1>
        <p style="text-align: center;">
            <i>Abstract</i><br>
            Typically, during the early stages of a disaster, the amount of available and useful information is low. To fill this information gap, emergency responders are increasingly often using social media to gain insights from eyewitnesses to build a better understanding of the situation and design  effective responses. Recent developments like BERT have lifted NLP to the next level and successfully proven their capabilities in a wide range of NLP problems, outperforming previous state of the art methods. This work presents a comparison of BERT to different machine learning models for relevance classification tasks. Tweets are classified based on their relevance regarding flooding emergencies. Experts categorised Tweets to train the algorithms. Additionally, a prototype metric – called Gaussian score – is developed to overcome the issue of when misclassified data must to be treated differently.  A central limitation was the scarce number of German Tweets relating to a flooding event. Yet, the results look promising, scoring an average precision of 71% with most of the misclassifications happening between more similar classes.<br><br>
            For the full thesis go <a href="https://github.com/fightingpilot/my.eportfolio.io/blob/main/documents/Masterarbeit_EikeBlomeier.pdf">here</a>.
        </p>
        <br>
        <h1>Projects - Paris-Lodron University</h1>
        <div class="grid-container3">
            <div class="grid-item">
                <h3 style="text-align: center;">CODA</h3>
                <p>
                    CODA stands for <i>COVID-19 Dashboard</i>. The aim of the COVID-19 dashboard, developed by
                    <a href="https://www.linkedin.com/in/gil-salvans-torras-b4a231138/" target="_blank">Gil Salvans-Torras</a> and me, Eike Blomeier. This project consists of the development of a Spatial Data Infrastructure (SDI) with a thematical focus on the Covid19 pandemic in three countries: Austria, Germany, and Spain. In agreement with this, the infrastructure is continuously running and its data is updated in a daily basis automatically so the user can get a general understanding of the status of the pandemic in each of the aforementioned countries with the latest data through an interactive web application with different dashboards. To achieve this, this SDI can be divided in three stages. The first one, which regards to the daily data collection and setting it up into a geospatial database. Secondly, connecting the database to a GI Server to publish all the data as standard OGC services. Finally, a retrieval of the different services is carried out by the different dashboards of the web application.<br>
                    For further readings and results of this project please klick <a href="https://github.com/fightingpilot/my.eportfolio.io/blob/main/documents/Blomeier_Salvans_CODA_FinalDocumentation.pdf" target="_blank">here</a>.
                </p>
            </div>
            <div class="grid-item">
            <h3 style="text-align: center;">Spatial dynamics with Cellular Automata</h3>
                <p>
                    Agent-based modeling becomes more and more popular across all different kinds of scientific fields. It is used to model real-world phenomena like the spread of viruses or the urban sprawl as well as highly theoretical models like the Game of Life. While some modelling software requires advanced programming skills, others are really comfortable to use and learn. The focus is on this modelling software. Therefore, NetLogo and GAMA are introduced and analyzed for their strengths weaknesses especially in the GIS domain. Eventually it will be concluded that GAMA has more strengths in this field while NetLogo is richer in available plugins.<br>
                    To get a deeper understanding of the important features for spatial simulations in the GIS domain I encourage you to dive deeper by reading <a href="https://github.com/fightingpilot/my.eportfolio.io/blob/main/documents/Blomeier_Spatial_Dynamics.pdf" target="_blank">my paper</a>.
                </p>
            </div>
        </div>
        <br>
        <h1>Internship @ <a href="https://www.ocean-maps.com/">Ocean Maps GmbH</a></h1>
        <p>
            Ocean Maps GmbH is a survey office located in Salzburg, Austria. Its main work of field is hydrography and drone based surveying. During my internship I had the possibility to test and develop potential new equipment as well as working in the field with experienced colleagues performing hydrological surveys using a multibeam sonar system.<br>
            A more detailed report about my tasks and the outcomes of the internship you find <a href="https://github.com/fightingpilot/my.eportfolio.io/blob/main/documents/Internship_report.pdf" target="_blank">here</a>.
        </p>
        <h1>Erasmus @ <a href="https://en.ru.is/" target="_blank">Reykjavik University</a></h1>
        <p>
            At the <i>Háskólinn í Reykjavík</i> I had the opportunity to look beyond the GIS related classes and gain insights to different fields of computer science. One of the more interesting and not so common classes was <i>Talgerving</i>. The purpose of the class was to design an text-to-speech system using <a href="https://www.cstr.ed.ac.uk/projects/festival/" target="_blank">Festival</a> and Docker. For more detailed information about the class and the finals TTS I recommend to read my <a href="https://github.com/fightingpilot/my.eportfolio.io/blob/main/documents/Final_Blomeier.pdf" target="_blank">final paper</a> about my results during the class.
        </p>
    </body>
</html>