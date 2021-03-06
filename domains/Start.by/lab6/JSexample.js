function str(){
    let user = {
        name: "John",
        age: 30,
        fruits: ["Яблоко", "Апельсин", "Слива"],
        number: [91,52,13,74],
      //Шаблонные литералы заключены в обратные кавычки (` `)Интерполяция выражений
        toString() {  return `{name: "${this.name}", age: ${this.age}, fruits:[${this.fruits[0]},${this.fruits[1]},${this.fruits[2]}],
                                numer:[${this.number[0]},${this.number[1]},${this.number[2]},${this.number[3]}]}`;  }
      };

      //JSON.stringify для преобразования объектов в JSON строку.
      //JSON.parse для преобразования JSON обратно в объект.
      let jsonUser = JSON.stringify(user);
      alert(user); // {name: "John", age: 30, fruits:[Яблоко,Апельсин,Слива],number:[1,2,3,4]}
      alert(jsonUser); // {"name":"John","age":30,"fruits":["Яблоко","Апельсин","Слива"],"number":[1,2,3,4]} выведет объект в формате JSON:
      alert(typeof jsonUser); // string мы получили строку!


      let jsonParsUser = JSON.parse(jsonUser);
      alert(jsonParsUser.number);
      alert("min - "+FindMin(jsonParsUser));

}

function FindMin(jsonParsUser){
    let min=jsonParsUser.number[0];
    for(let i=0;i<jsonParsUser.number.length;i++){
          if(jsonParsUser.number[i]<min){
              min=jsonParsUser.number[i];
          }
    }
    return min;
}

