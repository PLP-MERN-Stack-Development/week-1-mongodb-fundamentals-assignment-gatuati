db.books.find({ genre: "Fiction" })
{
  _id: ObjectId('6835eb7ab69d6f7790f252f8'),
  title: 'To Kill a Mockingbird',
  author: 'Harper Lee',
  genre: 'Fiction',
  published_year: 1960,
  price: 12.99,
  in_stock: true,
  pages: 336,
  publisher: 'J. B. Lippincott & Co.'
}
{
  _id: ObjectId('6835eb7ab69d6f7790f252fa'),
  title: 'The Great Gatsby',
  author: 'F. Scott Fitzgerald',
  genre: 'Fiction',
  published_year: 1925,
  price: 9.99,
  in_stock: true,
  pages: 180,
  publisher: "Charles Scribner's Sons"
}
{
  _id: ObjectId('6835eb7ab69d6f7790f252fd'),
  title: 'The Catcher in the Rye',
  author: 'J.D. Salinger',
  genre: 'Fiction',
  published_year: 1951,
  price: 8.99,
  in_stock: true,
  pages: 224,
  publisher: 'Little, Brown and Company'
}
{
  _id: ObjectId('6835eb7ab69d6f7790f25301'),
  title: 'The Alchemist',
  author: 'Paulo Coelho',
  genre: 'Fiction',
  published_year: 1988,
  price: 10.99,
  in_stock: true,
  pages: 197,
  publisher: 'HarperOne'
}
db.books.find({ published_year: { $gt: 1950 } })
{
  _id: ObjectId('6835eb7ab69d6f7790f252f8'),
  title: 'To Kill a Mockingbird',
  author: 'Harper Lee',
  genre: 'Fiction',
  published_year: 1960,
  price: 12.99,
  in_stock: true,
  pages: 336,
  publisher: 'J. B. Lippincott & Co.'
}
{
  _id: ObjectId('6835eb7ab69d6f7790f252fd'),
  title: 'The Catcher in the Rye',
  author: 'J.D. Salinger',
  genre: 'Fiction',
  published_year: 1951,
  price: 8.99,
  in_stock: true,
  pages: 224,
  publisher: 'Little, Brown and Company'
}
{
  _id: ObjectId('6835eb7ab69d6f7790f252ff'),
  title: 'The Lord of the Rings',
  author: 'J.R.R. Tolkien',
  genre: 'Fantasy',
  published_year: 1954,
  price: 19.99,
  in_stock: true,
  pages: 1178,
  publisher: 'Allen & Unwin'
}
{
  _id: ObjectId('6835eb7ab69d6f7790f25301'),
  title: 'The Alchemist',
  author: 'Paulo Coelho',
  genre: 'Fiction',
  published_year: 1988,
  price: 10.99,
  in_stock: true,
  pages: 197,
  publisher: 'HarperOne'
}
db.books.find({ author: "J.R.R. Tolkien" })
{
  _id: ObjectId('6835eb7ab69d6f7790f252ff'),
  title: 'The Lord of the Rings',
  author: 'J.R.R. Tolkien',
  genre: 'Fantasy',
  published_year: 1954,
  price: 19.99,
  in_stock: true,
  pages: 1178,
  publisher: 'Allen & Unwin'
}
{
  _id: ObjectId('6835eb7ab69d6f7790f252fc'),
  title: 'The Hobbit',
  author: 'J.R.R. Tolkien',
  genre: 'Fantasy',
  published_year: 1937,
  price: 15.99,
  in_stock: true,
  pages: 310,
  publisher: 'George Allen & Unwin'
}
db.books.updateOne(
  { title: "The Hobbit" },
  { $set: { price: 15.99 } }
)
{
  acknowledged: true,
  insertedId: null,
  matchedCount: 1,
  modifiedCount: 0,
  upsertedCount: 0
}
db.books.deleteOne({ title: "Animal Farm" })
{
  acknowledged: true,
  deletedCount: 0
}
db.books.find(
{ 
    in_stock: true,
    published_year: { $gt: 2010 }
  },
  { 
    title: 1, 
    author: 1, 
    price: 1,
    _id: 0  // Exclude the default _id field
  }
)
db.books.find(
  { 
    in_stock: true,
    published_year: { $gt: 2010 }
  },
  { 
    title: 1, 
    author: 1, 
    price: 1,
  }
)
db.books.find(
  {},
  { 
    title: 1, 
    author: 1, 
    price: 1,
    _id: 0
  }
).sort({ price: 1 })  // or -1 for descending
{
  title: 'Pride and Prejudice',
  author: 'Jane Austen',
  price: 7.99
}
{
  title: 'The Catcher in the Rye',
  author: 'J.D. Salinger',
  price: 8.99
}
{
  title: 'The Great Gatsby',
  author: 'F. Scott Fitzgerald',
  price: 9.99
}
{
  title: 'Wuthering Heights',
  author: 'Emily Brontë',
  price: 9.99
}
{
  title: '1984',
  author: 'George Orwell',
  price: 10.99
}
{
  title: 'The Alchemist',
  author: 'Paulo Coelho',
  price: 10.99
}
{
  title: 'Brave New World',
  author: 'Aldous Huxley',
  price: 11.5
}
{
  title: 'Moby Dick',
  author: 'Herman Melville',
  price: 12.5
}
{
  title: 'To Kill a Mockingbird',
  author: 'Harper Lee',
  price: 12.99
}
{
  title: 'The Hobbit',
  author: 'J.R.R. Tolkien',
  price: 15.99
}
{
  title: 'The Lord of the Rings',
  author: 'J.R.R. Tolkien',
  price: 19.99
}
db.books.find().sort({ price: 1 })
{
  _id: ObjectId('6835eb7ab69d6f7790f252fe'),
  title: 'Pride and Prejudice',
  author: 'Jane Austen',
  genre: 'Romance',
  published_year: 1813,
  price: 7.99,
  in_stock: true,
  pages: 432,
  publisher: 'T. Egerton, Whitehall'
}
{
  _id: ObjectId('6835eb7ab69d6f7790f252fd'),
  title: 'The Catcher in the Rye',
  author: 'J.D. Salinger',
  genre: 'Fiction',
  published_year: 1951,
  price: 8.99,
  in_stock: true,
  pages: 224,
  publisher: 'Little, Brown and Company'
}
{
  _id: ObjectId('6835eb7ab69d6f7790f252fa'),
  title: 'The Great Gatsby',
  author: 'F. Scott Fitzgerald',
  genre: 'Fiction',
  published_year: 1925,
  price: 9.99,
  in_stock: true,
  pages: 180,
  publisher: "Charles Scribner's Sons"
}
{
  _id: ObjectId('6835eb7ab69d6f7790f25303'),
  title: 'Wuthering Heights',
  author: 'Emily Brontë',
  genre: 'Gothic Fiction',
  published_year: 1847,
  price: 9.99,
  in_stock: true,
  pages: 342,
  publisher: 'Thomas Cautley Newby'
}
{
  _id: ObjectId('6835eb7ab69d6f7790f252f9'),
  title: '1984',
  author: 'George Orwell',
  genre: 'Dystopian',
  published_year: 1949,
  price: 10.99,
  in_stock: true,
  pages: 328,
  publisher: 'Secker & Warburg'
}
{
  _id: ObjectId('6835eb7ab69d6f7790f25301'),
  title: 'The Alchemist',
  author: 'Paulo Coelho',
  genre: 'Fiction',
  published_year: 1988,
  price: 10.99,
  in_stock: true,
  pages: 197,
  publisher: 'HarperOne'
}{
  _id: ObjectId('6835eb7ab69d6f7790f252fb'),
  title: 'Brave New World',
  author: 'Aldous Huxley',
  genre: 'Dystopian',
  published_year: 1932,
  price: 11.5,
  in_stock: false,
  pages: 311,
  publisher: 'Chatto & Windus'
}
{
  _id: ObjectId('6835eb7ab69d6f7790f25302'),
  title: 'Moby Dick',
  author: 'Herman Melville',
  genre: 'Adventure',
  published_year: 1851,
  price: 12.5,
  in_stock: false,
  pages: 635,
  publisher: 'Harper & Brothers'
}
{
  _id: ObjectId('6835eb7ab69d6f7790f252f8'),
  title: 'To Kill a Mockingbird',
  author: 'Harper Lee',
  genre: 'Fiction',
  published_year: 1960,
  price: 12.99,
  in_stock: true,
  pages: 336,
  publisher: 'J. B. Lippincott & Co.'
}
{
  _id: ObjectId('6835eb7ab69d6f7790f252fc'),
  title: 'The Hobbit',
  author: 'J.R.R. Tolkien',
  genre: 'Fantasy',
  published_year: 1937,
  price: 15.99,
  in_stock: true,
  pages: 310,
  publisher: 'George Allen & Unwin'
}
{
  _id: ObjectId('6835eb7ab69d6f7790f252ff'),
  title: 'The Lord of the Rings',
  author: 'J.R.R. Tolkien',
  genre: 'Fantasy',
  published_year: 1954,
  price: 19.99,
  in_stock: true,
  pages: 1178,
  publisher: 'Allen & Unwin'
}
db.books.find().sort({ price: -1 })
{
  _id: ObjectId('6835eb7ab69d6f7790f252ff'),
  title: 'The Lord of the Rings',
  author: 'J.R.R. Tolkien',
  genre: 'Fantasy',
  published_year: 1954,
  price: 19.99,
  in_stock: true,
  pages: 1178,
  publisher: 'Allen & Unwin'
}
{
  _id: ObjectId('6835eb7ab69d6f7790f252fc'),
  title: 'The Hobbit',
  author: 'J.R.R. Tolkien',
  genre: 'Fantasy',
  published_year: 1937,
  price: 15.99,
  in_stock: true,
  pages: 310,
  publisher: 'George Allen & Unwin'
}
{
  _id: ObjectId('6835eb7ab69d6f7790f252f8'),
  title: 'To Kill a Mockingbird',
  author: 'Harper Lee',
  genre: 'Fiction',
  published_year: 1960,
  price: 12.99,
  in_stock: true,
  pages: 336,
  publisher: 'J. B. Lippincott & Co.'
}
{
  _id: ObjectId('6835eb7ab69d6f7790f25302'),
  title: 'Moby Dick',
  author: 'Herman Melville',
  genre: 'Adventure',
  published_year: 1851,
  price: 12.5,
  in_stock: false,
  pages: 635,
  publisher: 'Harper & Brothers'
}
{
  _id: ObjectId('6835eb7ab69d6f7790f252fb'),
  title: 'Brave New World',
  author: 'Aldous Huxley',
  genre: 'Dystopian',
  published_year: 1932,
  price: 11.5,
  in_stock: false,
  pages: 311,
  publisher: 'Chatto & Windus'
}
{
  _id: ObjectId('6835eb7ab69d6f7790f252f9'),
  title: '1984',
  author: 'George Orwell',
  genre: 'Dystopian',
  published_year: 1949,
  price: 10.99,
  in_stock: true,
  pages: 328,
  publisher: 'Secker & Warburg'
}
{
  _id: ObjectId('6835eb7ab69d6f7790f25301'),
  title: 'The Alchemist',
  author: 'Paulo Coelho',
  genre: 'Fiction',
  published_year: 1988,
  price: 10.99,
  in_stock: true,
  pages: 197,
  publisher: 'HarperOne'
}
{
  _id: ObjectId('6835eb7ab69d6f7790f252fa'),
  title: 'The Great Gatsby',
  author: 'F. Scott Fitzgerald',
  genre: 'Fiction',
  published_year: 1925,
  price: 9.99,
  in_stock: true,
  pages: 180,
  publisher: "Charles Scribner's Sons"
}
{
  _id: ObjectId('6835eb7ab69d6f7790f25303'),
  title: 'Wuthering Heights',
  author: 'Emily Brontë',
  genre: 'Gothic Fiction',
  published_year: 1847,
  price: 9.99,
  in_stock: true,
  pages: 342,
  publisher: 'Thomas Cautley Newby'
}
{
  _id: ObjectId('6835eb7ab69d6f7790f252fd'),
  title: 'The Catcher in the Rye',
  author: 'J.D. Salinger',
  genre: 'Fiction',
  published_year: 1951,
  price: 8.99,
  in_stock: true,
  pages: 224,
  publisher: 'Little, Brown and Company'
}
{
  _id: ObjectId('6835eb7ab69d6f7790f252fe'),
  title: 'Pride and Prejudice',
  author: 'Jane Austen',
  genre: 'Romance',
  published_year: 1813,
  price: 7.99,
  in_stock: true,
  pages: 432,
  publisher: 'T. Egerton, Whitehall'
}
db.books.find().limit(5).skip(0)
{
  _id: ObjectId('6835eb7ab69d6f7790f252f8'),
  title: 'To Kill a Mockingbird',
  author: 'Harper Lee',
  genre: 'Fiction',
  published_year: 1960,
  price: 12.99,
  in_stock: true,
  pages: 336,
  publisher: 'J. B. Lippincott & Co.'
}
{
  _id: ObjectId('6835eb7ab69d6f7790f252f9'),
  title: '1984',
  author: 'George Orwell',
  genre: 'Dystopian',
  published_year: 1949,
  price: 10.99,
  in_stock: true,
  pages: 328,
  publisher: 'Secker & Warburg'
}
{
  _id: ObjectId('6835eb7ab69d6f7790f252fa'),
  title: 'The Great Gatsby',
  author: 'F. Scott Fitzgerald',
  genre: 'Fiction',
  published_year: 1925,
  price: 9.99,
  in_stock: true,
  pages: 180,
  publisher: "Charles Scribner's Sons"
}
{
  _id: ObjectId('6835eb7ab69d6f7790f252fb'),
  title: 'Brave New World',
  author: 'Aldous Huxley',
  genre: 'Dystopian',
  published_year: 1932,
  price: 11.5,
  in_stock: false,
  pages: 311,
  publisher: 'Chatto & Windus'
}
{
  _id: ObjectId('6835eb7ab69d6f7790f252fc'),
  title: 'The Hobbit',
  author: 'J.R.R. Tolkien',
  genre: 'Fantasy',
  published_year: 1937,
  price: 15.99,
  in_stock: true,
  pages: 310,
  publisher: 'George Allen & Unwin'
}
db.books.find().limit(5).skip(5)
{
  _id: ObjectId('6835eb7ab69d6f7790f252fd'),
  title: 'The Catcher in the Rye',
  author: 'J.D. Salinger',
  genre: 'Fiction',
  published_year: 1951,
  price: 8.99,
  in_stock: true,
  pages: 224,
  publisher: 'Little, Brown and Company'
}
{
  _id: ObjectId('6835eb7ab69d6f7790f252fe'),
  title: 'Pride and Prejudice',
  author: 'Jane Austen',
  genre: 'Romance',
  published_year: 1813,
  price: 7.99,
  in_stock: true,
  pages: 432,
  publisher: 'T. Egerton, Whitehall'
}
{
  _id: ObjectId('6835eb7ab69d6f7790f252ff'),
  title: 'The Lord of the Rings',
  author: 'J.R.R. Tolkien',
  genre: 'Fantasy',
  published_year: 1954,
  price: 19.99,
  in_stock: true,
  pages: 1178,
  publisher: 'Allen & Unwin'
}
{
  _id: ObjectId('6835eb7ab69d6f7790f25301'),
  title: 'The Alchemist',
  author: 'Paulo Coelho',
  genre: 'Fiction',
  published_year: 1988,
  price: 10.99,
  in_stock: true,
  pages: 197,
  publisher: 'HarperOne'
}
{
  _id: ObjectId('6835eb7ab69d6f7790f25302'),
  title: 'Moby Dick',
  author: 'Herman Melville',
  genre: 'Adventure',
  published_year: 1851,
  price: 12.5,
  in_stock: false,
  pages: 635,
  publisher: 'Harper & Brothers'
}
db.books.find().limit(5).skip(10)
{
  _id: ObjectId('6835eb7ab69d6f7790f25303'),
  title: 'Wuthering Heights',
  author: 'Emily Brontë',
  genre: 'Gothic Fiction',
  published_year: 1847,
  price: 9.99,
  in_stock: true,
  pages: 342,
  publisher: 'Thomas Cautley Newby'
}
db.books.aggregate([
  {
    $group: {
      _id: "$genre",
      averagePrice: { $avg: "$price" },
      count: { $sum: 1 }
    }
  },
  {
    $project: {
      genre: "$_id",
      averagePrice: { $round: ["$averagePrice", 2] }, // Round to 2 decimal places
      count: 1,
      _id: 0
    }
  },
  {
    $sort: { averagePrice: -1 } // Sort by highest average price first
  }
])
[{
  "_id": {
    "$oid": "6835eb7ab69d6f7790f252f8"
  },
  "title": "To Kill a Mockingbird",
  "author": "Harper Lee",
  "genre": "Fiction",
  "published_year": 1960,
  "price": 12.99,
  "in_stock": true,
  "pages": 336,
  "publisher": "J. B. Lippincott & Co."
},
{
  "_id": {
    "$oid": "6835eb7ab69d6f7790f252f9"
  },
  "title": "1984",
  "author": "George Orwell",
  "genre": "Dystopian",
  "published_year": 1949,
  "price": 10.99,
  "in_stock": true,
  "pages": 328,
  "publisher": "Secker & Warburg"
},
{
  "_id": {
    "$oid": "6835eb7ab69d6f7790f252fa"
  },
  "title": "The Great Gatsby",
  "author": "F. Scott Fitzgerald",
  "genre": "Fiction",
  "published_year": 1925,
  "price": 9.99,
  "in_stock": true,
  "pages": 180,
  "publisher": "Charles Scribner's Sons"
},
{
  "_id": {
    "$oid": "6835eb7ab69d6f7790f252fb"
  },
  "title": "Brave New World",
  "author": "Aldous Huxley",
  "genre": "Dystopian",
  "published_year": 1932,
  "price": 11.5,
  "in_stock": false,
  "pages": 311,
  "publisher": "Chatto & Windus"
},
{
  "_id": {
    "$oid": "6835eb7ab69d6f7790f252fc"
  },
  "title": "The Hobbit",
  "author": "J.R.R. Tolkien",
  "genre": "Fantasy",
  "published_year": 1937,
  "price": 15.99,
  "in_stock": true,
  "pages": 310,
  "publisher": "George Allen & Unwin"
},
{
  "_id": {
    "$oid": "6835eb7ab69d6f7790f252fd"
  },
  "title": "The Catcher in the Rye",
  "author": "J.D. Salinger",
  "genre": "Fiction",
  "published_year": 1951,
  "price": 8.99,
  "in_stock": true,
  "pages": 224,
  "publisher": "Little, Brown and Company"
},
{
  "_id": {
    "$oid": "6835eb7ab69d6f7790f252fe"
  },
  "title": "Pride and Prejudice",
  "author": "Jane Austen",
  "genre": "Romance",
  "published_year": 1813,
  "price": 7.99,
  "in_stock": true,
  "pages": 432,
  "publisher": "T. Egerton, Whitehall"
},
{
  "_id": {
    "$oid": "6835eb7ab69d6f7790f252ff"
  },
  "title": "The Lord of the Rings",
  "author": "J.R.R. Tolkien",
  "genre": "Fantasy",
  "published_year": 1954,
  "price": 19.99,
  "in_stock": true,
  "pages": 1178,
  "publisher": "Allen & Unwin"
},
{
  "_id": {
    "$oid": "6835eb7ab69d6f7790f25301"
  },
  "title": "The Alchemist",
  "author": "Paulo Coelho",
  "genre": "Fiction",
  "published_year": 1988,
  "price": 10.99,
  "in_stock": true,
  "pages": 197,
  "publisher": "HarperOne"
},
{
  "_id": {
    "$oid": "6835eb7ab69d6f7790f25302"
  },
  "title": "Moby Dick",
  "author": "Herman Melville",
  "genre": "Adventure",
  "published_year": 1851,
  "price": 12.5,
  "in_stock": false,
  "pages": 635,
  "publisher": "Harper & Brothers"
},
{
  "_id": {
    "$oid": "6835eb7ab69d6f7790f25303"
  },
  "title": "Wuthering Heights",
  "author": "Emily Brontë",
  "genre": "Gothic Fiction",
  "published_year": 1847,
  "price": 9.99,
  "in_stock": true,
  "pages": 342,
  "publisher": "Thomas Cautley Newby"
}]
db.books.createIndex({ title: 1 });

// Verify index was created
db.books.getIndexes();[
  { v: 2, key: { _id: 1 }, name: '_id_' },
  { v: 2, key: { title: 1 }, name: 'title_1' },
  {
    v: 2,
    key: { author: 1, published_year: -1 },
    name: 'author_1_published_year_-1'
  }
]
db.books.find({ 
  author: "J.R.R. Tolkien", 
  published_year: { $gt: 1940 } 
}).explain("executionStats");
{
  explainVersion: '1',
  queryPlanner: {
    namespace: 'plp_database.books',
    parsedQuery: {
      '$and': [
        {
          author: {
            '$eq': 'J.R.R. Tolkien'
          }
        },
        {
          published_year: {
            '$gt': 1940
          }
        }
      ]
    },
    indexFilterSet: false,
    queryHash: '61193311',
    planCacheShapeHash: '61193311',
    planCacheKey: '65148015',
    optimizationTimeMillis: 0,
    maxIndexedOrSolutionsReached: false,
    maxIndexedAndSolutionsReached: false,
    maxScansToExplodeReached: false,
    prunedSimilarIndexes: false,
    winningPlan: {
      isCached: false,
      stage: 'FETCH',
      inputStage: {
        stage: 'IXSCAN',
        keyPattern: {
          author: 1,
          published_year: -1
        },
        indexName: 'author_1_published_year_-1',
        isMultiKey: false,
        multiKeyPaths: {
          author: [],
          published_year: []
        },
        isUnique: false,
        isSparse: false,
        isPartial: false,
        indexVersion: 2,
        direction: 'forward',
        indexBounds: {
          author: [
            '["J.R.R. Tolkien", "J.R.R. Tolkien"]'
          ],
          published_year: [
            '[inf.0, 1940)'
          ]
        }
      }
    },
    rejectedPlans: []
  },
  executionStats: {
    executionSuccess: true,
    nReturned: 1,
    executionTimeMillis: 0,
    totalKeysExamined: 1,
    totalDocsExamined: 1,
    executionStages: {
      isCached: false,
      stage: 'FETCH',
      nReturned: 1,
      executionTimeMillisEstimate: 0,
      works: 2,
      advanced: 1,
      needTime: 0,
      needYield: 0,
      saveState: 0,
      restoreState: 0,
      isEOF: 1,
      docsExamined: 1,
      alreadyHasObj: 0,
      inputStage: {
        stage: 'IXSCAN',
        nReturned: 1,
        executionTimeMillisEstimate: 0,
        works: 2,
        advanced: 1,
        needTime: 0,
        needYield: 0,
        saveState: 0,
        restoreState: 0,
        isEOF: 1,
        keyPattern: {
          author: 1,
          published_year: -1
        },
        indexName: 'author_1_published_year_-1',
        isMultiKey: false,
        multiKeyPaths: {
          author: [],
          published_year: []
        },
        isUnique: false,
        isSparse: false,
        isPartial: false,
        indexVersion: 2,
        direction: 'forward',
        indexBounds: {
          author: [
            '["J.R.R. Tolkien", "J.R.R. Tolkien"]'
          ],
          published_year: [
            '[inf.0, 1940)'
          ]
        },
        keysExamined: 1,
        seeks: 1,
        dupsTested: 0,
        dupsDropped: 0
      }
    }
  },
  queryShapeHash: '422724C38C19B2D9654D3F1FAA974C7BD754691ACB88004FD628838C576C04B5',
  command: {
    find: 'books',
    filter: {
      author: 'J.R.R. Tolkien',
      published_year: {
        '$gt': 1940
      }
    },
    '$db': 'plp_database'
  },
  serverInfo: {
    host: 'DESKTOP-S61RF8S',
    port: 27017,
    version: '8.0.9',
    gitVersion: 'f882ef816d531ecfbb593843e4c554fda90ca416'
  },
  serverParameters: {
    internalQueryFacetBufferSizeBytes: 104857600,
    internalQueryFacetMaxOutputDocSizeBytes: 104857600,
    internalLookupStageIntermediateDocumentMaxSizeBytes: 104857600,
    internalDocumentSourceGroupMaxMemoryBytes: 104857600,
    internalQueryMaxBlockingSortMemoryUsageBytes: 104857600,
    internalQueryProhibitBlockingMergeOnMongoS: 0,
    internalQueryMaxAddToSetBytes: 104857600,
    internalDocumentSourceSetWindowFieldsMaxMemoryBytes: 104857600,
    internalQueryFrameworkControl: 'trySbeRestricted',
    internalQueryPlannerIgnoreIndexWithCollationForRegex: 1
  },
  ok: 1
}