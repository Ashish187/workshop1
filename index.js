const firebaseConfig = {
    apiKey: "AIzaSyAhfyvdehDIdwlAzhtSpgFtYauoaWDFMH4",
    authDomain: "nodestaker-1df0b.firebaseapp.com",
    databaseURL: "https://nodestaker-1df0b-default-rtdb.firebaseio.com",
    projectId: "nodestaker-1df0b",
    storageBucket: "nodestaker-1df0b.appspot.com",
    messagingSenderId: "207472969911",
    appId: "1:207472969911:web:93970f0e288cac055c6532"
  };
  firebase.initializeApp(firebaseConfig);

  document.querySelector('#submit').addEventListener("submit",submitForm)

  function submitForm(e){
    var name = document.querySelector('#name').value
    var title = document.querySelector('#title').value
    var desc = document.querySelector('#desc').value

    saveDetails(name,title,desc)
    document.querySelector("#submit").reset()
    alert("Successfully Submitted")
  }

  function saveDetails(name,title,desc){
    let info = firebase.database().ref("Notes/")
    let newInfo = info.push().key;

    info.child(newInfo).set({
        namee: name,
        title: title,
        desc: desc,
    })
  }

  function createList(object,arr){
    console.log(object,arr);
    var topic = document.querySelector('.body')
    topic.innerHTML="";
    let c=1;
    for(let i=0;i<arr.length;i++){
        var _tag = document.createElement('div')
        _tag.classList.add('group')
        var sno = document.createElement('div')
        sno.classList.add('sn')

        var name1 = document.createElement('div')
        name1.classList.add('name')

        var title1 = document.createElement('div')
        title1.classList.add('title')

        var desc1 = document.createElement('div')
        desc1.classList.add('desc')

        let name = object[arr[i]].namee
        let title = object[arr[i]].title
        let desc = object[arr[i]].desc


        sno.innerHTML = `${c}`
        c++
        name1.innerHTML = `${name}`
        title1.innerHTML = `${title}`
        desc1.innerHTML = `${desc}`
        
        _tag.appendChild(sno)
        _tag.appendChild(name1)
        _tag.appendChild(title1)
        _tag.appendChild(desc1)
        // _tag.appendChild(btn)
        topic.appendChild(_tag)
    }
  }

  function fetchdata(){
    firebase.database().ref("Notes/").once("value",function(snapshot){
        let object = snapshot.val();
        console.log(object);
        let arr = Object.keys(snapshot.val())
        createList(object,arr);
    })
  }
  fetchdata()