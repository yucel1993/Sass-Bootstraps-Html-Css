
// Nesneler


const carData = [
  {
    id: 1,
    make: 'Toyota',
    model: 'Camry',
    year: 2020,
    color: 'Silver',
    mileage: 25000,
    engine: {
      type: "V6",
      horsepower: 300,
      cylinders: 6
    }
  },
  {
    id: 2,
    make: 'Honda',
    model: 'Accord',
    year: 2019,
    color: 'White',
    mileage: 20000,
    engine: {
      type: "V4",
      horsepower: 140,
      cylinders: 4
    }
  },
  {
    id: 3,
    make: 'Ford',
    model: 'Mustang',
    year: 2018,
    color: 'Red',
    mileage: 15000,
    engine: {
      type: "V8",
      horsepower: 400,
      cylinders: 8
    }
  },
  {
    id: 4,
    make: 'Chevrolet',
    model: 'Camaro',
    year: 2017,
    color: 'Black',
    mileage: 10000,
     engine: {
      type: "V4",
      horsepower: 200,
      cylinders: 4
    }
  },
  {
    id: 5,
    make: 'Dodge',
    model: 'Challenger',
    year: 2016,
    color: 'Blue',
    mileage: 5000,
     engine: {
      type: "V6",
      horsepower: 250,
      cylinders: 6
    }
  },
  {
    id: 6,
    make: 'BMW',
    model: '3 Series',
    year: 2015,
    color: 'Silver',
    mileage: 35000,
     engine: {
      type: "V8",
      horsepower: 400,
      cylinders: 8
    }
  },
  {
    id: 7,
    make: 'Audi',
    model: 'A4',
    year: 2014,
    color: 'Black',
    mileage: 30000,
     engine: {
      type: "V4",
      horsepower: 220,
      cylinders: 4
    }
  },
  {
    id: 8,
    make: 'Mercedes-Benz',
    model: 'C-Class',
    year: 2013,
    color: 'White',
    mileage: 25000,
     engine: {
      type: "V6",
      horsepower: 280,
      cylinders: 6
    }
  },
  {
    id: 9,
    make: 'Volkswagen',
    model: 'Golf',
    year: 2012,
    color: 'Red',
    mileage: 20000,
     engine: {
      type: "V4",
      horsepower: 180,
      cylinders: 4
    }
  },
  {
    id: 10,
    make: 'Tesla',
    model: 'Model S',
    year: 2011,
    color: 'Silver',
    mileage: 15000,
     engine: {
      type: "V4",
      horsepower: 260,
      cylinders: 4
    }
  },
]


// 1- Rengi gümüş olan arabaları bir listeye ata.




// 2- 2015 yılından sonra üretilmiş arabaları bir listeye ata.




// 3- Arabaların ortalama kilometre değerini hesapla.





// 4- 8 silindirli araçları listele






// 5- Farklı uzunlukta olması muhtemel iki listeden İlki key'lerden, ikincisi ise Value'lardan oluşmaktadır. Yine key ve value'lardan oluşan bir obje döndüren bir fonksiyon yazınız. Yeterli value yoksa, kalan keylerin değeri null olmalıdır. Yeterli anahtar yoksa, değerlerin geri kalanını yok sayın.
// keys = ['a', 'b', 'c', 'd']
// values = [1, 2, 3]
// // createDict(keys, values) // returns {'a': 1, 'b': 2, 'c': 3, 'd': null}
// let myObjem={}
// let checker=(key,value)=>{

//     keys.forEach((x,y)=>{
//       if(y<value.length){
//         myObjem[x]=value[y]
//       }else{
//         myObjem[x]=null
//       }
//     })
//     return myObjem
// }

// console.log(checker(keys,values))



// 6- Bir obje içerisindeki key ve value'ları değiştirin. Yani key'ler value'lar olmalı ve value'lar key'ler olmalıdır.
// Örnek: {a: 1, b: 2, c: 3}  -->  {1: 'a', 2: 'b', 3: 'c'}
// Not: Eğer bir value birden fazla key'e sahipse, son key'i kullanın.


// let checker=(myObjem)=>{
//   const target={}
// let key=Object.keys(myObjem)
// let value=Object.values(myObjem)
// key.forEach((key,index)=>{

//   target[value[index]]=key
// })
// return target
// }

// console.log(checker({a: 1, b: 2, c: 3}))


// 7-  Size bazı dilleri ve verilen dillerdeki test sonuçlarınızı içeren bir dictionarj obj verilir. Test puanınızın en az 60 olduğu dillerin listesini sonuçların azalan sırasına göre döndürün.
// Not: puanlar her zaman benzersiz olacaktır (bu nedenle yinelenen değerler olmayacaktır)
// örnekler
// {"Java": 10, "Ruby": 80, "Python": 65}    -->  ["Ruby", "Python"]
// {"Hindi": 60, "Dutch" : 93, "Greek": 71}  -->  ["Dutch", "Greek", "Hindi"]
// {"C++": 50, "ASM": 10, "Haskell": 20}     -->  []
// let results = {"Java": 10, "Ruby": 80, "Python": 95}

// let checker=(objem)=>{

//   let arr=Object.entries(objem)
//   let target=arr.filter(([,value])=>value>=60).sort(([,valueA],[,valueB])=>valueB-valueA).map(([key])=>key)
//   return target
// }


// console.log(checker({"Hindi": 60, "Dutch" : 93, "Greek": 71}))

// 8-  Soru: Bir restoranın menüsündeki yemekleri temsil eden bir nesne dizisi olduğunu düşünelim. Her yemek nesnesi, yemek adı ve fiyatı gibi özelliklere sahiptir. Bu nesne dizisini kullanarak menüdeki her yemeğin adını ve fiyatını ekrana yazdıran bir JavaScript kodu nasıl yazılır?


// let meal = {
//   menu1: {
//     name: "Izgara",
//     price: 300
//   },
//   menu2: {
//     name: "Soup",
//     price: 400
//   },
//   menu3: {
//     name: "Doner",
//     price: 200
//   }
// };

// let checker=(main)=>{

// let dish=Object.values(main)


// return dish.forEach(x=>console.log(" Name of Dinner :",x.name,'\n',"Price of dinner :",x.price))

// }


// checker(meal)
// 9-  Bir alışveriş sepetindeki ürünlerin listesini içeren bir dizi verilmiştir. Her bir ürün bir nesne olarak temsil edilmektedir ve her bir ürünün adı, fiyatı ve stok durumu bilgilerini içermektedir. Aşağıdaki gibi bir dizi verilmiştir:

// Bu sepetin içindeki ürünlerin fiyatlarının toplamını bulmak için hangi array methodlarını kullanırsınız?



// 10  Her kitap bir nesne olarak temsil edilmekte ve kitap adı, yazarı ve yayın tarihi gibi özelliklere sahip. Bu kitap koleksiyonunu kullanarak yayın tarihi 1950'dan önce olan kitapların listesini eski tarihten başlayarak sıralayıp ekrana yazdırın?

// let books = [
//   {
//     title: "Jane Eyre",
//     author: "Charlotte Brontë",
//     publicationDate: "1847"
//   },
//   {
//     title: "To Kill a Mockingbird",
//     author: "Harper Lee",
//     publicationDate: "1960"
//   },
//   {
//     title: "1984",
//     author: "George Orwell",
//     publicationDate: "1949"
//   },
//   // Diğer kitaplar...
// ];

// let myBook=books.filter(x=>parseInt(x.publicationDate)<1950).sort((a,b)=>Number(b.publicationDate-a.publicationDate)).forEach(x=>console.log(x))



let numbers=[1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,3,3,3,2,2,2,1,1,1,1,4,4,4,4,4]

let counter={}

for(let i=0;i<numbers.length;i++){
  if(counter[numbers[i]]){
    counter[numbers[i]]++
  }else{
    counter[numbers[i]]=1
  }
}
let max=0
let myNumber=0
for(let key of Object.keys(counter)){
  if(counter[key]>max){
    max=counter[key]
    myNumber=key
  }
}

console.log("Lucky number :",myNumber)
console.log("Repeat number :",max)