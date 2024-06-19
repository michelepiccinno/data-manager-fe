const database = (data) => data;

export default database({
  tickets: [
    {
      id: 23122,
      object: 'Riavvio sistema',
      description: '',
      lastActivity: '2024-06-18T20:16:20',
      priority: 'normal',
      status: 'completo'
    },
    {
      id: 98513,
      object: 'Aggiornamento bloccato',
      description: '',
      lastActivity: '2024-06-11T20:11:32',
      priority: 'high',
      status: 'in lavorazione'
    },
    {
      id: 75855,
      object: 'Alert errore',
      description: '',
      lastActivity: '2024-05-01T20:03:50',
      priority: 'medium',
      status: 'preso in carico'
    },
    {
      id: 87255,
      object: 'Installazione bloccata',
      description: '',
      lastActivity: '2024-06-15T20:16:53',
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