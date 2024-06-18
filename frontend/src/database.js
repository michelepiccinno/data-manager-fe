const database = (data) => data;

export default database({
  tickets: [
    {
      id: 23122,
      object: 'Riavvio sistema',
      description: '',
      lastActivity: '14/06/2024, 15:14:13',
      priority: 'normal',
      status: 'completo'
    },
    {
      id: 98513,
      object: 'Aggiornamento bloccato',
      description: '',
      lastActivity: '10/06/2024, 08:14:13',
      priority: 'high',
      status: 'in lavorazione'
    },
    {
      id: 75855,
      object: 'Alert errore',
      description: '',
      lastActivity: '4/05/2024, 10:14:13',
      priority: 'medium',
      status: 'preso in carico'
    },
    {
      id: 87255,
      object: 'Installazione bloccata',
      description: '',
      lastActivity: '14/06/2024, 05:14:13',
      priority: 'low',
      status: 'da assegnare'
    },
  ],
  priorityList: [
    'low',
    'normal',
    'medium',
    'high'
  ],
  statusList: [
    'da assegnare',
    'preso in carico',
    'in lavorazione',
    'completo'
  ],
})