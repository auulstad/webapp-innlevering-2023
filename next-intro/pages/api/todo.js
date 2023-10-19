//Sjekk notis i README filen. 
const toDo = [
    {
      oppgaveId: 'Prioritering',
      toDoListItem: [
        {
          answer: 'Alternativ 1',
        },
      ],
    },
    {
        oppgaveId: 'Prioritering',
        toDoListItem: [
            {
                answer: 'Alternativ 1',
            },
        ],
    
    },
  ]

export default function handler(req, res) {
    if (req.method === 'POST') {
        const data = req.body

        if (!data?.oppgaveId) {
            res.status(400).json({success: false, error: 'Fyll inn nødvendig data'})
        } else {
            toDo.push(data)

            res.status(201).json({success: true, data: toDo})
        }
    }
    else if (req.method === 'PUT') 
    {
        res.status(405).end();
    }
    else {
        res.status(200).json({success:true, data: toDo})
    }
};
  

