
//1.3
let books =["harryPotter","gameOfThrones", "MeBeforeYou","aQuitePlace","theLord","theMarchine","oliverTwist","kipps","nooneLikeMe","iamZlatan"]

let booksList=(books)=>{
    let ol =document.createElement("ol");
    let li ;
    let myList =document.getElementById("my-books").appendChild(ol);

    for (let loop=0;loop<books.length;loop++){
       li =document.createElement("li")
       
        li.innerHTML += books[loop];    
            ol.appendChild(li)

    }

}
booksList(books);

//1.4
let bookDescription ={
    harryPotter:
        {title:"harry potter",language :"English" ,author:"J. K. Rowling"}, 
     gameOfThrones:
        {title:"game of thrones",language :"English",author:"George R. R. Martin"} ,
     MeBeforeYou:
        {title:"Me Before You",language :"English",author:"Jojo Moyes"} ,
     aQuitePlace:
        {title:"a Quite Place",language :"English",author:"John Krasinski"} , 
     theLord:
        {title:"the Lord",language :"English",author:"J. R. R. Tolkien"} ,  
     theGreateGatsby:
        {title:"the Greate Gatsby",language :"English",author:"F. Scott Fitzgerald"} ,
     oliverTwist:
        {title:"oliver Twist",language :"English",author:"Charles Dickens"} ,
     kipps:
        {title:"kipps",language :"English",author:"H. G. Wells"} ,
    hemlet:
       {title:"hemlet",language :"English",author:"William Shakespeare"} ,
    iamZlatan:
       {title:"iam Zlatan",language :"English",author:"zlatan ibrahimovic"} 
    }

       let createBooksInfo=(booksListInfo)=>{
let ol2 =document.createElement("ol")
let myList2 =document.getElementById("my-books-description").appendChild(ol2)
        for (let prop in booksListInfo){
            let li2 =document.createElement("li")
            let ulMini=document.createElement("ul")

            let  titleList=document.createElement("li")
            titleList.appendChild(document.createTextNode('the title: '+ booksListInfo[prop].title))
            let authorList =document.createElement("li")
            authorList.appendChild(document.createTextNode('the Author: '+ booksListInfo[prop].author))
            let languageList =document.createElement("li")
            languageList.appendChild(document.createTextNode('the language: '+ booksListInfo[prop].language))
            ulMini.appendChild(titleList)
            ulMini.appendChild(authorList)
            ulMini.appendChild(languageList)


 
            let content =document.createTextNode(booksListInfo[prop].title)
li2.appendChild(content)
li2.appendChild(ulMini)

         ol2.appendChild(li2)

    
       }
    }
    createBooksInfo(bookDescription)


  let bookCover ={harryPotter:{img: 'pic/harry-potter.jpg'} ,gameOfThrones:{img:'pic/game-of-thrones.jpg'} , 
  MeBeforeYou:{img:'pic/me-before-you.jpg'} ,aQuitePlace:{img:'pic/a-quite.place.jpg'} ,theLord:{img:'pic/the-lord.jpg'}
   ,theMarchine:{img:'pic/the-marchine.jpg'} ,oliverTwist:{img:'pic/oliver-twist.jpg'} ,kipps:{img:'pic/kipps.jpg'} 
   ,nooneLikeMe:{img:'pic/moon-like-me.jpg'} ,iamZlatan:{img:'pic/iam-zlatan.jpg'} }

  let picSet = document.createElement("ul")
  let myList3 =document.getElementById("my-books-cover").appendChild(picSet)

  let bookCoverShow =(bookCover)=>{
  for(let prop in bookCover){
    let picList = document.createElement("li")
    let image = document.getElementById("my-books-cover")
    image.src = bookCover[prop].img
picList.appendChild(image)
    picList.appendChild(picList)
  
}
}
bookCoverShow(bookCover)