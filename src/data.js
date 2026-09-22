export const images = {
  hero: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1800&q=82',
  about: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=1200&q=80',
  gallery: [
    ['Coffee and quiet corners', 'https://images.unsplash.com/photo-1445116572660-236099ec97a0?auto=format&fit=crop&w=1000&q=80'],
    ['Fresh from the kitchen', 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=1000&q=80'],
    ['A little something sweet', 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=1000&q=80'],
    ['Slow mornings', 'https://images.unsplash.com/photo-1511081692775-05d0f180a065?auto=format&fit=crop&w=1000&q=80'],
    ['Good food, shared', 'https://images.unsplash.com/photo-1528712306091-ed0763094c98?auto=format&fit=crop&w=1000&q=80'],
    ['Evening at Social Bites', 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=1000&q=80']
  ]
};

export const categories = ['Coffee', 'Tea', 'Cold Beverages', 'Breakfast', 'Snacks', 'Sandwiches', 'Burgers', 'Pizza', 'Pasta', 'Desserts', 'Special Items'];

export const menuItems = [
  { id: 1, name: 'House Cappuccino', category: 'Coffee', price: 170, description: 'Smooth espresso, velvety milk and a little cocoa on top.', image: 'https://images.unsplash.com/photo-1534778101976-62847782c213?auto=format&fit=crop&w=700&q=80', vegetarian: true, bestseller: true },
  { id: 2, name: 'Classic Cold Coffee', category: 'Cold Beverages', price: 210, description: 'Chilled coffee, milk and just enough sweetness.', image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=700&q=80', vegetarian: true, bestseller: true },
  { id: 3, name: 'Avocado Toast', category: 'Breakfast', price: 290, description: 'Sourdough, smashed avocado, seeds and a squeeze of lime.', image: 'https://images.unsplash.com/photo-1541519227354-08fa5d50c44d?auto=format&fit=crop&w=700&q=80', vegetarian: true, newItem: true },
  { id: 4, name: 'Social Club Sandwich', category: 'Sandwiches', price: 360, description: 'Toasted bread layered with veggies, cheese and house sauce.', image: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=700&q=80', bestseller: true },
  { id: 5, name: 'Crispy Chicken Burger', category: 'Burgers', price: 390, description: 'Crispy chicken, lettuce, pickles and a creamy pepper mayo.', image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=700&q=80' },
  { id: 6, name: 'Garden Margherita', category: 'Pizza', price: 420, description: 'Tomato, basil, mozzarella and a bright olive oil finish.', image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=700&q=80', vegetarian: true },
  { id: 7, name: 'Creamy Mushroom Pasta', category: 'Pasta', price: 430, description: 'Silky cream sauce, roasted mushrooms and parmesan.', image: 'https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=700&q=80', vegetarian: true },
  { id: 8, name: 'Belgian Waffle', category: 'Desserts', price: 280, description: 'Warm waffle, berries, vanilla cream and maple drizzle.', image: 'https://images.unsplash.com/photo-1562376552-0d160a2f238d?auto=format&fit=crop&w=700&q=80', vegetarian: true, bestseller: true },
  { id: 9, name: 'Dark Chocolate Brownie', category: 'Desserts', price: 190, description: 'A fudgy, warm brownie made for sharing. Or not.', image: 'https://images.unsplash.com/photo-1564355808539-22fda35bed7e?auto=format&fit=crop&w=700&q=80', vegetarian: true },
  { id: 10, name: 'Berry Mint Cooler', category: 'Cold Beverages', price: 240, description: 'Berries, mint, lime and bubbles for a refreshing reset.', image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=700&q=80', vegetarian: true, newItem: true }
];

export const offers = [
  { id: 1, title: 'The Midweek Pick-Me-Up', description: 'Any regular coffee with a freshly baked cookie, Monday to Thursday.', image: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?auto=format&fit=crop&w=900&q=80', badge: 'Weekday treat', end_date: '2026-12-31' },
  { id: 2, title: 'Breakfast for Two', description: 'Two breakfast plates and two hot drinks, every day until noon.', image: 'https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?auto=format&fit=crop&w=900&q=80', badge: 'Morning favourite', end_date: '2026-10-31' }
];

export const reviews = [
  { id: 1, customer_name: 'Maya S.', rating: 5, comment: 'The kind of place where you plan to stay for one coffee and end up spending the afternoon. The pasta is lovely too.', review_date: '2026-08-18' },
  { id: 2, customer_name: 'Arjun R.', rating: 5, comment: 'Warm service, great music, and the cold coffee is exactly what I want on a sunny day.', review_date: '2026-07-29' },
  { id: 3, customer_name: 'Nisha K.', rating: 4, comment: 'A relaxed spot for catching up with friends. The waffle and cappuccino made our evening.', review_date: '2026-06-12' }
];

export const cafeInfo = {
  name: 'Social Bites', tagline: 'Good food. Good coffee. Good conversations.', description: 'A warm neighbourhood cafe for slow mornings, quick catch-ups, work breaks, and long evenings with people you like.', address: '24 Willow Street, Riverside Quarter', phone: '+91 98765 43210', email: 'hello@socialbites.cafe', mapUrl: 'https://maps.google.com', instagram: 'https://instagram.com', facebook: 'https://facebook.com'
};

export const openingHours = [
  ['Monday – Friday', '8:00 AM – 10:30 PM'],
  ['Saturday – Sunday', '9:00 AM – 11:00 PM']
];
