const input = document.getElementById("input-btn")
let data = []
let getAll = localStorage;
let arrE = []
for (const e in getAll) {
  arrE.push(e) 
}
// console.log(arrE);
// Inget -6

for (let m = 0; m < arrE.length-6; m++) {
  // console.log(arrE[m]);
  arrE[m]
  data.push(getLocal(arrE[m]))
}

console.log(data);

let tableList = document.getElementById("list-table")
let output = getData(data)
tableList.innerHTML = output

function getData(data) {
  let output = `<tr class="p-5 bg-blue-400">
  <th class="p-5">No</th>
  <th class="p-5">Nama</th>
  <th class="p-5">Alamat</th>
  <th class="p-5">Umur</th>
  <th class="p-5">Jenis Kelamin</th>
  <th class="p-5">No. Handphone</th>
</tr>\n`
  let count = 0
  for (const person of data) {
    count++
    output += `<tr class="bg-red-500">
    <td class="p-5">${count}</td>
    <td class="p-5">${person.nama}</td>
    <td class="p-5">${person.alamat}</td>
    <td class="p-5">${person.umur}</td>
    <td class="p-5">${person.jenisKelamin}</td>
    <td class="p-5">${person.noHp}</td>
  </tr>`
  }
  return output
}

function getDataPlusDelete(data){
  let output = `<tr class="p-5 bg-blue-400">
    <th class="p-5">No</th>
    <th class="p-5">Nama</th>
    <th class="p-5">Alamat</th>
    <th class="p-5">Umur</th>
    <th class="p-5">Jenis Kelamin</th>
    <th class="p-5">No. Handphone</th>
    <th class="p-5">Update</th>
  </tr>\n`
  let count = 0
  for (const person of data) {
    count++
    output += `<tr class="bg-red-500">
    <td class="p-5">${count}</td>
    <td class="p-5">${person.nama}</td>
    <td class="p-5">${person.alamat}</td>
    <td class="p-5">${person.umur}</td>
    <td class="p-5">${person.jenisKelamin}</td>
    <td class="p-5">${person.noHp}</td>
    <td class="p-5"><button onclick="deleteRow('${person.nama}')">Hapus</button></td>
  </tr>`
  }
  return output
}

function deleteRow(str){
  localStorage.removeItem(str)
  data = []
  let getAll = localStorage;
  let arrE = []
  for (const e in getAll) {
    arrE.push(e) 
  }
// console.log(arrE);
// Inget -6

  for (let m = 0; m < arrE.length-6; m++) {
    // console.log(arrE[m]);
    arrE[m]
    data.push(getLocal(arrE[m]))
  }
  let tableList = document.getElementById("list-table")
  
  let output = getDataPlusDelete(data)
  tableList.innerHTML = output
}

// const delete = document.getElementById()

input.addEventListener('click', function(){
  const element = document.getElementById("update");
  const element2 = document.getElementById("input")
  element.classList.add("hidden");
  element2.classList.remove("hidden")
  let tableList = document.getElementById("list-table")
  
  let output = getData(data)
  tableList.innerHTML = output
})


const update = document.getElementById("update-btn")

update.addEventListener('click', function () {
  const element = document.getElementById("update");
  const element2 = document.getElementById("input")
  element.classList.remove("hidden");
  element2.classList.add("hidden")

  let output = getDataPlusDelete(data)
  
  let tableList = document.getElementById("list-table")
  tableList.innerHTML = output
})

const submit = document.getElementById("btn-submit")

submit.addEventListener('click', function(){
  
  let nama = document.getElementById("nama")
  let alamat = document.getElementById("alamat")
  let umur = document.getElementById("umur")
  let jenisKelaminPria = document.getElementById("jenis-kelamin-pria")
  let jenisKelaminWanita = document.getElementById("jenis-kelamin-wanita")
  let noHp = document.getElementById("no-hp")
  let tempObj = {
    nama: nama.value,
    alamat: alamat.value,
    umur: umur.value,
    jenisKelamin:"",
    noHp: noHp.value
  }
  if(document.getElementById("jenis-kelamin-pria").checked) {
    //Male radio button is checked
    tempObj.jenisKelamin = jenisKelaminPria.value
  }else if(document.getElementById('jenis-kelamin-wanita').checked) {
    //Female radio button is checked
    tempObj.jenisKelamin = jenisKelaminWanita.value
  }

  setLocal(tempObj)
  // let get = getLocal(set)
  // console.log(get);
  


  data.push(tempObj)
  nama.value = ""
  alamat.value = ""
  umur.value = ""
  document.getElementById("jenis-kelamin-pria").checked = undefined
  document.getElementById('jenis-kelamin-wanita').checked = undefined
  noHp.value = ""
  // console.log(data);

  let tableList = document.getElementById("list-table")
  
  let output = getData(data)

  tableList.innerHTML = output
})

const search = document.getElementById("search-btn")

search.addEventListener('click', function (){
  const name = document.getElementById("nama-update")
  const foundData = cariData (name.value, data)
  let tableList = document.getElementById("list-table")
  
  let output = getDataPlusDelete(foundData)
  tableList.innerHTML = output
  name.value = ''
})


function cariData(nama, data) {
  let result = []
  for (const person of data) {
    let namaData = person.nama.toLowerCase()
    let namaInput = nama.toLowerCase()
    // let noKTP = person.noKTP
    let found = false
    for (let i = 0; i < namaData.length; i++) {
      if (namaData[i] === namaInput[0]) {
        let tempStr = ''
        for (let j = i; j < i + namaInput.length; j++) {
          tempStr += namaData[j]
        }
        if (tempStr === namaInput) {
          result.push(person)
          found = true
          break;
        }
      }
    }
    // if (!found) {
    //   for (let i = 0; i < noKTP.length; i++) {
    //     if (noKTP[i] === namaInput[0]) {
    //       let tempStr = ''
    //       for (let j = i; j < i + namaInput.length; j++) {
    //         tempStr += noKTP[j]
    //       }
    //       if (tempStr === namaInput) {
    //         result.push(person)
    //         found = true
    //         break;
    //       }
    //     }
    //   }
    // }
  }
  if (result.length < 1) {
    return 'Data tidak ditemukan'
  }
  return result
}

function setLocal (tempObj) {
  let keyLocal = tempObj.nama
  localStorage.setItem(keyLocal, JSON.stringify(tempObj))
}

function getLocal (keyLocal) {
  let result = {}
  let get = JSON.parse(localStorage.getItem(keyLocal))
  result = get
  return result
}
