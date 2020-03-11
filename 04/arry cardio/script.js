const inventors = [
    { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
    { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
    { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
    { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
    { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
    { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
    { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
    { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
    { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
    { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
    { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
    { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
  ];

  const people = ['Beck, Glenn', 'Becker, Carl', 'Beckett, Samuel', 'Beddoes, Mick', 'Beecher, Henry', 'Beethoven, Ludwig', 'Begin, Menachem', 'Belloc, Hilaire', 'Bellow, Saul', 'Benchley, Robert', 'Benenson, Peter', 'Ben-Gurion, David', 'Benjamin, Walter', 'Benn, Tony', 'Bennington, Chester', 'Benson, Leana', 'Bent, Silas', 'Bentsen, Lloyd', 'Berger, Ric', 'Bergman, Ingmar', 'Berio, Luciano', 'Berle, Milton', 'Berlin, Irving', 'Berne, Eric', 'Bernhard, Sandra', 'Berra, Yogi', 'Berry, Halle', 'Berry, Wendell', 'Bethea, Erin', 'Bevan, Aneurin', 'Bevel, Ken', 'Biden, Joseph', 'Bierce, Ambrose', 'Biko, Steve', 'Billings, Josh', 'Biondo, Frank', 'Birrell, Augustine', 'Black, Elk', 'Blair, Robert', 'Blair, Tony', 'Blake, William'];

//   1.
  const result = inventors.filter(obj => obj.year > 1500 && obj.year < 1600);
  console.log(result);

//  2.
  const full_name = inventors.map(item => {
    return {first: item.first, last: item.last}
  });
  console.log(full_name);

//  3.
  const new_order = inventors.sort(function order(a, b) {
    if(a.year > b.year){
      return 1
    }else{
      return -1
      }
  });
  console.log(new_order);

//  4.
  const live = inventors.reduce((lives, inventor)=>{
    return lives +(inventor.passed - inventor.year);
  },0);
  console.log(live);

//  5. 
  const longest_life = inventors.sort(function order(a, b) {
    if(a.passed - a.year < b.passed -b.year){
      return 1
    }else{
      return -1
      }
  });
  console.log(longest_life);

//  6.
  

//  7.
  const order_by_famliy_name = people.sort(function order(a, b) {
    const [al , af]= a.split(" , ");
    const [bl , bf]= b.split(" , ");
    if(al > bl){
      return 1
    }else{
      return -1
      }
  });
  console.log(order_by_famliy_name);

//  8. 
  const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck' ];

  const or = data.reduce(function (data , item) {
    if(!data[item]){
      data[item]=0;
    }
    data[item]++;
    return data;
  }, {});
  console.log(or);