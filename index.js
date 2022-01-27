const input = document.getElementById("input-btn")
let data = []

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

input.addEventListener('click', function(){
  const element = document.getElementById("update");
  const element2 = document.getElementById("input")
  element.classList.add("hidden");
  element2.classList.remove("hidden")
  let tableList = document.getElementById("list-table")
  
  let output = getData(data)
  tableList.innerHTML = output
})

function update() {
  const element = document.getElementById("update");
  const element2 = document.getElementById("input")
  element.classList.remove("hidden");
  element2.classList.add("hidden")
}


const submit = document.getElementById("btn-submit")

submit.addEventListener('click', function(){
  let tableHeading = document.getElementById("heading-table")
  tableHeading.classList.add("hidden")

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
  data.push(tempObj)
  nama.value = ""
  alamat.value = ""
  umur.value = ""
  document.getElementById("jenis-kelamin-pria").checked = undefined
  document.getElementById('jenis-kelamin-wanita').checked = undefined
  noHp.value = ""
  console.log(data);

  let tableList = document.getElementById("list-table")
  
  let output = getData(data)

  tableList.innerHTML = output
})

const search = document.getElementById("search-btn")

search.addEventListener('click', function (){
  const name = document.getElementById("nama-update")
  const foundData = cariData (name.value, data)
  let tableList = document.getElementById("list-table")
  
  let output = getData(foundData)
  
  tableList.innerHTML = output
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