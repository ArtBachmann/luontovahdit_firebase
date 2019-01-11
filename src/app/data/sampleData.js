const sampleData = {
  activities: [
    {
      id: '1',
      title: 'XXX"Kyseisen paikan otsikko"',
      date: '2018-09-27T14:00:00',
      category: 'Hakku',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sollicitudin ligula eu leo tincidunt, quis scelerisque magna dapibus. Sed eget ipsum vel arcu vehicula ullamcorper.',
      city: 'Auran asemanseutu',
      cordinates: '60°39′N, 022°35′E',
      venue: "Aura (vanha nimi Prunkkala), Suomen kunta",
      hostedBy: 'Art',
      hostPhotoURL: 'https://randomuser.me/api/portraits/men/28.jpg',
      attendees: [
        {
          id: 'a',
          name: 'Richard',
          photoURL: 'https://randomuser.me/api/portraits/men/32.jpg'
        },
        {
          id: 'b',
          name: 'Jussi',
          photoURL: 'https://randomuser.me/api/portraits/men/29.jpg'
        }
      ]
    },
    {
      id: '2',
      title: 'YYY "   Kyseisen paikan otsikko"',
      date: '2018-08-28T18:00:00',
      category: 'Kaivos',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sollicitudin ligula eu leo tincidunt, quis scelerisque magna dapibus. Sed eget ipsum vel arcu vehicula ullamcorper.',
      city: 'Utsjoki',
      cordinates: '69°54′N, 027°01′E',
      venue: 'Utsjoki (pohjoissaameksi Ohcejohka) Suomen kunta',
      hostedBy: 'Aksel',
      hostPhotoURL: 'https://randomuser.me/api/portraits/men/22.jpg',
      attendees: [
        {
          id: 'b',
          name: 'Jaana',
          photoURL: 'https://randomuser.me/api/portraits/women/22.jpg'
        },
        {
          id: 'a',
          name: 'Mikko',
          photoURL: 'https://randomuser.me/api/portraits/men/20.jpg'
        }
      ]
    }
  ]
}

export default sampleData