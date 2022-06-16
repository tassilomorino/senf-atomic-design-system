/** @format */

import React from "react";
import { Story, Meta } from "@storybook/react";

import Calendar from "./Calendar";

import { CalendarProps } from "./Calendar.types";

export default {
  title: "Organisms/Calendar",
  component: Calendar,
  argTypes: {},
} as Meta<typeof Calendar>;

const Template: Story<CalendarProps> = (args) => <Calendar {...args} />;

export const Default = Template.bind({});
Default.args = {
  googleCalendarId: "",
  googleCalendarApiKey: process.env.REACT_APP_GOOGLE_CALENDAR_API_KEY,
  calendarType: "inline",
  inlineCalendarEntries: [
    {
      locationHeader: "Berliner Str. 20",
      weblink: "https://www.tagdesgutenlebens.de",
      contact: "muelheim@agorakoeln.de",
      weblinkTitle: "Sommer des guten Lebens Mülheim",
      commentCount: 2,
      projectRoomId: "ibFnQKlsEBr97usS9nKD",
      polarity: 0,
      userHandle: "Nina - Veedelsteam",
      district: "Berliner Str. 20, 51063 Köln, Germany",
      createdAt: "2021-07-22T12:18:11.851Z",
      subjectivity: 0,
      age: 32,
      color: "#f9db95",
      Stadtteil: "Mülheim",
      likeCount: 2,
      selectedUnix: [1627403441, 1627662641],
      Thema: "Sonstige",
      sex: "female",
      status: "None",
      lat: 50.96983082081014,
      Stadtbezirk: "Mülheim",
      project: "Agora:_Sommer_des_guten_lebens",
      body: "Der Mülheimer Sommer 2021 ist das was du / was ihr draus macht! Hast du schon Ideen für eine Aktion und weißt noch nicht",
      title: "Workshop für Mülheimer Vereine",
      long: 7.008632381767962,
      userId: "5p3Mgw0rb2PeyrKI8Vxp2X65d7i2",
      screamId: "zpEvKmY7SJGz4vRNe3IC",
    },
    {
      title: '"meditation. interreligös"',
      sex: "female",
      project: "Agora:_Sommer_des_guten_lebens",
      locationHeader: "Tiefentalstraße 38",
      projectRoomId: "ibFnQKlsEBr97usS9nKD",
      age: 32,
      contact: "bleck@clemens-mauritius.de",
      likeCount: 2,
      lat: 50.974378,
      contactTitle: "Beate Bleck",
      district: "Tiefentalstraße 38, 51063 Köln, Germany",
      userHandle: "Nina - Veedelsteam",
      status: "None",
      weblink: null,
      long: 7.010783,
      color: "#e8907e",
      subjectivity: 0,
      commentCount: 0,
      Thema: "Inklusion / Soziales",
      createdAt: "2021-07-22T11:48:03.787Z",
      userId: "5p3Mgw0rb2PeyrKI8Vxp2X65d7i2",
      body: "Wir üben unsere Aufmerksamkeit von den Handlungsimpulsen des Alltags ab- und nach innen zu wenden. Achtsam, gelassen und",
      Stadtbezirk: "Mülheim",
      selectedUnix: [1631636114, 1633450514, 1637082914, 1639502114],
      weblinkTitle: null,
      polarity: 0,
      Stadtteil: "Mülheim",
      screamId: "dbGBQluVInfYo8frh7uQ",
    },
    {
      contact: "bleck@clemens-mauritius.de",
      body: "Eine Einladung zusammen zu singen – einfache Lieder, ohne Noten,\nexplizit nur über das Gehör, ohne Vorkenntnisse, ohne E",
      long: 7.010595092551351,
      lat: 50.97482695449752,
      commentCount: 0,
      likeCount: 4,
      contactTitle: "Beate Bleck",
      Stadtteil: "Mülheim",
      sex: "female",
      projectRoomId: "ibFnQKlsEBr97usS9nKD",
      title: 'Workshop "Singen im Veedel"',
      selectedUnix: [
        1629898252, 1631885452, 1634909452, 1637332252, 1639146652,
      ],
      userId: "5p3Mgw0rb2PeyrKI8Vxp2X65d7i2",
      age: 32,
      project: "Agora:_Sommer_des_guten_lebens",
      weblinkTitle: null,
      status: "None",
      createdAt: "2021-07-22T11:41:11.001Z",
      subjectivity: 0,
      userHandle: "Nina - Veedelsteam",
      weblink: null,
      district: "Don-Bosco-Straße 1, 51063 Köln, Germany",
      color: "#e8907e",
      polarity: 0,
      locationHeader: "Don-Bosco-Straße 1",
      Stadtbezirk: "Mülheim",
      Thema: "Inklusion / Soziales",
      screamId: "25tZIn3lPxKl89TB4xNI",
    },
    {
      weblink: null,
      userId: "5p3Mgw0rb2PeyrKI8Vxp2X65d7i2",
      createdAt: "2021-07-22T11:38:16.260Z",
      color: "#e8907e",
      likeCount: 1,
      locationHeader: "Don-Bosco-Straße 1",
      commentCount: 0,
      contact: "muelheim@agorakoeln.de",
      Thema: "Inklusion / Soziales",
      district: "Don-Bosco-Straße 1, 51063 Köln, Germany",
      long: 7.010241040989165,
      title: "Fest zum Tag des öffentlichen Denkmals",
      body: "Am 12.9. findet zum Tag des öffentlichen Denkmals ein Fest in und um die St. Antoniuskirche mit verschiedenen Präsentati",
      selectedUnix: [1631433617],
      weblinkTitle: null,
      contactTitle: "Nina - Veedelsteam / Vereinsvernetzung",
      lat: 50.97472568250535,
      sex: "female",
      age: 32,
      projectRoomId: "ibFnQKlsEBr97usS9nKD",
      status: "None",
      Stadtteil: "Mülheim",
      project: "Agora:_Sommer_des_guten_lebens",
      Stadtbezirk: "Mülheim",
      polarity: 0,
      userHandle: "Nina - Veedelsteam",
      subjectivity: 0.2111111111111111,
      screamId: "ci7Mcyk7sTDCCWEN8CWn",
    },
    {
      title: "Imkerei auf dem Kirchplatz St. Antoniuskirche",
      body: "Gesucht werden 2 Menschen, die gerne das Imkern beginnen und ein Herz für Kinder / Jugendliche (des DonBosco Clubs) habe",
      createdAt: "2021-07-22T11:31:54.200Z",
      userHandle: "Nina - Veedelsteam",
      age: 32,
      Stadtteil: "Mülheim",
      long: 7.010235124087951,
      sex: "female",
      contact: "muelheim@agorakoeln.de",
      weblink: null,
      userId: "5p3Mgw0rb2PeyrKI8Vxp2X65d7i2",
      selectedUnix: null,
      commentCount: 0,
      projectRoomId: "ibFnQKlsEBr97usS9nKD",
      contactTitle: "Nina - Veedelsteam / Vereinsvernetzung",
      likeCount: 3,
      district: "Don-Bosco-Straße 1, 51063 Köln, Germany",
      subjectivity: 0.4,
      Thema: "Umwelt und Grün",
      lat: 50.97463750976233,
      locationHeader: "Don-Bosco-Straße 1",
      project: "Agora:_Sommer_des_guten_lebens",
      polarity: -0.05,
      Stadtbezirk: "Mülheim",
      weblinkTitle: null,
      color: "#8dd9b8",
      status: "None",
      screamId: "4u2Umqk7NJLvHqwiV5LD",
    },
    {
      status: "None",
      userId: "i6CHKRUSoReeW32G3ZBhsTsc3KI3",
      title: "Zusammenleben Willkommen - WG-Zimmer für geflüchtete Menschen",
      sex: "male",
      subjectivity: 0.425,
      createdAt: "2021-07-21T15:26:13.945Z",
      district: "Frankfurter Str. 37, 51065 Köln, Germany",
      age: 30,
      long: 7.004922887946996,
      color: "#e8907e",
      Stadtteil: "Mülheim",
      weblink: "www.zusammenleben-willkommen.de",
      projectRoomId: "ibFnQKlsEBr97usS9nKD",
      project: "Agora:_Sommer_des_guten_lebens",
      locationHeader: "Frankfurter Str. 37",
      lat: 50.96184217331116,
      contactTitle: "ZW - Köln",
      weblinkTitle: "www.zusammenleben-willkommen.de",
      Stadtbezirk: "Mülheim",
      body: "Das Ziel des Projektes ist, Wohnraumgebende und Menschen mit Fluchtgeschichte zusammenzubringen um ein solidarisches Zus",
      Thema: "Inklusion / Soziales",
      contact: "koeln@zusammenleben-willkommen.de ",
      userHandle: "Zusammenleben Willkommen",
      polarity: 0.2393939393939394,
      likeCount: 3,
      commentCount: 0,
      screamId: "ZKfKNDskAFrTQhQTdOG5",
    },
    {
      polarity: 0.05,
      district: "Berliner Str. 20, 51063 Köln, Germany",
      Thema: "Sport / Freizeit",
      createdAt: "2021-07-20T10:27:39.075Z",
      projectRoomId: "ibFnQKlsEBr97usS9nKD",
      body: "Pflanzaktion am Kulturbunker! Wenn ihr Lust habt mitzumachen meldet euch direkt dort oder unter mitmachen@agorakoeln.de",
      lat: 50.969881,
      title: "Urban Gardening am Kulturbunker",
      age: 26,
      userHandle: "Laura_TdgL",
      likeCount: 4,
      color: "#f6c095",
      subjectivity: 0.2,
      status: "None",
      Stadtteil: "Mülheim",
      commentCount: 0,
      long: 7.008755,
      sex: "female",
      Stadtbezirk: "Mülheim",
      project: "Agora:_Sommer_des_guten_lebens",
      locationHeader: "Berliner Str. 20",
      userId: "VzNvh5rpPmNlpzRt0UuaOZes5mj1",
      screamId: "zKkKbn6SrBcGpW3bRY9E",
    },
    {
      title: '"Münsterer Platz"',
      Stadtteil: "Mülheim",
      polarity: 0.85,
      projectRoomId: "ibFnQKlsEBr97usS9nKD",
      status: "None",
      userId: "2ufo5Hhj1bOwiTb9WtTSIiqET063",
      likeCount: 5,
      sex: "female",
      long: 7.005568537560028,
      createdAt: "2021-07-13T11:29:03.946Z",
      lat: 50.969360679616294,
      project: "Agora:_Sommer_des_guten_lebens",
      Stadtbezirk: "Mülheim",
      userHandle: "Lynn",
      subjectivity: 1,
      locationHeader: "Münsterer Str. 49",
      age: 21,
      body: "Hier soll ein partizipatives Gartenprojekt in Zusammenarbeit mit den Nachbar:innen entstehen. Geplant ist den Platz zu b",
      district: "Münsterer Str. 49, 51063 Köln, Germany",
      color: "#8dd9b8",
      Thema: "Umwelt und Grün",
      commentCount: 0,
      screamId: "84Xtmf60nUX20iJEZxqy",
    },
    {
      body: "Ab dem 1. September soll ein Teil des Reinzauns zu einer Ausstellung verwandelt werden. Ihr habt Lust mitzumachen? Dann ",
      project: "Agora:_Sommer_des_guten_lebens",
      likeCount: 4,
      district: "Mülheimer Mäuerchen, Unnamed Road, 51063 Köln, Germany",
      Stadtteil: "Mülheim",
      polarity: 0,
      selectedUnix: [1630496417],
      contact: "muelheim@agorakoeln.de",
      title: "Partizipative Rhein-Zaun Ausstellung",
      subjectivity: 0,
      userHandle: "Laura_TdgL",
      weblink: null,
      locationHeader: "Mülheimer Mäuerchen",
      Stadtbezirk: "Mülheim",
      color: "#f9db95",
      commentCount: 0,
      projectRoomId: "ibFnQKlsEBr97usS9nKD",
      weblinkTitle: null,
      age: 26,
      status: "None",
      userId: "VzNvh5rpPmNlpzRt0UuaOZes5mj1",
      Thema: "Sonstige",
      sex: "female",
      long: 6.999202617365304,
      lat: 50.96663968232028,
      contactTitle: "Mitmachen",
      createdAt: "2021-07-12T11:46:54.199Z",
      screamId: "Y8s21niOVjl66J6SPqhH",
    },
    {
      long: 7.004033667234657,
      weblinkTitle: null,
      contact: "muelheim@agorakoeln.de",
      lat: 50.9621492606193,
      userHandle: "Laura_TdgL",
      sex: "female",
      likeCount: 3,
      age: 26,
      projectRoomId: "ibFnQKlsEBr97usS9nKD",
      weblink: null,
      commentCount: 0,
      selectedUnix: [1629216917],
      district: "Clevischer Ring 6, 51065 Köln, Germany",
      color: "#e8907e",
      userId: "VzNvh5rpPmNlpzRt0UuaOZes5mj1",
      project: "Agora:_Sommer_des_guten_lebens",
      Stadtbezirk: "Mülheim",
      title: "Workshop: Gut Wohnen in Mülheim",
      body: "Bezahlbarer Wohnraum - ein Dach über dem Kopf und das ohne am Ende des Monats aufgrund einer kaum bezahlbaren Miete zu b",
      status: "None",
      polarity: 0.18624574829931972,
      Thema: "Inklusion / Soziales",
      locationHeader: "Clevischer Ring 6",
      contactTitle: "Mitmachen",
      createdAt: "2021-07-12T11:43:05.077Z",
      subjectivity: 0.4700113378684807,
      Stadtteil: "Mülheim",
      screamId: "EbslLpZhcQPRqtB5KEqs",
    },
    {
      project: "Agora:_Sommer_des_guten_lebens",
      subjectivity: 0.6527777777777778,
      weblinkTitle: null,
      lat: 50.96191346268361,
      color: "#e8907e",
      age: 26,
      likeCount: 3,
      status: "None",
      contactTitle: "Mitmachen",
      selectedUnix: [1627822817, 1628180117],
      title: "Workshop Veedelsreporter:in Einstieg",
      contact: "muelheim@agorakoeln.de",
      Stadtbezirk: "Mülheim",
      projectRoomId: "ibFnQKlsEBr97usS9nKD",
      polarity: 0.12222222222222223,
      commentCount: 0,
      locationHeader: "Clevischer Ring 6",
      Thema: "Inklusion / Soziales",
      long: 7.003579224683512,
      Stadtteil: "Mülheim",
      createdAt: "2021-07-12T11:40:40.895Z",
      weblink: null,
      userHandle: "Laura_TdgL",
      sex: "female",
      district: "Clevischer Ring 6, 51065 Köln, Germany",
      body: "Die Workshops bauen aufeinander auf. Wir freuen uns über Anmeldungen für beide, es ist jedoch möglich, nur den einen ode",
      userId: "VzNvh5rpPmNlpzRt0UuaOZes5mj1",
      screamId: "b78QOVaZ6jL9e0hRthve",
    },
    {
      selectedUnix: [1628163269],
      Thema: "Inklusion / Soziales",
      contact: "muelheim@agorakoeln.de",
      commentCount: 0,
      color: "#e8907e",
      weblinkTitle: null,
      polarity: 0.25,
      status: "None",
      lat: 50.96157925,
      createdAt: "2021-07-12T11:37:22.013Z",
      subjectivity: 0.5,
      district: "Frankfurter Str. 1, 51065 Köln, Germany",
      title: "Workshop Veedels-Reporter:in Folgetermin",
      project: "Agora:_Sommer_des_guten_lebens",
      userId: "VzNvh5rpPmNlpzRt0UuaOZes5mj1",
      locationHeader: "Frankfurter Str. 1",
      Stadtteil: "Mülheim",
      body: "Ort und Uhrzeit sind noch nicht bekannt, wenn du interesse hast melde dich unter muelheim@agorakoeln.de",
      long: 7.00515675,
      userHandle: "Laura_TdgL",
      Stadtbezirk: "Mülheim",
      projectRoomId: "ibFnQKlsEBr97usS9nKD",
      contactTitle: "Mitmachen",
      weblink: null,
      likeCount: 2,
      age: 26,
      sex: "female",
      screamId: "YcNCoqMjFpcTtjnph4fo",
    },
    {
      subjectivity: 0.2925,
      title: "Workshop:  How to Stadtgestaltung - politische Aktivierung\n",
      userHandle: "Laura_TdgL",
      likeCount: 4,
      weblink: null,
      contact: "muelheim@agorakoeln.de",
      district: "Berliner Str. 20, 51063 Köln, Germany",
      commentCount: 0,
      age: 26,
      userId: "VzNvh5rpPmNlpzRt0UuaOZes5mj1",
      Stadtbezirk: "Mülheim",
      body: "Du kannst deine Stadt mitgestalten! Wie das geht und was für Möglichkeiten es gibt, erfährst du im Basis-Workshop „How t",
      Thema: "Inklusion / Soziales",
      projectRoomId: "ibFnQKlsEBr97usS9nKD",
      long: 7.008755,
      weblinkTitle: null,
      selectedUnix: [1627575329],
      polarity: 0.026666666666666665,
      createdAt: "2021-07-12T11:35:10.752Z",
      Stadtteil: "Mülheim",
      status: "None",
      contactTitle: "Mitmachen",
      project: "Agora:_Sommer_des_guten_lebens",
      locationHeader: "Berliner Str. 20",
      lat: 50.969881,
      sex: "female",
      color: "#e8907e",
      screamId: "mTTQbjFSonew6SBdkeyh",
    },
    {
      subjectivity: 0.5,
      district:
        "Kleingärtnerverein Köln-Mülheim-Ost e.V. Block 4+5, Mülheimer Ring, 51063 Köln, Germany",
      likeCount: 3,
      weblink: null,
      commentCount: 0,
      projectRoomId: "ibFnQKlsEBr97usS9nKD",
      selectedUnix: null,
      body: "Ende September ist ein Pflanzentausch im Kleingartenverein geplant. Habt Ihr Interesse? Dann schreibt uns: muelheim@agor",
      locationHeader: "Kleingärtnerverein Köln-Mülheim-Ost e.V. Block 4+5",
      createdAt: "2021-07-12T11:32:16.832Z",
      lat: 50.971097094459594,
      status: "None",
      weblinkTitle: null,
      color: "#8dd9b8",
      userId: "VzNvh5rpPmNlpzRt0UuaOZes5mj1",
      long: 7.021323265597573,
      project: "Agora:_Sommer_des_guten_lebens",
      userHandle: "Laura_TdgL",
      contactTitle: "Kontakt",
      Stadtteil: "Buchheim",
      age: 26,
      contact: "muelheim@agorakoeln.de",
      Thema: "Umwelt und Grün",
      title: "Pflanzentausch",
      Stadtbezirk: "Mülheim",
      polarity: 0.25,
      sex: "female",
      screamId: "c96ciOwKWlroZuIyhfFU",
    },
    {
      sex: "female",
      weblinkTitle: null,
      polarity: 0.1,
      projectRoomId: "ibFnQKlsEBr97usS9nKD",
      age: 26,
      status: "None",
      userId: "VzNvh5rpPmNlpzRt0UuaOZes5mj1",
      project: "Agora:_Sommer_des_guten_lebens",
      likeCount: 3,
      selectedUnix: null,
      long: 7.008415,
      weblink: null,
      contactTitle: "Mitmachen",
      district: "Schützenhofstraße 14, 51063 Köln, Germany",
      subjectivity: 0.1,
      userHandle: "Laura_TdgL",
      Stadtteil: "Mülheim",
      Stadtbezirk: "Mülheim",
      body: "Bewohner und Bewohnerinnen der Schützenhofstraße haben Lust, ein Straßenfest zu veranstalten. Hast du Lust mit zu organi",
      lat: 50.9712343,
      locationHeader: "Schützenhofstraße 14",
      commentCount: 0,
      title: "Straßenfest an der Schützenhofstraße",
      Thema: "Sport / Freizeit",
      createdAt: "2021-07-12T11:16:38.225Z",
      color: "#f6c095",
      contact: "muelheim@agorakoeln.de",
      screamId: "6pNLbk382Tt8gF0mLwrl",
    },
    {
      status: "None",
      title: "Straßenfest an der Genovevastraße",
      body: "Bewohner:innen der Genovevastraße haben Lust, ein Straßenfest zu veranstalten. Hast du Lust mit zu organisieren und dein",
      userHandle: "Laura_TdgL",
      long: 7.0068143,
      Thema: "Sport / Freizeit",
      contactTitle: "Mitmachen",
      locationHeader: "Genovevastraße 46",
      projectRoomId: "ibFnQKlsEBr97usS9nKD",
      district: "Genovevastraße 46, 51063 Köln, Germany",
      color: "#f6c095",
      selectedUnix: null,
      Stadtteil: "Mülheim",
      userId: "VzNvh5rpPmNlpzRt0UuaOZes5mj1",
      weblink: null,
      lat: 50.9639396,
      createdAt: "2021-07-12T11:13:25.782Z",
      project: "Agora:_Sommer_des_guten_lebens",
      age: 26,
      contact: "muelheim@agorakoeln.de",
      polarity: 0.1,
      sex: "female",
      likeCount: 3,
      Stadtbezirk: "Mülheim",
      subjectivity: 0.1,
      weblinkTitle: null,
      commentCount: 0,
      screamId: "0MSEAD5l1mEmZ8D81gtY",
    },
    {
      lat: 50.96734458192481,
      age: 26,
      contactTitle: "Mitmachen",
      project: "Agora:_Sommer_des_guten_lebens",
      userId: "VzNvh5rpPmNlpzRt0UuaOZes5mj1",
      createdAt: "2021-07-12T11:10:22.413Z",
      sex: "female",
      Thema: "Sport / Freizeit",
      selectedUnix: null,
      commentCount: 0,
      weblink: null,
      body: "Vom Abschnitt Ecke Wallstr. bis Springbrunnen wird geplant ein Straßenfest zu veranstalten. Wohnst du in der Straße und ",
      polarity: 0.11818181818181818,
      likeCount: 1,
      projectRoomId: "ibFnQKlsEBr97usS9nKD",
      Stadtteil: "Mülheim",
      status: "None",
      locationHeader: "Mülheimer Freiheit 142",
      contact: "muelheim@agorakoeln.de",
      long: 7.00181320821256,
      subjectivity: 0.3,
      userHandle: "Laura_TdgL",
      Stadtbezirk: "Mülheim",
      district: "Mülheimer Freiheit 142, 51063 Köln, Germany",
      weblinkTitle: null,
      title: "Straßenfest an der Wallstraße",
      color: "#f6c095",
      screamId: "omweqsDYlFMkmTFAX1Ba",
    },
    {
      weblinkTitle: null,
      district: "Mülheimer Freiheit 144, 51063 Köln, Germany",
      lat: 50.967253,
      Thema: "Sonstige",
      contactTitle: "Kontakt",
      project: "Agora:_Sommer_des_guten_lebens",
      commentCount: 0,
      subjectivity: 0.5666666666666668,
      Stadtteil: "Mülheim",
      selectedUnix: null,
      weblink: null,
      body: 'Vor der "Freiheit aushalten" steht eine Tafel, mit der Frage, was Gutes Leben für euch ist. Schreibt eure Antworten und ',
      color: "#f9db95",
      userHandle: "Laura_TdgL",
      status: "None",
      polarity: 0.6333333333333333,
      contact: "muelheim@agorakoeln.de",
      locationHeader: "Mülheimer Freiheit 144",
      sex: "female",
      createdAt: "2021-07-12T11:02:30.913Z",
      age: 26,
      projectRoomId: "ibFnQKlsEBr97usS9nKD",
      long: 7.00217,
      userId: "VzNvh5rpPmNlpzRt0UuaOZes5mj1",
      Stadtbezirk: "Mülheim",
      likeCount: 2,
      title: "Wand des guten Lebens",
      screamId: "EvNf0zU7H1t8rSnQ61Hq",
    },
    {
      project: "Agora:_Sommer_des_guten_lebens",
      subjectivity: 0,
      contact: "muelheim@agorakoeln.de",
      status: "None",
      weblinkTitle: null,
      projectRoomId: "ibFnQKlsEBr97usS9nKD",
      body: "Wir wollen gemeinsam mit Anleitung einer Gärtnerin die Hochbeete am Mülheimer Bahnhof bepflanzen. Datum ist wahrscheinli",
      sex: "female",
      selectedUnix: null,
      weblink: null,
      userId: "VzNvh5rpPmNlpzRt0UuaOZes5mj1",
      createdAt: "2021-07-12T10:57:10.991Z",
      age: 26,
      district: "Clevischer Ring 6, 51065 Köln, Germany",
      likeCount: 3,
      long: 7.00417,
      polarity: 0,
      userHandle: "Laura_TdgL",
      Stadtteil: "Mülheim",
      contactTitle: "Mitmachen",
      commentCount: 0,
      locationHeader: "Clevischer Ring 6",
      title: "Bepflanzung der Hochbeete",
      Thema: "Verkehr",
      Stadtbezirk: "Mülheim",
      color: "#91dff4",
      lat: 50.96222,
      screamId: "LTIgN186XvlQTV4r9ojM",
    },
    {
      body: "Auf dem Bahnhofsvorplatz soll ein Bücherschrank gestellt werden. Die Planung startet gerade...\n",
      long: 7.011788,
      selectedUnix: null,
      title: "Bücherschrank",
      district: "Straßenbahn Bf Mülheim, 51065 Köln, Germany",
      weblinkTitle: null,
      contactTitle: "Mitmachen",
      locationHeader: "Straßenbahn Bf Mülheim",
      project: "Agora:_Sommer_des_guten_lebens",
      color: "#f9db95",
      contact: "muelheim@agorakoeln.de",
      projectRoomId: "ibFnQKlsEBr97usS9nKD",
      lat: 50.957375,
      createdAt: "2021-07-12T10:54:19.021Z",
      Stadtbezirk: "Mülheim",
      sex: "female",
      commentCount: 0,
      Thema: "Sonstige",
      userHandle: "Laura_TdgL",
      status: "None",
      age: 26,
      Stadtteil: "Mülheim",
      userId: "VzNvh5rpPmNlpzRt0UuaOZes5mj1",
      weblink: null,
      subjectivity: 0,
      likeCount: 5,
      polarity: 0,
      screamId: "DqMhOb9RcfFz1GG8XxgT",
    },
    {
      age: 26,
      locationHeader: "Krahnenstraße 8",
      subjectivity: 0,
      userHandle: "Laura_TdgL",
      Stadtbezirk: "Mülheim",
      color: "#bd98f6",
      createdAt: "2021-07-12T10:38:35.846Z",
      likeCount: 6,
      Stadtteil: "Mülheim",
      status: "None",
      contactTitle: null,
      projectRoomId: "ibFnQKlsEBr97usS9nKD",
      polarity: 0,
      userId: "VzNvh5rpPmNlpzRt0UuaOZes5mj1",
      long: 7.000527,
      title: "Waffeln gegen Spende",
      weblinkTitle: null,
      Thema: "Versorgung",
      district: "Krahnenstraße 8, 51063 Köln, Germany",
      commentCount: 1,
      lat: 50.967035,
      body: "Jeden Dienstag gibt es von 15:30-17 Uhr vor dem Seniorenzentrum Waffeln für so viel Geld, wie ihr gerade geben könnt. To",
      contact: null,
      selectedUnix: null,
      project: "Agora:_Sommer_des_guten_lebens",
      sex: "female",
      weblink: null,
      screamId: "9naCxmzhtpmWOFuamlRV",
    },
    {
      subjectivity: 0,
      locationHeader: "Münsterer Str. 49",
      createdAt: "2021-07-12T10:35:28.879Z",
      long: 7.005569027160613,
      project: "Agora:_Sommer_des_guten_lebens",
      polarity: 0,
      sex: "female",
      userHandle: "Laura_TdgL",
      title: "Böschung bepflanzen",
      commentCount: 0,
      selectedUnix: null,
      lat: 50.96970620290685,
      contactTitle: "Mitmachen",
      status: "None",
      Stadtteil: "Mülheim",
      age: 26,
      color: "#8dd9b8",
      district: "Münsterer Str. 49, 51063 Köln, Germany",
      projectRoomId: "ibFnQKlsEBr97usS9nKD",
      weblink: null,
      body: "Hier gibt es schon engagierte Menschen, die Unterstützung brauchen. Bei Interesse schreibt uns an! mitmachen@agorakoeln.",
      weblinkTitle: null,
      Stadtbezirk: "Mülheim",
      userId: "VzNvh5rpPmNlpzRt0UuaOZes5mj1",
      contact: "muelheim@agorakoeln.de",
      Thema: "Umwelt und Grün",
      likeCount: 4,
      screamId: "Vc3jenm4ywcbSBrbAKR6",
    },
    {
      selectedUnix: [
        1626546652, 1627756252, 1628361052, 1628965852, 1630175452,
      ],
      weblinkTitle: null,
      userId: "VzNvh5rpPmNlpzRt0UuaOZes5mj1",
      userHandle: "Laura_TdgL",
      projectRoomId: "ibFnQKlsEBr97usS9nKD",
      title: "Sommerkino",
      weblink: null,
      polarity: 0,
      Stadtteil: "Mülheim",
      contactTitle: null,
      commentCount: 0,
      lat: 50.957375,
      district: "Straßenbahn Bf Mülheim, 51065 Köln, Germany",
      subjectivity: 0,
      color: "#f6c095",
      body: "Am Bahnhof Mülheim gibt es alle 1-2 Wochen ein open-air Sommerkino mit tollem Programm zu nachhaltigen Themen!\n\nSa, 17. ",
      project: "Agora:_Sommer_des_guten_lebens",
      sex: "female",
      likeCount: 3,
      status: "None",
      Thema: "Sport / Freizeit",
      age: 26,
      Stadtbezirk: "Mülheim",
      long: 7.011788,
      contact: null,
      createdAt: "2021-07-12T10:23:53.147Z",
      locationHeader: "Straßenbahn Bf Mülheim",
      screamId: "lJU2XeTBI6oc7BZlBZGQ",
    },
    {
      userHandle: "Sari",
      contactTitle: null,
      createdAt: "2021-07-09T10:42:17.273Z",
      project: "Agora:_Sommer_des_guten_lebens",
      lat: 50.969881,
      sex: "female",
      Stadtteil: "Mülheim",
      weblinkTitle: null,
      district: "Berliner Str. 20, 51063 Köln, Germany",
      weblink: null,
      contact: null,
      userId: "qxyuDCBcjUZxKUsdljSMh1THrLl2",
      subjectivity: 0.3,
      locationHeader: "Berliner Str. 20",
      commentCount: 0,
      color: "#8dd9b8",
      likeCount: 6,
      Thema: "Umwelt und Grün",
      projectRoomId: "ibFnQKlsEBr97usS9nKD",
      age: 35,
      status: "None",
      long: 7.008755,
      selectedUnix: [1625842846],
      body: "Der Platz am und um den Kulturbunker soll grüner werden! Um die Gemeinschaft im Veedel noch tiefgreifender zu vernetzten",
      Stadtbezirk: "Mülheim",
      title: "Urban Gardening im Kulturbunker",
      polarity: 0.11666666666666667,
      screamId: "qnaHSKR4HypWE88z8kcf",
    },
    {
      commentCount: 0,
      contact: null,
      status: "None",
      age: 33,
      Stadtbezirk: "Mülheim",
      Thema: "Verkehr",
      long: 7.0106398680212125,
      Stadtteil: "Mülheim",
      createdAt: "2021-07-09T07:35:59.648Z",
      project: "Agora:_Sommer_des_guten_lebens",
      lat: 50.967453205460565,
      subjectivity: 0.44285714285714284,
      likeCount: 4,
      weblink: null,
      polarity: 0.2255952380952381,
      contactTitle: null,
      sex: "male",
      weblinkTitle: null,
      locationHeader: "Schanzenstraße 24-30",
      district: "Schanzenstraße 24-30, 51063 Köln, Germany",
      selectedUnix: null,
      color: "#91dff4",
      userId: "CvlF83olfVgLoqJseAQvR1UkP8x2",
      userHandle: "Gregorretathunfisch",
      title: "Schanzenstraße Fußgängerfreundlich",
      projectRoomId: "ibFnQKlsEBr97usS9nKD",
      body: "Nachdem die Großbaustelle an der Schanzenstraße abgebaut wurde, die Straße zu einer Einbahnstraße umwidmen (von der Keup",
      screamId: "VNRwCAJVamECj8rhWGml",
    },
    {
      age: 27,
      createdAt: "2021-07-08T20:00:42.168Z",
      projectRoomId: "ibFnQKlsEBr97usS9nKD",
      sex: "male",
      status: "None",
      weblink: null,
      Stadtteil: "Mülheim",
      project: "Agora:_Sommer_des_guten_lebens",
      Thema: "Sonstige",
      lat: 50.9671438637633,
      color: "#f9db95",
      title: "Ein neuer Raum für die Ranzeria",
      subjectivity: 0.3181818181818182,
      long: 7.002276519290042,
      Stadtbezirk: "Mülheim",
      userHandle: "Guaca M. Ole",
      locationHeader: "Wallstraße 124",
      district: "Wallstraße 124, 51063 Köln, Germany",
      body: "Zu Beginn der Coronapandemie musste die Ranzeria ihren Raum in der Wallstraße aufgeben. Wer kennt einen Raum in Mülheim,",
      commentCount: 0,
      contact: null,
      weblinkTitle: null,
      polarity: -0.004545454545454547,
      contactTitle: null,
      likeCount: 3,
      selectedUnix: null,
      userId: "M52gv7KEofcKuC1zx1jXnNzOBj93",
      screamId: "02xfCQbR1fokYHcVl7DZ",
    },
    {
      Thema: "Verkehr",
      userId: "CvlF83olfVgLoqJseAQvR1UkP8x2",
      subjectivity: 0,
      long: 7.003086007889441,
      lat: 50.962509332359986,
      locationHeader: "Buchheimer Str. 64-66",
      project: "Agora:_Sommer_des_guten_lebens",
      selectedUnix: null,
      color: "#91dff4",
      district: "Buchheimer Str. 64-66, 51063 Köln, Germany",
      age: 33,
      createdAt: "2021-06-20T22:28:28.041Z",
      projectRoomId: "ibFnQKlsEBr97usS9nKD",
      sex: "male",
      Stadtteil: "Mülheim",
      weblinkTitle: null,
      commentCount: 0,
      polarity: 0,
      userHandle: "Gregorretathunfisch",
      title: "„Kleiner Wiener Platz“",
      status: "None",
      likeCount: 7,
      weblink: null,
      contactTitle: null,
      body: "Den Parkplatz neben dem Rewe-Markt schließen und für Menschen öffnen. Dadurch entsteht ein „Kleiner Wiener Platz“, der a",
      contact: null,
      Stadtbezirk: "Mülheim",
      screamId: "fwjdDRQG4AnWAkodHKkf",
    },
    {
      age: 33,
      projectRoomId: "ibFnQKlsEBr97usS9nKD",
      createdAt: "2021-06-20T22:21:08.556Z",
      Thema: "Verkehr",
      Stadtbezirk: "Mülheim",
      status: "None",
      district: "Kleiner Park Ratsstrasse, Ratsstraße 8, 51063 Köln, Germany",
      userHandle: "Gregorretathunfisch",
      contact: null,
      body: "Im Quartier zwischen Rhein/Mülheimer Freiheit/ Clevischer Ring/ Mülheimer Brücke den Durchgangsverkehr so re-organisiere",
      long: 7.002916005968557,
      subjectivity: 0,
      contactTitle: null,
      lat: 50.9658489347403,
      sex: "male",
      weblink: null,
      title: "Superblock Mülheim",
      likeCount: 8,
      Stadtteil: "Mülheim",
      weblinkTitle: null,
      userId: "CvlF83olfVgLoqJseAQvR1UkP8x2",
      selectedUnix: null,
      polarity: 0,
      project: "Agora:_Sommer_des_guten_lebens",
      commentCount: 1,
      locationHeader: "Kleiner Park Ratsstrasse",
      color: "#91dff4",
      screamId: "rnqdRVJTAI7gjQFRFciA",
    },
    {
      contactTitle: null,
      age: 33,
      weblinkTitle: null,
      userHandle: "Gregorretathunfisch",
      commentCount: 1,
      project: "Agora:_Sommer_des_guten_lebens",
      lat: 50.967592784043575,
      selectedUnix: null,
      locationHeader: "Drei Königen Brunnen",
      body: "Die Mülheimer Freiheit für den Durchgangverkehr trennen und einen „Drei-Königen-Brunnen-Platz“ schaffen. Den Verkehr nur",
      createdAt: "2021-06-20T22:14:26.872Z",
      weblink: null,
      status: "None",
      Stadtbezirk: "Mülheim",
      title: "Drei-Königen-Brunnen-Platz",
      color: "#91dff4",
      contact: null,
      likeCount: 7,
      subjectivity: 0.8333333333333334,
      Stadtteil: "Mülheim",
      projectRoomId: "ibFnQKlsEBr97usS9nKD",
      long: 7.002950060533953,
      district: "Drei Königen Brunnen, Dünnwalder Str. 4, 51063 Köln, Germany",
      polarity: 0,
      userId: "CvlF83olfVgLoqJseAQvR1UkP8x2",
      sex: "male",
      Thema: "Verkehr",
      screamId: "DkgOLnCBLHZepjoAqh8E",
    },
    {
      locationHeader: "Herler Str. 25",
      contactTitle: "Kaffeekutsche",
      body: "EhrenamtlerInnen gesucht :) Essen für Hungrige in Köln-Mülheim. Als Verteiler oder als Köchin - wir brauchen dich!!",
      projectRoomId: "ibFnQKlsEBr97usS9nKD",
      One: 1,
      weblink: "https://www.facebook.com/Kaffeekutsche2020",
      polarity: 0.78125,
      commentCount: 0,
      lat: 50.95804,
      userHandle: "Ka_Be",
      userId: "XbFhYYBlHNPy68kH7lkKPkJR6KE3",
      color: "#bd98f6",
      likeCount: 7,
      weblinkTitle: "Facebook",
      subjectivity: 1,
      title: "Kaffeekutsche",
      status: "None",
      age: 33,
      project: "Agora:_Sommer_des_guten_lebens",
      sex: "female",
      createdAt: "2021-06-17T17:14:24.811Z",
      contact: "kaffeekutsche@web.de",
      Stadtteil: "Buchheim",
      Stadtbezirk: "Mülheim",
      Thema: "Versorgung",
      long: 7.017222,
      district: "Herler Str. 25, 51067 Köln, Germany",
      screamId: "ZutjCvLbNbDMOpgAPY4m",
    },
    {
      commentCount: 0,
      title: "Büdchen am Rheinpark",
      userId: "SJIEZ3QGQrXeGLm9dTmTRqBSpQB2",
      age: 22,
      Stadtbezirk: "Mülheim",
      contactTitle: null,
      weblink: null,
      locationHeader: "Sachsenbergstraße 2",
      Stadtteil: "Mülheim",
      subjectivity: 0,
      userHandle: "lokilugosi",
      body: "leude, ganz im ernst. bisher muss man immer jahrzehnte latschen, wenn man bei strahlendem sonnenschein seine highperform",
      selectedUnix: null,
      lat: 50.95389007141053,
      One: 1,
      color: "#f6c095",
      long: 6.979668432853832,
      weblinkTitle: null,
      sex: "male",
      projectRoomId: "ibFnQKlsEBr97usS9nKD",
      project: "Agora:_Sommer_des_guten_lebens",
      polarity: 0,
      createdAt: "2021-05-27T16:15:22.357Z",
      likeCount: 12,
      contact: null,
      district: "Sachsenbergstraße 2, 51063 Köln, Germany",
      Thema: "Sport / Freizeit",
      status: "None",
      screamId: "LX3vn9FCDNE9Y5VTKhRM",
    },
    {
      Thema: "Umwelt und Grün",
      lat: 50.961402368537975,
      Stadtteil: "Mülheim",
      color: "#8dd9b8",
      projectRoomId: "ibFnQKlsEBr97usS9nKD",
      body: "In der Stadt gibt es viele 'freistehende' Garagen. Der Hinterhof der Bachstraße ist hier ein Paradebeispiel. Eine kleine",
      contactTitle: null,
      title: "Begrünung von Garagen",
      likeCount: 18,
      subjectivity: 0,
      Stadtbezirk: "Mülheim",
      userHandle: "Leo",
      district:
        "40, Bachstraße, Mülheim, Köln, Nordrhein-Westfalen, 51063, Deutschland",
      selectedUnix: null,
      weblinkTitle: null,
      sex: "",
      locationHeader: " Bachstraße 40",
      status: "None",
      age: "",
      weblink: null,
      polarity: 0,
      One: 1,
      project: "Agora:_Sommer_des_guten_lebens",
      contact: null,
      userId: "kge2dovNF8RbnQ5zzvlKKs7V7la2",
      createdAt: "2021-02-22T07:37:45.046Z",
      commentCount: 0,
      long: 7.00262486168238,
      screamId: "kxyUZ0k0DKIIGGs8JEQV",
    },
  ],
};
