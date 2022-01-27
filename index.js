function input() {
  const element = document.getElementById("update");
  const element2 = document.getElementById("input")
  element.classList.add("hidden");
  element2.classList.remove("hidden")
}
function update() {
  const element = document.getElementById("update");
  const element2 = document.getElementById("input")
  element.classList.remove("hidden");
  element2.classList.add("hidden")
}


const submit = document.getElementById("btn-submit")

let data = []

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
  tableList.innerHTML = output
})
