

const INITIAL_STATE={
    sections:[
        {
            title: 'mobile',
            imageUrl: 'https://reviewbychoice.com/wp-content/uploads/2020/07/smart-phones.jpg',
            id: 1,
            linkUrl: 'shop/mobile'
          },
          {
            title: 'laptops',
            imageUrl: 'https://cdn.mos.cms.futurecdn.net/enZ95BdJbdw5hDeBKcMMFe-768-80.jpg',
            id: 2,
            linkUrl: 'shop/laptops'
          },
          {
            title: 'sports',
            imageUrl: 'https://www.abc.net.au/cm/rimage/12236578-16x9-large.jpg?v=2',
            id: 3,
            linkUrl: 'shop/sports'
          },
          {
            title: 'womens',
            imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
            size: 'large',
            id: 4,
            linkUrl: 'shop/womens'
          },
          {
            title: 'mens',
            imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
            size: 'large',
            id: 5,
            linkUrl: 'shop/mens'
          }
    ]
}

const direcoryReducer=(state=INITIAL_STATE, action) => {
    switch(action.type){
        default:
            return state;
    }

}

export default direcoryReducer; 