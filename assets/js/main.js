/*
Milestone 1
Replica della grafica con la possibilità di avere messaggi scritti dall’utente (verdi) e dall’interlocutore (bianco) assegnando due classi CSS diverse
Visualizzazione dinamica della lista contatti: tramite la direttiva v-for, visualizzare nome e immagine di ogni contatto

Milestone 2
Visualizzazione dinamica dei messaggi: tramite la direttiva v-for, visualizzare tutti i messaggi relativi al contatto attivo all’interno del pannello della conversazione
Click sul contatto mostra la conversazione del contatto cliccato

Milestone 3
Aggiunta di un messaggio: l’utente scrive un testo nella parte bassa e digitando “enter” il testo viene aggiunto al thread sopra, come messaggio verde
Risposta dall’interlocutore: ad ogni inserimento di un messaggio, l’utente riceverà un “ok” come risposta, che apparirà dopo 1 secondo.

Milestone 4
Ricerca utenti: scrivendo qualcosa nell’input a sinistra, vengono visualizzati solo i contatti il cui nome contiene le lettere inserite (es, Marco, Matteo Martina -> Scrivo “mar” rimangono solo Marco e Martina)

Milestone 5
Cancella messaggio: cliccando sul messaggio appare un menu a tendina che permette di cancellare il messaggio selezionato

Visualizzazione ora e ultimo messaggio inviato/ricevuto nella lista dei contatti 
*/



const app = new Vue({
  el: '#app',
  data: {
    contacts: [{
        name: 'Michele',
        avatar: '_1',
        visible: true,
        messages: [{
            date: '10/01/2020 15:30:55',
            text: 'Hai portato a spasso il cane?',
            status: 'sent'
          },
          {
            date: '10/01/2020 15:50:00',
            text: 'Ricordati di dargli da mangiare',
            status: 'sent'
          },
          {
            date: '10/01/2020 16:15:22',
            text: 'Tutto fatto!',
            status: 'received'
          }
        ],
      },
      {
        name: 'Fabio',
        avatar: '_2',
        visible: true,
        messages: [{
            date: '20/03/2020 16:30:00',
            text: 'Ciao come stai?',
            status: 'sent'
          },
          {
            date: '20/03/2020 16:30:55',
            text: 'Bene grazie! Stasera ci vediamo?',
            status: 'received'
          },
          {
            date: '20/03/2020 16:35:00',
            text: 'Mi piacerebbe ma devo andare a fare la spesa.',
            status: 'sent'
          }
        ],
      },
      {
        name: 'Samuele',
        avatar: '_3',
        visible: true,
        messages: [{
            date: '28/03/2020 10:10:40',
            text: 'La Marianna va in campagna',
            status: 'received'
          },
          {
            date: '28/03/2020 10:20:10',
            text: 'Sicuro di non aver sbagliato chat?',
            status: 'sent'
          },
          {
            date: '28/03/2020 16:15:22',
            text: 'Ah scusa!',
            status: 'received'
          }
        ],
      },
      {
        name: 'Luisa',
        avatar: '_4',
        visible: true,
        messages: [{
            date: '10/01/2020 15:30:55',
            text: 'Lo sai che ha aperto una nuova pizzeria?',
            status: 'sent'
          },
          {
            date: '10/01/2020 15:50:00',
            text: 'Si, ma preferirei andare al cinema',
            status: 'received'
          }
        ],
      },
    ],
    contattoAttivo: 0,
    message: "",
    search: "",
    menuVisibility: false,
    date: false,
  },
  created() {
    // console.log(this.contacts[0].messages);
    // for (let i = 0; i < this.contacts[0].messages.length; i++) {
    //   const element = this.contacts[0].messages[i]
    //   // console.log(element);              
    // }
  },
  methods: {
    mostraContatto: function (index) {
      console.log(index);
      this.contattoAttivo = index
      console.log(this.contattoAttivo);
    },
    nuovoMessaggio() {
      // console.log(this.message);
      let newMessage = {
        date: '10/01/2020 15:30:55',
        text: this.message,
        status: 'sent',
      }
        // console.log(this.contacts);
        // alert('prova')
        this.contacts[this.contattoAttivo].messages.unshift(newMessage)
        this.message = ''

        let replyMessage = {
          date: '10/01/2020 15:30:55',
          text: 'ok',
          status: 'received'
        }
        
        // con Arrow Function prende il this all'interno di Vue
        setTimeout(() => {
          this.contacts[this.contattoAttivo].messages.unshift(replyMessage)
        }, 1000)  
    },
    cercaContatto: function () {
        // console.log('prova');
        console.log(this.search);
        this.contacts.forEach(contact => {
          // const mostraContatto = contact.name.includes(this.search)
          const mostraContatto = contact.name.toLowerCase().includes(this.search.toLowerCase())
          // console.log(mostraContatto);
          if (mostraContatto) {
            contact.visible = true
          } else {
            contact.visible = false
          }
        });
    },
    mostraMenu: function (index){
      console.log(index);
      if (this.menuVisibility === false) {
        this.menuVisibility = true
      } else if (this.menuVisibility === true) {
        this.menuVisibility = false
      }
    },
    // rimuoviMessaggio: function (activeMessage){
    //   console.log(activeMessage);
    //   console.log(messaggioAttivo);
    //   this.contacts.messages.splice(activeMessage, 1)
    // }

  }
}) 