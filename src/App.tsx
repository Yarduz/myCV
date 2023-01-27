import React, { useState } from 'react';
import './App.css';
import Section from './comp/Section';
import Header from './comp/Header';

const URL: string = 'https://github.com/Yarduz' as const

const corpusHeb = {
  header: {
    name: "ירדן ביאליסטוק כהן",
    position: 'מועמד לתפקיד מפתח פולסטאק (fullstack)',
    cellNum: '050-636-5555',
    dateOfBirth: '03.08.1995',
    address: 'רחוב אורי בר און 41 ירושלים',
    email: 'yaloden12@gmail.com',
    languages: 'עברית שפת אם, אנגלית כשפת אם'
  },
  sections: [
    {
      title: "השכלה וקורסים",
      events: [
        { times: "2003-2007", bold: "אופק", description: "בית ספר למחוננים" },
        { times: "2013", bold: "בגרות מלאה", description: "בגרות מורחבת בהיסטוריה, אנגלית, וגיאוגרפיה" },
        { times: "2019", bold: "קורס דיפלומטיה ציבורית", description: "קורס אקדמי מאוניברסיטת אריאל" },
        { times: "2020", bold: "תואר במדע המדינה", description: "מהאוניברסיטה העברית בירושלים" },
        { times: "2021", bold: "קורס אילוף כלבים שיקומי", description: "קורס אקדמי מאוניברסיטת צפון קווינסלנד" },
        { times: "2022", bold: "קורס מפתח פולסטאק (fullstack)", description: "של חברת RealTime", extention: "Html, CSS, Bootstrap, JavaScript&TypeScript, NodeJS, SQL&noSQL, React, Angular, Linux" }
      ]
    },
    {
      title: "ניסיון תעסוקתי",
      events: [
        { times: "2021-2022", bold: "חברת ריפבליק יועצים", description: "רפרנט כנסת ולוביסט, הובלת קשר עם לקוחות ומקבלי החלטות, איסוף מידע והנגשתו, כתיבת תוכניות אסטרטגיות וכלים פרלמנטריים." },
        { times: "2019-2021", bold: "המועצה להשכלה גבוהה", description: "רכז באגף להערכת איכות" },
        { times: "2017-2019", bold: "חונכות ומתן שיעורי עזר", description: "לימודי פסיכומטרי לסטודנטים במכינה קדם אקדמאית ולימודי עזר לסטודנטים בעלי לקות ראייה" }]
    },
    {
      title: "שירות צבאי",
      events:
        [
          { times: "2013-2016", bold: "חיל ההנדסה הקרבית", description: 'שירות קרבי מלא כחובש, חופ"ל וחוג"ד' }
        ]
    }
  ]
}

const corpusEng = {
  header: {
    name: "Yarden Biyalistok Cohen",
    position: 'FullStack developer applicant',
    cellNum: '050-636-5555',
    dateOfBirth: '03.08.1995',
    address: 'Uri Bar-On 41 Jerusalem',
    email: 'yaloden12@gmail.com',
    languages: "Hebrew - Native, English - as a Native"
  },
  sections: [
    {
      title: "Education",
      events: [
        { times: "2003-2007", bold: "Ofek School", description: "special School for the academicaly gifted" },
        { times: "2013", bold: 'Full "Bagrut"', description: "extended studies in Geography, English and History" },
        { times: "2019", bold: "Public diplomacy", description: "Academic Course from the University of Ariel" },
        { times: "2020", bold: "B.A. the Political Sciences", description: "from the Hebrew University" },
        { times: "2021", bold: "rehbilitating dog trainer", description: "from the University of North Queensland" },
        { times: "2022", bold: "Course of Fullstack Development", description: "by Realtime group", extention: "Html, CSS, Bootstrap, JavaScript&TypeScript, NodeJS, SQL&noSQL, React, Angular, Linux" }
      ]
    },
    {
      title: "Work Experience",
      events: [
        { times: "2020-2021", bold: "Republic Ltd", description: "Lobbist, leading relationships with clients and representatives, collecting and distributing information, building and implementing stratigies, writing and promoting legislative tools" },
        { times: "2019-2020", bold: "The Counsil of Higher Education", description: "Quality Assurance department coordinator" },
        { times: "2017-2019", bold: "toturing and teaching", description: "Psychometric exam teacher in the pre-academic class, and tutoring blind student" }]
    },
    {
      title: "Army Service",
      events:
        [
          { times: "2013-2016", bold: "Combat Engeneering", description: 'Served as combative Medic' }
        ]
    }
  ]
}


function App() {

  const [mode, setMode] = useState("dark")
  const [corpus, setCorpus] = useState(corpusHeb)

  function changeMode() {
    if (mode === "dark") {
      document.body.style.backgroundColor = "white"
      setMode("")
    }
    else {
      setMode("dark")
      document.body.style.backgroundColor = "rgb(11, 7, 21)"
    }
  }
  function changeLang() {
    if (corpus === corpusHeb) {
      setCorpus(corpusEng)
      document.body.setAttribute("dir", "ltr");

    }
    else {
      setCorpus(corpusHeb)
      document.body.setAttribute("dir", "rtl");
    }
  }

  return (
    <div className={`App ${mode}`}>
      <Header
        setMode={changeMode}
        setLang={changeLang}
        mode={mode}
        name={corpus.header.name}
        position={corpus.header.position}
        cellNum={corpus.header.cellNum}
        dateOfBirth={corpus.header.dateOfBirth}
        address={corpus.header.address}
        email={corpus.header.email}
        git={URL}
        languages={corpus.header.languages}
      />
      {
        corpus.sections.map(each => {
          return (
            <Section title={each.title} events={each.events} />
          )
        })
      }
    </div>
  );
}


export default App;
