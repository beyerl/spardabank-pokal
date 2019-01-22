import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'spardabank-pokal';
  turnier = [
    {layout: 'th', heading: 'Nächster Termin:', content: '19.10.2019'},
    {layout: 'th', heading: 'Veranstalter:', content: '1. CKKS Traunreut'},
    {layout: 'th', heading: 'Ort:', content: 'Turnhalle Schnaitsee'},
    {layout: 'td', heading: '', content: 'Kirchensurerstraße 31'},
    {layout: 'td', heading: '', content: '83530 Schnaitsee'},
    {layout: 'th',
      heading: 'Zeitplan:',
      content: 'Zeitplan und Starterlisten werden am Freitag vor dem Turnier auf dieser Webseite online gestellt.'},
    {layout: 'th', heading: 'Kategorien:', content: 'Kata einzel: U6, U8, U10, U12, U14, U16, U18, +18, MK', neu: true},
    {layout: 'td', heading: '', content: 'Kata Team: U8, U10, U12, U14, U16, U18, +18, MK', neu: true},
    {layout: 'td', heading: '', content: 'Kumite einzel: U6, U10, U12, U14, U16, U18, +18, MK', neu: true},
    {layout: 'th',
      heading: 'Pools:',
      content: 'Mindestteilnehmerzahl sind drei Personen pro Gruppe. Sonst werden Kategorien zusammengelegt. ' +
      'Falls sich ausreichend Teilnehmer anmelden, teilen wir die Kategorien in Pools mit 3-5 Startern auf,' +
      'um allen möglichst viele Kämpfe zu ermöglichen.'},
    {layout: 'th',
      heading: 'Anfänger / Fortgeschrittene:',
      content: 'Außerdem teilen wir gegebenenfalls Anfänger und Fortgeschrittene in unterschiedliche Gruppen auf. ' +
      'Anfänger ist jeder, der noch keine Turniererfahrung bzw. Erfolge sammeln konnte oder aber sehr wenig Turniererfahrung hat. ' +
      'Fortgeschritten sind alle, die bereits Turniererfahrung und Erfolge sammeln konnten.'}
  ];

  regeln = [
    {layout: 'th', heading: 'Regelwerk:', content: 'Gemäß der Sportordnung des DKV e.V.'},
    {layout: 'th', heading: 'Schützer:', content: 'Faustschutz ist für alle Kämpfer Pflicht.'},
    {layout: 'td', heading: '', content: 'Fuß- und Zahnschutz ab U10.'},
    {layout: 'td', heading: '', content: 'Schützer müssen in blau und rot mitgenommen werden.'},
    {layout: 'th', heading: 'Kampfzeit:', content: 'U6-U10: 1 Minute'},
    {layout: 'td', heading: '', content: 'U12-U16: 1,5 Minuten'},
    {layout: 'td', heading: '', content: 'ab U18: 2 Minuten'},
    {layout: 'th', heading: 'Bewertungssystem:', content: 'Flaggensystem'}
  ];

  anmeldung = [
    {layout: 'th', heading: 'Bezahlung:', content: 'bis zum 14.10.2019 per Überweisung an: '},
    {layout: 'td', heading: '', content: 'Empfänger: 1. CKKS Traunreut'},
    {layout: 'td', heading: '', content: 'IBAN: DE67710520500008045429'},
    {layout: 'td', heading: '', content: 'BIC: BYLADEM1TST'},
    {layout: 'td', heading: '', content: 'Bank: Kreissparkasse Traunstein-Trostberg'},
  ];
}
