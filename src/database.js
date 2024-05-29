const database = (data) => data;

export default database({
  tickets: [
    {
      id: '23122',
      object: 'Riavvio sistema',
      description: '',
      lastActivity: '2d 4h 15m',
      priority: 'normal',
      status: 'completo'
    },
    {
      id: '98513',
      object: 'Aggiornamento bloccato',
      description: '',
      lastActivity: '8h 25m 16s',
      priority: 'high',
      status: 'in lavorazione'
    },
    {
      id: '75855',
      object: 'Alert errore',
      description: '',
      lastActivity: '5h 5m 25s',
      priority: 'medium',
      status: 'preso in carico'
    },
    {
      id: '87255',
      object: 'Installazione bloccata',
      description: '',
      lastActivity: '4h 9m 15s',
      priority: 'low',
      status: 'da assegnare'
    },
  ],
})