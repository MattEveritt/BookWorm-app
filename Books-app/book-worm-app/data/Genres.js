import Genre from '../models/Genre';
import Book from '../models/Book';

export const GENRES = [
  new Genre('g1', 'Food', '#ada7fc'),
  new Genre('g2', 'History', '#ec6f86'),
  new Genre('g3', 'Memoir', '#ffdd75'),
  new Genre('g4', 'Politics', '#9ff3c3'),
  new Genre('g5', 'Self-Help', '#4573e7'),
  new Genre('g6', 'Young Adult', '#d187ef'),
  new Genre('g7', 'Childrens Books', '#fe816d'),
  new Genre('g8', 'Crime Thriller', '#daff75'),
  new Genre('g9', 'Literary Fiction', '#6aecf4'),
  new Genre('g10', 'Science Fiction', '#7e69ff')
];

export const BOOKS = [
  new Book(
    'b1',
    'g1',
    'hello sadfasdgfasdgasdfasdfasdf',
    'Wilbur Smith',
    'https://kirja.s3.amazonaws.com/prod/9789510433522_frontcover_final_original.jpg',
    '5 star',
    'From directly overhead he heard the loud flapping of heavy wings and another vulture rose from beyond the screen of banana plants. Leon felt the chill of dread. If the brutes are settling that means there\'s meat lying out there, dead meat.',
    'https://www.amazon.com/Assegai-Courtney-Trilogy-Book-ebook/dp/B078B9C9H8',
    'https://www.amazon.com/Assegai-Courtney-Trilogy-Book-ebook/dp/B078B9C9H8'
  ),

  new Book(
    'b2',
    'g1',
    'Hullo',
    'Wilbur Smith',
    'https://kirja.s3.amazonaws.com/prod/9789510433522_frontcover_final_original.jpg',
    '5 star',
    'From directly overhead he heard the loud flapping of heavy wings and another vulture rose from beyond the screen of banana plants. Leon felt the chill of dread. If the brutes are settling that means there\'s meat lying out there, dead meat.',
    'https://www.amazon.com/Assegai-Courtney-Trilogy-Book-ebook/dp/B078B9C9H8',
    'https://www.amazon.com/Assegai-Courtney-Trilogy-Book-ebook/dp/B078B9C9H8'
  ),

  new Book(
    'b3',
    'g1',
    'hello',
    'Wilbur Smith',
    'https://kirja.s3.amazonaws.com/prod/9789510433522_frontcover_final_original.jpg',
    '5 star',
    'From directly overhead he heard the loud flapping of heavy wings and another vulture rose from beyond the screen of banana plants. Leon felt the chill of dread. If the brutes are settling that means there\'s meat lying out there, dead meat.',
    'https://www.amazon.com/Assegai-Courtney-Trilogy-Book-ebook/dp/B078B9C9H8',
    'https://www.amazon.com/Assegai-Courtney-Trilogy-Book-ebook/dp/B078B9C9H8'
  ),

  new Book(
    'b4',
    'g1',
    'hello',
    'Wilbur Smith',
    'https://kirja.s3.amazonaws.com/prod/9789510433522_frontcover_final_original.jpg',
    '5 star',
    'From directly overhead he heard the loud flapping of heavy wings and another vulture rose from beyond the screen of banana plants. Leon felt the chill of dread. If the brutes are settling that means there\'s meat lying out there, dead meat.',
    'https://www.amazon.com/Assegai-Courtney-Trilogy-Book-ebook/dp/B078B9C9H8',
    'https://www.amazon.com/Assegai-Courtney-Trilogy-Book-ebook/dp/B078B9C9H8'
  ),

  new Book(
    'b5',
    'g1',
    'hello',
    'Wilbur Smith',
    'https://kirja.s3.amazonaws.com/prod/9789510433522_frontcover_final_original.jpg',
    '5 star',
    'From directly overhead he heard the loud flapping of heavy wings and another vulture rose from beyond the screen of banana plants. Leon felt the chill of dread. If the brutes are settling that means there\'s meat lying out there, dead meat.',
    'https://www.amazon.com/Assegai-Courtney-Trilogy-Book-ebook/dp/B078B9C9H8',
    'https://www.amazon.com/Assegai-Courtney-Trilogy-Book-ebook/dp/B078B9C9H8'
  ),

  new Book(
    'b6',
    'g1',
    'hello',
    'Wilbur Smith',
    'https://kirja.s3.amazonaws.com/prod/9789510433522_frontcover_final_original.jpg',
    '5 star',
    'From directly overhead he heard the loud flapping of heavy wings and another vulture rose from beyond the screen of banana plants. Leon felt the chill of dread. If the brutes are settling that means there\'s meat lying out there, dead meat.',
    'https://www.amazon.com/Assegai-Courtney-Trilogy-Book-ebook/dp/B078B9C9H8',
    'https://www.amazon.com/Assegai-Courtney-Trilogy-Book-ebook/dp/B078B9C9H8'
  ),

  new Book(
    'b7',
    'g7',
    'hello',
    'Wilbur Smith',
    'https://kirja.s3.amazonaws.com/prod/9789510433522_frontcover_final_original.jpg',
    '5 star',
    'From directly overhead he heard the loud flapping of heavy wings and another vulture rose from beyond the screen of banana plants. Leon felt the chill of dread. If the brutes are settling that means there\'s meat lying out there, dead meat.',
    'https://www.amazon.com/Assegai-Courtney-Trilogy-Book-ebook/dp/B078B9C9H8',
    'https://www.amazon.com/Assegai-Courtney-Trilogy-Book-ebook/dp/B078B9C9H8'
  ),

  new Book(
    'b8',
    'g8',
    'hello',
    'Wilbur Smith',
    'https://kirja.s3.amazonaws.com/prod/9789510433522_frontcover_final_original.jpg',
    '5 star',
    'From directly overhead he heard the loud flapping of heavy wings and another vulture rose from beyond the screen of banana plants. Leon felt the chill of dread. If the brutes are settling that means there\'s meat lying out there, dead meat.',
    'https://www.amazon.com/Assegai-Courtney-Trilogy-Book-ebook/dp/B078B9C9H8',
    'https://www.amazon.com/Assegai-Courtney-Trilogy-Book-ebook/dp/B078B9C9H8'
  ),

  new Book(
    'b9',
    'g9',
    'hello sadfasdgfasdgasdfasdfasdf',
    'Wilbur Smith',
    'https://kirja.s3.amazonaws.com/prod/9789510433522_frontcover_final_original.jpg',
    '5 star',
    'From directly overhead he heard the loud flapping of heavy wings and another vulture rose from beyond the screen of banana plants. Leon felt the chill of dread. If the brutes are settling that means there\'s meat lying out there, dead meat.',
    'https://www.amazon.com/Assegai-Courtney-Trilogy-Book-ebook/dp/B078B9C9H8',
    'https://www.amazon.com/Assegai-Courtney-Trilogy-Book-ebook/dp/B078B9C9H8'
  ),
]